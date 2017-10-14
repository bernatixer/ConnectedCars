import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import View from './View';
import Missing from './Missing';

export class App extends Component {
    constructor() {
        super();
        this.state = {
            geoStart: {
                lat: 0,
                lng: 0,
            },
            geoEnd: {
                lat: 0,
                lng: 0,
            },
        };

        this.handleGeo = this.handleGeo.bind(this);
    }

    handleGeo(geoStart, geoEnd) {
        this.setState({ geoStart, geoEnd });
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => <Home handleGeo={this.handleGeo} />}
                    />
                    <Route path="/view" component={View} />
                    <Route path="/map" component={Map} />
                    <Route path="/missing" component={Missing} />
                </Switch>
            </div>
        );
    }
}

//export default App;
