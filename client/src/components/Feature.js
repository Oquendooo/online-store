import React, { Component } from 'react';
import requireAuth from './requireAuth';
class Feature extends Component {
    render() {
        return <div>Since your logged in you can see this page</div>
    }
}
export default requireAuth(Feature);