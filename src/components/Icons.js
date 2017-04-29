import React from 'react';
import * as ActionTypes from './../actions/ActionTypes';

const Icons = {};

/**
 *
 * @type {React.Component}
 */
Icons[ActionTypes.SELECT] = class extends React.Component {
    render() {
        let iconId = `${this.props.name}_Icon`;
        let fillId = `${this.props.name}_FILL`;
        let fillIdRef = `#${fillId}`;

        return React.createElement('g', null, <g id={iconId} transform="matrix( 1, 0, 0, 1, 0, 0)">
            <defs>
                <g id={fillId}>
                    <path fill={this.props.color} fillOpacity={0.5} stroke="none" d="
                        M 6 2
                        L 5 2 5 12 6 12 6 2 Z"/>
    
                    <path fill={this.props.color} stroke="none" d="
                        M 6 2
                        L 6 1 5 1 5 0 4 0 4 14 5 14 5 13 6 13 6 12 5 12 5 2 6 2
                        M 12 8
                        L 12 7 11 7 11 6 10 6 10 5 9 5 9 4 8 4 8 3 7 3 7 2 6 2
                        6 12 7 12 7 11 8 11 8 13 9 13 9 15 10 15 10 17 12 17 12
                        14 11 14 11 12 10 12 10 10 14 10 14 9 13 9 13 8 12 8 Z"/>
                </g>
            </defs>
    
            <g transform="matrix( 1, 0, 0, 1, 0, 0)">
                <use xlinkHref={fillIdRef}/>
            </g>
        </g>);
    }
};
/**
 *
 * @type {React.Component}
 */
Icons[ActionTypes.SEND_TO_BACK] = class extends React.Component {
    render() {
        let iconId = `${this.props.name}_Icon`;
        let fillId = `${this.props.name}_FILL`;
        let fillIdRef = `#${fillId}`;

        return React.createElement('g', null, <g id={iconId} transform="matrix( 1, 0, 0, 1, 0, 0)">
            <defs>
                <g id={fillId}>
                    <path fill={this.props.color} stroke="none" d="
                        M 9 11
                        L 7 11 7 12 9 12 9 11
                        M 10 12
                        L 9 12 9 13 10 13 10 12
                        M 5 10
                        L 5 11 7 11 7 10 5 10
                        M 1 9
                        L 0 9 0 10 1 10 1 9
                        M 1 7
                        L 0 7 0 8 1 8 1 7
                        M 3 9
                        L 3 8 1 8 1 9 3 9
                        M 5 9
                        L 3 9 3 10 5 10 5 9
                        M 4 4
                        L 3 4 3 5 4 5 4 4
                        M 2 6
                        L 1 6 1 7 2 7 2 6
                        M 2 5
                        L 2 6 3 6 3 5 2 5
                        M 5 3
                        L 4 3 4 4 5 4 5 3
                        M 6 3
                        L 6 2 5 2 5 3 6 3
                        M 7 2
                        L 7 1 6 1 6 2 7 2
                        M 8 1
                        L 8 0 7 0 7 1 8 1
                        M 10 2
                        L 10 1 8 1 8 2 10 2
                        M 16 7
                        L 16 6 15 6 15 7 16 7
                        M 16 7
                        L 16 8 17 8 17 7 16 7
                        M 12 9
                        L 12 10 13 10 13 9 12 9
                        M 12 11
                        L 12 10 11 10 11 11 12 11
                        M 11 12
                        L 11 11 10 11 10 12 11 12
                        M 13 8
                        L 13 9 14 9 14 10 13 10 13 11 12 11 12 12 11 12 11 13 10 13 10 14 9 14 9 13 7 13 7 12 5 12 5 11 3 11 3 10 1 10 1 11 0 11 0 12 1 12 1 13 3 13 3 14 5 14 5 15 7 15 7 16 9 16 9 17 10 17 10 16 11 16 11 15 12 15 12 14 13 14 13 13 14 13 14 12 15 12 15 11 16 11 16 10 17 10 17 9 16 9 16 8 15 8 15 8.95 14 8.95 14 8 13 8
                        M 15 7
                        L 14 7 14 8 15 8 15 7
                        M 12 3
                        L 12 2 10 2 10 3 12 3
                        M 14 4
                        L 14 3 12 3 12 4 14 4
                        M 16 5
                        L 16 4 14 4 14 5 16 5
                        M 17 5
                        L 16 5 16 6 17 6 17 5 Z"/>
                </g>
            </defs>

            <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                <use xlinkHref={fillIdRef} />
            </g>
        </g>);
    }
};
/**
 *
 * @type {React.Component}
 */
Icons[ActionTypes.SEND_TO_FRONT] = class extends React.Component {
    render() {
        let iconId = `${this.props.name}_Icon`;
        let fillId = `${this.props.name}_FILL`;
        let fillIdRef = `#${fillId}`;

        return React.createElement('g', null, <g id={iconId} transform="matrix( 1, 0, 0, 1, 0, 0)">
            <defs>
                <g id={fillId}>
                    <path fill={this.props.color} stroke="none" d="
                        M 11 14
                        L 11 15 12 15 12 14 11 14
                        M 13 14
                        L 13 13 12 13 12 14 13 14
                        M 3 14
                        L 5 14 5 13 3 13 3 14
                        M 10 15
                        L 10 16 11 16 11 15 10 15
                        M 7 16
                        L 9 16 9 15 7 15 7 16
                        M 10 16
                        L 9 16 9 17 10 17 10 16
                        M 7 15
                        L 7 14 5 14 5 15 7 15
                        M 9 14
                        L 9 15 10 15 10 14 9 14
                        M 9 14
                        L 9 13 7 13 7 14 9 14
                        M 10 13
                        L 10 14 11 14 11 13 10 13
                        M 7 12
                        L 5 12 5 13 7 13 7 12
                        M 3 12
                        L 1 12 1 13 3 13 3 12
                        M 5 12
                        L 5 11 3 11 3 12 5 12
                        M 1 12
                        L 1 11 0 11 0 12 1 12
                        M 1 10
                        L 1 11 3 11 3 10 1 10
                        M 1 9
                        L 0 9 0 10 1 10 1 9
                        M 17 9
                        L 16 9 16 10 17 10 17 9
                        M 16 7
                        L 16 8 17 8 17 7 16 7
                        M 14 12
                        L 13 12 13 13 14 13 14 12
                        M 15 10
                        L 15 11 16 11 16 10 15 10
                        M 13 11
                        L 14 11 14 10 13 10 13 11
                        M 14 11
                        L 14 12 15 12 15 11 14 11
                        M 12 11
                        L 12 12 13 12 13 11 12 11
                        M 12 12
                        L 11 12 11 13 12 13 12 12
                        M 15 8
                        L 15 9 16 9 16 8 15 8
                        M 15 9
                        L 14 9 14 10 15 10 15 9
                        M 16 5
                        L 16 4 14 4 14 3 12 3 12 2 10 2 10 1 8 1 8 0 7 0 7 1 6 1 6 2 5 2 5 3 4 3 4 4 3 4 3 5 2 5 2 6 1 6 1 7 0 7 0 8 1 8 1 9 3 9 3 10 5 10 5 11 7 11 7 12 9 12 9 13 10 13 10 12 11 12 11 11 12 11 12 10 13 10 13 9 14 9 14 8 15 8 15 7 16 7 16 6 17 6 17 5 16 5 Z"/>
                </g>
            </defs>

            <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                <use xlinkHref={fillIdRef} />
            </g>
        </g>);
    }
};
/**
 *
 * @type {React.Component}
 */
Icons[ActionTypes.SAVE] = class extends React.Component {
    render() {
        let iconId = `${this.props.name}_Icon`;
        let fillId = `${this.props.name}_FILL`;
        let fillIdRef = `#${fillId}`;

        return React.createElement('g', null, <g id={iconId} transform="matrix( 1, 0, 0, 1, 0, 0)">
            <defs>
                <g id={fillId}>
                    <path fill={this.props.color}
                          stroke="none" d="
                          M 2 16
                          L 2 17 17 17 17 0 0 0 0 15 1 15 1 16 2 16
                          M 14 1
                          L 14 6 3 6 3 1 14 1
                          M 15 1
                          L 16 1 16 2 15 2 15 1
                          M 4 12
                          L 13 12 13 16 4 16 4 12
                          M 7 13
                          L 5 13 5 15 7 15 7 13 Z"/>
                </g>
            </defs>

            <g transform="matrix( 1, 0, 0, 1, 0, 0)">
                <use xlinkHref={fillIdRef} />
            </g>
        </g>);
    }
};
/**
 *
 * @type {React.Component}
 */
Icons[ActionTypes.ERASE] = class extends React.Component {
    render() {
        let iconId = `${this.props.name}_Icon`;
        let fillId = `${this.props.name}_FILL`;
        let fillIdRef = `#${fillId}`;

        return React.createElement('g', null, <g id={iconId} transform="matrix( 1, 0, 0, 1, 0, 0)">
            <defs>
                <g id={fillId}>
                    <path fill={this.props.color}
                          stroke="none" d="
                            M 6 6
                            L 5 6 5 7 6 7 6 6
                            M 10 12
                            L 9 12 9 13 10 13 10 12
                            M 1 12
                            L 0 12 0 14 9 14 9 13 8 13 8 12 7 12 7 13 1 13 1 12
                            M 2 12
                            L 2 10 1 10 1 12 2 12
                            M 4 8
                            L 3 8 3 9 2 9 2 10 8 10 8 12 9 12 9 10 10 10 10 9 4 9 4 8
                            M 5 8
                            L 5 7 4 7 4 8 5 8
                            M 7 4
                            L 7 5 8 5 8 4 7 4
                            M 7 6
                            L 7 5 6 5 6 6 7 6
                            M 9 3
                            L 8 3 8 4 9 4 9 3
                            M 16 5
                            L 15 5 15 7 16 7 16 5
                            M 12 10
                            L 13 10 13 9 12 9 12 10
                            M 12 10
                            L 11 10 11 11 12 11 12 10
                            M 11 12
                            L 11 11 10 11 10 12 11 12
                            M 12 7
                            L 11 7 11 8 12 8 12 7
                            M 11 9
                            L 11 8 10 8 10 9 11 9
                            M 14 8
                            L 13 8 13 9 14 9 14 8
                            M 14 7
                            L 14 8 15 8 15 7 14 7
                            M 13 6
                            L 12 6 12 7 13 7 13 6
                            M 15 5
                            L 15 4 14 4 14 5 15 5
                            M 13 6
                            L 14 6 14 5 13 5 13 6
                            M 17 5
                            L 17 2 9 2 9 3 15 3 15 4 16 4 16 5 17 5 Z"/>
                </g>
            </defs>

            <g transform="matrix( 1, 0, 0, 1, 0, 0)">
                <use xlinkHref={fillIdRef} />
            </g>
        </g>);
    }
};
/**
 *
 * @type {React.Component}
 */
Icons[ActionTypes.UNDO] = class extends React.Component {
    render() {
        let iconId = `${this.props.name}_Icon`;
        let fillId = `${this.props.name}_FILL`;
        let fillIdRef = `#${fillId}`;

        return React.createElement('g', null, <g id={iconId} transform="matrix( 1, 0, 0, 1, 0, 0)">
            <defs>
                <g id={fillId}>
                    <path fill={this.props.color}
                          stroke="none" d="
                        M 5.1 6.95
                        L 5.75 3 0 8.5 6.75 13 5.15 9.4
                        Q 11.7 7.9 17 11.4
                        L 17 10.25
                        Q 12.1 6.3 5.1 6.95 Z"/>
                </g>
            </defs>

            <g transform="matrix( 1, 0, 0, 1, 0, 0)">
                <use xlinkHref={fillIdRef} />
            </g>
        </g>);
    }
};
/**
 *
 * @type {React.Component}
 */
Icons[ActionTypes.REDO] = class extends React.Component {
    render() {
        let iconId = `${this.props.name}_Icon`;
        let fillId = `${this.props.name}_FILL`;
        let fillIdRef = `#${fillId}`;

        return React.createElement('g', null, <g id={iconId} transform="matrix( 1, 0, 0, 1, 0, 0)">
            <defs>
                <g id={fillId}>
                    <path fill={this.props.color}
                          stroke="none" d="
                        M 11.9 6.95
                        Q 4.9 6.3 0 10.25
                        L 0 11.4
                        Q 5.3 7.9 11.85 9.4
                        L 10.25 13 17 8.5 11.25 3 11.9 6.95 Z"/>
                </g>
            </defs>

            <g transform="matrix( 1, 0, 0, 1, 0, 0)">
                <use xlinkHref={fillIdRef} />
            </g>
        </g>);
    }
};
/**
 *
 * @type {React.Component}
 */
Icons[ActionTypes.HELP] = class extends React.Component {
    render() {
        let iconId = `${this.props.name}_Icon`;
        let fillId = `${this.props.name}_FILL`;
        let fillIdRef = `#${fillId}`;

        return React.createElement('g', null, <g id={iconId} transform="matrix( 1, 0, 0, 1, 0, 0)">
            <defs>
                <g id={fillId}>
                    <path fill={this.props.color}
                          stroke="none" d="
                        M 9.55 13.55
                        Q 9.55 12.9 9.15 12.5 8.7 12.05 8.1 12.05 7.55 12.05 7.1 12.5 6.65 12.9 6.65 13.55 6.65 14.2 7.1 14.65 7.55 15 8.1 15 8.7 15 9.15 14.65 9.55 14.2 9.55 13.55
                        M 11.5 6.5
                        Q 12 5.8 12 4.9 12 3.7 11.1 2.85 10.15 2 8.45 2 6.8 2 5.95 2.85 5 3.65 5 4.75 5 5.35 5.3 5.7 5.65 6.05 6.15 6.05 6.6 6.05 6.95 5.75 7.2 5.45 7.2 5 7.2 4.5 6.8 3.8 6.65 3.45 6.65 3.35 6.65 3.15 6.9 2.9 7.25 2.65 7.75 2.65 8.3 2.65 8.8 3.25 9.3 3.8 9.3 5 9.3 5.8 9.15 6.35 9 6.9 8.5 7.8 8.05 8.7 7.95 9.2 7.8 9.7 7.8 10.75
                        L 8.2 10.75
                        Q 8.25 9.75 8.55 9.3 8.8 8.8 9.7 8.2 11.1 7.3 11.5 6.5 Z"/>
                </g>
            </defs>

            <g transform="matrix( 1, 0, 0, 1, 0, 0)">
                <use xlinkHref={fillIdRef} />
            </g>
        </g>);
    }
};
/**
 *
 * @type {React.Component}
 */
Icons[ActionTypes.RECT] = class extends React.Component {
    render() {
        let iconId = `${this.props.name}_Icon`;
        let fillId = `${this.props.name}_FILL`;
        let fillIdRef = `#${fillId}`;

        return React.createElement('g', null, <g id={iconId} transform="matrix( 1, 0, 0, 1, 0, 0)">
            <defs>
                <g id={fillId}>
                    <path fill={this.props.color}
                          stroke="none" d="
                        M 17 2
                        L 0 2 0 15 17 15 17 2 Z"/>
                </g>
            </defs>

            <g transform="matrix( 1, 0, 0, 1, 0, 0)">
                <use xlinkHref={fillIdRef} />
            </g>
        </g>);
    }
};
/**
 *
 * @type {React.Component}
 */
Icons[ActionTypes.WHITE_RECT] = class extends React.Component {
    render() {
        let iconId = `${this.props.name}_Icon`;
        let fillId = `${this.props.name}_FILL`;
        let fillIdRef = `#${fillId}`;

        return React.createElement('g', null, <g id={iconId} transform="matrix( 1, 0, 0, 1, 0, 0)">
            <defs>
                <g id={fillId}>
                    <path stroke={this.props.color}
                          strokeWidth="1"
                          strokeLinejoin="miter"
                          strokeLinecap="square"
                          fill="none" d="
                        M 17 2
                        L 0 2 0 15 17 15 17 2
                        M 16 14
                        L 1 14 1 3 16 3 16 14 Z"/>
                </g>
            </defs>

            <g transform="matrix( 1, 0, 0, 1, 0, 0)">
                <use xlinkHref={fillIdRef} />
            </g>
        </g>);
    }
};
/**
 *
 * @type {React.Component}
 */
Icons[ActionTypes.CIRCLE] = class extends React.Component {
    render() {
        let iconId = `${this.props.name}_Icon`;
        let fillId = `${this.props.name}_FILL`;
        let fillIdRef = `#${fillId}`;

        return React.createElement('g', null, <g id={iconId} transform="matrix( 1, 0, 0, 1, 0, 0)">
            <defs>
                <g id={fillId}>
                    <path fill={this.props.color}
                          stroke="none" d="
                        M 16 8.5
                        Q 16 5.35 13.8 3.15 12.15 1.55 9.95 1.15 9.25 1 8.5 1
                        8.45 1 8.4 1 5.3 1 3.15 3.15 1 5.3 1 8.4 1 8.45 1 8.5
                        1 9.25 1.15 9.95 1.55 12.15 3.15 13.8 5.35 16 8.5 16
                        11.65 16 13.8 13.8 16 11.65 16 8.5 Z"/>
                </g>
            </defs>

            <g transform="matrix( 1, 0, 0, 1, 0, 0)">
                <use xlinkHref={fillIdRef} />
            </g>
        </g>);
    }
};
/**
 *
 * @type {React.Component}
 */
Icons[ActionTypes.WHITE_CIRCLE] = class extends React.Component {
    render() {
        let iconId = `${this.props.name}_Icon`;
        let fillId = `${this.props.name}_FILL`;
        let fillIdRef = `#${fillId}`;

        return React.createElement('g', null, <g id={iconId} transform="matrix( 1, 0, 0, 1, 0, 0)">
            <defs>
                <g id={fillId}>
                    <path stroke={this.props.color}
                          strokeWidth="1"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          fill="none" d="
                        M 15.5 8.5
                        Q 15.5 11.45 13.45 13.45 11.45 15.5 8.5 15.5 5.55 15.5 3.5
                        13.45 2 11.9 1.65 9.85 1.5 9.2 1.5 8.5 1.5 8.45 1.5 8.4 1.5
                        5.5 3.5 3.5 5.5 1.5 8.4 1.5 8.45 1.5 8.5 1.5 9.2 1.5 9.85 1.65
                        11.9 2 13.45 3.5 15.5 5.55 15.5 8.5 Z"/>
                </g>
            </defs>

            <g transform="matrix( 1, 0, 0, 1, 0, 0)">
                <use xlinkHref={fillIdRef} />
            </g>
        </g>);
    }
};
/**
 *
 * @type {React.Component}
 */
Icons[ActionTypes.ARC] = class extends React.Component {
    render() {
        let iconId = `${this.props.name}_Icon`;
        let fillId = `${this.props.name}_FILL`;
        let fillIdRef = `#${fillId}`;

        return React.createElement('g', null, <g id={iconId} transform="matrix( 1, 0, 0, 1, 0, 0)">
            <defs>
                <g id={fillId}>
                    <path fill={this.props.color}
                          stroke="none" d="
                        M 3 3
                        L 3 0 0 0 0 3 1 3
                        Q 1.1 5.5 2.15 7.9 3.2 10.35 4.95 12.05 6.65 13.8 9.1 14.85 11.5 15.85 14 15.95
                        L 14 16.95 17 16.95 17 13.95 14 13.95 14 14.95
                        Q 11.75 14.85 9.5 13.9 7.2 12.95 5.65 11.35 4.05 9.8 3.1 7.5 2.1 5.25 2 3
                        L 3 3
                        M 1 1
                        L 2 1 2 2 1 2 1 1
                        M 16 14.95
                        L 16 15.95 15 15.95 15 14.95 16 14.95 Z"/>
                </g>
            </defs>

            <g transform="matrix( 1, 0, 0, 1, 0, 0)">
                <use xlinkHref={fillIdRef} />
            </g>
        </g>);
    }
};
/**
 *
 * @type {React.Component}
 */
Icons[ActionTypes.PLAIN_STROKE] = class extends React.Component {
    render() {
        let iconId = `${this.props.name}_Icon`;
        let fillId = `${this.props.name}_FILL`;
        let fillIdRef = `#${fillId}`;

        return React.createElement('g', null, <g id={iconId} transform="matrix( 1, 0, 0, 1, 0, 0)">
            <defs>
                <g id={fillId}>
                    <path fill={this.props.color}
                          stroke="none" d="
                        M 14 14
                        L 14 15 15 15 15 14 14 14
                        M 13 14
                        L 14 14 14 13 13 13 13 14
                        M 16 16
                        L 16 15 15 15 15 16 16 16
                        M 16 16
                        L 16 17 17 17 17 16 16 16
                        M 10 9
                        L 9 9 9 10 10 10 10 9
                        M 8 9
                        L 9 9 9 8 8 8 8 9
                        M 8 8
                        L 8 7 7 7 7 8 8 8
                        M 4 4
                        L 4 5 5 5 5 4 4 4
                        M 1 2
                        L 2 2 2 1 1 1 1 2
                        M 0 1
                        L 1 1 1 0 0 0 0 1
                        M 3 3
                        L 3 2 2 2 2 3 3 3
                        M 4 3
                        L 3 3 3 4 4 4 4 3
                        M 6 6
                        L 6 5 5 5 5 6 6 6
                        M 7 6
                        L 6 6 6 7 7 7 7 6
                        M 11 11
                        L 11 10 10 10 10 11 11 11
                        M 13 12
                        L 12 12 12 13 13 13 13 12
                        M 11 11
                        L 11 12 12 12 12 11 11 11 Z"/>
                </g>
            </defs>

            <g transform="matrix( 1, 0, 0, 1, 0, 0)">
                <use xlinkHref={fillIdRef} />
            </g>
        </g>);
    }
};
/**
 *
 * @type {React.Component}
 */
Icons[ActionTypes.DOTTED_STROKE] = class extends React.Component {
    render() {
        let iconId = `${this.props.name}_Icon`;
        let fillId = `${this.props.name}_FILL`;
        let fillIdRef = `#${fillId}`;

        return React.createElement('g', null, <g id={iconId} transform="matrix( 1, 0, 0, 1, 0, 0)">
            <defs>
                <g id={fillId}>
                    <path fill={this.props.color}
                          stroke="none" d="
                        M 14 15
                        L 15 15 15 14 14 14 14 15
                        M 16 16
                        L 16 17 17 17 17 16 16 16
                        M 8 9
                        L 9 9 9 8 8 8 8 9
                        M 4 4
                        L 4 5 5 5 5 4 4 4
                        M 0 0
                        L 0 1 1 1 1 0 0 0
                        M 3 3
                        L 3 2 2 2 2 3 3 3
                        M 7 6
                        L 6 6 6 7 7 7 7 6
                        M 11 11
                        L 11 10 10 10 10 11 11 11
                        M 13 12
                        L 12 12 12 13 13 13 13 12 Z"/>
                </g>
            </defs>

            <g transform="matrix( 1, 0, 0, 1, 0, 0)">
                <use xlinkHref={fillIdRef} />
            </g>
        </g>);
    }
};
/**
 *
 * @type {React.Component}
 */
Icons[ActionTypes.DASHED_STROKE] = class extends React.Component {
    render() {
        let iconId = `${this.props.name}_Icon`;
        let fillId = `${this.props.name}_FILL`;
        let fillIdRef = `#${fillId}`;

        return React.createElement('g', null, <g id={iconId} transform="matrix( 1, 0, 0, 1, 0, 0)">
            <defs>
                <g id={fillId}>
                    <path fill={this.props.color}
                          stroke="none" d="
                        M 16 16
                        L 16 15 15 15 15 16 16 16
                        M 16 16
                        L 16 17 17 17 17 16 16 16
                        M 0 1
                        L 1 1 1 0 0 0 0 1
                        M 1 2
                        L 2 2 2 1 1 1 1 2
                        M 4 4
                        L 4 5 5 5 5 4 4 4
                        M 4 3
                        L 3 3 3 4 4 4 4 3
                        M 8 8
                        L 8 7 7 7 7 8 8 8
                        M 7 6
                        L 6 6 6 7 7 7 7 6
                        M 10 9
                        L 9 9 9 10 10 10 10 9
                        M 11 11
                        L 11 10 10 10 10 11 11 11
                        M 14 13
                        L 13 13 13 14 14 14 14 13
                        M 13 12
                        L 12 12 12 13 13 13 13 12 Z"/>
                </g>
            </defs>

            <g transform="matrix( 1, 0, 0, 1, 0, 0)">
                <use xlinkHref={fillIdRef} />
            </g>
        </g>);
    }
};
/**
 *
 * @type {React.Component}
 */
Icons[ActionTypes.PEN] = class extends React.Component {
    render() {
        let iconId = `${this.props.name}_Icon`;
        let fillId = `${this.props.name}_FILL`;
        let fillIdRef = `#${fillId}`;

        return React.createElement('g', null, <g id={iconId} transform="matrix( 1, 0, 0, 1, 0, 0)">
            <defs>
                <g id={fillId}>
                    <path fill={this.props.color}
                          stroke="none" d="
                        M 1 15
                        L 1 13 0 13 0 17 4 17 4 16 2 16 2 15 1 15
                        M 4 14
                        L 3 14 3 15 4 15 4 14
                        M 3 14
                        L 3 13 2 13 2 14 3 14
                        M 5 15
                        L 4 15 4 16 5 16 5 15
                        M 7 14
                        L 7 13 6 13 6 14 7 14
                        M 6 15
                        L 6 14 5 14 5 15 6 15
                        M 8 12
                        L 7 12 7 13 8 13 8 12
                        M 10 10
                        L 9 10 9 11 10 11 10 10
                        M 9 11
                        L 8 11 8 12 9 12 9 11
                        M 6 7
                        L 6 8 7 8 7 7 6 7
                        M 3 11
                        L 4 11 4 10 3 10 3 11
                        M 2 11
                        L 2 12 3 12 3 11 2 11
                        M 2 12
                        L 1 12 1 13 2 13 2 12
                        M 5 8
                        L 5 9 6 9 6 8 5 8
                        M 5 9
                        L 4 9 4 10 5 10 5 9
                        M 8 6
                        L 7 6 7 7 8 7 8 6
                        M 9 6
                        L 9 5 8 5 8 6 9 6
                        M 10 5
                        L 10 4 9 4 9 5 10 5
                        M 11 10
                        L 11 9 10 9 10 10 11 10
                        M 11 8
                        L 11 9 12 9 12 8 11 8
                        M 13 8
                        L 13 7 12 7 12 8 13 8
                        M 12 3
                        L 12 2 11 2 11 3 10 3 10 4 11 4 11 5 12 5 12 6 13 6 13 7 14 7 14 6 15 6 15 5 14 5 14 4 13 4 13 3 12 3
                        M 13 2
                        L 13 1 12 1 12 2 13 2
                        M 15 1
                        L 14 1 14 2 15 2 15 1
                        M 14 1
                        L 14 0 13 0 13 1 14 1
                        M 16 3
                        L 16 2 15 2 15 3 16 3
                        M 17 3
                        L 16 3 16 4 17 4 17 3
                        M 16 5
                        L 16 4 15 4 15 5 16 5 Z"/>
                </g>
            </defs>

            <g transform="matrix( 1, 0, 0, 1, 0, 0)">
                <use xlinkHref={fillIdRef} />
            </g>
        </g>);
    }
};
/**
 *
 * @type {React.Component}
 */
Icons[ActionTypes.TEXTFIELD] = class extends React.Component {
    render() {
        let iconId = `${this.props.name}_Icon`;
        let fillId = `${this.props.name}_FILL`;
        let fillIdRef = `#${fillId}`;

        return React.createElement('g', null, <g id={iconId} transform="matrix( 1, 0, 0, 1, 0, 0)">
            <defs>
                <g id={fillId}>
                    <path fill={this.props.color}
                          stroke="none" d="
                        M 13 17
                        L 14 17 14 16 13 16 13 17
                        M 11 17
                        L 12 17 12 16 11 16 11 17
                        M 16 17
                        L 16 16 15 16 15 17 16 17
                        M 16 15
                        L 16 14 15 14 15 15 16 15
                        M 4 16
                        L 3 16 3 17 4 17 4 16
                        M 1 16
                        L 1 17 2 17 2 16 1 16
                        M 2 15
                        L 2 14 1 14 1 15 2 15
                        M 10 16
                        L 9 16 9 17 10 17 10 16
                        M 6 17
                        L 6 16 5 16 5 17 6 17
                        M 7 16
                        L 7 17 8 17 8 16 7 16
                        M 1 10
                        L 1 11 2 11 2 10 1 10
                        M 2 12
                        L 1 12 1 13 2 13 2 12
                        M 2 9
                        L 2 8 1 8 1 9 2 9
                        M 1 5
                        L 2 5 2 4 1 4 1 5
                        M 2 6
                        L 1 6 1 7 2 7 2 6
                        M 2 0
                        L 1 0 1 1 2 1 2 0
                        M 1 3
                        L 2 3 2 2 1 2 1 3
                        M 4 1
                        L 4 0 3 0 3 1 4 1
                        M 6 1
                        L 6 0 5 0 5 1 6 1
                        M 10 1
                        L 10 0 9 0 9 1 10 1
                        M 8 1
                        L 8 0 7 0 7 1 8 1
                        M 16 7
                        L 16 6 15 6 15 7 16 7
                        M 16 12
                        L 15 12 15 13 16 13 16 12
                        M 15 10
                        L 15 11 16 11 16 10 15 10
                        M 15 8
                        L 15 9 16 9 16 8 15 8
                        M 12 4
                        L 12 5 13 5 13 3 4 3 4 5 5 5 5 4 8 4 8 13 7 13 7 14 10 14 10 13 9 13 9 4 12 4
                        M 12 0
                        L 11 0 11 1 12 1 12 0
                        M 14 0
                        L 13 0 13 1 14 1 14 0
                        M 16 5
                        L 16 4 15 4 15 5 16 5
                        M 16 3
                        L 16 2 15 2 15 3 16 3
                        M 16 1
                        L 16 0 15 0 15 1 16 1 Z"/>
                </g>
            </defs>

            <g transform="matrix( 1, 0, 0, 1, 0, 0)">
                <use xlinkHref={fillIdRef} />
            </g>
        </g>);
    }
};
/**
 *
 * @type {React.Component}
 */
Icons[ActionTypes.DIMENSION] = class extends React.Component {
    render() {
        let iconId = `${this.props.name}_Icon`;
        let fillId = `${this.props.name}_FILL`;
        let fillIdRef = `#${fillId}`;

        return React.createElement('g', null, <g id={iconId} transform="matrix( 1, 0, 0, 1, 0, 0)">
            <defs>
                <g id={fillId}>
                    <path fill={this.props.color}
                          stroke="none" d="
                        M 6 4
                        L 6 5 7.95 5 7.95 3 6.95 3 6.95 4 6 4
                        M 6.95 3
                        L 6.95 2 5 2 5 3 6.95 3
                        M 10 3
                        L 9 3 9 4 10 4 10 3
                        M 11 5
                        L 11 4 10 4 10 5 11 5
                        M 11 3
                        L 11 2 10 2 10 3 11 3
                        M 12 3
                        L 11 3 11 4 12 4 12 3
                        M 3 8
                        L 3 9 4 9 4 8 3 8
                        M 4 5
                        L 4 4 3 4 3 5 4 5
                        M 13 9
                        L 14 9 14 8 13 8 13 9
                        M 13 4
                        L 13 5 14 5 14 4 13 4
                        M 17 3
                        L 16 3 16 6 15 6 15 5 14 5 14 6 3 6 3 5 2 5 2 6 1 6 1 3 0 3 0 15 1 15 1 7 2 7 2 8 3 8 3 7 14 7 14 8 15 8 15 7 16 7 16 15 17 15 17 3 Z"/>
                </g>
            </defs>

            <g transform="matrix( 1, 0, 0, 1, 0, 0)">
                <use xlinkHref={fillIdRef} />
            </g>
        </g>);
    }
};
/**
 *
 * @type {React.Component}
 */
Icons[ActionTypes.WINDOW] = class extends React.Component {
    render() {
        let iconId = `${this.props.name}_Icon`;
        let fillId = `${this.props.name}_FILL`;
        let fillIdRef = `#${fillId}`;

        return React.createElement('g', null, <g id={iconId} transform="matrix( 1, 0, 0, 1, 0, 0)">
            <defs>
                <g id={fillId}>
                    <path fill={this.props.color}
                          stroke="none" d="
                        M 16 11
                        L 17 11 17 6 16 6 16 7 1 7 1 6 0 6 0 11 1 11 1 10 16 10 16 11
                        M 16 8
                        L 16 9 1 9 1 8 16 8 Z"/>
                </g>
            </defs>

            <g transform="matrix( 1, 0, 0, 1, 0, 0)">
                <use xlinkHref={fillIdRef} />
            </g>
        </g>);
    }
};
/**
 *
 * @type {React.Component}
 */
Icons[ActionTypes.DOOR] = class extends React.Component {
    render() {
        let iconId = `${this.props.name}_Icon`;
        let fillId = `${this.props.name}_FILL`;
        let fillIdRef = `#${fillId}`;

        return React.createElement('g', null, <g id={iconId} transform="matrix( 1, 0, 0, 1, 0, 0)">
            <defs>
                <g id={fillId}>
                    <path fill={this.props.color}
                          stroke="none" d="
                        M 1 4
                        L 1 3 0 3 0 14 1 14 1 4
                        M 17 3
                        L 16 3 16 4 16 14 17 14 17 3 Z"/>

                    <path fill={this.props.color}
                          fillOpacity={0.5}
                          stroke="none" d="
                        M 16 3
                        Q 12.8 3.2 10.5 5.75 9.1 7.25 8.5 9.1 7.9 7.25 6.55 5.75
                        L 6.55 5.8
                        Q 4.3 3.2 1.1 3
                        L 1 3 1 4 1.05 4
                        Q 3.85 4.2 5.8 6.45 7.95 8.8 8 12.2
                        L 8.05 13.7 8.95 13.7 9 12.2
                        Q 9.05 8.8 11.25 6.45 13.25 4.2 16 4
                        L 16 3 Z"/>
                </g>
            </defs>

            <g transform="matrix( 1, 0, 0, 1, 0, 0)">
                <use xlinkHref={fillIdRef} />
            </g>
        </g>);
    }
};
/**
 *
 * @type {React.Component}
 */
Icons[ActionTypes.DOUBLE_DOOR] = class extends React.Component {
    render() {
        let iconId = `${this.props.name}_Icon`;
        let fillId = `${this.props.name}_FILL`;
        let fillIdRef = `#${fillId}`;

        return React.createElement('g', null, <g id={iconId} transform="matrix( 1, 0, 0, 1, 0, 0)">
            <defs>
                <g id={fillId}>
                    <path fill={this.props.color}
                          stroke="none" d="
                        M 1 1.05
                        L 1 0.05
                        Q 0.75 0 0.5 0
                        L 0 0 0 17 1 17 1 1.05 Z"/>

                    <path fill={this.props.color}
                          fillOpacity={0.5}
                          stroke="none" d="
                        M 1 1.05
                        Q 1.15 1.05 1.35 1.05
                        L 1.4 1.05
                        Q 7.2 1.35 11.45 5.4 16 9.65 16 15.75
                        L 16 17 17 17 17 15.75
                        Q 17 9.25 12.15 4.65 7.6 0.35 1.45 0.05 1.2 0.05 1 0.05
                        L 1 1.05 Z"/>
                </g>
            </defs>

            <g transform="matrix( 1, 0, 0, 1, 0, 0)">
                <use xlinkHref={fillIdRef} />
            </g>
        </g>);
    }
};
/**
 *
 * @type {React.Component}
 */
Icons[ActionTypes.BIDET] = class extends React.Component {
    render() {
        let iconId = `${this.props.name}_Icon`;
        let fillId = `${this.props.name}_FILL`;
        let fillIdRef = `#${fillId}`;

        return React.createElement('g', null, <g id={iconId} transform="matrix( 1, 0, 0, 1, 0, 0)">
            <defs>
                <g id={fillId}>
                    <path fill={this.props.color}
                          stroke="none" d="
                        M 12 15
                        L 11 15 11 16 13 16 13 14 12 14 12 15
                        M 6 16
                        L 6 17 11 17 11 16 6 16
                        M 6 16
                        L 6 15 5 15 5 14 4 14 4 16 6 16
                        M 4 11
                        L 3 11 3 14 4 14 4 11
                        M 3 6
                        L 2 6 2 11 3 11 3 6
                        M 4 6
                        L 4 5 3 5 3 6 4 6
                        M 4 1
                        L 3 1 3 4 4 4 4 1
                        M 14 11
                        L 13 11 13 14 14 14 14 11
                        M 10 12
                        L 10 14 11 14 11 12 10 12
                        M 10 15
                        L 10 14 7 14 7 15 10 15
                        M 7 12
                        L 6 12 6 14 7 14 7 12
                        M 5 7
                        L 5 12 6 12 6 7 5 7
                        M 11 7
                        L 11 6 6 6 6 7 11 7
                        M 7 10
                        L 8 10 8 9 7 9 7 10
                        M 8 11
                        L 9 11 9 10 8 10 8 11
                        M 10 9
                        L 9 9 9 10 10 10 10 9
                        M 8 8
                        L 8 9 9 9 9 8 8 8
                        M 11 12
                        L 12 12 12 7 11 7 11 12
                        M 14 5
                        L 13 5 13 6 14 6 14 5
                        M 13 5
                        L 13 4 4 4 4 5 13 5
                        M 15 6
                        L 14 6 14 11 15 11 15 6
                        M 14 1
                        L 13 1 13 4 14 4 14 1
                        M 13 1
                        L 13 0 4 0 4 1 13 1 Z"/>
                </g>
            </defs>

            <g transform="matrix( 1, 0, 0, 1, 0, 0)">
                <use xlinkHref={fillIdRef} />
            </g>
        </g>);
    }
};
/**
 *
 * @type {React.Component}
 */
Icons[ActionTypes.SHOWER] = class extends React.Component {
    render() {
        let iconId = `${this.props.name}_Icon`;
        let fillId = `${this.props.name}_FILL`;
        let fillIdRef = `#${fillId}`;

        return React.createElement('g', null, <g id={iconId} transform="matrix( 1, 0, 0, 1, 0, 0)">
            <defs>
                <g id={fillId}>
                    <path fill={this.props.color}
                          stroke="none" d="
                        M 0 16.95
                        L 17 16.95 17 0 0 0 0 16.95
                        M 16 15.95
                        L 1 15.95 1 1 16 1 16 15.95
                        M 12 8.95
                        L 11 8.95 11 9.95 12 9.95 12 8.95
                        M 11 8.95
                        L 11 7.95 10 7.95 10 8.95 11 8.95
                        M 11 7.95
                        L 12 7.95 12 6.95 11 6.95 11 7.95
                        M 13 8.95
                        L 13 7.95 12 7.95 12 8.95 13 8.95
                        M 3 13.95
                        L 3 14.95 14 14.95 14 13.95 3 13.95
                        M 3 2.95
                        L 2 2.95 2 13.95 3 13.95 3 2.95
                        M 14 2.95
                        L 14 1.95 3 1.95 3 2.95 14 2.95
                        M 15 2.95
                        L 14 2.95 14 13.95 15 13.95 15 2.95 Z"/>
                </g>
            </defs>

            <g transform="matrix( 1, 0, 0, 1, 0, 0)">
                <use xlinkHref={fillIdRef} />
            </g>
        </g>);
    }
};
/**
 *
 * @type {React.Component}
 */
Icons[ActionTypes.BATH] = class extends React.Component {
    render() {
        let iconId = `${this.props.name}_Icon`;
        let fillId = `${this.props.name}_FILL`;
        let fillIdRef = `#${fillId}`;

        return React.createElement('g', null, <g id={iconId} transform="matrix( 1, 0, 0, 1, 0, 0)">
            <defs>
                <g id={fillId}>
                    <path fill={this.props.color}
                          stroke="none" d="
                        M 2 12
                        L 2 11 1 11 1 13 3 13 3 12 2 12
                        M 3 3
                        L 3 4 16 4 16 13 3 13 3 14 17 14 17 3 3 3
                        M 1 6
                        L 2 6 2 5 3 5 3 4 1 4 1 6
                        M 11 9
                        L 11 8 10 8 10 9 11 9
                        M 12 9
                        L 11 9 11 10 12 10 12 9
                        M 12 7
                        L 11 7 11 8 12 8 12 7
                        M 13 9
                        L 13 8 12 8 12 9 13 9
                        M 1 6
                        L 0 6 0 11 1 11 1 6 Z"/>

                    <path fill={this.props.color}
                          fillOpacity={0.5}
                          stroke="none" d="
                        M 3 10
                        L 3 7 2 7 2 10 3 10
                        M 4 11
                        L 4 10 3 10 3 11 4 11
                        M 4 6
                        L 3 6 3 7 4 7 4 6
                        M 15 12
                        L 15 5 4 5 4 6 14 6 14 11 4 11 4 12 15 12 Z"/>
                </g>
            </defs>

            <g transform="matrix( 1, 0, 0, 1, 0, 0)">
                <use xlinkHref={fillIdRef} />
            </g>
        </g>);
    }
};
/**
 *
 * @type {React.Component}
 */
Icons[ActionTypes.WASHBASIN] = class extends React.Component {
    render() {
        let iconId = `${this.props.name}_Icon`;
        let fillId = `${this.props.name}_FILL`;
        let fillIdRef = `#${fillId}`;

        return React.createElement('g', null, <g id={iconId} transform="matrix( 1, 0, 0, 1, 0, 0)">
            <defs>
                <g id={fillId}>
                    <path fill={this.props.color}
                          stroke="none" d="
                        M 11 15
                        L 13 15 13 14 11 14 11 15
                        M 6 15
                        L 6 16 11 16 11 15 6 15
                        M 4 14
                        L 4 15 6 15 6 14 4 14
                        M 3 12
                        L 2 12 2 14 4 14 4 13 3 13 3 12
                        M 2 9
                        L 1 9 1 12 2 12 2 9
                        M 1 4
                        L 0 4 0 9 1 9 1 4
                        M 2 3
                        L 1 3 1 4 2 4 2 3
                        M 15 9
                        L 15 12 16 12 16 9 15 9
                        M 15 12
                        L 14 12 14 13 13 13 13 14 15 14 15 12
                        M 15 3
                        L 15 2 2 2 2 3 15 3
                        M 11 12
                        L 6 12 6 13 11 13 11 12
                        M 5 11
                        L 5 10 4 10 4 12 6 12 6 11 5 11
                        M 4 7
                        L 3 7 3 10 4 10 4 7
                        M 13 7
                        L 13 6 4 6 4 7 13 7
                        M 11 11
                        L 11 12 13 12 13 10 12 10 12 11 11 11
                        M 8 9
                        L 9 9 9 8 8 8 8 9
                        M 14 7
                        L 13 7 13 10 14 10 14 7
                        M 17 4
                        L 16 4 16 9 17 9 17 4
                        M 16 4
                        L 16 3 15 3 15 4 16 4 Z"/>
                </g>
            </defs>

            <g transform="matrix( 1, 0, 0, 1, 0, 0)">
                <use xlinkHref={fillIdRef} />
            </g>
        </g>);
    }
};
/**
 *
 * @type {React.Component}
 */
Icons[ActionTypes.COOKER] = class extends React.Component {
    render() {
        let iconId = `${this.props.name}_Icon`;
        let fillId = `${this.props.name}_FILL`;
        let fillIdRef = `#${fillId}`;

        return React.createElement('g', null, <g id={iconId} transform="matrix( 1, 0, 0, 1, 0, 0)">
            <defs>
                <g id={fillId}>
                    <path fill={this.props.color}
                          stroke="none" d="
                        M 3.55 16
                        L 3.55 17 13.55 17 13.55 16 17 16 17 0 0 0 0 16 3.55 16
                        M 16 15
                        L 1 15 1 1 16 1 16 15
                        M 4 13
                        L 4 14 6 14 6 13 4 13
                        M 7 11
                        L 6 11 6 13 7 13 7 11
                        M 4 10
                        L 4 11 6 11 6 10 4 10
                        M 4 11
                        L 3 11 3 13 4 13 4 11
                        M 4 7
                        L 4 8 6 8 6 7 4 7
                        M 4 6
                        L 3 6 3 7 4 7 4 6
                        M 2 4
                        L 2 6 3 6 3 4 2 4
                        M 4 3
                        L 3 3 3 4 4 4 4 3
                        M 7 4
                        L 7 6 8 6 8 4 7 4
                        M 7 6
                        L 6 6 6 7 7 7 7 6
                        M 7 3
                        L 6 3 6 4 7 4 7 3
                        M 6 3
                        L 6 2 4 2 4 3 6 3
                        M 14 13
                        L 12 13 12 14 14 14 14 13
                        M 15 11
                        L 14 11 14 13 15 13 15 11
                        M 12 11
                        L 11 11 11 13 12 13 12 11
                        M 14 10
                        L 12 10 12 11 14 11 14 10
                        M 14 6
                        L 12 6 12 7 14 7 14 6
                        M 14 4
                        L 14 3 12 3 12 4 14 4
                        M 14 4
                        L 14 6 15 6 15 4 14 4
                        M 12 4
                        L 11 4 11 6 12 6 12 4 Z"/>
                </g>
            </defs>

            <g transform="matrix( 1, 0, 0, 1, 0, 0)">
                <use xlinkHref={fillIdRef} />
            </g>
        </g>);
    }
};
/**
 *
 * @type {React.Component}
 */
Icons[ActionTypes.SINK] = class extends React.Component {
    render() {
        let iconId = `${this.props.name}_Icon`;
        let fillId = `${this.props.name}_FILL`;
        let fillIdRef = `#${fillId}`;

        return React.createElement('g', null, <g id={iconId} transform="matrix( 1, 0, 0, 1, 0, 0)">
            <defs>
                <g id={fillId}>
                    <path fill={this.props.color}
                          stroke="none" d="
                        M 17 3
                        L 0 3 0 14 17 14 17 3
                        M 16 13
                        L 1 13 1 4 16 4 16 13
                        M 5 7
                        L 5 8 6 8 6 7 5 7
                        M 3 11
                        L 3 12 8 12 8 11 3 11
                        M 3 6
                        L 2 6 2 11 3 11 3 6
                        M 9 6
                        L 8 6 8 11 9 11 9 6
                        M 8 6
                        L 8 5 3 5 3 6 8 6
                        M 15 7
                        L 15 6 10 6 10 7 15 7
                        M 15 9
                        L 15 8 10 8 10 9 15 9
                        M 15 11
                        L 15 10 10 10 10 11 15 11 Z"/>
                </g>
            </defs>

            <g transform="matrix( 1, 0, 0, 1, 0, 0)">
                <use xlinkHref={fillIdRef} />
            </g>
        </g>);
    }
};

export default Icons;