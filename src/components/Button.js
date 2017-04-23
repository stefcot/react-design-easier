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
    componentDidMount() {
        this.refs.ToolBarButton.addEventListener('click', this.props.onClick);
        console.log('this.props.icon : ', React.DOM[this.props.icon]);
        ReactDOM.render(this.getIcon(this.props.icon), document.getElementById("ToolBarButton_Icon_" + this.props.icon));
    }

    /**
     *
     */
    componentWillUnmount(){
        this.refs.ToolBarButton_BG.removeEventListener('click', this.props.onClick);
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
        let mat = `matrix( 1, 0, 0, 1, ${this.props.xpos}, ${this.props.ypos})`;

        return(
            <g ref="ToolBarButton" id={"ToolBarButton_" + this.props.icon} transform={mat}>
                <g id={"ToolBarButtonBG_" + this.props.icon} transform="matrix( 1, 0, 0, 1, 0, 0) ">
                    <defs>
                        <linearGradient id="Gradient_1" gradientUnits="userSpaceOnUse" x1={12.5} y1={23.3} x2={12.5} y2={1.3999999999999986} spreadMethod="pad">
                            <stop offset={0 + '%'} stopColor="#FFFFFF" stopOpacity="0.5019607843137255"/>
                            <stop offset={100 + '%'} stopColor="#FFFFFF" stopOpacity="0"/>
                        </linearGradient>

                        <linearGradient id="Gradient_2" gradientUnits="userSpaceOnUse" x1={12.5} y1={23.375} x2={12.5} y2={1.625} spreadMethod="reflect">
                            <stop offset={0 + '%'} stopColor="#BDBDBD"/>
                            <stop offset={100 + '%'} stopColor="#DEDEDE"/>
                        </linearGradient>

                        <g id="ToolBarButton_FILL">
                            <path fill="#666666" stroke="none" d="M 24 25 L 24 24 1 24 1 25 24 25 M 0 24 L 1 24 1 1 0 1 0 24 M 24 1 L 24 24 25 24 25 1 24 1 M 23 1 L 24 1 24 0 1 0 1 1 2 1 23 1 Z"/>
                            <path style={{fill:'url(#Gradient_1)', stroke:"none"}} d="M 23 1 L 23 23 2 23 2 1 1 1 1 24 24 24 24 1 23 1 Z"/>
                            <path style={{fill:'url(#Gradient_2)', stroke:"none"}} d="M 23 23 L 23 1 2 1 2 23 23 23 Z"/>
                        </g>
                    </defs>

                    <g transform="matrix( 1, 0, 0, 1, 0, 0) ">
                        <use xlinkHref="#ToolBarButton_FILL"/>
                    </g>
                </g>
                <g ref="ToolBarButton_Icon"  id={"ToolBarButton_Icon_" + this.props.icon} transform="matrix( 1, 0, 0, 1, 4, 4) " />
            </g>
        )
    }
}




export default Button;