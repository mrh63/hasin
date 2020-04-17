import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
});

test('should Header have two link', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('NavLink').length).toBe(2);
});