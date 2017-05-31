import { connect } from 'react-redux';
import ToolBar from '../../components/ToolBar'
import { setUI, } from './actions';

const mapStateToProps = ({config}) => {
    return {
        ui: config.ui || { toolbar: [] }
    };
};

const mapDispatchToProps = dispatch => ({
    setToolBar(ui) {
        return () => {
            dispatch(setUI(ui));
        };
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ToolBar);