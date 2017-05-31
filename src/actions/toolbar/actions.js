import 'isomorphic-fetch';
import { SET_UI, SET_CONFIG, } from '../ActionTypes';

export function getConfig() {
    return dispatch =>
        fetch('../../config.json')
            .then(res => res.json())
            .then(config => {
                return dispatch(setConfig(config))
            });
}

export function setConfig(config) {
    return {
        type: SET_CONFIG,
        config,
    };
}

export function setUI(ui) {
    return {
        type: SET_UI,
        ui,
    };
}