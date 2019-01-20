import React, {Component} from 'react';
import '../../css/product.css';

class ProductPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      price: 20
    }
  }
  componentDidMount(){
     this.getProducts();
  }

  getProducts = (event) => {

   fetch('products/get-products',
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
   .then(data => {
        console.log(data);

   });

 };
  render() {

    return (<div className="product-container container">
      <div className="row">
        <div className="product-images-wrapper col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
          <div className="product-images">
            <div className="main-img-wrapper">
              <img alt="" className="main-img" src="https://cdn.karmaloopassets.com/media/catalog/product/cache/image/1200x1200/e9c3970ab036de70892d86c6d221abfe/d/3/d3bf8e8fff414325c43fb02ad1cabbb4.jpg"/>
            </div>

            <div className="other-images">
              <img alt="" src="https://cdn.karmaloopassets.com/media/catalog/product/cache/thumbnail/88x110/beff4985b56e3afdbeabfc89641a4582/a/a/aabd633d5b85697ef0db62520566bf77.jpg"/>
              <img alt="" src="https://cdn.karmaloopassets.com/media/catalog/product/cache/thumbnail/88x110/beff4985b56e3afdbeabfc89641a4582/7/4/74e806b71c5fc1c433c04b1c48fabe6e.jpg"/>
            </div>
          </div>
        </div>
        <div className="product-information-wrapper col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
          <div className="product-brand">
            <a href="/">
              <span>Alexander Wang</span>
            </a>
          </div>
          <div className="product-title">
            <h4>10 Deep Striped Shirt</h4>
          </div>
          <div className="product-price-sku">
            <div className="product-price">$20.00</div>
            <div className="product-sku">SKU#: SD1009__GREY</div>
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
                  <span className="qty-minus">-</span>
                  <input type="number" name="qty" id="qty" value="1"/>
                  <span className="qty-plus">+
                  </span>
                </div>
              </div>
                <button className="addtocart-btn" type="submit">
                  <span>Add to Cart</span>
                </button>
            </div>
          </form>
          <div className="wishList-socialLinks">
            <a href="/"><i class="fas fa-heart"></i><span>Add To Wish List</span></a>
          </div>
          <div className="product-info">

            <div className="item">
              <div className="item-title">
                <span>Description</span>
              </div>
              <div className="item-content">
                <p>Panda express yourself with our hottest design! He won't be causing any pandamonium. Hes got a rose in his mouth just for you. The characters on top of the design say "Riot Society" in Chinese.</p>
              </div>
              <ul>
                <li>100% Cotton</li>
                <li>Feel:Soft Wash</li>
                <li>Machine Washable</li>
              </ul>
            </div>

            <div className="item">
              <div className="item-title">
                <span>Reviews</span>
              </div>
              <div className="item-content">
                <form className="review-form">
                   <legend class="legend review-legend"><span>You're reviewing:</span><strong>10 Deep Striped Shirt</strong></legend>
                   <br/><span id="input-message-box"></span>
                   <fieldset class="field required review-field-ratings">
                      <legend class="label"><span>Your Rating<span></span></span></legend>
                      <br/>
                      <div class="control">
                         <div class="nested" id="product-review-table">
                            <div class="field choice review-field-rating">
                            </div>
                         </div>
                         <input type="hidden" name="validate_rating" class="validate-rating" value="" aria-required="true"/>
                      </div>
                   </fieldset>
                   <div class="field review-field-nickname required">
                      <label for="nickname_field" class="label">
                        <span>Nickname</span>
                      </label>
                      <div class="control">
                        <input type="text" name="nickname" id="nickname_field" class="input-text"/>
                      </div>
                   </div>
                   <div class="field review-field-summary required">
                      <label for="summary_field" class="label">
                        <span>Summary</span>
                      </label>
                      <div class="control">
                        <input type="text" name="title" id="summary_field" class="input-text"/>
                      </div>
                   </div>
                   <div class="field review-field-text required">
                      <label for="review_field" class="label">
                        <span>Review</span>
                      </label>
                      <div class="control">
                        <textarea id="review_field" cols="5" rows="3">
                        </textarea>
                      </div>
                   </div>
                   <button type="submit" class="action submit primary"><span>Submit Review</span></button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>);
  }
}

export default ProductPage;
