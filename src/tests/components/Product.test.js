import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import { mount } from 'enzyme';
import Product from '../../components/Product';
import products from '../fixtures/products';

const createMockStore = configureMockStore([thunk]);

let store, match, getWrapper;

beforeEach(() => {
    store = createMockStore({
        products
    });
    getWrapper = (match) => mount(
        <Provider store={store}>
            <Product match={match} />
        </Provider>
    )
})

test('should render Product correctly with valid route', () => {
    match = {params: {title: "مایکت"}};
    const wrapper = getWrapper(match);
    expect(wrapper).toMatchSnapshot();
});

test('should render Product correctly with invalid route', () => {
    match = {params: {title: "abc"}};
    const wrapper = getWrapper(match);
    expect(wrapper).toMatchSnapshot();
});



