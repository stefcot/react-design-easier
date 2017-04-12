/**
 * Created by Stephane on 3/16/2017.
 */
const path = require('path');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
//
import { AppContainer } from 'react-hot-loader'; // livereload (partial)

// that's all about webpack works, just to make sure that
// webpack knows that the html file exists
require('./index.html');

// we make  reference to the app container
const container = document.getElementById('app-container');

// Next, we render the app container so it appears on the screen
// The App component has to be wrapped in a provider
// whose store property will be fed with the previously created store above
ReactDOM.render(
    <AppContainer>
        <div>
            <App />
        </div>
    </AppContainer>,
    container
)

// Boiler code checking if the module is hot,
// and if it is, it will accept our component
if(module.hot){
    module.hot.accept('./components/App', () => {
        ReactDOM.render(
            <AppContainer>
                <div>
                    <App />
                </div>
            </AppContainer>,
            container
        );
    });
}