import React, {Component} from 'react';
import './ItemAddedModal.css';

class ItemAddedModal extends Component {

  checkoutBtnClicked = () => {

    this.props.history.push('/checkout/cart');
  };

  render() {
    const {product} = this.props;
    console.log("itemadded product",this.props.product);
    console.log("itemaddedmodal props",this.props.history);

    return (
      <React.Fragment>
        {/* <!-- Modal -->   */}
        <div className="modal fade" id="ItemAddedModal" tabIndex="-1" role="dialog" aria-labelledby="ItemAddedModal"
             aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">ITEM(S) ADDED TO CART</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img
                  src={product.img_urls}
                  alt=""/>
                <div>
                  <span>{product.brand}</span>
                  <span>{product.product_name}</span>
                  <span><strong>Quantity</strong> 1</span>
                  <span><strong>Size</strong> {product.size}</span>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.checkoutBtnClicked}><span>Checkout</span></button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal"><span>Continue Shopping</span></button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ItemAddedModal;


