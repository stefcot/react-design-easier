import { SET_CONFIG, } from '../ActionTypes';

export function getConfig() {
    return dispatch =>
        fetch('../../config.json')
            .then(res => res.json())
            .then(config => {
                console.log('getConfig - config : ', config);
                return dispatch(setConfig(config))
            });
}

export function setConfig(config) {
    return {
        type: SET_CONFIG,
        config,
    };
}