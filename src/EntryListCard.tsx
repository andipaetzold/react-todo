import * as React from 'react';
import Card from './Card';
import { IEntry } from './domain/IEntry';
import EntryList from './EntryList';

interface IProps {
    title?: string;
    entries: IEntry[];
    entryClick: (entry: IEntry) => any;
}

class EntryListCard extends React.Component<IProps> {
    public render() {
        if (this.props.entries.length === 0) {
            return null;
        }

        return <Card title={this.props.title}>
            <EntryList entries={this.props.entries} entryClick={this.props.entryClick} />
        </Card>;
    }
}

export default EntryListCard;
