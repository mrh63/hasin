import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductList from '../../components/ProductList';
import products from '../fixtures/products';

const createMockStore = configureMockStore([thunk]);

let store, wrapper;
beforeEach(() => {
    store = createMockStore({
        products
    });
    
    wrapper = mount(
        <Provider store={store}>
            <Router>
                <ProductList />
            </Router>
        </Provider>
    )
});

test('should render ProductList correctly', () => {
    expect(wrapper).toMatchSnapshot();
});


