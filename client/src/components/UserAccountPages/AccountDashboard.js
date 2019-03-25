import React, { Component } from 'react';


class AccountDashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="account-content-column">

          <div className="page-title-wrapper">
            <h1 className="page-title">My Dashboard</h1>
          </div>

          <div className="sub-title">
            <h2 className="title"><strong>Account Information</strong></h2>
          </div>

          <div className="block-information">
            <div className="box-content">
              <h3 className="box-title"><strong>Contact Information</strong></h3>
              <p>Aaron Oquendo</p>
              <p>A0@gmail.com</p>
              <a href="/">Edit</a>
              <a href="/">Change Password</a>
            </div>
            <div className="box-content">
              <h3 className="box-title">Newsletters Information</h3>
              <p>You subscribe to our "General Subscription"</p>
              <a href="/">Edit</a>
            </div>
          </div>

          <div className="sub-title">
            <h2 className="title"><strong>Address Book</strong></h2>
          </div>

          <div className="block-information">
            <div className="box-content">
              <h3 className="box-title"><strong>Default Billing Address</strong></h3>
              <p>Aaron Oquendo<br/>
                72 Walker place<br/>
                Staten Island, New York, 10314<br/>
                United States<br/>
                T: 6463999989
              </p>
              <a href="/">Edit Address</a>
            </div>
            <div className="box-content">
              <h3 className="box-title"><strong>Default Shipping Address</strong></h3>
              <p>Aaron Oquendo<br/>
                72 Walker place<br/>
                Staten Island, New York, 10314<br/>
                United States<br/>
                T: 6463999989
              </p>
              <a href="/">Edit Address</a>
            </div>
          </div>


        </div>
      </React.Fragment>
    );
  }
}

export default AccountDashboard;
