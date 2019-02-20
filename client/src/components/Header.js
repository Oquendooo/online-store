import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../css/main.css';


class Header extends Component {
   constructor(props) {
      super(props)
      this.state = {
         isMobileMenuOpened: false,
         mobileMenuClass: 'mobile-menu',
      };
      this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
   }

   renderLinks(){
      if(this.props.authenticated){
         return(
             <React.Fragment>
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
                        <a href="/" className="logo">Modern Apparel</a>
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
                           <a className="nav-link" href="/">Women's</a>
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
                                    <li><a href="/"><span>Tops</span></a></li>
                                    <li><a href="/"><span>Bottoms</span></a></li>
                                    <li><a href="/"><span>Outerwear</span></a></li>
                                    <li><a href="/"><span>Dresses</span></a></li>
                                    <li><a href="/"><span>Lingerie</span></a></li>
                                    <li><a href="/"><span>Sweatshirts</span></a></li>
                                    <li><a href="/"><span>Sweaters</span></a></li>
                                    <li><a href="/"><span>Swimwear</span></a></li>
                                    <li><Link to="/products/category/womens/clothing"><span className="viewall">View All</span></Link></li>
                                 </ul>
                                 <ul className="dropdown-col">
                                    <li>
                                       <Link to="/products/category/womens/footwear">
                                          <h3>Footwear</h3>
                                       </Link>
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
                                       <Link to="/products/category/womens/accessories">
                                          <h3>Accessories</h3>
                                       </Link>
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
                                 {this.renderLinks()}
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
   return { authenticated: state.auth.authenticated};
}

export default connect(mapStateToProps)(Header);
