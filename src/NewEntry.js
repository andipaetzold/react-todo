import React, { Component } from 'react';

class NewEntry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
        };
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.addEntry(this.state.name);

        this.setState({ name: '' });
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }

    render() {
        return <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-row">
                <input type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)} className="col-10 form-control" />
                <input type="submit" className="col-2 btn btn-primary" value="Create" />
            </div>
        </form>;
    }
}

export default NewEntry;
