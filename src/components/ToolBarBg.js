/**
 * Created by Stephane on 4/11/2017.
 */
import React from 'react';

/**
 * StateLess component, will resize thanks to props
 *
 * @param props
 * @constructor
 */
const ToolBarBg = (props) =>
    <g id={'ToolBar_BG_' + props.label} className="toolBarBox" transform={'matrix( 1, 0, 0, 1, ' + props.x + ', ' + props.y + ')'}>
        <defs>
            <linearGradient id={'Gradient_1_' + props.label} gradientUnits="userSpaceOnUse" x1={50} y1={50} x2={50} y2={0} spreadMethod="pad">
                <stop  offset={0.39215686274509803 + '%'} stopColor="#8E8E8E"/>
                <stop  offset={71.76470588235294 + '%'} stopColor="#666666"/>
                <stop  offset={80.7843137254902 + '%'} stopColor="#6B6B6B"/>
                <stop  offset={100 + '%'} stopColor="#8E8E8E"/>
            </linearGradient>

            <linearGradient id={'Gradient_2_' + props.label} gradientUnits="userSpaceOnUse" x1={50} y1={props.height - 5} x2={50} y2={props.height/2} spreadMethod="reflect">
                <stop  offset={0 + '%'} stopColor="#BDBDBD"/>
                <stop  offset={100 + '%'} stopColor="#DEDEDE"/>
            </linearGradient>

            <linearGradient id={'Gradient_3_' + props.label} gradientUnits="userSpaceOnUse" x1={-820} y1={0} x2={820} y2={0} spreadMethod="reflect">
                <stop  offset={0 + '%'} stopColor="#EAEAEA"/>
                <stop  offset={100 + '%'} stopColor="#DEDEDE"/>
            </linearGradient>

            <g id={'ToolBar_BG_Box_' + props.label + '_FILL'}>
                <path style={{fill:'url(#Gradient_1_' + props.label + ')', stroke:"none"}} d={
                    'M ' + (props.width - 1) + ' ' + props.height + ' ' +
                    'L ' + (props.width - 1)  + ' ' + (props.height - 1) + ' 1 ' + (props.height - 1) + ' 1 ' + props.height + ' ' + (props.width - 1) + ' ' + props.height + ' ' +
                    'M ' + (props.width - 1)  + ' 14 ' +
                    'L ' + (props.width - 1) + ' 14 ' + (props.width - 1) + ' ' + (props.height - 2) + ' ' + (props.width - 1) + ' ' + (props.height - 1) + ' ' + props.width + ' ' + (props.height - 1) + ' ' + props.width + ' 1 ' + (props.width - 1) + ' 1 ' + (props.width - 1) + ' 0 1 0 1 1 0 1 0 ' + (props.height - 1) + ' 1 ' + (props.height - 1) + ' 1 14 2 14 ' + (props.width - 2) + ' 14 ' + (props.width - 1) + ' 14 Z'} />

                <path style={{fill:'url(#Gradient_2_' + props.label + ')', stroke:"none"}}  d={
                    'M ' + (props.width - 2) + ' ' + (props.height - 2) + ' ' +
                    'L ' + (props.width - 2) + ' 14 2 14 2 ' + (props.height - 2) + ' ' + (props.width - 2) + ' ' + (props.height - 2) + ' ' +
                    'M ' + (props.width - 1) + ' 14 ' +
                    'L ' + (props.width - 1) + ' 14 ' + (props.width - 1) + ' ' + (props.height - 2) + ' ' + (props.width - 1) + ' ' + (props.height - 2) + ' ' + (props.width - 1) + ' 14 Z'} />

                <path style={{fill:'url(#Gradient_3_' + props.label + ')', stroke:"none"}}  d={
                    'M ' + (props.width - 1) + ' 14 ' +
                    'L ' + (props.width - 2) + ' 14 ' + (props.width - 2) + ' ' + (props.height - 2) + ' 2 ' + (props.height - 2) + ' 2 14 1 14 1 ' + (props.height - 1) + ' ' + (props.width - 1) + ' ' + (props.height - 1) + ' ' + (props.width - 1) + ' ' + (props.height - 2) + ' ' + (props.width - 1) + ' ' + (props.height - 2) + ' ' + (props.width - 1) + ' 14 Z'} />
            </g>
        </defs>

        <g transform="matrix( 1, 0, 0, 1, 0,0) ">
            <use xlinkHref={'#ToolBar_BG_Box_' + props.label + '_FILL'}/>
        </g>

        <g transform="matrix( 1, 0, 0, 1, 0,0) ">
            <clipPath id={'Mask_Label' + props.label}>
                <rect x="0" y="-2" width={props.width - 5} height="16" fill="#FFFFFF" stroke="none"/>
            </clipPath>
            <text clipPath={'url(#Mask_Label' + props.label + ')'} writingMode="lr">
                <tspan x="5" y="10" baselineShift={0 + '%'} fontFamily="Tahoma" fontWeight="bold" fontSize="10" fill="#FFFFFF" xmlSpace="preserve">{props.label}</tspan>
            </text>
        </g>
    </g>;

export default ToolBarBg;