import React, { Component } from 'react';
import requireAuth from './requireAuth';
class Feature extends Component {
    render() {
        return(
            <div>
                This is the feature Component!
                <br/><br/>
                You are logged in!
                <br/><br/>
            </div>
        );
    }
}
export default requireAuth(Feature);