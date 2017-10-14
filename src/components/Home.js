import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';

export const Home = () => (
    <div className="home">
        <SetUp />
    </div>
);

class SetUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            addressStart: '',
            addressEnd: '',
            geoStart: {
                lat: 0,
                long: 0,
            },
            geoEnd: {
                lat: 0,
                long: 0,
            },
        };

        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
    }

    handleChangeStart(address) {
        this.setState({ addressStart: address });
        geocodeByAddress(this.state.addressStart)
            .then(results => getLatLng(results[0]))
            .then(latLng => this.setState({ geoStart: latLng }))
            .catch(error => console.error('Error', error));
    }

    handleChangeEnd(address) {
        this.setState({ addressEnd: address });
        geocodeByAddress(this.state.addressEnd)
            .then(results => getLatLng(results[0]))
            .then(latLng => this.setState({ geoEnd: latLng }))
            .catch(error => console.error('Error', error));
    }

    render() {
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
            </div>
        );
    }
}

class Address extends Component {
    constructor(props) {
        super(props);
        this.state = { address: props.address };
        this.onChange = address => this.setState({ address });
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit() {
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
                <PlacesAutocomplete inputProps={inputProps} />
                <input type="submit" style={hide} tabIndex="-1" />
            </form>
        );
    }
}

export default Home;
