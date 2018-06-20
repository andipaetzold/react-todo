import * as React from 'react';
import Card from './Card';
import NewEntry from './NewEntry';

interface IProps {
    addEntry: (name: string) => any;
}

class NewEntryCard extends React.Component<IProps> {
    public render() {
        return <Card title="New entry">
            <NewEntry addEntry={this.props.addEntry} />
        </Card>;
    }
}

export default NewEntryCard;
