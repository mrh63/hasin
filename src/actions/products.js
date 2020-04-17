import { actionTypes } from './types';
import axios from 'axios';


//REMOVE_PRODUCT
export const removeProduct = ({id} = {}) => ({
    type: actionTypes.REMOVE_PRODUCT,
    id
});

//SET_PRODUCTS
export const setProducts = (products) => ({
    type: actionTypes.SET_PRODUCTS,
    products
});

export const startSetProducts = (removeItem = []) => async dispatch => {

    const products = [];

    const res = await axios.get(['http://127.0.0.1:3000', 'data'].join('/'))
    .catch(function(thrown) {
        console.log('server not available');
        return dispatch(setProducts(products));
    });

    for (let key in res.data) {
        if (removeItem.indexOf(key) === -1)
            products.push({productKey: key, ...res.data[key]});
    }
    dispatch(setProducts(products));
}