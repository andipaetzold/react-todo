import * as React from 'react';

interface IProps {
    title?: string;
}

class CardTitle extends React.Component<IProps> {
    public render() {
        if (!this.props.title) {
            return null;
        }

        return <div className="card-header">
            <h2 className="card-title">{this.props.title}</h2>
        </div>
    }
}

export default CardTitle;
