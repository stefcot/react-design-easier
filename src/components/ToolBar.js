import React from 'react';
import ToolBarBg from './ToolBarBg';
import * as ActionTypes from '../actions/ActionTypes'
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

    onMouseUp(ev){
        console.log('ToolBar::onMouseUp - ev : ', ev);
        console.log('ToolBar::onMouseUp - target : ', ev.target);
        console.log('ToolBar::onMouseUp - currentTarget : ', ev.currentTarget);
    },

    renderTools(toolbar){
        return toolbar.map((item, index) => {
            let comp;

            switch(item.type){
                case 'ToolBarBg':
                    comp = <ToolBarBg key={'toolBar.' + index}
                                      x={item.x} y={item.y}
                                      width={item.width}
                                      height={item.height}
                                      label={item.label} />;
                    break;
                case 'Button':
                    comp = <Button key={'toolBar.' + index}
                                   x={item.x} y={item.y}
                                   width={item.width}
                                   height={item.height}
                                   actionType={eval(item.actionType)}
                                   onMouseDown={this.onMouseUp} />;
                    break;
                case 'Separator':
                    comp = <Separator key={'toolBar.' + index}
                                      x={item.x}
                                      y={item.y}
                                      name={eval(item.actionType)}
                                      color={item.color} />;
                    break;
                default:
            }

            return comp;
        });
    },
    /**
     *
     * @return {XML}
     */
    render(){
        const { ui } = this.props;

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
                    {this.renderTools(ui.toolbar)}
                </g>
            </svg>)
    }
});

export default ToolBar;