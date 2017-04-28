/**
 * Created by Stephane on 4/20/2017.
 */
import React from 'react';
import ToolBarBg from './ToolBarBg';
import Button from './Button';
import Separator from './Separator';
import * as ActionTypes from '../actions/ActionTypes';

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

    onMouseDown(ev){
        console.log('clickButton - ev : ', ev);
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
                    <ToolBarBg width={235} height={44}  x={21} y={20} label={'Edit'} />
                    <Button width={25} height={25} x={26} y={36} actionType={ActionTypes.SELECT} onMouseDown={this.onMouseDown} />
                    <Button width={25} height={25} x={53} y={36} actionType={ActionTypes.SEND_TO_BACK} onMouseDown={this.onMouseDown} />
                    <Button width={25} height={25} x={80} y={36} actionType={ActionTypes.SEND_TO_FRONT} onMouseDown={this.onMouseDown} />
                    <Button width={25} height={25} x={107} y={36} actionType={ActionTypes.SAVE} onMouseDown={this.onMouseDown} />
                    <Separator x={136} y={36} name={ActionTypes.SEPARATOR} color={'#333333'} />
                    <Button width={25} height={25} x={143} y={36} actionType={ActionTypes.ERASE} onMouseDown={this.onMouseDown} />
                    <Button width={25} height={25} x={170} y={36} actionType={ActionTypes.UNDO} onMouseDown={this.onMouseDown} />
                    <Button width={25} height={25} x={197} y={36} actionType={ActionTypes.REDO} onMouseDown={this.onMouseDown} />
                    <Button width={25} height={25} x={224} y={36} actionType={ActionTypes.HELP} onMouseDown={this.onMouseDown} />
                    <ToolBarBg width={300} height={44}  x={257} y={20} label={'Draw'} />
                    <Button width={25} height={25} x={263} y={36} actionType={ActionTypes.RECT} onMouseDown={this.onMouseDown} />
                    <Button width={25} height={25} x={290} y={36} actionType={ActionTypes.WHITE_RECT} onMouseDown={this.onMouseDown} />
                    <Button width={25} height={25} x={317} y={36} actionType={ActionTypes.CIRCLE} onMouseDown={this.onMouseDown} />
                    <Button width={25} height={25} x={344} y={36} actionType={ActionTypes.WHITE_CIRCLE} onMouseDown={this.onMouseDown} />
                    <Separator x={372} y={36} name={ActionTypes.SEPARATOR} color={'#333333'} />
                    <Button width={25} height={25} x={378} y={36} actionType={ActionTypes.ARC} onMouseDown={this.onMouseDown} />
                    <Button width={25} height={25} x={405} y={36} actionType={ActionTypes.PLAIN_STROKE} onMouseDown={this.onMouseDown} />
                    <Button width={25} height={25} x={432} y={36} actionType={ActionTypes.DOTTED_STROKE} onMouseDown={this.onMouseDown} />
                    <Button width={25} height={25} x={459} y={36} actionType={ActionTypes.DASHED_STROKE} onMouseDown={this.onMouseDown} />
                    <Button width={25} height={25} x={486} y={36} actionType={ActionTypes.PEN} onMouseDown={this.onMouseDown} />
                    <Separator x={514} y={36} name={ActionTypes.SEPARATOR} color={'#333333'} />
                    <Button width={25} height={25} x={563} y={36} actionType={ActionTypes.TEXTFIELD} onMouseDown={this.onMouseDown} />
                    <Button width={25} height={25} x={593} y={36} actionType={ActionTypes.DIMENSION} onMouseDown={this.onMouseDown} />
                </g>
            </svg>)
    }
});

export default ToolBar;