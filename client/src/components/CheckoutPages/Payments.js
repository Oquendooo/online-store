import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import {handleToken} from '../../redux/actions';


class Payments extends Component {

    render() {
        console.log("payments component prop",this.props.cartTotal);
        return (
            <StripeCheckout
            name="Pay with card here"
            description="Pay here"
            amount={this.props.cartTotal}
            token={token => this.props.handleToken(token) }
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button>
                    Pay Here
                </button>
            </StripeCheckout>
        );
    }
}

export default connect(null, {handleToken})(Payments);
