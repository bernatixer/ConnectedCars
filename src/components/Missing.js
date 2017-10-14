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
            .then(response => {
                this.setState({ return: true });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        if (!this.state.return)
            return (
                <div className="container missing">
                    <form onSubmit={this.handleSubmit}>
                        <h2 className="form-signin-heading">Missing</h2>
                        <div className="form-group row">
                            <label className="col-form-label col-sm-2">
                                Name:
                            </label>
                            <input
                                className="form-control col-sm-10"
                                value={this.state.value}
                                onChange={event =>
                                    this.setState({ name: event.target.value })}
                            />
                        </div>
                        <div className="form-group row">
                            <label className="col-form-label col-sm-2">
                                Email:
                            </label>
                            <input
                                className="form-control col-sm-10"
                                type="email"
                                value={this.state.value}
                                onChange={event =>
                                    this.setState({
                                        email: event.target.value,
                                    })}
                            />
                        </div>
                        <input
                            type="submit"
                            value="CREAR RUTA"
                            className="btn btn-lg btn-primary btn-block crearRuta"
                        />
                    </form>
                </div>
            );
        else return <Redirect to="/map" />;
    }
}

export default Missing;
