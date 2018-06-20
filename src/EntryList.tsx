import * as React from 'react';
import { IEntry } from 'src/domain/IEntry';
import Entry from './Entry';

interface IProps {
    entries: IEntry[];
    entryClick: (entry: IEntry) => any;
}

class EntryList extends React.Component<IProps> {
    public render() {
        if (!this.props.entries) {
            return null;
        }

        let entryList;
        if (this.props.entryClick) {
            entryList = this.props.entries.map(entry => <Entry key={entry.id} entry={entry} entryClick={this.props.entryClick.bind(this, entry)} />);
        } else {
            entryList = this.props.entries.map(entry => <Entry key={entry.id} entry={entry} />);
        }

        return <ul className="list-group">{entryList}</ul>;
    }
}

export default EntryList;
