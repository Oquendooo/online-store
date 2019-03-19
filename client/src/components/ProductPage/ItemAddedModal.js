import React, {Component} from 'react';
import './ItemAddedModal.css';

class ItemAddedModal extends Component {

  checkoutBtnClicked = () => {

    this.props.history.push('/checkout/cart');
  };

  render() {

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
                  src="https://cdn.karmaloopassets.com/media/catalog/product/cache/thumbnail/120x120/beff4985b56e3afdbeabfc89641a4582/8/3/83e769d46f23bc2df84f55a357b246bc.jpg"
                  alt=""/>
                <div>
                  <span>KING LONDON</span>
                  <span>Manor Tracksuit Bottoms - Black</span>
                  <span><strong>Quantity</strong>1</span>
                  <span><strong>Quantity</strong>S</span>
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


