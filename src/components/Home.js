import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import axios from 'axios';

const Home = props => (
    <div className="home">
        <SetUp handleGeo={props.handleGeo} />
    </div>
);

class SetUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addressStart: '',
            addressEnd: '',
            geoStart: {
                lat: 0,
                lng: 0,
            },
            geoEnd: {
                lat: 0,
                lng: 0,
            },
            missing: false,
        };

        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.handleGo = this.handleGo.bind(this);
    }

    handleChangeStart(address) {
        this.setState({ addressStart: address });
        geocodeByAddress(this.state.addressStart)
            .then(results => getLatLng(results[0]))
            .then(geoStart => this.setState({ geoStart }))
            .catch(error => console.error('Error', error));
    }

    handleChangeEnd(address) {
        this.setState({ addressEnd: address });
        geocodeByAddress(this.state.addressEnd)
            .then(results => getLatLng(results[0]))
            .then(geoEnd => this.setState({ geoEnd }))
            .catch(error => console.error('Error', error));
    }

    handleGo() {
        if (
            this.state.geoStart.lat == 0 ||
            this.state.geoStart.long == 0 ||
            this.state.geoEnd.lat == 0 ||
            this.state.geoEnd.long == 0
        )
            console.log('Missing params');
        else {
            const url = `/api/search/${this.state.geoStart.lat},${this.state
                .geoStart.lng}/${this.state.geoEnd.lat},${this.state.geoEnd
                .lng}`;
            this.props.handleGeo(this.state.geoStart, this.state.geoEnd);
            axios
                .get(url)
                .then(response => {
                    if (response.data == 'missing')
                        this.setState({ missing: true });
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    render() {
        if (!this.state.missing)
            return (
                <div className="setUp">
                    <Address
                        address={this.state.addressStart}
                        onFormChange={this.handleChangeStart}
                    />
                    <Address
                        address={this.state.addressEnd}
                        onFormChange={this.handleChangeEnd}
                    />
                    <button onClick={this.handleGo}> GO </button>
                </div>
            );
        else return <Redirect to="/missing" />;
    }
}

class Address extends Component {
    constructor(props) {
        super(props);
        this.state = { address: props.address };
        this.onChange = this.onChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    onChange(address) {
        this.setState({ address });
        this.props.onFormChange(this.state.address);
    }

    handleFormSubmit(event) {
        event.preventDefault();
        this.props.onFormChange(this.state.address);
    }

    render() {
        const inputProps = {
            value: this.state.address,
            onChange: this.onChange,
        };

        const myStyles = {
            root: { position: 'absolute' },
            input: { width: '100%' },
            autocompleteContainer: { backgroundColor: 'green' },
            autocompleteItem: { color: 'black' },
            autocompleteItemActive: { color: 'blue' },
        };

        const hide = {
            position: 'absolute',
            left: '-9999px',
            width: '1px',
            height: '1px',
        };

        return (
            <form onSubmit={this.handleFormSubmit}>
                <PlacesAutocomplete
                    inputProps={inputProps}
                    onEnterKeyDown={() =>
                        this.props.onFormChange(this.state.address)}
                />
                <input type="submit" style={hide} tabIndex="-1" />
            </form>
        );
    }
}

export default Home;
