import React, { Component } from 'react';

import '../../css/breadcrumbs.css';
class Breadcrumbs extends Component {
  render() {
    return (
      <div className="breadcrumbs">
        <div className="container">
          <ul className="items">
            <li className="item">
              <a href="/products"><span>Home</span></a>
            </li>
            <li className="item">
              <a href="/products"> <span> Men's</span></a>
            </li>
            <li className="item">
              <a href="/products"> <span> Clothing</span></a>
            </li>
            <li className="item">
              <a href="/products"> <span> Tops</span></a>
            </li>
            <li className="item">
              <a href="/products"> <span> Basic Tees</span></a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Breadcrumbs;
