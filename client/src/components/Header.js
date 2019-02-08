import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import '../css/main.css';


class Header extends Component {

   renderLinks(){
      if(this.props.authenticated){
         return(
             <div>
                <Link to="/signout">Sign Out</Link>
                <Link to="/feature">Feature</Link>
             </div>
         );
      }else{
         return(
             <div>
                <Link to="/signup">Sign Up</Link>
                <Link to="/signin">Sign In </Link>
             </div>
         );
      }
   }


  render() {
    return (
      <React.Fragment>
               <header id="site-header" className="navbar">
                  <div className="container">
                     <div className="hamburger-icon">
                        <i className="fas fa-bars"></i>
                        <i className="fas fa-times"></i>
                     </div>
                     <div className="logo-wrapper">
                        <a href="/" className="logo">Modern Apparel</a>
                     </div>
                     <ul id="header-nav" className="nav">
                        <li className="nav-item">
                           <a className="nav-link" href="/">Men's</a>
                           <i className="fas fa-plus"></i>
                           <div className="products-dropdown-wrapper">
                              <div className="products-dropdown">
                                 <ul className="dropdown-col">
                                    <li>
                                       <a href="/">
                                          <h3>Clothing</h3>
                                       </a>
                                    </li>
                                    <li><a href="products"><span>Basic Tees</span></a></li>
                                    <li><a href="products"><span>Graphic Tees</span></a></li>
                                    <li><a href="products"><span>Hoodies</span></a></li>
                                    <li><a href="products"><span>Jackets</span></a></li>
                                    <li><a href="products"><span>Jeans</span></a></li>
                                    <li><a href="products"><span>Joggers</span></a></li>
                                    <li><a href="products"><span>Outerwear</span></a></li>
                                    <li><a href="products"><span>Pants</span></a></li>
                                    <li><a href="products"><span>Shirts</span></a></li>
                                    <li><a href="products"><span>Shorts</span></a></li>
                                    <li><a href="products"><span>Sweaters</span></a></li>
                                    <li><a href="products"><span>Sweatshirts</span></a></li>
                                    <li><a href="products"><span>T-shirts</span></a></li>
                                    <li><a href="products"><span>Track Pants</span></a></li>
                                    <li><a href="products"><span className="viewall">View All</span></a></li>
                                 </ul>
                                 <ul className="dropdown-col">
                                    <li>
                                       <a href="/">
                                          <h3>Footwear</h3>
                                       </a>
                                    </li>
                                    <li><a href="/"><span>Boots</span></a></li>
                                    <li><a href="/"><span>Sandals & Slides</span></a></li>
                                    <li><a href="/"><span>Sneakers</span></a></li>
                                    <li><a href="/"><span className="viewall">View All</span></a></li>
                                 </ul>
                                 <ul className="dropdown-col">
                                    <li>
                                       <a href="/">
                                          <h3>Accessories</h3>
                                       </a>
                                    </li>
                                    <li><a href="/"><span>Bags</span></a></li>
                                    <li><a href="/"><span>Belts</span></a></li>
                                    <li><a href="/"><span>All Hats</span></a></li>
                                    <li><a href="/"><span>Dad Hats</span></a></li>
                                    <li><a href="/"><span>Jewelry</span></a></li>
                                    <li><a href="/"><span>Media Cases</span></a></li>
                                    <li><a href="/"><span>Socks & Underwear</span></a></li>
                                    <li><a href="/"><span>Sunglasses</span></a></li>
                                    <li><a href="/"><span>Wallets</span></a></li>
                                    <li><a href="/"><span>Watches</span></a></li>
                                    <li className="viewall"><a href="/"><span>View All</span></a></li>
                                 </ul>
                                 <div className="dropdown-imgs-col">
                                    <div className="dropdown-img">
                                       <h5>New</h5>
                                       <h3>Fresh Drops!</h3>
                                       <a href="/"><img alt="" src="https://cdn.karmaloopassets.com/media//gene-cms/2/0/20171215-kl-nav-bbc.jpg"/></a>
                                       <a className="action" href="/">Shop Now</a>
                                    </div>
                                    <div className="dropdown-img">
                                       <h5>To lowdown</h5>
                                       <h3>Fresh Drops!</h3>
                                       <a href="/"><img alt="" src="https://cdn.karmaloopassets.com/media//gene-cms/2/0/20171215-kl-nav-pinkdolphin2.jpg"/>
                                       </a>
                                       <a href="/" className="action">Shop Now</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="/">Women's</a>
                           <i className="fas fa-plus"></i>
                           {/*-- Below is the products Dropdown Men*/}
                           <div className="products-dropdown-wrapper">
                              <div className="products-dropdown">
                                 <ul className="dropdown-col">
                                    <li>
                                       <a href="/">
                                          <h3>Clothing</h3>
                                       </a>
                                    </li>
                                    <li><a href="/"><span>Tops</span></a></li>
                                    <li><a href="/"><span>Bottoms</span></a></li>
                                    <li><a href="/"><span>Outerwear</span></a></li>
                                    <li><a href="/"><span>Dresses</span></a></li>
                                    <li><a href="/"><span>Lingerie</span></a></li>
                                    <li><a href="/"><span>Sweatshirts</span></a></li>
                                    <li><a href="/"><span>Sweaters</span></a></li>
                                    <li><a href="/"><span>Swimwear</span></a></li>
                                    <li><a href="/"><span className="viewall">View All</span></a></li>
                                 </ul>
                                 <ul className="dropdown-col">
                                    <li>
                                       <a href="/">
                                          <h3>Footwear</h3>
                                       </a>
                                    </li>
                                    <li><a href="/"><span>Sneakers</span></a></li>
                                    <li><a href="/"><span>Sandals & Slides</span></a></li>
                                    <li><a href="/"><span>Heels</span></a></li>
                                    <li><a href="/"><span>Boots</span></a></li>
                                    <li><a href="/"><span>Flats</span></a></li>
                                    <li><a href="/"><span className="viewall">View All</span></a></li>
                                 </ul>
                                 <ul className="dropdown-col">
                                    <li>
                                       <a href="/">
                                          <h3>Accessories</h3>
                                       </a>
                                    </li>
                                    <li><a href="/"><span>Hats</span></a></li>
                                    <li><a href="/"><span>Jewelry</span></a></li>
                                    <li><a href="/"><span>Sunglasses</span></a></li>
                                    <li><a href="/"><span>Bags</span></a></li>
                                    <li><a href="/"><span>Purses</span></a></li>
                                    <li><a href="/"><span>Scarves</span></a></li>
                                    <li className="viewall"><a href="/"><span>View All</span></a></li>
                                 </ul>
                                 <div className="dropdown-imgs-col">
                                    <div className="dropdown-img">
                                       <h5>New</h5>
                                       <h3>Fresh Drops!</h3>
                                       <a href="/"><img alt="" src="https://cdn.karmaloopassets.com/media//gene-cms/2/0/20171215-kl-nav-womens-calvin.jpg"/></a>
                                       <a className="action" href="/">Shop Now</a>
                                    </div>
                                    <div className="dropdown-img">
                                       <h5>For her</h5>
                                       <h3>Footwear</h3>
                                       <a href="/"><img alt="" src="https://cdn.karmaloopassets.com/media//gene-cms/2/0/20171215-kl-nav-vans.jpg"/></a>
                                       <a href="/" className="action">Shop Now</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="/">New</a>
                           <i className="fas fa-plus"></i>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="/">Sale</a>
                           <i className="fas fa-plus"></i>
                           {/*-- Below is the products Dropdown Men*/}
                           <div className="products-dropdown-wrapper">
                              <div className="products-dropdown">
                                 <ul className="dropdown-col">
                                    <li>
                                       <a href="/">
                                          <h3>Men's</h3>
                                       </a>
                                    </li>
                                    <li><a href="/"><span>Clothing</span></a></li>
                                    <li><a href="/"><span>Footwear</span></a></li>
                                    <li><a href="/"><span className="viewall">View All</span></a></li>
                                 </ul>
                                 <ul className="dropdown-col">
                                    <li>
                                       <a href="/">
                                          <h3>Women's</h3>
                                       </a>
                                    </li>
                                    <li><a href="/"><span>Clothing</span></a></li>
                                    <li><a href="/"><span>Footwear</span></a></li>
                                    <li><a href="/"><span className="viewall">View All</span></a></li>
                                 </ul>
                                 <ul className="dropdown-col">
                                    <li>
                                       <a href="/">
                                          <h3>Sales</h3>
                                       </a>
                                    </li>
                                    <li><a href="/"><span>Fresh Markdowns</span></a></li>
                                    <li><a href="/"><span>25% Off Markdowns</span></a></li>
                                    <li><a href="/"><span>Loosie Sales</span></a></li>
                                    <li className="viewall"><a href="/"><span>View All</span></a></li>
                                 </ul>
                                 <div className="dropdown-imgs-col">
                                    <div className="dropdown-img">
                                       <h5>New</h5>
                                       <h3>Fresh Drops!</h3>
                                       <a href="/"><img alt="" src="https://cdn.karmaloopassets.com/media//gene-cms/c/h/charles.jpg"/></a>
                                       <a className="action" href="/">Shop Now</a>
                                    </div>
                                    <div className="dropdown-img">
                                       <h5>To lowdown</h5>
                                       <h3>Fresh Drops!</h3>
                                       <a href="/"><img alt="" src="https://cdn.karmaloopassets.com/media//gene-cms/_/5/_52a9015-edit.jpg"/></a>
                                       <a href="/" className="action">Shop Now</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="/">Brands</a>
                           <i className="fas fa-plus"></i>
                           {/*-- Below is the Mens Dropdown Men*/}
                           <div className="products-dropdown-wrapper">
                              <div className="products-dropdown">
                                 <ul className="dropdown-col">
                                    <li>
                                       <a href="/">
                                          <h3>Top Brands</h3>
                                       </a>
                                    </li>
                                    <li><a href="/"><span>10 Deep</span></a></li>
                                    <li><a href="/"><span>Adidas</span></a></li>
                                    <li><a href="/"><span>Billionaire Boys Club</span></a></li>
                                    <li><a href="/"><span>Champion</span></a></li>
                                    <li><a href="/"><span>Crysp</span></a></li>
                                    <li><a href="/"><span>Elwood</span></a></li>
                                    <li><a href="/"><span>Enslaved</span></a></li>
                                    <li><a href="/"><span>Embellish</span></a></li>
                                    <li><a href="/"><span>Herschel Supply Co.</span></a></li>
                                    <li><a href="/"><span>HUF</span></a></li>
                                    <li><a href="/"><span>Kappa</span></a></li>
                                    <li><a href="/"><span>Pink Dolphin</span></a></li>
                                    <li><a href="/"><span>Primitive</span></a></li>
                                    <li><a href="/"><span>Seize&Desist</span></a></li>
                                    <li><a href="/"><span>Vans</span></a></li>
                                 </ul>
                                 <ul className="dropdown-col">
                                    <li>
                                       <a href="/">
                                          <h3>Mens</h3>
                                       </a>
                                    </li>
                                    <li><a href="/"><span>8&9 Clothing</span></a></li>
                                    <li><a href="/"><span>10 Deep</span></a></li>
                                    <li><a href="/"><span>Billionaire Boys Club</span></a></li>
                                    <li><a href="/"><span>Any Memes</span></a></li>
                                    <li><a href="/"><span>Boardies Apparel</span></a></li>
                                    <li><a href="/"><span>Champion</span></a></li>
                                    <li><a href="/"><span>Civil</span></a></li>
                                    <li><a href="/"><span>classNamey Brand</span></a></li>
                                    <li><a href="/"><span>Converse</span></a></li>
                                    <li><a href="/"><span>CRYSP</span></a></li>
                                    <li><a href="/"><span>Diamond Supply Co.</span></a></li>
                                    <li><a href="/"><span>Dr Martens</span></a></li>
                                    <li><a href="/"><span>Elwood</span></a></li>
                                 </ul>
                                 <ul className="dropdown-col">
                                    <li>
                                       <h3 className="blank-h3">&nbsp;</h3>
                                    </li>
                                    <li><a href="/"><span>Enslaved</span></a></li>
                                    <li><a href="/"><span>Embellish</span></a></li>
                                    <li><a href="/"><span>Fairplay Brands</span></a></li>
                                    <li><a href="/"><span>Golden Denim</span></a></li>
                                    <li><a href="/"><span>Hall Of Fame</span></a></li>
                                    <li><a href="/"><span>Hasta Muerte</span></a></li>
                                    <li><a href="/"><span>Hex</span></a></li>
                                    <li><a href="/"><span>Hershcel</span></a></li>
                                    <li><a href="/"><span>HUF</span></a></li>
                                    <li><a href="/"><span>Jansport</span></a></li>
                                    <li><a href="/"><span>Kappa</span></a></li>
                                    <li><a href="/"><span>Mitchell & Ness</span></a></li>
                                    <li><a href="/"><span>New Balance</span></a></li>
                                    <li><a href="/"><span>Paper Planes</span></a></li>
                                 </ul>
                                 <ul className="dropdown-col">
                                    <li>
                                       <h3 className="blank-h3">&nbsp;</h3>
                                    </li>
                                    <li><a href="/"><span>Pink Dolphin</span></a></li>
                                    <li><a href="/"><span>Publish</span></a></li>
                                    <li><a href="/"><span>Puma</span></a></li>
                                    <li><a href="/"><span>Reebok</span></a></li>
                                    <li><a href="/"><span>Seize&Desist</span></a></li>
                                    <li><a href="/"><span>Stance</span></a></li>
                                    <li><a href="/"><span>Timberland</span></a></li>
                                    <li><a href="/"><span>Toms shoes</span></a></li>
                                    <li><a href="/"><span>UNDEFEATED</span></a></li>
                                    <li><a href="/"><span>Vandal Collective</span></a></li>
                                    <li><a href="/"><span>Venley</span></a></li>
                                    <li><a href="/"><span>Vans</span></a></li>
                                 </ul>
                                 <ul className="dropdown-col">
                                    <li>
                                       <a href="/">
                                          <h3>Womens</h3>
                                       </a>
                                    </li>
                                    <li><a href="/"><span>Adidas</span></a></li>
                                    <li><a href="/"><span>classNamey Brand</span></a></li>
                                    <li><a href="/"><span>Dimepiece LA</span></a></li>
                                    <li><a href="/"><span>FILA</span></a></li>
                                    <li><a href="/"><span>HLZBLZ</span></a></li>
                                    <li><a href="/"><span>Jeffrey Campbell</span></a></li>
                                    <li><a href="/"><span>Kill Brand</span></a></li>
                                    <li><a href="/"><span>Married To The Mob</span></a></li>
                                    <li><a href="/"><span>Primitive</span></a></li>
                                    <li><a href="/"><span>Puma</span></a></li>
                                    <li><a href="/"><span>Steve Madden</span></a></li>
                                    <li><a href="/"><span>T.U.K</span></a></li>
                                    <li><a href="/"><span>Vans</span></a></li>
                                 </ul>
                              </div>
                           </div>
                        </li>
                     </ul>
                     <form>
                        <div className="form-group">
                           <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search"/>
                        </div>
                        <a className="search-icon" href="/">
                        <i className="fas fa-search"></i>
                        </a>
                     </form>
                     <div className="account-cart">
                        <div className="account">
                           <a href="/">
                           <i className="fas fa-user-alt"></i>
                           </a>
                           <div className="account-menu">
                              <ul className="login-register">
                                 <div className="arrow-up"></div>
                                 <li className="item">
                                    <a className="login" href="/">
                                    <span>Log In</span>
                                    </a>
                                 </li>
                                 <li className="item">
                                    <a className="register" href="/">
                                    <span>Registration</span>
                                    </a>
                                 </li>
                                 <li className="item">
                                    <Link to="/">Redux Auth </Link>
                                    {this.renderLinks()}
                                 </li>
                              </ul>
                              <ul className="menu-actions">
                                 <li className="menu-actions-item">
                                    <a href="/">
                                    <span>My Account</span>
                                    </a>
                                 </li>
                                 <li className="menu-actions-item">
                                    <a href="/">
                                    <span>My WishList</span>
                                    </a>
                                 </li>
                                 <li className="menu-actions-item">
                                    <a href="/">
                                    <span>My Orders</span>
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="cart">
                           <a href="/">
                           <i className="fas fa-shopping-cart"></i>
                           </a>
                           <div className="cart-menu">
                              <div className="arrow-up"></div>
                              <div className="cart-content">
                                 <span>You have no items in your shopping cart</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </header>
               <ul className="mobile-menu">
                  <li><a href="/">Men's</a></li>
                  <li><a href="/">Women's</a></li>
                  <li><a href="/">New</a></li>
                  <li><a href="/">Sales</a></li>
                  <li><a href="/">Brands</a></li>
               </ul>
            </React.Fragment>
    );
  }
}

function mapStateToProps (state) {
   return { authenticated: state.auth.authenticated};
}

export default connect(mapStateToProps)(Header);
