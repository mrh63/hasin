import productReducer from '../../reducers/products';
import products from '../fixtures/products';
import { actionTypes } from '../../actions/types';

test('should set default state', () => {
    const state = productReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove product by id', () => {
    const action = {
        type: actionTypes.REMOVE_PRODUCT,
        id: products[1].id
    };
    const state = productReducer(products, action);
    expect(state).toEqual([products[0], products[2]]);
});

test('should not remove product if id not found', () => {
    const action = {
        type: actionTypes.REMOVE_PRODUCT,
        id: '-1'
    };
    const state = productReducer(products, action);
    expect(state).toEqual(products);
});

test('should set product', () => {
    const action = {
        type: actionTypes.SET_PRODUCTS,
        products: [products[1]]
    };
    const state = productReducer(products, action);
    expect(state).toEqual([products[1]]);
});