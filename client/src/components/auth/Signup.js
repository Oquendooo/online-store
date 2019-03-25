import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

class Signup extends Component {

    onSubmit = formProps => {
        this.props.signup(formProps, () => {
            this.props.history.push('/feature');
        });
    };

    render(){

        const {handleSubmit} = this.props;
        return(
            <div className="signup-container container">
                <div className="row">
                    <div className="page-title-wrapper">
                        <h1 className="page-title"><span>Customer Signup</span></h1>
                    </div>
                    <div className="customer-login-section col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="customer-login-section-title">

                        </div>
                        <div className="login-note">
                            <p>Signup by entering your email and password of choice</p>
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
                            <button>Sign Up!</button>
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

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'signup'})
)(Signup);
