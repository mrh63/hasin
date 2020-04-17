import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import { startSetProducts } from './actions/products';


const store = configureStore();

const app = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

const removedProducts = localStorage.removedProducts ? JSON.parse(localStorage.removedProducts) : [];

store.dispatch(startSetProducts(removedProducts));

ReactDOM.render(app, document.getElementById('root'));


