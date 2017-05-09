import { SET_CONFIG, } from '../ActionTypes';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CONFIG:
            return action.config;
        default:
            return state;
    }
};
