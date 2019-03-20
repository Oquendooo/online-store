import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Payments  from '../CheckoutPages/Payments';
import SearchBar from './SearchBar';
import {removeFromCart} from "../../actions";
import '../../css/main.css';
import '../../css/header.css';


class Header extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isMobileMenuOpened: false,
         mobileMenuClass: 'mobile-menu',
         cart:[]
      };
      this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
   };
   componentDidMount() {
   }

   renderLinks(){
      if(this.props.authenticated){
         return(
             <React.Fragment>
                <Payments />
                <li className="item">
                   <Link className="login" to="/signout">
                      <span>Sign Out</span>
                   </Link>
                </li>
                <li className="item">
                   <Link className="login" to="/feature">
                      <span>Feature</span>
                   </Link>
                </li>
             </React.Fragment>
         );
      }else{
         return(
             <React.Fragment>
                <li className="item">
                   <Link className="login" to="/signin">
                      <span>Log In</span>
                   </Link>
                </li>

                <li className="item">
                   <Link className="register" to="/signup">
                      <span>Registration</span>
                   </Link>
                </li>
             </React.Fragment>
         );
      }
   }

   renderCartItems(){

      const { items } = this.props.cart;
         console.log("my props",this.props.cart);
         const filteredCart = items.filter(item => item.length !== 0);

         if(filteredCart.length > 0){
            return(
                <React.Fragment>
                   <div className="cart-quantity">
                      <span className="count">{filteredCart.length} </span><span>items in your cart</span>
                   </div>
                   <div className="cart-items">
                   {filteredCart.map( (item, index) => (
                       <div className="product-item" key={item.product_id+index}>
                          <div className="product-image">
                             <img src={item.img_urls} alt=""/>
                          </div>
                          <div className="product-details">
                             <div className="brand-price">
                                <strong>S&D</strong><strong>$39.99</strong>
                             </div>
                             <div className="product-name"><p>{item.product_name}</p></div>
                             <div className="product-size"><span>Size: </span><span>M</span></div>
                             <div className="product-qty-delete"><input/><span><i onClick={() => this.deleteCartItem(index)} className="fas fa-trash-alt"></i></span></div>
                          </div>
                       </div>
                   ))}
                   </div>
                </React.Fragment>
            );
         }else if(filteredCart.length === 0){
            return(
                <React.Fragment>
                   <div className="cart-content">
                      <span>You have no items in your shopping cart</span>
                   </div>
                </React.Fragment>
            );
         }




   }
   deleteCartItem = (index) => {

      this.props.removeFromCart(index);

      this.setState({cart: JSON.parse(localStorage.getItem('cart'))});
   };
   toggleMobileMenu(){

      if(this.state.isMobileMenuOpened === true){
         this.setState({mobileMenuClass: 'mobile-menu', isMobileMenuOpened: false});
      }else if(!this.state.isMobileMenuOpened){
         this.setState({mobileMenuClass: 'mobile-menu active', isMobileMenuOpened: true});
      }

   }

  render() {
     return (
      <React.Fragment>
               <header id="site-header" className="navbar">
                  <div className="container">
                     <div className="hamburger-icon">
                        <i onClick={this.toggleMobileMenu} className="fas fa-bars"></i>
                        <i className="fas fa-times"></i>
                     </div>
                     <div className="logo-wrapper">
                        <Link to="/" className="logo">Modern Apparel</Link>
                     </div>
                     <ul id="header-nav" className="nav">
                        <li className="nav-item">
                           <Link className="nav-link" to="/products/category/mens/clothing">Men's</Link>
                           <i className="fas fa-plus"></i>
                           <div className="products-dropdown-wrapper">
                              <div className="products-dropdown">
                                 <ul className="dropdown-col">
                                    <li>
                                       <Link to="/products/category/mens/clothing">
                                          <h3>Clothing</h3>
                                       </Link>
                                    </li>
                                    <li><Link to="/products/category/mens/clothing/tops/basic-tees"><span>Basic Tees</span></Link></li>
                                    <li><Link to="/products/category/mens/clothing/tops/hoodies"><span>Hoodies</span></Link></li>
                                    <li><Link to="/products/category/mens/clothing/tops/jackets"><span>Jackets</span></Link></li>
                                    <li><Link to="/products/category/mens/clothing/bottoms/jeans"><span>Jeans</span></Link></li>
                                    <li><Link to="/products/category/mens/clothing/bottoms/joggers"><span>Joggers</span></Link></li>
                                    <li><Link to="/products/category/mens/clothing/tops/jackets"><span>Outerwear</span></Link></li>
                                    <li><Link to="/products/category/mens/clothing/bottoms/pants"><span>Pants</span></Link></li>
                                    <li><Link to="/products/category/mens/clothing/tops/shirts"><span>Shirts</span></Link></li>
                                    <li><Link to="/products/category/mens/clothing/bottoms/shorts"><span>Shorts</span></Link></li>
                                    <li><Link to="/products/category/mens/clothing/tops/sweaters"><span>Sweaters</span></Link></li>
                                    <li><Link to="/products/category/mens/clothing/tops/sweatshirts"><span>Sweatshirts</span></Link></li>
                                    <li><Link to="/products/category/mens/clothing/tops"><span>T-shirts</span></Link></li>
                                    <li><Link to="/products/category/mens/clothing/bottoms/track-pants"><span>Track Pants</span></Link></li>
                                    <li><Link to="/products/category/mens/clothing"><span className="viewall">View All</span></Link></li>
                                 </ul>
                                 <ul className="dropdown-col">
                                    <li>
                                       <Link to="/products/category/mens/footwear"><h3>Footwear</h3></Link>
                                    </li>
                                    <li><Link to="/products/category/mens/footwear/boots"><span>Boots</span></Link></li>
                                    <li><Link to="/products/category/mens/footwear/sandals-slides"><span>Sandals & Slides</span></Link></li>
                                    <li><Link to="/products/category/mens/footwear/sneakers"><span>Sneakers</span></Link></li>
                                    <li><Link to="/products/category/mens/footwear"><span className="viewall" >View All</span></Link></li>
                                 </ul>
                                 <ul className="dropdown-col">
                                    <li>
                                       <Link to="/products/category/mens/accessories"><h3>Accessories</h3></Link>
                                    </li>
                                    <li><Link to="/products/category/mens/accessories/bags"><span>Bags</span></Link></li>
                                    <li><Link to="/products/category/mens/accessories/belts"><span>Belts</span></Link></li>
                                    <li><Link to="/products/category/mens/accessories/all-hats"><span>All Hats</span></Link></li>
                                    <li><Link to="/products/category/mens/accessories/dad-hats"><span>Dad Hats</span></Link></li>
                                    <li><Link to="/products/category/mens/accessories/jewelry"><span>Jewelry</span></Link></li>
                                    <li><Link to="/products/category/mens/accessories/media-cases"><span>Media Cases</span></Link></li>
                                    <li><Link to="/products/category/mens/accessories/socks-underwear"><span>Socks & Underwear</span></Link></li>
                                    <li><Link to="/products/category/mens/accessories/Sunglasses"><span>Sunglasses</span></Link></li>
                                    <li><Link to="/products/category/mens/accessories/wallets"><span>Wallets</span></Link></li>
                                    <li><Link to="/products/category/mens/accessories/watches"><span>Watches</span></Link></li>
                                    <li><Link to="/products/category/mens/accessories/"><span className="viewall" >View All</span></Link></li>
                                 </ul>
                                 <div className="dropdown-imgs-col">
                                    <div className="dropdown-img">
                                       <h5>New</h5>
                                       <h3>Fresh Drops!</h3>
                                       <Link to="/products/category/mens/clothing/">
                                          <img alt="" src="https://cdn.karmaloopassets.com/media//gene-cms/2/0/20171215-kl-nav-bbc.jpg"/>
                                       </Link>
                                       <Link className="action" to="/products/category/mens/clothing/">
                                          Shop Now
                                       </Link>
                                    </div>
                                    <div className="dropdown-img">
                                       <h5>To lowdown</h5>
                                       <h3>Fresh Drops!</h3>
                                       <Link to="/products/category/mens/clothing/">
                                          <img alt="" src="https://cdn.karmaloopassets.com/media//gene-cms/2/0/20171215-kl-nav-pinkdolphin2.jpg"/>
                                       </Link>
                                       <Link className="action" to="/products/category/mens/clothing/">
                                          Shop Now
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="/products/category/womens/clothing">Women's</Link>
                           <i className="fas fa-plus"></i>
                           {/*-- Below is the products Dropdown Men*/}
                           <div className="products-dropdown-wrapper">
                              <div className="products-dropdown">
                                 <ul className="dropdown-col">
                                    <li>
                                       <Link to="/products/category/womens/clothing">
                                          <h3>Clothing</h3>
                                       </Link>
                                    </li>
                                    <li><Link to="/products/category/womens/clothing/tops"><span>Tops</span></Link></li>
                                    <li><Link to="/products/category/womens/clothing/bottoms"><span>Bottoms</span></Link></li>
                                    <li><Link to="/products/category/womens/clothing/outerwear"><span>Outerwear</span></Link></li>
                                    <li><Link to="/products/category/womens/clothing/dresses"><span>Dresses</span></Link></li>
                                    <li><Link to="/products/category/womens/clothing/sweatshirts"><span>Sweatshirts</span></Link></li>
                                    <li><Link to="/products/category/womens/clothing/sweaters"><span>Sweaters</span></Link></li>
                                    <li><Link to="/products/category/womens/clothing"><span className="viewall" >View All</span></Link></li>
                                 </ul>
                                 <ul className="dropdown-col">
                                    <li>
                                       <Link to="/products/category/womens/footwear">
                                          <h3>Footwear</h3>
                                       </Link>
                                    </li>
                                    <li><Link to="/products/category/womens/footwear/sneakers"><span>Sneakers</span></Link></li>
                                    <li><Link to="/products/category/womens/footwear/sandals-slides"><span>Sandals & Slides</span></Link></li>
                                    <li><Link to="/products/category/womens/footwear/heels"><span>Heels</span></Link></li>
                                    <li><Link to="/products/category/womens/footwear/boots"><span>Boots</span></Link></li>
                                    <li><Link to="/products/category/womens/footwear/flats"><span>Flats</span></Link></li>
                                    <li><Link to="/products/category/womens/footwear"><span className="viewall" >View All</span></Link></li>
                                 </ul>
                                 <ul className="dropdown-col">
                                    <li>
                                       <Link to="/products/category/womens/accessories">
                                          <h3>Accessories</h3>
                                       </Link>
                                    </li>
                                    <li><Link to="/products/category/womens/accessories/watches"><span>Hats</span></Link></li>
                                    <li><Link to="/products/category/womens/accessories/jewelry"><span>Jewelry</span></Link></li>
                                    <li><Link to="/products/category/womens/accessories/sunglasses"><span>Sunglasses</span></Link></li>
                                    <li><Link to="/products/category/womens/accessories/bags"><span>Bags</span></Link></li>
                                    <li><Link to="/products/category/womens/accessories/purses"><span>Purses</span></Link></li>
                                    <li><Link to="/products/category/womens/accessories/scarves"><span>Scarves</span></Link></li>
                                    <li><Link to="/products/category/womens/accessories/"><span className="viewall" >View All</span></Link></li>
                                 </ul>
                                 <div className="dropdown-imgs-col">
                                    <div className="dropdown-img">
                                       <h5>New</h5>
                                       <h3>Fresh Drops!</h3>
                                       <Link to="/products/category/womens/clothing/">
                                          <img alt="" src="https://cdn.karmaloopassets.com/media//gene-cms/2/0/20171215-kl-nav-womens-calvin.jpg"/>
                                       </Link>
                                       <Link className="action" to="/products/category/womens/clothing/">
                                          Shop Now
                                       </Link>
                                    </div>
                                    <div className="dropdown-img">
                                       <h5>For her</h5>
                                       <h3>Footwear</h3>
                                       <Link to="/products/category/womens/footwear/">
                                          <img alt="" src="https://cdn.karmaloopassets.com/media//gene-cms/2/0/20171215-kl-nav-vans.jpg"/>
                                       </Link>
                                       <Link className="action" to="/products/category/womens/footwear/">
                                          Shop Now
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="/products/category/new">
                              New
                           </Link>
                           <i className="fas fa-plus"></i>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="/products/category/sale">
                              Sale
                           </Link>
                           <i className="fas fa-plus"></i>
                           {/*-- Below is the products Dropdown Men*/}
                           <div className="products-dropdown-wrapper">
                              <div className="products-dropdown">
                                 <ul className="dropdown-col">
                                    <li>
                                       <Link to="/products/category/mens/clothing">
                                          <h3>Men's</h3>
                                       </Link>
                                    </li>
                                    <li><Link to="/products/category/mens/clothing"><span>Clothing</span></Link></li>
                                    <li><Link to="/products/category/mens/footwear"><span>Footwear</span></Link></li>
                                    <li><Link to="/products/category/mens/clothing"><span className="viewall">View All</span></Link></li>
                                 </ul>
                                 <ul className="dropdown-col">
                                    <li>
                                       <Link to="/products/category/womens/clothing">
                                          <h3>Women's</h3>
                                       </Link>
                                    </li>
                                    <li><Link to="/products/category/womens/clothing"><span>Clothing</span></Link></li>
                                    <li><Link to="/products/category/womens/clothing"><span>Footwear</span></Link></li>
                                    <li><Link to="/products/category/womens/clothing"><span className="viewall">View All</span></Link></li>
                                 </ul>
                                 <ul className="dropdown-col">
                                    <li>
                                       <Link to="/products/category/sales">
                                          <h3>Sales</h3>
                                       </Link>
                                    </li>
                                    <li><Link to="/products/category/womens/clothing"><span>Fresh Markdowns</span></Link></li>
                                    <li><Link to="/products/category/womens/footwear"><span>25% Off Markdowns</span></Link></li>
                                    <li><Link to="/products/category/womens/accessories"><span>Loosie Sales</span></Link></li>
                                    <li><Link to="/products/category/womens/clothing"><span className="viewall">View All</span></Link></li>
                                 </ul>
                                 <div className="dropdown-imgs-col">
                                    <div className="dropdown-img">
                                       <h5>New</h5>
                                       <h3>Fresh Drops!</h3>
                                       <Link to="/products/category/mens/clothing"><img alt="" src="https://cdn.karmaloopassets.com/media//gene-cms/c/h/charles.jpg"/></Link>
                                       <Link className="action" to="/products/category/mens/clothing">Shop Now</Link>
                                    </div>
                                    <div className="dropdown-img">
                                       <h5>To lowdown</h5>
                                       <h3>Fresh Drops!</h3>
                                       <Link to="/products/category/mens/clothing"><img alt="" src="https://cdn.karmaloopassets.com/media//gene-cms/_/5/_52a9015-edit.jpg"/></Link>
                                       <Link to="/products/category/mens/clothing" className="action">Shop Now</Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="/products/category/brands">
                              Brands
                           </Link>
                           <i className="fas fa-plus"></i>
                           {/*-- Below is the Mens Dropdown Men*/}
                           <div className="products-dropdown-wrapper">
                              <div className="products-dropdown">
                                 <ul className="dropdown-col">
                                    <li>
                                       <Link to="/products/category/brands">
                                          <h3>Top Brands</h3>
                                       </Link>
                                    </li>
                                    <li><Link to="/products/category/brands"><span>10 Deep</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Adidas</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Billionaire Boys Club</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Champion</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Crysp</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Elwood</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Enslaved</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Embellish</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Herschel Supply Co.</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>HUF</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Kappa</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Pink Dolphin</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Primitive</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Seize&Desist</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Vans</span></Link></li>
                                 </ul>
                                 <ul className="dropdown-col">
                                    <li>

                                       <Link to="/products/category/mens/clothing" >
                                          <h3>Mens</h3>
                                       </Link>
                                    </li>
                                    <li><Link to="/products/category/brands"><span>8&9 Clothing</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>10 Deep</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Billionaire Boys Club</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Any Memes</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Boardies Apparel</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Champion</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Civil</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Gucci</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Converse</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>CRYSP</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Diamond Supply Co.</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Dr Martens</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Primitive</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Seize&Desist</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Elwood</span></Link></li>
                                 </ul>
                                 <ul className="dropdown-col">
                                    <li>
                                       <h3 className="blank-h3">&nbsp;</h3>
                                    </li>

                                    <li><Link to="/products/category/brands"><span>Enslaved</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Embellish</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Fairplay Brands</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Golden Denim</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Hall Of Fame</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Hasta Muerte</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Hex</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Hershcel</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>HUF</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Jansport</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Kappa</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Mitchell & Ness</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>New Balance</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Mitchell & Ness</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Paper Planes</span></Link></li>
                                 </ul>
                                 <ul className="dropdown-col">
                                    <li>
                                       <h3 className="blank-h3">&nbsp;</h3>
                                    </li>
                                    <li><Link to="/products/category/brands"><span>Pink Dolphin</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Publish</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Puma</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Reebok</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Seize&Desist</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Stance</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Timberland</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Toms shoes</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>UNDEFEATED</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Vandal Collective</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Venley</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Vans</span></Link></li>
                                 </ul>
                                 <ul className="dropdown-col">
                                    <li>
                                       <Link to="/products/category/womens/clothing" >
                                          <h3>Womens</h3>
                                       </Link>
                                    </li>
                                    <li><Link to="/products/category/brands"><span>Adidas</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>classNamey Brand</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Dimepiece LA</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>FILA</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>HLZBLZ</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Jeffrey Campbell</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Kill Brand</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Married To The Mob</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Primitive</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Puma</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Steve Madden</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>T.U.K</span></Link></li>
                                    <li><Link to="/products/category/brands"><span>Vans</span></Link></li>
                                 </ul>
                              </div>
                           </div>
                        </li>
                     </ul>
                     <SearchBar  />

                     <div className="account-cart">
                        <div className="account">
                           <Link to="/signin">
                           <i className="fas fa-user-alt"></i>
                           </Link>
                           <div className="account-menu">

                              <ul className="login-register">
                                 <div className="arrow-up"></div>
                                 {this.renderLinks()}
                              </ul>
                              <ul className="menu-actions">
                                 <li className="menu-actions-item">
                                    <Link to="/account">
                                    <span>My Account</span>
                                    </Link>
                                 </li>
                                 <li className="menu-actions-item">
                                    <Link to="/wishlist">
                                    <span>My WishList</span>
                                    </Link>
                                 </li>
                                 <li className="menu-actions-item">
                                    <Link to="/my-orders">
                                    <span>My Orders</span>
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="cart">
                           <Link to="/checkout/cart">
                           <i className="fas fa-shopping-cart"></i>
                              {
                                 (() => {
                                    if(this.props.cart.items.length > 0){
                                       return(
                                           <span className="counter">
                                             <span className="counter-number">{this.props.cart.items.length}</span>
                                          </span>
                                       );
                                    }
                                 })()
                              }

                           </Link>
                           <div className="cart-menu">
                              <div className="arrow-up">
                              </div>
                              {this.renderCartItems()}
                           </div>
                        </div>
                     </div>
                  </div>
               </header>
               <ul className={this.state.mobileMenuClass}>
                  <li><Link onClick={this.toggleMobileMenu} to="/products/category/mens/clothing">Men's</Link></li>
                  <li><Link onClick={this.toggleMobileMenu} to="/products/category/womens/clothing">Women's</Link></li>
                  <li><Link onClick={this.toggleMobileMenu} to="/products/category/mens/clothing">New</Link></li>
                  <li><Link onClick={this.toggleMobileMenu} to="/products/category/mens/clothing">Sales</Link></li>
                  <li><Link onClick={this.toggleMobileMenu} to="/products/category/mens/clothing">Brands</Link></li>
               </ul>
            </React.Fragment>
    );
  }
}

function mapStateToProps (state) {
   return {
      authenticated: state.auth.authenticated,
      cart: state.cart
   };
}

export default connect(mapStateToProps, {removeFromCart})(Header);
