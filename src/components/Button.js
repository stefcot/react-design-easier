/**
 * Created by Stephane on 4/11/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Icons from './Icons';

const Button = React.createClass ({

    propTypes: {
        width:              PropTypes.number.isRequired,
        height:             PropTypes.number.isRequired,
        x:                  PropTypes.number.isRequired,
        y:                  PropTypes.number.isRequired,
        onMouseDown:        PropTypes.func,
        iconDefaultColor:   PropTypes.string.isRequired,
        iconHoveredColor:   PropTypes.string.isRequired,
        iconSelectedColor:  PropTypes.string.isRequired,
        icon:               PropTypes.string,
    },

    getDefaultProps() {
        return {
            width:              25,
            height:             25,
            x:                  0,
            y:                  0,
            iconSelectedColor:  '#000000',
            iconDefaultColor:   '#666666',
            iconHoveredColor:   '#333333',
            actionType:         'Select',
        }

    },

    getInitialState(){
        return {
            isOvered: false,
            isSelected: false,
            isDown: false,
            isIdle: true,
        };
    },

    componentDidMount() {
        this.renderIcon(this.props.actionType);

        if(this.refs.ToolBarButton) {
            this.refs.ToolBarButton.addEventListener('mouseover', this.onMouseOver);
            this.refs.ToolBarButton.addEventListener('mousedown', this.onMouseDown);
            this.refs.ToolBarButton.addEventListener('mouseleave', this.onMouseLeave);
        }
    },

    componentDidUpdate() {
        this.renderIcon(this.props.actionType);
    },

    componentWillUnmount(){
        if(this.refs.ToolBarButton){
            this.refs.ToolBarButton.removeEventListener('mouseover', this.onMouseOver);
            this.refs.ToolBarButton.removeEventListener('mousedown', this.onMouseDown);
            this.refs.ToolBarButton.removeEventListener('mouseleave', this.onMouseLeave);
        }
    },

    componentWillUpdate (nextProps, nextState) {},

    onMouseLeave (ev) {
        this.setState({
            isOvered: false
        });
    },

    onMouseOver (ev) {
        this.setState({
            isOvered: true
        });
    },

    onMouseDown (ev) {
        this.setState({
            isDown: true
        });
    },

    onMouseUp (ev) {
        this.setState({
            isOvered: !this.state.isOvered,
            isSelected: !this.state.isSelected,
            isDown: false,
        });

        this.props.onMouseUp(ev);
    },

    getDefaultBackground(){
        return <g id={"ToolBarButtonBg_" + this.props.actionType} transform="matrix( 1, 0, 0, 1, 0, 0)">
            <defs>
                <g className="toolBarButton" id={'ToolBarButtonBasic_FILL_' + this.props.actionType}>
                    <path fill="#000000" opacity={0} stroke="none" d={
                        'M ' + this.props.width + ' ' + this.props.height + ' ' +
                        'L ' + this.props.width + ' 0 0 0 0 ' + this.props.height + ' ' + this.props.width + ' ' + this.props.height + ' Z'} />
                </g>
            </defs>
            <g transform="matrix( 1, 0, 0, 1, 0, 0) ">
                <use xlinkHref={'#ToolBarButtonBasic_FILL_' + this.props.actionType} />
            </g>
        </g>
    },

    getActiveBackground(bgType, col1, col2, col3, col4){
        return <g id={bgType + this.props.actionType} transform="matrix( 1, 0, 0, 1, 0, 0)">
            <defs>
                <linearGradient id={'Gradient_1' + this.props.actionType}
                                gradientUnits="userSpaceOnUse"
                                x1={this.props.height/2}
                                y1={this.props.height - 1}
                                x2={this.props.height/2}
                                y2={2}
                                spreadMethod="reflect">
                    <stop offset={0 + '%'} stopColor={col1} />
                    <stop offset={100 + '%'} stopColor={col2} />
                </linearGradient>

                <linearGradient id={'Gradient_2' + this.props.actionType}
                                gradientUnits="userSpaceOnUse"
                                x1={this.props.height/2}
                                y1={this.props.height - 1}
                                x2={this.props.height/2}
                                y2={2}
                                spreadMethod="reflect">
                    <stop offset={0 + '%'} stopColor={col3} />
                    <stop offset={100 + '%'} stopColor={col4} />
                </linearGradient>

                <g className="toolBarButton" id={bgType + 'FILL_' + this.props.actionType}>
                    <path fill="#666666" stroke="none" d={
                        'M 1 1 ' +
                        'L 0 1 0 ' + (this.props.height - 1) + ' 1 ' + (this.props.height - 1) + ' 1 1 ' +
                        'M ' + (this.props.width - 1) + ' ' + this.props.height + ' ' +
                        'L ' + (this.props.width - 1) + ' ' + (this.props.height - 1) + ' 1 ' + (this.props.height - 1) + ' 1 ' + this.props.height + ' ' + (this.props.width - 1) + ' ' + this.props.height + ' ' +
                        'M ' + this.props.width + ' 1 ' +
                        'L ' + (this.props.width - 1) + ' 1 ' + (this.props.width - 1) + ' ' + (this.props.height - 1) + ' ' + this.props.width + ' ' + (this.props.height - 1) + ' ' + this.props.width + ' 1 ' +
                        'M ' + (this.props.width - 1) + ' 1 ' +
                        'L ' + (this.props.width - 1) + ' 0 1 0 1 1 2 1 ' + (this.props.width - 2) + ' 1 ' + (this.props.width - 1) + ' 1 Z'} />

                    <path style={{fill:'url(#Gradient_1' + this.props.actionType + ')', stroke:"none",}} d={
                        'M ' + (this.props.width - 2) + ' ' + (this.props.height - 2) + ' ' +
                        'L ' + (this.props.width - 2) + ' 1 2 1 2 ' + (this.props.height - 2) + ' ' + (this.props.width - 2) + ' ' + (this.props.height - 2) + ' Z'} />

                    <path style={{fill:'url(#Gradient_2' + this.props.actionType + ')', stroke:"none",}} d={
                        'M ' + (this.props.width - 1) + ' 1 ' +
                        'L ' + (this.props.width - 2) + ' 1 ' + (this.props.width - 2) + ' ' + (this.props.height - 2) + ' 2 ' + (this.props.height - 2) + ' 2 1 1 1 1 ' + (this.props.height - 1) + ' ' + (this.props.width - 1) + ' ' + (this.props.height - 1) + ' ' + (this.props.width - 1) + ' 1 Z'} />
                </g>
            </defs>

            <g transform="matrix( 1, 0, 0, 1, 0, 0) ">
                <use xlinkHref={'#' + bgType + 'FILL_' + this.props.actionType} />
            </g>
        </g>
    },

    getIconColor(){
        const {isOvered, isSelected, } = this.state;

        if(isSelected){
            return this.props.iconSelectedColor;
        } else if(isOvered){
            return this.props.iconHoveredColor;
        } else if(!isOvered && !isSelected){
            return this.props.iconDefaultColor;
        }
    },

    renderBackground(){
        const {isOvered, isSelected, } = this.state;

        if(isSelected){
            return this.getActiveBackground("ToolBarButtonSelectedBg_", "#777777", "#999999", "#999999", "#AAAAAA");
        }

        if(isOvered){
            return this.getActiveBackground("ToolBarButtonOverBg_", "#BDBDBD", "#DEDEDE", "#DEDEDE", "#DEDCDB");
        }

        if(!isOvered && !isSelected){
            return this.getDefaultBackground();
        }
    },

    /**
     * ISSUE :
     * @see http://stackoverflow.com/questions/26518629/dynamically-rendering-a-react-component
     *
     */
    renderIcon(){
        ReactDOM.render(
            React.createElement(Icons[this.props.actionType], {color: this.getIconColor(), name: this.props.actionType}, null),
            document.getElementById("ToolBarButton_Icon_" + this.props.actionType)
        );
    },

    render(){
        let mat = `matrix( 1, 0, 0, 1, ${this.props.x}, ${this.props.y})`;

        return (
            <g ref="ToolBarButton" className="toolBarButton" id={"ToolBarButton_" + this.props.actionType} transform={mat}>
                {this.renderBackground()}
                <g className="toolBarButtonIcon"
                    id={"ToolBarButton_Icon_" + this.props.actionType}
                    transform="matrix( 1, 0, 0, 1, 4, 4) " />
            </g>
        )
    }
});

export default Button;