import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import ProductPage from './components/ProductPage/ProductPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Banner from './components/Misc/Banner';
import FrontPage from './components/FrontPage';
import Breadcrumbs from './components/Misc/Breadcrumbs';
import ProductsPage from "./components/ProductsPage/ProductsPage";
import Signup from './components/auth/Signup';
import Feature from './components/auth/Feature';
import Signout from './components/auth/Signout';
import Signin from './components/auth/Signin';
import Cart from './components/CheckoutPages/Cart';
import Checkout from './components/CheckoutPages/Checkout';
import Payment from './components/CheckoutPages/Payment';
import Account from './components/UserAccountPages/Account';
import './css/bootstrap.min.css';
import './css/main.css';
import './css/main2.css';


class App extends Component {
    componentWillMount() {

    }

    render() {
    return (
      <div className="App">
          <Header exact path='/' component={props => <Header {...props}/>}/>
          <Banner />

          {/*Front Page*/}
          <Route exact path='/' component={FrontPage}/>

          {/*Authentication routes*/}
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/signin' component={Signin}/>
          <Route exact path='/feature' component={Feature}/>
          <Route exact path='/signout' component={Signout}/>

          {/*Authentication routes*/}
          <Route exact path='/account' component={Account}/>




          {/*Product routes*/}
          <Route exact path='/product' component={Breadcrumbs} />
          <Route exact path='/product' component={ProductPage}/>
          <Route exact path='/product/:id/'  component={props => <ProductPage {...props}/>}/>

          {/*Products routes*/}
          <Route exact path='/products' component={ProductsPage}/>
          <Route exact path='/products' component={Breadcrumbs} />
          <Route exact path='/products/category/:brands' component={props => <ProductsPage {...props}/>}/>
          <Route exact path='/products/category/:gender/:apparel_type' component={props => <ProductsPage {...props}/>}/>
          <Route exact path='/products/category/:gender/:apparel_type/:apparel_type2' component={props => <ProductsPage {...props}/>} />
          <Route exact path='/products/category/:gender/:apparel_type/:top_bottom' component={props => <ProductsPage {...props} />} />
          <Route exact path='/products/category/:gender/:apparel_type/:top_bottom/:apparel_type2' component={props => <ProductsPage {...props} />} />

          {/*Checkout Routes*/}
          <Route exact path='/checkout/' component={props => <Checkout{...props}/>}/>
          <Route exact path='/checkout/cart' component={props => <Cart{...props}/>}/>
          <Route exact path='/checkout/payment' component={props => <Payment{...props}/>}/>

          {/*Footer*/}
          <Route path='/' component={Footer}/>
      </div>
    );
  }
}

export default App;
