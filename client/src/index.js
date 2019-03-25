import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

let store;

if(process.env.NODE_ENV === 'production'){
    store = createStore(
        reducers,
        {
            auth: { authenticated: localStorage.getItem('token') }
        },
        applyMiddleware(reduxThunk),
    );

}else if(process.env.NODE_ENV === 'development') {
    store = createStore(
        reducers,
        {
            auth: { authenticated: localStorage.getItem('token') }
        },
        composeWithDevTools(applyMiddleware(reduxThunk)),
    );
}



ReactDOM.render((
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>

   ), document.getElementById('root'));


