import React, { Component } from 'react';
import '../../css/checkout.css';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {addShippingInfo} from '../../actions';


class Checkout extends Component {

  onSubmit = formProps => {
    console.log("hello");
    console.log("checkout form props",formProps);
    this.props.addShippingInfo(formProps, () => {
      this.props.history.push('/checkout/payment');


    });
  };

  render() {
    const {handleSubmit} = this.props;

    return (
      <React.Fragment>
        <div id="main-content" className="">
          <div className="container shopping-cart-container">
            <div className="page-title-wrapper">
              <h1 className="page-title">
                <span>Shipping Address</span>
              </h1>
            </div>
            <div className="shipping-container">
              <div className="row">
                <div className="shipping-address-container col-sm-8 col-md-6 col-lg-6 col-xl-7">

                  <form onSubmit={handleSubmit(this.onSubmit)}>
                    <div className="field email">
                      <label htmlFor="email">Email Address</label>
                      <Field
                        name="email"
                        type="text"
                        component="input"
                        autoComplete="none"
                      />
                    </div>
                    <div className="field first-name">
                      <label htmlFor="email">First Name</label>
                      <Field
                        name="first_name"
                        type="text"
                        component="input"
                        autoComplete="none"
                      />
                    </div>
                    <div className="field last-name">
                      <label htmlFor="email">Last name</label>
                      <Field
                        name="last_name"
                        type="text"
                        component="input"
                        autoComplete="none"
                      />
                    </div>
                    <div className="field company">
                      <label htmlFor="email">Company</label>
                      <Field
                        name="company"
                        type="text"
                        component="input"
                        autoComplete="none"
                      />
                    </div>
                    <div className="field street-name">
                      <label htmlFor="street_name">Street Name</label>
                      <Field
                        name="street_name_field1"
                        type="text"
                        component="input"
                        autoComplete="none"
                      />
                      <Field
                        name="street_name_field2"
                        type="text"
                        component="input"
                        autoComplete="none"
                      />
                    </div>
                    <div className="field city">
                      <label htmlFor="city">City</label>
                      <Field
                        name="city"
                        type="text"
                        component="input"
                        autoComplete="none"
                      />
                    </div>
                    <div className="field state-province">
                      <label htmlFor="email">State/Province</label>
                      <Field
                        name="state_province"
                        type="text"
                        component="input"
                        autoComplete="none"
                      />
                    </div>
                    <div className="field zip-code">
                      <label htmlFor="email">Zip/Postal Code</label>
                      <Field
                        name="zip_postalcode"
                        type="text"
                        component="input"
                        autoComplete="none"
                      />
                    </div>
                    <div className="field country">
                      <label htmlFor="email">Country</label>
                      <Field
                        name="country"
                        type="text"
                        component="input"
                        autoComplete="none"
                      />
                    </div>
                    <div className="field phone-number">
                      <label htmlFor="email">Phone Number</label>
                      <Field
                        name="phone_number"
                        type="text"
                        component="input"
                        autoComplete="none"
                      />
                    </div>

                      <button  className="toPayment-btn" type="submit">Next</button>

                  </form>



                </div>
                <div className="order-summary col-sm-4 col-md-4 col-lg-3 col-xl-3">
                  <h2>Order Summary</h2>
                  <h3>1 Item in Cart</h3>
                  {
                    this.props.cart.map( item => (
                        <div className="items">
                          <div className="item">
                            {item.product_name}
                            <img  alt="" src/>
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

export default compose(connect(mapStateToProps, {addShippingInfo}), reduxForm({ form: 'shippinginfo', destroyOnUnmount: false}))(Checkout);


