import React, { Component } from 'react';
import '../css/main.css';

class Banner extends Component {
  render() {
    return (
      <div className="banner">
         <div className="container">
            <p>
               <strong>25% off sitewide on orders over $100!!! <big>Use code: </big> <a href="#">Details <i className="fas fa-greater-than"></i></a>
               </strong>
            </p>
         </div>
      </div>
    );
  }
}

export default Banner;
