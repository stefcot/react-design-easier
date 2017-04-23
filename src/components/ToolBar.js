/**
 * Created by Stephane on 4/20/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import ToolBarBg from './ToolBarBg';
import Button from './Button';

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

    componentDidMount(){},

    clickButton(ev){
        console.log('clickButton - target : ', ev.target);
        console.log('clickButton - currentTarget : ', ev.currentTarget);
    },

    render(){
        return (
            <svg xmlns="http://www.w3.org/2000/svg"
                 version="1.1"
                 xmlnsXlink="http://www.w3.org/1999/xlink"
                 preserveAspectRatio="none"
                 x="0px"
                 y="0px"
                 width="800px"
                 height="70px"
                 viewBox="0 0 800 70"
                 className="appElement toolBar">
                <g id="ToolBar" transform="matrix( 1, 0, 0, 1, 0, 0)">
                    <ToolBarBg width={200} height={50}  x={20} y={20} label={'Edit'} />
                    <Button width={25} height={25} x={'25'} y={'38'} icon={'Save'} onClick={this.clickButton} />
                    <ToolBarBg width={300} height={50}  x={222} y={20} label={'Draw'} />
                </g>
            </svg>)
    }
});

export default ToolBar;