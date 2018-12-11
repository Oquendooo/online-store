import React, { Component } from 'react';
import './App.css';
import Product from './components/Product';
import Header from './components/Header';
import Banner from './components/Banner';
import Breadcrumbs from './components/Breadcrumbs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <Breadcrumbs />
        <Product />
      </div>
    );
  }
}

export default App;
