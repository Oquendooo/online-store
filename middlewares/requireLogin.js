module.exports = (req, res, next) =>{
    console.log();
    if(!req.user){
        return res.status(401).send({error: 'You must login!'});
    }

    next();
};