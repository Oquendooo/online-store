import React, { Component } from 'react';
import '../../css/checkout.css';
import {connect} from "react-redux";
import {Link} from "react-router-dom";


class Checkout extends Component {

    render() {
        console.log("this.props.cart for checkout compoent",this.props.cart);
        return (
            <React.Fragment>
                <div id="main-content" className="">
                    <div className="container">
                        <div className="page-title-wrapper">
                            <h1 className="page-title">
                                <span>Shipping Address</span>
                            </h1>
                        </div>
                        <div className="shipping-container">
                            <div className="row">
                                <div className="shipping-address-container col-sm-8 col-md-6 col-lg-6 col-xl-7">
                                    <div className="field email">
                                        <label htmlFor="email">Email Address</label>
                                        <input type="text" name="email"  />


                                    </div>
                                    <div className="field first-name">
                                        <label htmlFor="email">First Name</label>
                                        <input type="text" name="email"  />
                                    </div>
                                    <div className="field last-name">
                                        <label htmlFor="email">Last name</label>
                                        <input type="text" name="email"  />
                                    </div>
                                    <div className="field company">
                                        <label htmlFor="email">Company</label>
                                        <input type="text" name="email"  />
                                    </div>
                                    <div className="field street-name">
                                        <label htmlFor="email">Street Name</label>
                                        <input type="text" name="email"  />
                                        <input type="text" name="email"  />
                                    </div>
                                    <div className="field city">
                                        <label htmlFor="email">City</label>
                                        <input type="text" name="email"  />
                                    </div>
                                    <div className="field state-province">
                                        <label htmlFor="email">State/Province</label>
                                        <input type="text" name="email"  />
                                    </div>
                                    <div className="field zip-code">
                                        <label htmlFor="email">Zip/Postal Code</label>
                                        <input type="text" name="email"  />
                                    </div>
                                    <div className="field country">
                                        <label htmlFor="email">Country</label>
                                        <input type="text" name="email"  />
                                    </div>
                                    <div className="field phone-number">
                                        <label htmlFor="email">Phone Number</label>
                                        <input type="text" name="email"  />
                                    </div>

                                    <Link to="/checkout/payment" className="toPayment-btn">
                                        <button>Next</button>
                                    </Link>
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
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => ({
    cart: state.cart
});

export default connect(mapStateToProps,null)(Checkout);


