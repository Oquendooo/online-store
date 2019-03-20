import axios from 'axios';

import {AUTH_USER, AUTH_ERROR, ADD_TO_CART, REMOVE_FROM_CART, SET_CART, ADD_SHIPPING_INFO } from './types';


//Auth actions
export const signup = (formProps, callback) => async (dispatch) => {
  try{
    const response = await axios.post('http://localhost:5000/signup', formProps);

    dispatch({type: AUTH_USER, payload: response.data.token});
    localStorage.setItem('token', response.data.token);
    callback();
  } catch(e){
    dispatch({type: AUTH_ERROR, payload: 'Email in use'});
  }

};

export const signin = (formProps, callback) => async (dispatch) => {
  try{
    const response = await axios.post('http://localhost:5000/signin', formProps);

    dispatch({type: AUTH_USER, payload: response.data.token});
    localStorage.setItem('token', response.data.token);
    callback();
  } catch(e){
    dispatch({type: AUTH_ERROR, payload: 'Invalid login credentials'});
  }

};

export const signout = () => {
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: ''
  }

};

//Cart actions
export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: {
    item
  },

});

export const removeFromCart = (index) => ({
  type: REMOVE_FROM_CART,
  payload: {
    index
  },

});

export const setCart = () => ({
  type: SET_CART,
});

//Stripe payment actions
export const handleToken = (token) => async dispatch => {
  const res = await axios.post('/api/stripe',token);

  dispatch({type: AUTH_USER, payload: res.data});
};

//add shipping info actions
export const addShippingInfo = (formProps, callback) => {
  console.log("testing");
  callback();
  return {

    type:ADD_SHIPPING_INFO,
    payload: {
      formProps
    }

  }
};




