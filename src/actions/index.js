import { combineReducers } from 'redux';
import { setConfig as config, setUi as ui } from './toolbar/reducers';

/**
 * @return {object}
 */
export default combineReducers({
    config,
    ui,
});