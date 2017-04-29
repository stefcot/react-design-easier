/**
 * Created by Stephane on 4/20/2017.
 */
import React from 'react';
import * as ActionTypes from '../actions/ActionTypes';
import ToolBarBg from './ToolBarBg';
import Button from './Button';
import Separator from './Separator';

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
                    <ToolBarBg x={20} y={20} width={216} height={44} label={'Edit'} />
                    <Button x={22} y={36}  width={25} height={25} actionType={ActionTypes.SELECT} onMouseDown={this.onMouseDown} />
                    <Button x={47} y={36}  width={25} height={25} actionType={ActionTypes.SEND_TO_BACK} onMouseDown={this.onMouseDown} />
                    <Button x={73} y={36} width={25} height={25} actionType={ActionTypes.SEND_TO_FRONT} onMouseDown={this.onMouseDown} />
                    <Separator x={100} y={36} name={ActionTypes.SEPARATOR} color={'#333333'} />
                    <Button x={105} y={36} width={25} height={25} actionType={ActionTypes.ERASE} onMouseDown={this.onMouseDown} />
                    <Button x={131} y={36} width={25} height={25} actionType={ActionTypes.SAVE} onMouseDown={this.onMouseDown} />
                    <Button x={157} y={36} width={25} height={25} actionType={ActionTypes.UNDO} onMouseDown={this.onMouseDown} />
                    <Button x={183} y={36} width={25} height={25} actionType={ActionTypes.REDO} onMouseDown={this.onMouseDown} />
                    <Button x={209} y={36} width={25} height={25} actionType={ActionTypes.HELP} onMouseDown={this.onMouseDown} />
                    <ToolBarBg x={238} y={20} width={301} height={44} label={'Draw'} />
                    <Button x={240} y={36} width={25} height={25} actionType={ActionTypes.RECT} onMouseDown={this.onMouseDown} />
                    <Button x={266} y={36} width={25} height={25} actionType={ActionTypes.WHITE_RECT} onMouseDown={this.onMouseDown} />
                    <Button x={292} y={36} width={25} height={25} actionType={ActionTypes.CIRCLE} onMouseDown={this.onMouseDown} />
                    <Button x={318} y={36} width={25} height={25} actionType={ActionTypes.WHITE_CIRCLE} onMouseDown={this.onMouseDown} />
                    <Separator x={345} y={36} name={ActionTypes.SEPARATOR} color={'#333333'} />
                    <Button x={350} y={36} width={25} height={25} actionType={ActionTypes.ARC} onMouseDown={this.onMouseDown} />
                    <Button x={376} y={36} width={25} height={25} actionType={ActionTypes.PLAIN_STROKE} onMouseDown={this.onMouseDown} />
                    <Button x={402} y={36} width={25} height={25} actionType={ActionTypes.DOTTED_STROKE} onMouseDown={this.onMouseDown} />
                    <Button x={428} y={36} width={25} height={25} actionType={ActionTypes.DASHED_STROKE} onMouseDown={this.onMouseDown} />
                    <Button x={454} y={36} width={25} height={25} actionType={ActionTypes.PEN} onMouseDown={this.onMouseDown} />
                    <Separator x={481} y={36} name={ActionTypes.SEPARATOR} color={'#333333'} />
                    <Button x={486} y={36} width={25} height={25} actionType={ActionTypes.TEXTFIELD} onMouseDown={this.onMouseDown} />
                    <Button x={512} y={36} width={25} height={25} actionType={ActionTypes.DIMENSION} onMouseDown={this.onMouseDown} />
                    <ToolBarBg x={541} y={20} width={240} height={44} label={'Symbols'} />
                    <Button x={543} y={36} width={25} height={25} actionType={ActionTypes.WINDOW} onMouseDown={this.onMouseDown} />
                    <Button x={569} y={36} width={25} height={25} actionType={ActionTypes.DOOR} onMouseDown={this.onMouseDown} />
                    <Button x={595} y={36} width={25} height={25} actionType={ActionTypes.DOUBLE_DOOR} onMouseDown={this.onMouseDown} />
                    <Button x={621} y={36} width={25} height={25} actionType={ActionTypes.BIDET} onMouseDown={this.onMouseDown} />
                    <Button x={647} y={36} width={25} height={25} actionType={ActionTypes.SHOWER} onMouseDown={this.onMouseDown} />
                    <Button x={673} y={36} width={25} height={25} actionType={ActionTypes.BATH} onMouseDown={this.onMouseDown} />
                    <Button x={699} y={36} width={25} height={25} actionType={ActionTypes.WASHBASIN} onMouseDown={this.onMouseDown} />
                    <Button x={725} y={36} width={25} height={25} actionType={ActionTypes.COOKER} onMouseDown={this.onMouseDown} />
                    <Button x={751} y={36} width={25} height={25} actionType={ActionTypes.SINK} onMouseDown={this.onMouseDown} />
                </g>
            </svg>)
    }
});

export default ToolBar;