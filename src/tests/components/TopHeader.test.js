import React from 'react';
import { shallow } from 'enzyme';
import TopHeader from '../../components/TopHeader';

test('should render TopHeader correctly', () => {
    const wrapper = shallow(<TopHeader />);
    expect(wrapper).toMatchSnapshot();
});