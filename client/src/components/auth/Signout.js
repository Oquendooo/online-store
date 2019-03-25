import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

class Signout extends Component {

    componentDidMount() {
        this.props.signout();
    }

    render(){
        return <div>See you later family</div>
    }
}

export default connect(null, actions)(Signout);