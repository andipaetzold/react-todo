import React from 'react';
import Entry from './Entry';
import { shallow } from 'enzyme';

it('does not render without entry property', () => {
    const wrapper = shallow(<Entry />);
    expect(wrapper.type()).toEqual(null);
});

it('renders with entry property', () => {
    const entry = {
        name: 'Test',
    };
    const wrapper = shallow(<Entry entry={entry} />);
    expect(wrapper.containsMatchingElement(<li>Test</li>)).toEqual(true);
});

it('renders with entry and onClick property', () => {
    const onClickSpy = jest.fn();
    const entry = {
        name: 'Test',
    };
    const wrapper = shallow(<Entry entry={entry} entryClick={onClickSpy} />);

    wrapper.simulate('click');
    expect(onClickSpy.mock.calls.length).toEqual(1);
});
