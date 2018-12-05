import 'babel-polyfill'; // Has to be imported for IE to be able to load bundle.js
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Routing from 'src/routing';
import { CssBaseline } from '@material-ui/core';
import { Route, Router, Switch } from 'react-router-dom';
import Frame from 'src/Components/Frame/Frame';

// CSS for react virtualized
require('react-virtualized/styles.css'); // only needs to be imported once

// Requires for html-webpack-plugin
require('./Resources/manifest.json');

class App extends React.Component<any, any> {
    render() {
        return (
            <>
                <CssBaseline />
                <Router history={Routing.history()}>
                    <Switch>
                        <Route path='*' component={Frame} />
                    </Switch>
                </Router>
            </>
        );
    }
}

const root = document.querySelector('#app');
ReactDOM.render(<App />, root);

/** Re-render the complete React component tree */
export function updateComponentTree() {
    ReactDOM.unmountComponentAtNode(root);
    ReactDOM.render(<App />, root);
}
