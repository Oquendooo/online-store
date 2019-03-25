import React, {Component} from 'react';
import '../../css/product.css';
import { connect } from 'react-redux'
import {addToCart, removeFromCart} from "../../redux/actions";
import {Link} from "react-router-dom";
import ItemAddedModal from './ItemAddedModal';

class ProductPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
        product: {},
        isDescriptionOpen: false,
        descriptionClass: 'item-content description',
        areReviewsOpen: false,
        reviewsClass: 'item-content reviews'
    }
  }
  componentDidMount(){
     this.getProduct();
  }

  getProduct = (event) => {
      const { id } = this.props.match.params;

      if(typeof id !== 'undefined'){
          console.log("test");
          fetch(`/product/${id}`,
              {
                  method:'GET',
                  headers:
                      {
                          'Accept':'application/json',
                          'Content-Type':'application/json'
                      }
              }
          )
              .then(response => response.json())
              .then(product => {
                  console.log("my product", product);
                  this.setState({product});

              });
      }else{

      }

  };

  addToCart = () => {
    this.props.addToCart(this.state.product);

  };

    toggleDescription = () => {
      if(this.state.isDescriptionOpen === true){
          this.setState({descriptionClass: 'item-content description', isDescriptionOpen: false});
      }else if(!this.state.isDescriptionOpen){
          this.setState({descriptionClass: 'item-content description active', isDescriptionOpen: true});
      }
    };


    toggleReviews = () => {
        if(this.state.areReviewsOpen === true){
            this.setState({reviewsClass: 'item-content reviews', areReviewsOpen: false});
        }else if(!this.state.areReviewsOpen){
            this.setState({reviewsClass: 'item-content reviews active', areReviewsOpen: true});
        }
    };



  toggleModal = () => {
      console.log("my product add to cart button is working");
  };
  render() {
    const {history} = this.props;
    console.log("product page props",this.props);
    return (
      <div className="product-container container">
        <ItemAddedModal history={history} product={this.state.product}/>
        <div className="row">
          <div className="product-images-wrapper col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
            <div className="product-images">
              <div className="main-img-wrapper">
                <img alt="" className="main-img" src={this.state.product.img_urls}/>
              </div>
              {/*
        <div className="other-images">
          <img alt="" src="https://cdn.karmaloopassets.com/media/catalog/product/cache/thumbnail/88x110/beff4985b56e3afdbeabfc89641a4582/a/a/aabd633d5b85697ef0db62520566bf77.jpg"/>
          <img alt="" src="https://cdn.karmaloopassets.com/media/catalog/product/cache/thumbnail/88x110/beff4985b56e3afdbeabfc89641a4582/7/4/74e806b71c5fc1c433c04b1c48fabe6e.jpg"/>
        </div>
        */}
            </div>
          </div>
          <div className="product-information-wrapper col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
            <div className="product-brand">
              <a href="/">
                <span>{this.state.product.brand}</span>
              </a>
            </div>
            <div className="product-title">
              <h4>{this.state.product.product_name}</h4>
            </div>
            <div className="product-price-sku">
              <div className="product-price">${this.state.product.price}</div>
              <div className="product-sku">SKU#: {this.state.product.sku}</div>
            </div>
            <form id="product-addtocart-form">
              <div className="sizes-box-wrapper">
                <span>Size</span>
                <div className="sizes">
                  <div className="size-container">
                    <input className="size" type="radio" name="size" value="s"/>
                    <span>S</span>
                  </div>
                  <div className="size-container">
                    <input className="size" type="radio" name="size" value="m"/>
                    <span>M</span>
                  </div>
                  <div className="size-container">
                    <input className="size" type="radio" name="size" value="l"/>
                    <span>L</span>
                  </div>
                  <div className="size-container">
                    <input className="size" type="radio" name="size" value="xl"/>
                    <span>XL</span>
                  </div>
                </div>
              </div>
              <div className="qty-addtocart">
                <div className="qty-wrapper">
                  <label className="label" htmlFor="qty">
                    <span>Quantity</span>
                  </label>
                  <div className="control">
                    {/*<span className="qty-minus">-</span>*/}
                    <input type="number" name="qty" id="qty" value="1"/>
                    {/*<span className="qty-plus">+</span>*/}
                  </div>
                </div>
                <button onClick={this.addToCart} className="addtocart-btn" type="button" data-toggle="modal"
                        data-target="#ItemAddedModal">
                  <span>Add to Cart</span>
                </button>
              </div>
            </form>
            <div className="wishList-socialLinks">
              <a href="/"><i className="fas fa-heart"></i><span>Add To Wish List</span></a>
            </div>
            <div className="product-info">
              <div className="item">
                <div className="item-title" onClick={this.toggleDescription}>
                  <span>Description</span> <span><i className="fas fa-angle-down"></i></span>
                </div>
                <div className={this.state.descriptionClass}>
                  <p>{this.state.product.product_description}</p>
                </div>
              </div>
              <div className="item">
                <div className="item-title" onClick={this.toggleReviews}>
                  <span>Reviews</span><span><i className="fas fa-angle-down"></i></span>
                </div>
                <div className={this.state.reviewsClass}>
                  <form className="review-form">
                    <legend className="legend review-legend"><span>You're reviewing:</span><strong>10 Deep Striped
                      Shirt</strong></legend>
                    <br/><span id="input-message-box"></span>
                    <fieldset className="field required review-field-ratings">
                      <legend className="label"><span>Your Rating<span></span></span></legend>
                      <br/>
                      <div className="control">
                        <div className="nested" id="product-review-table">
                          <div className="field choice review-field-rating">
                          </div>
                        </div>
                        <input type="hidden" name="validate_rating" className="validate-rating" value=""
                               aria-required="true"/>
                      </div>
                    </fieldset>
                    <div className="field review-field-nickname required">
                      <label htmlFor="nickname_field" className="label">
                        <span>Nickname</span>
                      </label>
                      <div className="control">
                        <input type="text" name="nickname" id="nickname_field" className="input-text"/>
                      </div>
                    </div>
                    <div className="field review-field-summary required">
                      <label htmlFor="summary_field" className="label">
                        <span>Summary</span>
                      </label>
                      <div className="control">
                        <input type="text" name="title" id="summary_field" className="input-text"/>
                      </div>
                    </div>
                    <div className="field review-field-text required">
                      <label htmlFor="review_field" className="label">
                        <span>Review</span>
                      </label>
                      <div className="control">
                  <textarea id="review_field" cols="5" rows="3">
                  </textarea>
                      </div>
                    </div>
                    <button type="submit" className="action submit primary"><span>Submit Review</span></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="related-products">
          <h2 className="title">Related Products</h2>
          <div className="row">
            <div key={this.state.product.product_id}
                 className="item product-item col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
              <div className="product-item-info">
                <Link className="product-item-photo" to={{
                  pathname: `/product/${this.state.product.product_id}`,
                  state: this.state.product
                }}>
                  <div className="product-image">
                    <img className="image"
                         src={this.state.product.img_urls}
                         alt=""/>
                  </div>
                </Link>
                <div className="product-item-details">
                  <strong className="product-item-brand">
                    <span>{this.state.product.brand}</span>
                  </strong>
                  <strong className="product-item-name">
                    <a href="/product" className="product-item-link">
                      {this.state.product.product_name}
                    </a>
                  </strong>
                  <div className="product-price">
                    <span>S{this.state.product.price}</span>
                  </div>
                </div>
              </div>
            </div>
            <div key={this.state.product.product_id}
                 className="item product-item col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
              <div className="product-item-info">
                <Link className="product-item-photo" to={{
                  pathname: `/product/${this.state.product.product_id}`,
                  state: this.state.product
                }}>
                  <div className="product-image">
                    <img className="image"
                         src={this.state.product.img_urls}
                         alt=""/>
                  </div>
                </Link>
                <div className="product-item-details">
                  <strong className="product-item-brand">
                    <span>{this.state.product.brand}</span>
                  </strong>
                  <strong className="product-item-name">
                    <a href="/product" className="product-item-link">
                      {this.state.product.product_name}
                    </a>
                  </strong>
                  <div className="product-price">
                    <span>{this.state.product.price}</span>
                  </div>
                </div>
              </div>
            </div>
            <div key={this.state.product.product_id}
                 className="item product-item col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
              <div className="product-item-info">
                <Link className="product-item-photo" to={{
                  pathname: `/product/${this.state.product.product_id}`,
                  state: this.state.product
                }}>
                  <div className="product-image">
                    <img className="image"
                         src={this.state.product.img_urls}
                         alt=""/>
                  </div>
                </Link>
                <div className="product-item-details">
                  <strong className="product-item-brand">
                    <span>{this.state.product.brand}</span>
                  </strong>
                  <strong className="product-item-name">
                    <a href="/product" className="product-item-link">
                      {this.state.product.product_name}
                    </a>
                  </strong>
                  <div className="product-price">
                    <span>{this.state.product.price}</span>
                  </div>
                </div>
              </div>
            </div>
            <div key={this.state.product.product_id}
                 className="item product-item col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
              <div className="product-item-info">
                <Link className="product-item-photo" to={{
                  pathname: `/product/${this.state.product.product_id}`,
                  state: this.state.product
                }}>
                  <div className="product-image">
                    <img className="image"
                         src={this.state.product.img_urls}
                         alt=""/>
                  </div>
                </Link>
                <div className="product-item-details">
                  <strong className="product-item-brand">
                    <span>{this.state.product.brand}</span>
                  </strong>
                  <strong className="product-item-name">
                    <a href="/product" className="product-item-link">
                      {this.state.product.product_name}
                    </a>
                  </strong>
                  <div className="product-price">
                    <span>{this.state.product.price}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    cart: state.cart.cart,
});


export default connect(mapStateToProps,{addToCart, removeFromCart})(ProductPage);
