import { combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import auth from './auth';
import cart from './cart';
import shippingInfo from './shippingInfo';

export default combineReducers({
    auth,
    cart,
    shippingInfo,
    form: formReducer
});