import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import ProductPage from './components/ProductPage/ProductPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import FrontPage from './components/FrontPage';
import Breadcrumbs from './components/Breadcrumbs';
import ProductsPage from "./components/ProductsPage/ProductsPage";
import Signup from './components/auth/Signup';
import Feature from './components/Feature';
import Signout from './components/auth/Signout';
import Signin from './components/auth/Signin';
import Cart from './components/Cart/Cart';
import './css/main.css';
import './css/bootstrap.min.css';


class App extends Component {
    componentWillMount() {

    }

    render() {
    return (
      <div className="App">
          <Header />
          <Banner />

          {/*Front Page*/}
          <Route exact path='/' component={FrontPage}/>

          {/*Authenication routes*/}
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/signin' component={Signin}/>
          <Route exact path='/feature' component={Feature}/>
          <Route exact path='/signout' component={Signout}/>

          {/*Product routes*/}
          <Route exact path='/product' component={Breadcrumbs} />
          <Route exact path='/product' component={ProductPage}/>
          <Route exact path='/product/:id/' component={ProductPage}/>

          {/*Products routes*/}
          <Route exact path='/products' component={ProductsPage}/>
          <Route exact path='/products' component={Breadcrumbs} />
          <Route exact path='/products/category/:brands' component={props => <ProductsPage {...props}/>}/>
          <Route exact path='/products/category/:gender/:apparel_type' component={props => <ProductsPage {...props}/>}/>
          <Route exact path='/products/category/:gender/:apparel_type/:apparel_type2' component={props => <ProductsPage {...props}/>} />
          <Route exact path='/products/category/:gender/:apparel_type/:top_bottom' component={props => <ProductsPage {...props} />} />
          <Route exact path='/products/category/:gender/:apparel_type/:top_bottom/:apparel_type2' component={props => <ProductsPage {...props} />} />

          {/*Checkout Routes*/}
          <Route exact path='/checkout/cart' component={props => <Cart{...props}/>}/>

          {/*Footer*/}
          <Route path='/' component={Footer}/>
      </div>
    );
  }
}

export default App;
