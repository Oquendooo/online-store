import React, { Component } from 'react';
import '../../css/payment.css';
import {connect} from "react-redux";
import {Link} from "react-router-dom";


class Payment extends Component {

    render() {
        console.log("this.props.cart for checkout compoent",this.props.cart);
        return (
            <React.Fragment>
                <div id="main-content" className="">
                        <div className="container">
                            <div className="row">
                                <div className="payment-container col-sm-8 col-md-6 col-lg-6 col-xl-7">
                                    <h3>Payment Method:</h3>

                                    <div className="payment-method">
                                        <div className="payment-method-header">
                                            <input type="radio"/>
                                            <label className="label">Credit Card</label>
                                        </div>
                                        <div className="payment-method-content">

                                            <div className="payment-method-billing-address">
                                                <div className="billing-address-same-as-shipping-block">
                                                    <input type="checkbox" />
                                                    <label>My billing and shipping address are the same</label>
                                                    <div className="billing-address-details">
                                                        <span>John</span>&nbsp;<span>Jackson</span><br/>
                                                        <span>72 Walker place</span><br/>
                                                        <span>Staten Island,</span> <span>New York</span><span>10309</span><br/>
                                                        <span>United States</span><br/>
                                                        <span>7183397249</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="payment-form">
                                                <ul className="cc-types">
                                                    <li><img className="payment-img" src={require("../../images/creditcardtypes/aa.png")} /></li>
                                                    <li><img className="payment-img" src={require("../../images/creditcardtypes/visa.png")} /></li>
                                                    <li><img className="payment-img" src={require("../../images/creditcardtypes/mc.png")} /></li>
                                                    <li><img className="payment-img" src={require("../../images/creditcardtypes/discover.png")} /></li>
                                                </ul>

                                                <div className="field cc-number">
                                                    <label className="label">Credit Card Number</label>
                                                    <input type="text"/>

                                                </div>
                                                <div className="field ex-date">
                                                    <label className="label">Expiration Date</label>
                                                    <input type="number"/> <span>/</span> <input type="number"/>
                                                </div>
                                                <div className="field verify-number">
                                                    <label className="label">Card Verification Number</label>
                                                    <input type="number"/>
                                                </div>
                                            </div>
                                            <div className="action-bar">
                                                <button>Place Order</button>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="paypal-payment-container"> </div>
                                </div>
                                <div className="order-summary col-sm-4 col-md-4 col-lg-3 col-xl-3">

                                    <h2>Order Summary</h2>

                                    <h3>1 Item in Cart</h3>
                                    {
                                        this.props.cart.map( item => (
                                                <div className="items">
                                                    <div className="item">
                                                        {item.product_name}
                                                        <img src/>
                                                    </div>
                                                </div>
                                            )

                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => ({
    cart: state.cart
});

export default connect(mapStateToProps,null)(Payment);


