import React, { Component } from 'react';
import '../css/main.css';

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer class="page-footer">
           <div class="footer-content">
              <div class="email-newsletter">
                 <div class="content">
                    <form class="form subscribe" action="" method="post">
                       <div class="label">
                       </div>
                       <div class="control">
                          <input name="email" type="email" id="newsletter" placeholder="Enter email address"/>
                       </div>
                       <div class="actions">
                          <button type="submit" class="action secondary subscribe" title="Join"> <span>Join</span>
                          </button>
                       </div>
                    </form>
                 </div>
              </div>
              <div class="footer-menu">
                 <div class="footer-menu-col">
                    <ul class="">
                       <li><a href="#"></a>Home</li>
                       <li><a href="#"></a>Brands</li>
                       <li><a href="#"></a>Student Discount</li>
                       <li><a href="#"></a>Privacy</li>
                       <li><a href="#"></a>Terms Of Use</li>
                    </ul>
                 </div>
                 <div class="footer-menu-col">
                    <ul>
                       <li><a href="#"></a>Kazbah</li>
                       <li><a href="#"></a>Plndr</li>
                       <li><a href="#"></a>Affiliates</li>
                       <li><a href="#"></a>Shiekh Shoes</li>
                    </ul>
                 </div>
                 <div class="footer-menu-col">
                    <ul>
                       <li><a href="#"></a>Contact Us</li>
                       <li><a href="#"></a>Faq</li>
                       <li><a href="#"></a>Shipping</li>
                       <li><a href="#"></a>Return</li>
                    </ul>
                 </div>
                 <div class="social-links">
                    <div class="title">
                       <strong>Stay Connected</strong>
                    </div>
                    <div class="links">
                       <div class="social-icon">
                          <a href="#"><i class="fab fa-facebook-f"></i></a>
                       </div>
                       <div class="social-icon">
                          <a href="#"><i class="fab fa-twitter"></i></a>
                       </div>
                       <div class="social-icon">
                          <a href="#"><i class="fab fa-pinterest-p"></i></a>
                       </div>
                       <div class="social-icon">
                          <a href="#"><i class="fab fa-instagram"></i></a>
                       </div>
                       <div class="social-icon">
                          <a href="#"><i class="fab fa-tumblr"></i></a>
                       </div>
                       <div class="social-icon">
                          <a href="#"><i class="fab fa-youtube"></i></a>
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
