import React, { Component } from 'react';
import './account.scss';
import {Link} from "react-router-dom";

class AccountMenuLinks extends Component {

  render() {
    return (
      <React.Fragment>
        <ul>
          <Link to="/account/dashboard"><li className="menu-link">Account Dashboard</li></Link>
          <Link to="/account/information"><li className="menu-link">Account Information</li></Link>
          <Link to="/account/address-book"><li className="menu-link">Address Book</li></Link>
          <Link to="/account/orders"><li className="menu-link">My Orders</li></Link>
          <Link to="/account/wish-list"><li className="menu-link">My Wishlist</li></Link>
          <Link to="/account/newsletter"><li className="menu-link">Newsletter Subscription</li></Link>
          <Link to="/account/product-reviews"><li className="menu-link">My Product Reviews</li></Link>
        </ul>
      </React.Fragment>
    );
  }
}

export default AccountMenuLinks;