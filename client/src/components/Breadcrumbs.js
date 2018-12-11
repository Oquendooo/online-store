import React, { Component } from 'react';

import '../css/breadcrumbs.css';
class Breadcrumbs extends Component {
  render() {
    return (
      <div class="breadcrumbs">
        <div class="container">
          <ul class="items">
            <li class="item">
              <a href="/"><span>Home</span></a>
            </li>
            <li class="item">
              <a href="/"> <span> Men's</span></a>
            </li>
            <li class="item">
              <a href="/"> <span> Clothing</span></a>
            </li>
            <li class="item">
              <a href="/"> <span> Tops</span></a>
            </li>
            <li class="item">
              <a href="/"> <span> Basic Tees</span></a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Breadcrumbs;
