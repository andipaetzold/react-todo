import { shallow } from 'enzyme';
import * as React from 'react';
import Entry from './Entry';

it('renders with entry property', () => {
    const entry = {
        done: true,
        id: 1,
        name: 'Test',
    };
    const wrapper = shallow(<Entry entry={entry} />);
    expect(wrapper.containsMatchingElement(<li>Test</li>)).toEqual(true);
});

it('renders with entry and onClick property', () => {
    const onClickSpy = jest.fn();
    const entry = {
        done: true,
        id: 1,
        name: 'Test',
    };
    const wrapper = shallow(<Entry entry={entry} entryClick={onClickSpy} />);

    wrapper.simulate('click');
    expect(onClickSpy.mock.calls.length).toEqual(1);
});
