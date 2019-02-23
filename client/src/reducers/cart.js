import { ADD_TO_CART, REMOVE_FROM_CART} from '../actions/types';

const INITIAL_STATE = {
    cart: [],
};

export default function(state = INITIAL_STATE, action){

    switch(action.type){
        case ADD_TO_CART:{

            const {item} = action.payload;
            let cart = [...state.cart,item];
            localStorage.setItem("cart", JSON.stringify(cart));

            return {
                ...state,
                cart: [...state.cart, item]
            };

        }
        case REMOVE_FROM_CART:
            return { ...state, item: action.payload}
        default:
            return state;
    }

}