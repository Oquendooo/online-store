import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/cartPage.css';
import {connect} from "react-redux";
import {removeFromCart} from "../../actions";

class Cart extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cart: []
        }
    };

    componentDidMount(){
        this.setState({cart: JSON.parse(localStorage.getItem('cart'))});
        this.getCartItems();
    };

    getCartItems = () => {

    };
    renderCart = () => {
        console.log("testing",this.state.cart);
        //Here we filter out if there are any empty elements in the array
        let cartItems = this.state.cart.filter(item => item.length !== 0);

        return(
            <React.Fragment>
                {cartItems.map( (item, index) => (
                <div className="cart-item" key={item.product_id + index}>
                    <div className="item-data">
                        <div className="img-details">
                            <Link to={`/product/${item.product_id}`}>
                                <div className="item-image"><img src={item.img_urls} alt=""/></div>
                            </Link>
                            <div className="item-details">
                                <span className="item-brand">{item.brand}</span>
                                <span className="item-title">{item.product_name}The Retro Yacht Jacket in Green</span>
                                <span className="item-size">Size: {item.size}</span>
                                <span className="item-deal">FREE SHIPPING & EXCHANGE ON ORDERS OVER $35</span>
                            </div>
                        </div>
                        <div className="item-price">$<span>{item.price}</span></div>
                        <div className="item-qty"><span>1</span></div>
                        <div className="item-subtotal">$<span>{item.price}</span></div>
                    </div>
                    <div className="item-action">
                        <i className="fas fa-pencil-alt"></i>
                        <i onClick={() => this.deleteCartItem(index)} className="fas fa-trash-alt"></i>
                    </div>
                </div>
                ))}
            </React.Fragment>
        );
    };

    deleteCartItem = (index) => {

        this.props.removeFromCart(index);

        this.setState({cart: JSON.parse(localStorage.getItem('cart'))});
    };

    render() {
        const {cart} = this.state;
        console.log("this state .cart", cart);
        console.log("testing reduccart", this.props.cart);
        return (
            <React.Fragment>
                <div id="main-content" className="">
                    <div className="container">

                            <div className="page-title-wrapper">
                                <h1 className="page-title">
                                    <span>Shopping Cart</span>
                                </h1>
                            </div>
                            <div className="cart-container">
                                <div className="row">
                                    <div className="cart-items col-sm-8 col-md-8 col-lg-8 col-xl-8">
                                        <div className="cart-header">
                                            <div className="item">Item</div>
                                            <div className="price">Price</div>
                                            <div className="quantity">Quantity</div>
                                            <div className="subtotal">Subtotal</div>
                                        </div>
                                        {this.renderCart()}

                                    </div>
                                    <div className="cart-summary col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        test2
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart
});

export default connect(mapStateToProps,{removeFromCart})(Cart);
