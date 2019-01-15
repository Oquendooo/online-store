import React, { Component } from 'react';
import ProductPage from './components/ProductPage/ProductPage';
import Products from './components/DisplayProductsPage/Products';
import Header from './components/Header';
import Banner from './components/Banner';
import Breadcrumbs from './components/Breadcrumbs';
import DisplayProductsPage from "./components/DisplayProductsPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <Breadcrumbs />
        <DisplayProductsPage />
      </div>
    );
  }
}

export default App;
