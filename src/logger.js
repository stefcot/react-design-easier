import { createLogger } from 'redux-logger';
import { Iterable } from 'immutable';
import * as ActionTypes from './actions/ActionTypes';

//-------------------------------------------------------------
const predicate = (getState, action) => action.type !== ActionTypes.AUTH_REMOVE_TOKEN;

//-------------------------------------------------------------
const collapsed = (getState, action) => action.type === ActionTypes.FORM_CHANGE;

//-------------------------------------------------------------
const level = 'info';

//-------------------------------------------------------------
const colors = {
	title: () => 'inherit',
	prevState: () => '#9E9E9E',
	action: () => '#03A9F4',
	nextState: () => '#4CAF50',
	error: () => '#F20404',
};

//-------------------------------------------------------------
const actionTransformer = action => {
	if (action.type === 'BATCHING_REDUCER.BATCH') {
		action.payload.type = action.payload.map(next => next.type).join(' => ');
		return action.payload;
	}
	return action;
};

//-------------------------------------------------------------
const stateTransformer = (state) => {
	if (Iterable.isIterable(state)) {return state.toJS();}
	else {return state;}
};

//-------------------------------------------------------------
const errorTransformer = (state) => {
	if (Iterable.isIterable(state)) {return state.toJS();}
	else {return state;}
};

//-------------------------------------------------------------
const logger = {};

for (const method in console) {
	if (typeof console[method] === 'function') {
		logger[method] = console[method].bind(console);
	}
}

logger[level] = function levelFn(...args) {
	const lastArg = args.pop();

	if (Array.isArray(lastArg)) {
		return lastArg.forEach(item => {
			console[level].apply(console, [...args, item]);
		});
	}

	console[level].apply(console, arguments);
};


//-------------------------------------------------------------
const reduxLogger = createLogger({
	predicate, // if specified this function will be called before each action is processed with this middleware.
	collapsed, // takes a Boolean or optionally a Function that receives `getState` function for accessing current store state and `action` object as parameters. Returns `true` if the log group should be collapsed, `false` otherwise.
	duration : true, // print the duration of each action?
	timestamp : true, // print the timestamp with each action?

	level,// : 'log' | 'console' | 'warn' | 'error' | 'info', console's level
	colors, // colors for title, prev state, action and next state: https://github.com/evgenyrodionov/redux-logger/blob/master/src/defaults.js#L12-L18
	//titleFormatter, // Format the title used when logging actions.

	stateTransformer, // Transform state before print. Eg. convert Immutable object to plain JSON.
	actionTransformer, // Transform action before print. Eg. convert Immutable object to plain JSON.
	errorTransformer, // Transform error before print. Eg. convert Immutable object to plain JSON.

	logger, // implementation of the `console` API.
	logErrors : true, // should the logger catch, log, and re-throw errors?

	diff : true// , (alpha) show diff between states?
	//diffPredicate // (alpha) filter function for showing states diff, similar to `predicate`
});


export default reduxLogger;
