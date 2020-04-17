import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { actionTypes } from '../../actions/types';
import {
    removeProduct,
    setProducts,
    startSetProducts
} from '../../actions/products';
import products from '../fixtures/products';


const createMockStore = configureMockStore([thunk]);


test('should setup remove product action object', () => {
    const action = removeProduct({id: '123abc'});
    expect(action).toEqual({
        type: actionTypes.REMOVE_PRODUCT,
        id: '123abc'
    });
});

test('should setup set product action object with data', () => {
    const action = setProducts(products);
    expect(action).toEqual({
        type: actionTypes.SET_PRODUCTS,
        products
    });
});

test('should fetch the product from server', (done) => {
    const store = createMockStore({});
    const removedProduct = ["ubi2", "tejarat-gostar", "taghche", "sepino", "magnet", "tarabarnet"];
    store.dispatch(startSetProducts(removedProduct)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: actionTypes.SET_PRODUCTS,
            products
        });
        done();
    });
});