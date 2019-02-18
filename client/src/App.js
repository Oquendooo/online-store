import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import ProductPage from './components/ProductPage/ProductPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import LandingPage from './components/LandingPage';
import Breadcrumbs from './components/Breadcrumbs';
import DisplayProductsPage from "./components/DisplayProductsPage";
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import Feature from './components/Feature';
import Signout from './components/auth/Signout';
import Signin from './components/auth/Signin';
import './css/main.css';
import './css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Banner />
          <Route exact path='/' component={Welcome}/>
          <Route exact path='/' component={LandingPage}/>

          {/*Authenication routes*/}
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/signin' component={Signin}/>
          <Route exact path='/feature' component={Feature}/>
          <Route exact path='/signout' component={Signout}/>

          {/*Product routes*/}
          <Route exact path='/product' component={Breadcrumbs} />
          <Route path='/product' component={ProductPage}/>
          <Route exact path='/product/:id/' component={ProductPage}/>

          {/*Products routes*/}
          <Route exact path='/products' component={DisplayProductsPage}/>
          <Route exact path='/products' component={Breadcrumbs} />
          <Route exact path='/products/category/:gender/:apparel_type' component={props => <DisplayProductsPage {...props}/>}/>
          <Route exact path='/products/category/:gender/:apparel_type/:top_bottom' component={props => <DisplayProductsPage {...props} />}/>
          <Route exact path='/products/category/:gender/:apparel_type/:top_bottom/:apparel_type2' component={props => <DisplayProductsPage {...props} />}/>
          <Footer />
      </div>
    );
  }
}

export default App;
