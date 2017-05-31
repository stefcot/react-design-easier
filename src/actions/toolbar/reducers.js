import { SET_UI, SET_CONFIG, } from '../ActionTypes';

const initialState = {};

export const setConfig = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONFIG:
            return action.config;
        default:
            return state;
    }
};

export const setUi = (state = initialState, action) => {
    switch(action.type){
        case SET_UI:
            return action.ui;
        default:
            return state;
    }
}
