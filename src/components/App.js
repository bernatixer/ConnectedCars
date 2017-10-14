import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import View from './View';
import Missing from './Missing';
import Mapa from './Map';
import Found from './Found';

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
            otherRoutes: {},
        };

        this.handleGeo = this.handleGeo.bind(this);
        this.handleOther = this.handleOther.bind(this);
    }

    handleGeo(geoStart, geoEnd) {
        this.setState({ geoStart, geoEnd });
    }

    handleOther(otherRoutes) {
        this.setState({ otherRoutes });
    }

    render() {
        return (
            // <div>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => (
                        <Home
                            handleGeo={this.handleGeo}
                            otherRoutes={this.handleOther}
                        />
                    )}
                />
                <Route path="/view" component={View} />
                <Route path="/map" render={() => <Mapa />} />
                <Route
                    path="/missing"
                    render={() => (
                        <Missing
                            geoStart={this.state.geoStart}
                            geoEnd={this.state.geoEnd}
                        />
                    )}
                />
                <Route path="/found" render={() => <Found />} />
            </Switch>
            //</div>
        );
    }
}

//export default App;
