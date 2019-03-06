import React, { Component } from 'react';
import '../../css/account.css';

class Account extends Component {
    render() {
        return (
            <div className="account-container">
                <div className="container">
                    <div className="left-menu">
                        <ul>
                            <li>Account Dashboard</li>
                            <li>Account Information</li>
                            <li>Address Book</li>
                            <li>My Orders</li>
                            <li>Orders Archive</li>
                            <li>My Wishlist</li>
                            <li>My Social Accounts</li>
                            <li>Gift Card</li>
                            <li>Newsletter Subscriptions</li>
                            <li>My Product Reviews</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Account;
