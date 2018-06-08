import React, { Component } from 'react';
import EntryListCard from './EntryListCard';
import NewEntryCard from './NewEntryCard';
import { ENTRIES } from './data';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { entries: ENTRIES, };
    }

    setEntryDone(entry) {
        this.updateEntryDone(entry, true);
    }

    setEntryNotDone(entry) {
        this.updateEntryDone(entry, false);
    }

    addEntry(name) {
        this.setState(prevState => {
            const entry = {
                id: Math.max(...prevState.entries.map(e => e.id)) + 1,
                name,
                done: false,
            };

            return {
                entries: [
                    ...prevState.entries,
                    entry
                ]
            };
        });
    }

    updateEntryDone(entry, done) {
        this.setState(prevState => {
            const entries = prevState.entries;
            const entryIndex = entries.findIndex(e => e.id === entry.id);

            if (entryIndex < 0) {
                return {};
            }

            entries[entryIndex].done = done;
            return { entries };
        });
    }

    render() {
        const doneEntries = this.state.entries.filter(e => e.done);
        const notDoneEntries = this.state.entries.filter(e => !e.done);

        return (
            <div className="container">
                <NewEntryCard addEntry={this.addEntry.bind(this)} />
                <EntryListCard entries={notDoneEntries} entryClick={this.setEntryDone.bind(this)} />
                <EntryListCard title="Done" entries={doneEntries} entryClick={this.setEntryNotDone.bind(this)} />
            </div>
        );
    }
}

export default App;
