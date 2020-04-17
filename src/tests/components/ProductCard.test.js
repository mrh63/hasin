import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import products from '../fixtures/products';
import { removeProduct } from '../../actions/products';

const createMockStore = configureMockStore([thunk]);

let store, wrapper;
beforeEach(() => {
    store = createMockStore({
        products
    });
    store.dispatch = jest.fn();
    wrapper = mount(
        <Provider store={store}>
            <Router>
                <ProductCard {...products[2]} />
            </Router>
        </Provider>
    )
});

test('should render ProductCard correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should dispatch the correct action on remove button click', () => {
    wrapper.find('CardLink[href="#"]').simulate('click');
    expect(store.dispatch).toHaveBeenLastCalledWith(removeProduct({id:products[2].id}));
});
