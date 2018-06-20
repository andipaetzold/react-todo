import * as React from 'react';

interface IProps {
    addEntry: (name: string) => void;
}

interface IState {
    name: string;
}

class NewEntry extends React.Component<IProps, IState> {
    public state: IState = {
        name: '',
    };

    public constructor(props: IProps) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    public handleSubmit(event: any) {
        event.preventDefault();

        this.props.addEntry(this.state.name);

        this.setState({ name: '' });
    }

    public handleNameChange(event: any) {
        this.setState({ name: event.target.value });
    }

    public render() {
        return <form onSubmit={this.handleSubmit}>
            <div className="form-row">
                <input type="text" value={this.state.name} onChange={this.handleNameChange} className="col-10 form-control" />
                <input type="submit" className="col-2 btn btn-primary" value="Create" />
            </div>
        </form>;
    }
}

export default NewEntry;
