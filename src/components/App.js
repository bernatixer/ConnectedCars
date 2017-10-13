import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import View from './View';

export const App = () => (
    <div>
        <p>Això sempre hi serà!</p>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/view" component={View} />
        </Switch>
    </div>
);

export default App;
