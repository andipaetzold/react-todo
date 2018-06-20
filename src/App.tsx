import * as React from 'react';
import { IEntry } from 'src/domain/IEntry';
import { ENTRIES } from './data';
import EntryListCard from './EntryListCard';
import NewEntryCard from './NewEntryCard';

interface IState {
    entries: IEntry[];
}

class App extends React.Component<any, IState> {
    public state = {
        entries: ENTRIES,
    };

    constructor(props: any) {
        super(props);

        this.addEntry = this.addEntry.bind(this);
        this.setEntryDone = this.setEntryDone.bind(this);
        this.setEntryNotDone = this.setEntryNotDone.bind(this);
    }

    public setEntryDone(entry: IEntry) {
        this.updateEntryDoneState(entry, true);
    }

    public setEntryNotDone(entry: IEntry) {
        this.updateEntryDoneState(entry, false);
    }

    public addEntry(name: string) {
        this.setState(prevState => {
            const entry = {
                done: false,
                id: Math.max(...prevState.entries.map(e => e.id)) + 1,
                name,
            };

            return {
                entries: [
                    ...prevState.entries,
                    entry
                ]
            };
        });
    }

    public render() {
        const doneEntries = this.state.entries.filter(e => e.done);
        const notDoneEntries = this.state.entries.filter(e => !e.done);

        return (
            <React.StrictMode>
                <div className="container">
                    <NewEntryCard addEntry={this.addEntry} />
                    <EntryListCard entries={notDoneEntries} entryClick={this.setEntryDone} />
                    <EntryListCard title="Done" entries={doneEntries} entryClick={this.setEntryNotDone} />
                </div>
            </React.StrictMode>
        );
    }

    private updateEntryDoneState(entry: IEntry, done: boolean) {
        this.setState(prevState => {
            const entries = prevState.entries;
            const entryIndex = entries.findIndex(e => e.id === entry.id);

            if (entryIndex < 0) {
                return null;
            }

            entries[entryIndex].done = done;
            return { entries };
        });
    }
}

export default App;
