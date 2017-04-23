/**
 * Created by Stephane on 4/11/2017.
 */
import React from 'react';
import Save from './icons/Save';
import ReactDOM from 'react-dom';

class Button extends React.Component {
    constructor(){
        super();
    }

    /**
     *
     */
    componentWillUnmount(){
        this.refs.ToolBarButton.removeEventListener('click', this.props.onClick);
    }

    /**
     *
     */
    componentDidMount() {
        this.refs.ToolBarButton.addEventListener('click', this.props.onClick);
        console.log('this.props.icon : ', React.DOM[this.props.icon]);
        ReactDOM.render(this.getIcon(this.props.icon), document.getElementById("ToolBarButton_Icon_" + this.props.icon));
    }

    /**
     * ISSUE :
     * @see http://stackoverflow.com/questions/26518629/dynamically-rendering-a-react-component
     */
    getIcon(name){
        switch(name){
            case 'Save':
                return <Save />;
            break;
            default:
        }
    }

    /**
     *
     * @return {XML}
     */
    render(){
        let mat = `matrix( 1, 0, 0, 1, ${this.props.x}, ${this.props.y})`;

        return(
            <g ref="ToolBarButton" className="toolBarButton" id={"ToolBarButton_" + this.props.icon} transform={mat}>
                <g id={"ToolBarButtonBG_" + this.props.icon} transform="matrix( 1, 0, 0, 1, 0, 0)">
                    <defs>
                        <linearGradient id={'Gradient_1_' + this.props.icon} gradientUnits="userSpaceOnUse" x1={this.props.height/2} y1={this.props.height - 1} x2={this.props.height/2} y2={2} spreadMethod="pad">
                            <stop offset={0 + '%'} stopColor="#FFFFFF" stopOpacity="0.5"/>
                            <stop offset={100 + '%'} stopColor="#FFFFFF" stopOpacity="0"/>
                        </linearGradient>

                        <linearGradient id={'Gradient_2_' + this.props.icon} gradientUnits="userSpaceOnUse" x1={this.props.height/2} y1={this.props.height - 1} x2={this.props.height/2} y2={2} spreadMethod="reflect">
                            <stop offset={0 + '%'} stopColor="#BDBDBD"/>
                            <stop offset={100 + '%'} stopColor="#DEDEDE"/>
                        </linearGradient>

                        <g className="toolBarButton" id={'ToolBarButton_FILL_' + this.props.icon}>
                            <path fill="#666666" stroke="none" d={
                                'M ' + (this.props.width - 1) + ' ' + this.props.width + ' ' +
                                'L ' + (this.props.width - 1) + ' ' + (this.props.width - 1) + ' 1 ' + (this.props.width - 1) + ' 1 ' + this.props.width + ' ' + (this.props.width - 1) + ' ' + this.props.width + ' ' +
                                'M 0 ' + (this.props.width - 1) + ' ' +
                                'L 1 ' + (this.props.width - 1) + ' 1 1 0 1 0 ' + (this.props.width - 1) + ' ' +
                                'M ' + (this.props.width - 1) + ' 1 ' +
                                'L ' + (this.props.width - 1) + ' ' + (this.props.width - 1) + ' ' + this.props.width + ' ' + (this.props.width - 1) + ' ' + this.props.width + ' 1 ' + (this.props.width - 1) + ' 1 ' +
                                'M ' + (this.props.width - 2) + ' 1 ' +
                                'L ' + (this.props.width - 1) + ' 1 ' + (this.props.width - 1) + ' 0 1 0 1 1 2 1 ' + (this.props.width - 2) + ' 1 Z'} />
                            <path style={{fill:'url(#Gradient_1_' + this.props.icon + ')', stroke:"none"}} d={
                                'M ' + (this.props.width - 2) + ' 1 ' +
                                'L ' + (this.props.width - 2) + ' ' + (this.props.width - 2) + ' 2 ' + (this.props.width - 2) + ' 2 1 1 1 1 ' + (this.props.width - 1) + ' ' + (this.props.width - 1) + ' ' + (this.props.width - 1) + ' ' + (this.props.width - 1) + ' 1 ' + (this.props.width - 2) + ' 1 Z'} />
                            <path style={{fill:'url(#Gradient_2_' + this.props.icon + ')', stroke:"none"}} d={
                                'M ' + (this.props.width - 2) + ' ' + (this.props.width - 2) + ' ' +
                                'L ' + (this.props.width - 2) + ' 1 2 1 2 ' + (this.props.width - 2) + ' ' + (this.props.width - 2) + ' ' + (this.props.width - 2) + ' Z'} />
                        </g>
                    </defs>

                    <g transform="matrix( 1, 0, 0, 1, 0, 0) ">
                        <use xlinkHref={'#ToolBarButton_FILL_' + this.props.icon} />
                    </g>
                </g>
                <g ref="ToolBarButton_Icon" className="toolBarButtonIcon" id={"ToolBarButton_Icon_" + this.props.icon} transform="matrix( 1, 0, 0, 1, 4, 4) " />
            </g>
        )
    }
}




export default Button;