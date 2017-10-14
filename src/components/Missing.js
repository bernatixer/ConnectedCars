import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Missing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            return: false,
            sent: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (
            this.props.geoStart.lat == 0 ||
            this.props.geoStart.lng == 0 ||
            this.props.geoEnd.lat == 0 ||
            this.props.geoEnd.lng == 0
        )
            this.setState({ return: true });
    }

    handleSubmit(event) {
        event.preventDefault();
        const url = `/api/push/${this.state.name}/${this.state.email}/${this
            .props.geoStart.lat},${this.props.geoStart.lng}/${this.props.geoEnd
            .lat},${this.props.geoEnd.lng}`;
        axios
            .get(url)
            .then(response => {})
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        if (!this.state.return)
            return (
                <div className="container">
                    <form onSubmit={this.handleSubmit} className="form-signin">
                        <h2 className="form-signin-heading">Test</h2>
                        <label className="sr-only">
                            Name:
                            <input
                                className="form-control"
                                value={this.state.value}
                                onChange={event =>
                                    this.setState({ name: event.target.value })}
                            />
                        </label>
                        <label className="sr-only">
                            Email:
                            <input
                                className="form-control"
                                type="email"
                                value={this.state.value}
                                onChange={event =>
                                    this.setState({
                                        email: event.target.value,
                                    })}
                            />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            );
        else return <Redirect to="/" />;
    }
}

export default Missing;
