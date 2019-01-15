import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import ProductPage from './components/ProductPage/ProductPage';
import Products from './components/DisplayProductsPage/Products';
import Header from './components/Header';
import Banner from './components/Banner';
import LandingPage from './components/LandingPage';
import Breadcrumbs from './components/Breadcrumbs';
import DisplayProductsPage from "./components/DisplayProductsPage";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Banner />
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/products' component={Breadcrumbs} />
          <Route exact path='/products' component={DisplayProductsPage}/>
          <Route exact path='/product' component={ProductPage}/>
      </div>
    );
  }
}

export default App;
