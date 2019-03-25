import React, { Component } from 'react';
import '../../css/payment.css';
import {connect} from "react-redux";
import Payments  from '../CheckoutPages/Payments';
import '../../css/sass/checkout.scss';

class Payment extends Component {

  render() {
    console.log("this.props.cart for checkout componsent",this.props.cart);
    return (
      <React.Fragment>
        <div id="main-content">
          <div className="container">
            <div className="row">
              <div className="payment-container col-sm-8 col-md-6 col-lg-6 col-xl-7">
                <h3>Payment Method:</h3>

                <div className="payment-method">
                  {/*<div className="payment-method-header">*/}
                    {/*<input type="radio"/>*/}
                    {/*<label className="label">Credit Card</label>*/}
                  {/*</div>*/}
                  <div className="payment-method-content">

                    {/*<div className="payment-method-billing-address">*/}
                      {/*<div className="billing-address-same-as-shipping-block">*/}
                        {/*<input type="checkbox" />*/}
                        {/*<label>My billing and shipping address are the same</label>*/}
                        {/*<div className="billing-address-details">*/}
                          {/*<span>John</span>&nbsp;<span>Jackson</span><br/>*/}
                          {/*<span>72 Walker place</span><br/>*/}
                          {/*<span>Staten Island,</span> <span>New York</span><span>10309</span><br/>*/}
                          {/*<span>United States</span><br/>*/}
                          {/*<span>7183397249</span>*/}
                        {/*</div>*/}
                      {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="payment-form">*/}
                      {/*<ul className="cc-types">*/}
                        {/*<li><img alt="" className="payment-img" src={require("../../images/creditcardtypes/aa.png")} /></li>*/}
                        {/*<li><img  alt="" className="payment-img" src={require("../../images/creditcardtypes/visa.png")} /></li>*/}
                        {/*<li><img  alt="" className="payment-img" src={require("../../images/creditcardtypes/mc.png")} /></li>*/}
                        {/*<li><img  alt="" className="payment-img" src={require("../../images/creditcardtypes/discover.png")} /></li>*/}
                      {/*</ul>*/}

                      {/*<div className="field cc-number">*/}
                        {/*<label className="label">Credit Card Number</label>*/}
                        {/*<input type="text"/>*/}

                      {/*</div>*/}
                      {/*<div className="field ex-date">*/}
                        {/*<label className="label">Expiration Date</label>*/}
                        {/*<input type="number"/> <span>/</span> <input type="number"/>*/}
                      {/*</div>*/}
                      {/*<div className="field verify-number">*/}
                        {/*<label className="label">Card Verification Number</label>*/}
                        {/*<input type="number"/>*/}
                      {/*</div>*/}
                    {/*</div>*/}
                    <div className="action-bar" style={{display: 'flex',flexDirection: 'column', justifyContent: 'center',marginTop: '80px', textAlign: 'center'}}>
                      <p>Pay with card here</p>
                      <Payments cartTotal={this.props.cart.total} />
                      {/*<button>Place Order</button>*/}
                    </div>
                  </div>
                </div>
                <div className="paypal-payment-container"> </div>
              </div>
              <div className="order-summary col-sm-4 col-md-4 col-lg-4 col-xl-4">
                <div className="order-summary-wrapper">
                  <h2>Order Summary</h2>


                  <div className="cart-pricing">
                    <div className="subtotal"><span>Subtotal</span><span>${this.props.cart.total}</span></div>
                    <div className="shipping"><span>Shipping</span><span>$0.00</span></div>
                    <div className="total"><span>Order Total</span><span>${this.props.cart.total}</span></div>
                  </div>
                  <h3>{this.props.cart.items.length} Items In Your Cart</h3>

                  <div className="items">
                    {
                      this.props.cart.items.map( item => (
                          <div className="item">
                            <img src={item.img_urls} alt=""/>
                            <div className="item-details">
                              <p className="product-name">{item.product_name}</p>
                              <p className="product-qty"><span>Qty:</span><span>1</span></p>
                              <p className="product-qty"><span>Price:</span><span> {item.price}</span></p>
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
        </div>

      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  cart: state.cart
});

export default connect(mapStateToProps,null)(Payment);


