import React, { Component } from 'react';
import '../css/main.css';

class Footer extends Component {

  render() {
    return (
      <React.Fragment>
        <footer className="page-footer">
          <div className="footer-content">
            <div className="email-newsletter">
              <div className="content">
                <form className="form subscribe" action="" method="post">
                  <div className="label">
                  </div>
                  <div className="control">
                    <input name="email" type="email" id="newsletter" placeholder="Enter email address"/>
                  </div>
                  <div className="actions">
                    <button type="submit" className="action secondary subscribe" title="Join"><span>Join</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="footer-menu">
              <div className="footer-menu-col">
                <ul className="">
                  <li><a href="#"></a>Home</li>
                  <li><a href="#"></a>Brands</li>
                  <li><a href="#"></a>Student Discount</li>
                  <li><a href="#"></a>Privacy</li>
                  <li><a href="#"></a>Terms Of Use</li>
                </ul>
              </div>
              <div className="footer-menu-col">
                <ul>
                  <li><a href="#"></a>Kazbah</li>
                  <li><a href="#"></a>Plndr</li>
                  <li><a href="#"></a>Affiliates</li>
                  <li><a href="#"></a>Shiekh Shoes</li>
                </ul>
              </div>
              <div className="footer-menu-col">
                <ul>
                  <li><a href="#"></a>Contact Us</li>
                  <li><a href="#"></a>Faq</li>
                  <li><a href="#"></a>Shipping</li>
                  <li><a href="#"></a>Return</li>
                </ul>
              </div>
              <div className="social-links">
                <div className="title">
                  <strong>Stay Connected</strong>
                </div>
                <div className="links">
                  <div className="social-icon">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                  </div>
                  <div className="social-icon">
                    <a href="#"><i className="fab fa-twitter"></i></a>
                  </div>
                  <div className="social-icon">
                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                  </div>
                  <div className="social-icon">
                    <a href="#"><i className="fab fa-instagram"></i></a>
                  </div>
                  <div className="social-icon">
                    <a href="#"><i className="fab fa-tumblr"></i></a>
                  </div>
                  <div className="social-icon">
                    <a href="#"><i className="fab fa-youtube"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
