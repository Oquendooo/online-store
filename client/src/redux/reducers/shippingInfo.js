import {ADD_SHIPPING_INFO} from '../actions/types';

const INITIAL_STATE = {

};

export default function(state = INITIAL_STATE, action){

  switch(action.type){
    case ADD_SHIPPING_INFO:
      return { ...state, shippingInfo: action.payload.formProps};
    default:
      return state;
  }
}