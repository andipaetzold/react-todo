import * as React from 'react';
import { IEntry } from 'src/domain/IEntry';

interface IProps {
    entry: IEntry;
    entryClick?: () => any;
}

class Entry extends React.Component<IProps> {
    public render() {
        if (!this.props.entry) {
            return null;
        }

        if (!this.props.entryClick) {
            return <li className="list-group-item">{this.props.entry.name}</li>;
        } else {
            return <li className="list-group-item" onClick={this.props.entryClick}>{this.props.entry.name}</li>;
        }
    }
}

export default Entry;
