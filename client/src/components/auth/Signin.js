import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import '../../css/signin.css';

class Signin extends Component {

  onSubmit = formProps => {
    console.log("signin form props",formProps);
    this.props.signin(formProps, () => {
      this.props.history.push('/feature');
    });
  };

  render(){
    const {handleSubmit} = this.props;

    return(
                <div className="signup-container container">
                  <div className="row">
                    <div className="page-title-wrapper">
                      <h1 className="page-title"><span>Customer Login</span></h1>
                    </div>
                    <div className="customer-login-section col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <div className="customer-login-section-title">
                        <strong>Registered Customers</strong>
                      </div>
                      <div className="login-note">
                        <p>If you have an account, sign in with your email address</p>
                      </div>
                      <form onSubmit={handleSubmit(this.onSubmit)}>
                        <fieldset>
                          <label>Email</label>
                          <Field
                                      name="email"
                                      type="text"
                                      component="input"
                                      autoComplete="none"
                          />
                        </fieldset>
                        <fieldset>
                          <label>Password</label>
                          <Field
                                      name="password"
                                      type="password"
                                      component="input"
                                      autoComplete="none"
                          />
                        </fieldset>
                        <div>{this.props.errorMessage}</div>
                        <button>Sign In!</button>
                      </form>
                    </div>
                    <div className="new-customer-creation-section col-sm-12 col-md-6 col-lg-6 col-xl-6">

                    </div>
                  </div>
                </div>
    );
  }
}

function mapStateToProps(state) {
  return {errorMessage: state.auth.errorMessage}
}

export default compose( connect(mapStateToProps, actions), reduxForm({ form: 'signin'}))(Signin);
