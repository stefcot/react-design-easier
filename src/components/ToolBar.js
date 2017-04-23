/**
 * Created by Stephane on 4/20/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import ToolBarBg from './ToolBarBg';

const ToolBar = React.createClass({

    getDefaultProps(){
        return {

        }
    },

    getInitialState() {
        return {

        }
    },

    componentWillMount(){

    },

    componentDidMount(){
        ReactDOM.render(<ToolBarBg/>, document.getElementById('ToolBar'));
    },

    render(){
        return <g id="ToolBar" transform="matrix( 1, 0, 0, 1, 10, -515) "/>
    }
});

export default ToolBar;