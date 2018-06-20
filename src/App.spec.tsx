import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import App from './App';
import NewEntryCard from './NewEntryCard';

it('renders without crashing', () => {
    shallow(<App />);
});

it('renders NewEntryCard correctly', () => {
    const addEntrySpy = jest.fn();

    const wrapper = shallow(<App />);

    expect(wrapper.containsMatchingElement(<NewEntryCard addEntry={addEntrySpy} />)).toEqual(true);

    const newEntryCardWrapper: ShallowWrapper<any, any> = wrapper.find('NewEntryCard');
    newEntryCardWrapper.props().addEntry('Test');
    expect(addEntrySpy.mock.calls.length).toEqual(1);
    expect(addEntrySpy.mock.calls[0]).toEqual(['Test']);
});

it('adds new entries correctly', () => {
    const wrapper = shallow(<App />);
    const wrapperInstance = wrapper.instance() as App;

    const id = Math.max(...wrapperInstance.state.entries.map(e => e.id)) + 1;

    const newEntryCardWrapper: ShallowWrapper<any, any> = wrapper.find('NewEntryCard');
    newEntryCardWrapper.props().addEntry('Test');

    expect(wrapper.instance().state.entries).toEqual(
        expect.arrayContaining([
            expect.objectContaining(
                {
                    done: false,
                    id,
                    name: 'Test',
                })
        ])
    );
});
