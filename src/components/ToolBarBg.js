/**
 * Created by Stephane on 4/11/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * StateLess component, will resize thanks to props
 *
 * @param props
 * @constructor
 */
const ToolBarBg = React.createClass({

    propTypes: {
        width:   PropTypes.number.isRequired,
        height:  PropTypes.number.isRequired,
        x:       PropTypes.number.isRequired,
        y:       PropTypes.number.isRequired,
        label:   PropTypes.string.isRequired,
    },

    render(){
        let p = this.props;
        return <g id={'ToolBar_BG_' + p.label}
                  className="toolBarBox"
                  transform={'matrix( 1, 0, 0, 1, ' + p.x + ', ' + p.y + ')'}>
            <defs>
                <linearGradient id={'Gradient_1_' + p.label}
                                gradientUnits="userSpaceOnUse"
                                x1={50}
                                y1={50}
                                x2={50}
                                y2={0}
                                spreadMethod="pad">
                    <stop  offset={0.39215686274509803 + '%'} stopColor="#8E8E8E"/>
                    <stop  offset={71.76470588235294 + '%'} stopColor="#666666"/>
                    <stop  offset={80.7843137254902 + '%'} stopColor="#6B6B6B"/>
                    <stop  offset={100 + '%'} stopColor="#8E8E8E"/>
                </linearGradient>

                <linearGradient id={'Gradient_2_' + p.label}
                                gradientUnits="userSpaceOnUse"
                                x1={50}
                                y1={p.height - 5}
                                x2={50}
                                y2={p.height/2}
                                spreadMethod="reflect">
                    <stop  offset={0 + '%'} stopColor="#BDBDBD"/>
                    <stop  offset={100 + '%'} stopColor="#DEDEDE"/>
                </linearGradient>

                <linearGradient id={'Gradient_3_' + p.label}
                                gradientUnits="userSpaceOnUse"
                                x1={-820}
                                y1={0}
                                x2={820}
                                y2={0}
                                spreadMethod="reflect">
                    <stop  offset={0 + '%'} stopColor="#EAEAEA"/>
                    <stop  offset={100 + '%'} stopColor="#DEDEDE"/>
                </linearGradient>

                <g id={'ToolBar_BG_Box_' + p.label + '_FILL'}>
                    <path style={{fill:'url(#Gradient_1_' + p.label + ')', stroke:"none",}} d={
                        'M ' + (p.width - 1) + ' ' + p.height + ' ' +
                        'L ' + (p.width - 1)  + ' ' + (p.height - 1) + ' 1 ' + (p.height - 1) + ' 1 ' + p.height + ' ' + (p.width - 1) + ' ' + p.height + ' ' +
                        'M ' + (p.width - 1)  + ' 14 ' +
                        'L ' + (p.width - 1) + ' 14 ' + (p.width - 1) + ' ' + (p.height - 2) + ' ' + (p.width - 1) + ' ' + (p.height - 1) + ' ' + p.width + ' ' + (p.height - 1) + ' ' + p.width + ' 1 ' + (p.width - 1) + ' 1 ' + (p.width - 1) + ' 0 1 0 1 1 0 1 0 ' + (p.height - 1) + ' 1 ' + (p.height - 1) + ' 1 14 2 14 ' + (p.width - 2) + ' 14 ' + (p.width - 1) + ' 14 Z'} />

                    <path style={{fill:'url(#Gradient_2_' + p.label + ')', stroke:"none",}}  d={
                        'M ' + (p.width - 2) + ' ' + (p.height - 2) + ' ' +
                        'L ' + (p.width - 2) + ' 14 2 14 2 ' + (p.height - 2) + ' ' + (p.width - 2) + ' ' + (p.height - 2) + ' ' +
                        'M ' + (p.width - 1) + ' 14 ' +
                        'L ' + (p.width - 1) + ' 14 ' + (p.width - 1) + ' ' + (p.height - 2) + ' ' + (p.width - 1) + ' ' + (p.height - 2) + ' ' + (p.width - 1) + ' 14 Z'} />

                    <path style={{fill:'url(#Gradient_3_' + p.label + ')', stroke:"none",}}  d={
                        'M ' + (p.width - 1) + ' 14 ' +
                        'L ' + (p.width - 2) + ' 14 ' + (p.width - 2) + ' ' + (p.height - 2) + ' 2 ' + (p.height - 2) + ' 2 14 1 14 1 ' + (p.height - 1) + ' ' + (p.width - 1) + ' ' + (p.height - 1) + ' ' + (p.width - 1) + ' ' + (p.height - 2) + ' ' + (p.width - 1) + ' ' + (p.height - 2) + ' ' + (p.width - 1) + ' 14 Z'} />
                </g>
            </defs>

            <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                <use xlinkHref={'#ToolBar_BG_Box_' + p.label + '_FILL'}/>
            </g>

            <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                <clipPath id={'Mask_Label' + p.label}>
                    <rect x="0" y="-2" width={p.width - 5} height="16" fill="#FFFFFF" stroke="none"/>
                </clipPath>
                <text clipPath={'url(#Mask_Label' + p.label + ')'} writingMode="lr">
                    <tspan x="5" y="10" baselineShift={0 + '%'} fontFamily="Tahoma" fontWeight="bold" fontSize="10" fill="#FFFFFF" xmlSpace="preserve">{p.label}</tspan>
                </text>
            </g>
        </g>
    }
});

export default ToolBarBg;