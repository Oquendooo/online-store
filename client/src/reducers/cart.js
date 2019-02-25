import { ADD_TO_CART, REMOVE_FROM_CART, SET_CART} from '../actions/types';

const INITIAL_STATE = [

];

export default function(state = INITIAL_STATE, action){

    switch(action.type){
        case ADD_TO_CART:{

            const {item} = action.payload;
            let cart = [...state,item];
            localStorage.setItem("cart", JSON.stringify(cart));

            return [
                ...state,
                item

            ];

        }
        case REMOVE_FROM_CART:{

            const {index} = action.payload;
            console.log("my index",index);
            let cart = JSON.parse(localStorage.getItem('cart'));
            let filteredCart = cart.slice();
            filteredCart.splice(index, 1);

            console.log("filteredCart",filteredCart);
            localStorage.setItem('cart', JSON.stringify(filteredCart));
            return [
                filteredCart
            ];

        }
        case SET_CART:{

            let cart = JSON.parse(localStorage.getItem('cart'));
            return [
                cart
            ];

        }
        default:
            return state;
    }

}