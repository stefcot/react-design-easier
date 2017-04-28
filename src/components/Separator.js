import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @type {React.Component}
 */
class Separator extends React.Component {
    render() {
        let iconId = `${this.props.name}_Icon`;
        let fillId = `${this.props.name}_FILL`;
        let fillIdRef = `#${fillId}`;
        let mat = `matrix( 1, 0, 0, 1, ${this.props.x}, ${this.props.y})`;

        return React.createElement('g', null, <g id={iconId} transform={mat}>
            <defs>
                <g id={fillId}>
                    <path fill={this.props.color} stroke="none" d="
                        M 3 24
                        L 2 24 2 25 3 25 3 24 Z"/>

                    <path fill={this.props.color} stroke="none" d="
                        M 1 24
                        L 0 24 0 25 1 25 1 24 Z"/>

                    <path fill={this.props.color} stroke="none" d="
                        M 2 22
                        L 2 23 3 23 3 22 2 22 Z"/>

                    <path fill={this.props.color} stroke="none" d="
                        M 0 23
                        L 1 23 1 22 0 22 0 23 Z"/>

                    <path fill={this.props.color} stroke="none" d="
                        M 0 20
                        L 0 21 1 21 1 20 0 20 Z"/>

                    <path fill={this.props.color} stroke="none" d="
                        M 3 21
                        L 3 20 2 20 2 21 3 21 Z"/>

                    <path fill={this.props.color} stroke="none" d="
                        M 3 18
                        L 2 18 2 19 3 19 3 18 Z"/>

                    <path fill={this.props.color} stroke="none" d="
                        M 2 16
                        L 2 17 3 17 3 16 2 16 Z"/>

                    <path fill={this.props.color} stroke="none" d="
                        M 0 17
                        L 1 17 1 16 0 16 0 17 Z"/>

                    <path fill={this.props.color} stroke="none" d="
                        M 1 18
                        L 0 18 0 19 1 19 1 18 Z"/>

                    <path fill={this.props.color} stroke="none" d="
                        M 1 14
                        L 0 14 0 15 1 15 1 14 Z"/>

                    <path fill={this.props.color} stroke="none" d="
                        M 3 15
                        L 3 14 2 14 2 15 3 15 Z"/>

                    <path fill={this.props.color} stroke="none" d="
                        M 3 12
                        L 2 12 2 13 3 13 3 12 Z"/>

                    <path fill={this.props.color} stroke="none" d="
                        M 1 12
                        L 0 12 0 13 1 13 1 12 Z"/>

                    <path fill={this.props.color} stroke="none" d="
                        M 1 11
                        L 1 10 0 10 0 11 1 11 Z"/>

                    <path fill={this.props.color} stroke="none" d="
                        M 2 10
                        L 2 11 3 11 3 10 2 10 Z"/>

                    <path fill={this.props.color} stroke="none" d="
                        M 0 8
                        L 0 9 1 9 1 8 0 8 Z"/>

                    <path fill={this.props.color} stroke="none" d="
                        M 3 9
                        L 3 8 2 8 2 9 3 9 Z"/>

                    <path fill={this.props.color} stroke="none" d="
                        M 3 6
                        L 2 6 2 7 3 7 3 6 Z"/>

                    <path fill={this.props.color} stroke="none" d="
                        M 2 4
                        L 2 5 3 5 3 4 2 4 Z"/>

                    <path fill={this.props.color} stroke="none" d="
                        M 0 5
                        L 1 5 1 4 0 4 0 5 Z"/>

                    <path fill={this.props.color} stroke="none" d="
                        M 1 6
                        L 0 6 0 7 1 7 1 6 Z"/>

                    <path fill={this.props.color} stroke="none" d="
                        M 1 3
                        L 1 2 0 2 0 3 1 3 Z"/>

                    <path fill={this.props.color} stroke="none" d="
                        M 0 0
                        L 0 1 1 1 1 0 0 0 Z"/>

                    <path fill={this.props.color} stroke="none" d="
                        M 3 1
                        L 3 0 2 0 2 1 3 1 Z"/>

                    <path fill={this.props.color} stroke="none" d="
                        M 3 3
                        L 3 2 2 2 2 3 3 3 Z"/>
                </g>
            </defs>

            <g transform="matrix( 1, 0, 0, 1, 0, 0)">
                <use xlinkHref={fillIdRef} />
            </g>
        </g>);
    }
}

Separator.propTypes =  {
    x:                  PropTypes.number.isRequired,
    y:                  PropTypes.number.isRequired,
    name:               PropTypes.string,
    color:              PropTypes.string,
};

export default Separator;