import { shallow } from 'enzyme';
import * as React from 'react';
import Entry from './Entry';
import EntryList from './EntryList';

it('renders with entries property', () => {
    const entryClickSpy = jest.fn();

    const entries = [
        { done: true, id: 1, name: 'Entry 1', },
        { done: true, id: 2, name: 'Entry 2', },
    ];

    const wrapper = shallow(<EntryList entries={entries} entryClick={entryClickSpy} />);
    expect(wrapper.first().type()).toEqual('ul');
    expect(wrapper.containsAllMatchingElements([
        <Entry key="1" entry={entries[0]} />,
        <Entry key="2" entry={entries[1]} />,
    ])).toEqual(true);
});

it('renders with entries and entryClick property', () => {
    const entryClickSpy = jest.fn();
    const entries = [
        { done: true, id: 1, name: 'Entry 1', },
        { done: true, id: 2, name: 'Entry 2', },
    ];

    const wrapper = shallow(<EntryList entries={entries} entryClick={entryClickSpy} />);

    wrapper.first().childAt(0).props().entryClick();
    expect(entryClickSpy.mock.calls.length).toEqual(1);
    expect(entryClickSpy.mock.calls[0][0]).toEqual(entries[0]);

    wrapper.first().childAt(1).props().entryClick();
    expect(entryClickSpy.mock.calls.length).toEqual(2);
    expect(entryClickSpy.mock.calls[1][0]).toEqual(entries[1]);
});
