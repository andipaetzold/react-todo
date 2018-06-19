import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import NewEntryCard from './NewEntryCard';

it('renders without crashing', () => {
    shallow(<App />);
});

it('renders NewEntryCard correctly', () => {
    const addEntrySpy = jest.spyOn(App.prototype, 'addEntry')

    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<NewEntryCard />)).toEqual(true);

    wrapper.find('NewEntryCard').props().addEntry('Test');
    expect(addEntrySpy.mock.calls.length).toEqual(1);
    expect(addEntrySpy.mock.calls[0]).toEqual(['Test']);
});

it('adds new entries correctly', () => {
    const wrapper = shallow(<App />);

    const id = Math.max(...wrapper.instance().state.entries.map(e => e.id)) + 1;
    wrapper.find('NewEntryCard').props().addEntry('Test');

    expect(wrapper.instance().state.entries).toEqual(
        expect.arrayContaining([
            expect.objectContaining(
                {
                    id,
                    name: 'Test',
                    done: false,
                })
        ])
    );
});
