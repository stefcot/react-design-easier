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
        x:       PropTypes.number.isRequired,
        y:       PropTypes.number.isRequired,
    },

    render(){
        let viewBox = `0 0 ${this.props.width} ${this.props.height}`;
        let width = `${this.props.width}px`;
        let height = `${this.props.height}px`;
        let x = `${this.props.x}px`;
        let y = `${this.props.y}px`;


        return <svg xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    preserveAspectRatio="none"
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    viewBox={viewBox}
                    className="appElement canvas">
            <g id="Canvas"
                  transform="matrix( 1, 0, 0, 1, 0, 0)">

                <g transform="matrix( 1, 0, 0, 1, 200, 400)" id="Rectangle_10">
                    <path stroke="#000000"
                          strokeWidth="1"
                          strokeLinejoin="square"
                          strokeLinecap="square"
                          fill="#CCCCCC" d="
                    M 200 0
                    L 200 100 0 100 0 0 200 0 Z "/>
                </g>

            </g>
        </svg>
    }
});

export default Canvas;