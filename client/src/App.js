import React, { Component } from 'react';
import './App.css';
import ProductPage from './components/ProductPage';
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
        <ProductPage />
      </div>
    );
  }
}

export default App;
