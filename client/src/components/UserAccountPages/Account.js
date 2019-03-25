import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import '../../css/account.scss';
import AccountAddressBook from './AccountAddressBook';
import AccountMenuLinks from './AccountMenuLinks';
import AccountOrders from './AccountOrders';
import AccountDashboard from './AccountDashboard';
import AccountNewsletter from './AccountNewsletter';
import AccountWishList from "./AccountWishList";
import AccountProductReviews from "./AccountProductReviews";
import AccountInformation from "./AccountInformation";

class Account extends Component {
  render() {
    return (
      <div className="account-container">
        <div className="container">
          <div className="row">

            <div className="account-links col-sm-2 col-md-2 col-lg-3 col-xl-3">
              <Route path='/account' component={props => <AccountMenuLinks {...props}/>}/>
            </div>

            <div className="right-content col-sm-2 col-md-2 col-lg-3 col-xl-3">
              <Route path='/account/dashboard' component={props => <AccountDashboard {...props}/>}/>
              <Route path='/account/information' component={props => <AccountInformation{...props}/>}/>
              <Route path='/account/address-book' component={props => <AccountAddressBook {...props}/>}/>
              <Route path='/account/wish-list' component={props => <AccountWishList{...props}/>}/>
              <Route path='/account/orders' component={props => <AccountOrders{...props}/>}/>
              <Route path='/account/newsletter' component={props => <AccountNewsletter{...props}/>}/>
              <Route path='/account/product-reviews' component={props => <AccountProductReviews{...props}/>}/>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Account;
