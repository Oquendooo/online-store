import { ADD_TO_CART, REMOVE_FROM_CART, SET_CART} from '../actions/types';

const INITIAL_STATE = {
  items: [], // push item data to this array
  billing: {}, // billing address from checkout page
  shipping: {}, // shipping address from checkout page
  sub_total: 0,
  tax: 0,
  delivery_cost: 0,
  delivery_method: '',
  total: 0
};

export default function(state = INITIAL_STATE, action){
  console.log("reducers cart state", [...state.items, {hello:"sjsj"}]);

  if(action.payload !== undefined){
  console.log("action.payload",action.payload);
  }

  switch(action.type){

    case ADD_TO_CART:{
      const {item} = action.payload.item;
      let cart = [...state.items, item];
      console.log(cart);
      localStorage.setItem("cart", JSON.stringify(cart));

      return {
        ...state,
        items:[...state, item],
      };

    }

    case REMOVE_FROM_CART:{
      const {index} = action.payload;

      let cart = JSON.parse(localStorage.getItem('cart'));
      let filteredCart = cart.slice();
      filteredCart.splice(index, 1);
      filteredCart = filteredCart.filter(item => item.length !== 0);
      localStorage.setItem('cart', JSON.stringify(filteredCart));

      return {
        ...state,
        items:[...state,filteredCart]
      }

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