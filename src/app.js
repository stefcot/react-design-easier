import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './actions';
import logger from './logger';
import { getConfig } from './actions/toolbar/actions';

// livereload (partial)
import { AppContainer } from 'react-hot-loader';

// IMPORTANT:
// ----------
// Simple reference, no conflict with extract-text-plugin
require('./scss/main.scss');

// Create redux store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ latency: 0 }) : compose;

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk, logger)
));

// Starting App by getting config
store.dispatch(getConfig());

// we make  reference to the app container
const container = document.getElementById('app-container');

// Next, we render the app container so it appears on the screen
// The App component has to be wrapped in a provider
// whose store property will be fed with the previously created store above
ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <App />
        </Provider>
    </AppContainer>,
    container
)

// Boiler code checking if the module is hot,
// and if it is, it will accept our component
if(module.hot){
    module.hot.accept('./components/App', () => {
        ReactDOM.render(
            <AppContainer>
                <Provider store={store}>
                    <App />
                </Provider>
            </AppContainer>,
            container
        );
    });
}