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
    <g id="ToolBar_BG" transform="matrix( 1, 0, 0, 1, 0, 0)">
        <defs>
            <linearGradient id="Gradient_1" gradientUnits="userSpaceOnUse" x1={400} y1={543.95} x2={400} y2={533.95} spreadMethod="pad">
                <stop  offset={0 + '%'} stopColor="#666666" />
                <stop  offset={100 + '%'} stopColor="#8E8E8E" />
            </linearGradient>
            <linearGradient id="Gradient_2" gradientUnits="userSpaceOnUse" x1={400} y1={575.95} x2={400} y2={552.95} spreadMethod="reflect">
                <stop  offset={0 + '%'} stopColor="#BDBDBD" />
                <stop  offset={100 + '%'} stopColor="#DEDEDE" />
            </linearGradient>
            <linearGradient id="Gradient_3" gradientUnits="userSpaceOnUse" x1={62} y1={574.5} x2={63} y2={574.5} spreadMethod="pad">
                <stop  offset={0 + '%'} stopColor="#666666" />
                <stop  offset={100 + '%'} stopColor="#8E8E8E" />
            </linearGradient>
            <linearGradient id="Gradient_4" gradientUnits="userSpaceOnUse" x1={62} y1={570.5} x2={63} y2={570.5} spreadMethod="pad">
                <stop  offset={0 + '%'} stopColor="#666666" />
                <stop  offset={100 + '%'} stopColor="#8E8E8E" />
            </linearGradient>
            <linearGradient id="Gradient_5" gradientUnits="userSpaceOnUse" x1={62} y1={572.5} x2={63} y2={572.5} spreadMethod="pad">
                <stop  offset={0 + '%'} stopColor="#666666" />
                <stop  offset={100 + '%'} stopColor="#8E8E8E" />
            </linearGradient>
            <linearGradient id="Gradient_6" gradientUnits="userSpaceOnUse" x1={60} y1={570.5} x2={61} y2={570.5} spreadMethod="pad">
                <stop  offset={0 + '%'} stopColor="#666666" />
                <stop  offset={100 + '%'} stopColor="#8E8E8E" />
            </linearGradient>
            <linearGradient id="Gradient_7" gradientUnits="userSpaceOnUse" x1={60} y1={572.5} x2={61} y2={572.5} spreadMethod="pad">
                <stop  offset={0 + '%'} stopColor="#666666" />
                <stop  offset={100 + '%'} stopColor="#8E8E8E" />
            </linearGradient>
            <linearGradient id="Gradient_8" gradientUnits="userSpaceOnUse" x1={60} y1={574.5} x2={61} y2={574.5} spreadMethod="pad">
                <stop  offset={0 + '%'} stopColor="#666666" />
                <stop  offset={100 + '%'} stopColor="#8E8E8E" />
            </linearGradient>
            <linearGradient id="Gradient_9" gradientUnits="userSpaceOnUse" x1={60} y1={556.5} x2={61} y2={556.5} spreadMethod="pad">
                <stop  offset={0 + '%'} stopColor="#666666" />
                <stop  offset={100 + '%'} stopColor="#8E8E8E" />
            </linearGradient>
            <linearGradient id="Gradient_10" gradientUnits="userSpaceOnUse" x1={60} y1={566.5} x2={61} y2={566.5} spreadMethod="pad">
                <stop  offset={0 + '%'} stopColor="#666666" />
                <stop  offset={100 + '%'} stopColor="#8E8E8E" />
            </linearGradient>
            <linearGradient id="Gradient_11" gradientUnits="userSpaceOnUse" x1={60} y1={568.5} x2={61} y2={568.5} spreadMethod="pad">
                <stop  offset={0 + '%'} stopColor="#666666" />
                <stop  offset={100 + '%'} stopColor="#8E8E8E" />
            </linearGradient>
            <linearGradient id="Gradient_12" gradientUnits="userSpaceOnUse" x1={62} y1={568.5} x2={63} y2={568.5} spreadMethod="pad">
                <stop  offset={0 + '%'} stopColor="#666666" />
                <stop  offset={100 + '%'} stopColor="#8E8E8E" />
            </linearGradient>
            <linearGradient id="Gradient_13" gradientUnits="userSpaceOnUse" x1={60} y1={564.5} x2={61} y2={564.5} spreadMethod="pad">
                <stop  offset={0 + '%'} stopColor="#666666" />
                <stop  offset={100 + '%'} stopColor="#8E8E8E" />
            </linearGradient>
            <linearGradient id="Gradient_14" gradientUnits="userSpaceOnUse" x1={62} y1={564.5} x2={63} y2={564.5} spreadMethod="pad">
                <stop  offset={0 + '%'} stopColor="#666666" />
                <stop  offset={100 + '%'} stopColor="#8E8E8E" />
            </linearGradient>
            <linearGradient id="Gradient_15" gradientUnits="userSpaceOnUse" x1={62} y1={566.5} x2={63} y2={566.5} spreadMethod="pad">
                <stop  offset={0 + '%'} stopColor="#666666" />
                <stop  offset={100 + '%'} stopColor="#8E8E8E" />
            </linearGradient>
            <linearGradient id="Gradient_16" gradientUnits="userSpaceOnUse" x1={62} y1={562.5} x2={63} y2={562.5} spreadMethod="pad">
                <stop  offset={0 + '%'} stopColor="#666666" />
                <stop  offset={100 + '%'} stopColor="#8E8E8E" />
            </linearGradient>
            <linearGradient id="Gradient_17" gradientUnits="userSpaceOnUse" x1={60} y1={562.5} x2={61} y2={562.5} spreadMethod="pad">
                <stop  offset={0 + '%'} stopColor="#666666" />
                <stop  offset={100 + '%'} stopColor="#8E8E8E" />
            </linearGradient>
            <linearGradient id="Gradient_18" gradientUnits="userSpaceOnUse" x1={60} y1={560.5} x2={61} y2={560.5} spreadMethod="pad">
                <stop  offset={0 + '%'} stopColor="#666666" />
                <stop  offset={100 + '%'} stopColor="#8E8E8E" />
            </linearGradient>
            <linearGradient id="Gradient_19" gradientUnits="userSpaceOnUse" x1={62} y1={560.5} x2={63} y2={560.5} spreadMethod="pad">
                <stop  offset={0 + '%'} stopColor="#666666" />
                <stop  offset={100 + '%'} stopColor="#8E8E8E" />
            </linearGradient>
            <linearGradient id="Gradient_20" gradientUnits="userSpaceOnUse" x1={60} y1={558.5} x2={61} y2={558.5} spreadMethod="pad">
                <stop  offset={0 + '%'} stopColor="#666666" />
                <stop  offset={100 + '%'} stopColor="#8E8E8E" />
            </linearGradient>
            <linearGradient id="Gradient_21" gradientUnits="userSpaceOnUse" x1={62} y1={558.5} x2={63} y2={558.5} spreadMethod="pad">
                <stop  offset={0 + '%'} stopColor="#666666" />
                <stop  offset={100 + '%'} stopColor="#8E8E8E" />
            </linearGradient>
            <linearGradient id="Gradient_22" gradientUnits="userSpaceOnUse" x1={60} y1={550.5} x2={61} y2={550.5} spreadMethod="pad">
                <stop  offset={0 + '%'} stopColor="#666666" />
                <stop  offset={100 + '%'} stopColor="#8E8E8E" />
            </linearGradient>
            <linearGradient id="Gradient_23" gradientUnits="userSpaceOnUse" x1={62} y1={556.5} x2={63} y2={556.5} spreadMethod="pad">
                <stop  offset={0 + '%'} stopColor="#666666" />
                <stop  offset={100 + '%'} stopColor="#8E8E8E" />
            </linearGradient>
            <linearGradient id="Gradient_24" gradientUnits="userSpaceOnUse" x1={60} y1={554.5} x2={61} y2={554.5} spreadMethod="pad">
                <stop  offset={0 + '%'} stopColor="#666666" />
                <stop  offset={100 + '%'} stopColor="#8E8E8E" />
            </linearGradient>
            <linearGradient id="Gradient_25" gradientUnits="userSpaceOnUse" x1={62} y1={554.5} x2={63} y2={554.5} spreadMethod="pad">
                <stop  offset={0 + '%'} stopColor="#666666" />
                <stop  offset={100 + '%'} stopColor="#8E8E8E" />
            </linearGradient>
            <linearGradient id="Gradient_26" gradientUnits="userSpaceOnUse" x1={60} y1={552.5} x2={61} y2={552.5} spreadMethod="pad">
                <stop  offset={0 + '%'} stopColor="#666666" />
                <stop  offset={100 + '%'} stopColor="#8E8E8E" />
            </linearGradient>
            <linearGradient id="Gradient_27" gradientUnits="userSpaceOnUse" x1={62} y1={552.5} x2={63} y2={552.5} spreadMethod="pad">
                <stop  offset={0 + '%'} stopColor="#666666" />
                <stop  offset={100 + '%'} stopColor="#8E8E8E" />
            </linearGradient>
            <linearGradient id="Gradient_28" gradientUnits="userSpaceOnUse" x1={62} y1={550.5} x2={63} y2={550.5} spreadMethod="pad">
                <stop  offset={0 + '%'} stopColor="#666666" />
                <stop  offset={100 + '%'} stopColor="#8E8E8E" />
            </linearGradient>

            <g id="Layer0_0_FILL">
                <path style={{fill:'url(#Gradient_1)', stroke:"none"}} d="M 781 581 L 781 535 19 535 19 581 781 581 Z" />
            </g>
            <g id="Layer0_1_FILL">
                <path style={{fill:'url(#Gradient_2)', stroke:"none"}} d="M 780 580 L 780 545 20 545 20 580 780 580 Z" />
            </g>
            <g id="Layer0_2_FILL">
                <path fill="#FFFFFF" stroke="none" d=" M 20 536 L 20 535 19 535 19 536 20 536 Z" />
            </g>
            <g id="Layer0_3_FILL">
                <path fill="#FFFFFF" stroke="none" d="M 780 536 L 781 536 781 535 780 535 780 536 Z" />
            </g>
            <g id="Layer0_4_FILL">
                <path fill="#FFFFFF" stroke="none" d="M 780 580 L 780 581 781 581 781 580 780 580 Z" />
            </g>
            <g id="Layer0_5_FILL">
                <path fill="#FFFFFF" stroke="none" d="M 20 580 L 19 580 19 581 20 581 20 580 Z" />
            </g>
            <g id="Layer0_6_FILL">
                <path style={{fill:'url(#Gradient_3)'}} stroke="none" d="M 62 575 L 63 575 63 574 62 574 62 575 Z" />
                <path style={{fill:'url(#Gradient_4)'}} stroke="none" d="M 63 570 L 62 570 62 571 63 571 63 570 Z" />
                <path style={{fill:'url(#Gradient_5)'}} stroke="none" d="M 63 572 L 62 572 62 573 63 573 63 572 Z" />
                <path style={{fill:'url(#Gradient_6)'}} stroke="none" d="M 60 570 L 60 571 61 571 61 570 60 570 Z" />
                <path style={{fill:'url(#Gradient_7)'}} stroke="none" d="M 60 572 L 60 573 61 573 61 572 60 572 Z" />
                <path style={{fill:'url(#Gradient_8)'}} stroke="none" d="M 60 574 L 60 575 61 575 61 574 60 574 Z" />
                <path style={{fill:'url(#Gradient_9)'}} stroke="none" d="M 61 557 L 61 556 60 556 60 557 61 557 Z" />
                <path style={{fill:'url(#Gradient_10)'}} stroke="none" d="M 61 567 L 61 566 60 566 60 567 61 567 Z" />
                <path style={{fill:'url(#Gradient_11)'}} stroke="none" d="M 61 569 L 61 568 60 568 60 569 61 569 Z" />
                <path style={{fill:'url(#Gradient_12)'}} stroke="none" d="M 63 568 L 62 568 62 569 63 569 63 568 Z" />
                <path style={{fill:'url(#Gradient_13)'}} stroke="none" d="M 61 565 L 61 564 60 564 60 565 61 565 Z" />
                <path style={{fill:'url(#Gradient_14)'}} stroke="none" d="M 63 565 L 63 564 62 564 62 565 63 565 Z" />
                <path style={{fill:'url(#Gradient_15)'}} stroke="none" d="M 63 566 L 62 566 62 567 63 567 63 566 Z" />
                <path style={{fill:'url(#Gradient_16)'}} stroke="none" d="M 62 562 L 62 563 63 563 63 562 62 562 Z" />
                <path style={{fill:'url(#Gradient_17)'}} stroke="none" d="M 61 563 L 61 562 60 562 60 563 61 563 Z" />
                <path style={{fill:'url(#Gradient_18)'}} stroke="none" d="M 61 561 L 61 560 60 560 60 561 61 561 Z" />
                <path style={{fill:'url(#Gradient_19)'}} stroke="none" d="M 63 561 L 63 560 62 560 62 561 63 561 Z" />
                <path style={{fill:'url(#Gradient_20)'}} stroke="none" d="M 61 559 L 61 558 60 558 60 559 61 559 Z" />
                <path style={{fill:'url(#Gradient_21)'}} stroke="none" d="M 63 558 L 62 558 62 559 63 559 63 558 Z" />
                <path style={{fill:'url(#Gradient_22)'}} stroke="none" d="M 61 551 L 61 550 60 550 60 551 61 551 Z" />
                <path style={{fill:'url(#Gradient_23)'}} stroke="none" d="M 63 556 L 62 556 62 557 63 557 63 556 Z" />
                <path style={{fill:'url(#Gradient_24)'}} stroke="none" d="M 61 555 L 61 554 60 554 60 555 61 555 Z" />
                <path style={{fill:'url(#Gradient_25)'}} stroke="none" d="M 63 554 L 62 554 62 555 63 555 63 554 Z" />
                <path style={{fill:'url(#Gradient_26)'}} stroke="none" d="M 61 553 L 61 552 60 552 60 553 61 553 Z" />
                <path style={{fill:'url(#Gradient_27)'}} stroke="none" d="M 63 552 L 62 552 62 553 63 553 63 552 Z" />
                <path style={{fill:'url(#Gradient_28)'}} stroke="none" d="M 63 550 L 62 550 62 551 63 551 63 550 Z" />
            </g>
        </defs>

        <g transform="matrix( 1, 0, 0, 1, 0, 0) ">
            <use xlinkHref="#Layer0_0_FILL"/>
        </g>

        <g transform="matrix( 1, 0, 0, 1, 0, 0) ">
            <use xlinkHref="#Layer0_1_FILL"/>
        </g>

        <g transform="matrix( 1, 0, 0, 1, 0, 0) ">
            <use xlinkHref="#Layer0_2_FILL"/>
        </g>

        <g transform="matrix( 1, 0, 0, 1, 0, 0) ">
            <use xlinkHref="#Layer0_3_FILL"/>
        </g>

        <g transform="matrix( 1, 0, 0, 1, 0, 0) ">
            <use xlinkHref="#Layer0_4_FILL"/>
        </g>

        <g transform="matrix( 1, 0, 0, 1, 0, 0) ">
            <use xlinkHref="#Layer0_5_FILL"/>
        </g>

        <g transform="matrix( 1, 0, 0, 1, 0, 0) ">
            <use xlinkHref="#Layer0_6_FILL"/>
        </g>
    </g>;

export default ToolBarBg;