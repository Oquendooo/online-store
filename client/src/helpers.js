function getJson(url, crossOrigin = true) {

    let options = {
        "method":"GET",
        "headers":
            {
                "Accept":"application/json",
                "Content-Type":"application/json"
            }
    };

    // TODO: Throw error on non-200 responses
    return fetch(url, options)
        .then(r => {

            if (r.status === 200) {
                return r.json()
            }

            console.log(r);

            throw new Error("Bad Response")
        })

}

/**
 * Send a post request with the given JSON data
 *
 * Assumes response is also JSON
 *
 * @param url
 * @param data
 * @param crossOrigin
 * @returns {Promise.<TResult>}
 */
function postJson(url, data, crossOrigin = true) {

    let options = {
        "method": "POST",
        "credentials": (crossOrigin) ? "include" : "same-origin",
        "headers": {
            "accept": "application/json",
            "content-type": "application/json"
        },
        "body": JSON.stringify(data)
    };

    return fetch(url, options)
        .then(res => {
            console.log(res);
            if (res.ok) {

                return res.json()
            }

            else {

                if (res.status === 400) {
                    console.log(res.json);
                    throw new Error(res.json())
                }

                // TODO:  Check the error code
                throw new Error("An error occurred")
            }
        })

}


export {
    getJson, postJson,
}