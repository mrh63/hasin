import React from 'react';
import { shallow } from 'enzyme';
import AboutUs from '../../components/AboutUs';

test('should render AboutUs correctly', () => {
    const wrapper = shallow(<AboutUs/>);
    expect(wrapper).toMatchSnapshot();
});