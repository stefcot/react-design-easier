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
const Canvas = React.createClass({

    propTypes: {
        width:   PropTypes.number.isRequired,
        height:  PropTypes.number.isRequired,
    },

    render(){
        let viewBox = `0 0 ${this.props.width} ${this.props.height}`;
        let width = `${this.props.width}px`;
        let height = `${this.props.height}px`;


        return <svg xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    preserveAspectRatio="none"
                    x={0 + 'px'}
                    y={0 + 'px'}
                    width={width}
                    height={height}
                    viewBox={viewBox}
                    className="appElement canvas">
            <g transform="matrix( 1, 0, 0, 1, 200, 400)" id="Rectangle_0">
                <path vectorEffect="non-scaling-stroke" stroke="#0099CC"
                      strokeWidth="1"
                      strokeLinejoin="square"
                      strokeLinecap="square"
                      fillOpacity={0.5}
                      fill="#00CCFF" d="
                M 200 0
                L 200 100 0 100 0 0 200 0 Z "/>
                <g transform="matrix( 1, 0, 0, 1, 0, 0)" id="text-test">
                    <text writingMode="lr">
                        <tspan x={100}
                               y={50}
                               baselineShift={0}
                               fontFamily="Tahoma"
                               fontWeight="bold"
                               fontSize="12"
                               fill="#0099CC"
                               textAnchor="middle"
                               xmlSpace="preserve">I am a rectangle for test</tspan>
                    </text>
                </g>
            </g>
            <g transform="matrix( 1, 0, 0, 1, 100, 150)" id="Rectangle_1">
                <path vectorEffect="non-scaling-stroke" stroke="#CC9900"
                      strokeWidth="1"
                      strokeLinejoin="square"
                      strokeLinecap="square"
                      fillOpacity={0.6}
                      fill="#FFCC00" d="
                M 200 0
                L 200 100 0 100 0 0 200 0 Z "/>
                <g transform="matrix( 1, 0, 0, 1, 0, 0)" id="text-test">
                    <text writingMode="lr">
                        <tspan x={100}
                               y={50}
                               baselineShift={0}
                               fontFamily="Tahoma"
                               fontWeight="bold"
                               fontSize="12"
                               fill="#CC9900"
                               textAnchor="middle"
                               xmlSpace="preserve">I am another rectangle</tspan>
                    </text>
                </g>
            </g>
        </svg>
    }
});

export default Canvas;