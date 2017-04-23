/**
 * Created by Stephane on 4/23/2017.
 */
import React from 'react';

/**
 * StateLess component:
 * background grid
 *
 * @param props
 * @constructor
 */
const YellowFrame = () =>
    <svg xmlns="http://www.w3.org/2000/svg"
         version="1.1"
         xmlnsXlink="http://www.w3.org/1999/xlink"
         preserveAspectRatio="none"
         x="0px"
         y="0px"
         width="800px"
         height="600px"
         viewBox="0 0 800 600"
         className="appElement yellowFrame">
        <defs>
            <g id="YellowFrame_FILL">
                <path fill="#FFF200" stroke="none" d="M 800 600 L 800 0 0 0 0 600 800 600 M 790 10 L 790 590 10 590 10 10 790 10 Z"/>
            </g>
        </defs>

        <g transform="matrix( 1, 0, 0, 1, 0,0) ">
            <use xlinkHref="#YellowFrame_FILL"/>
        </g>
    </svg>;

export default YellowFrame;