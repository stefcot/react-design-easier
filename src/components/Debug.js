/**
 * Created by Stephane on 3/17/2017.
 */
import React from 'react';

export default class Debug extends React.Component {
    constructor(){
        super();
    }

    componentWillMount() {
        console.log('Debug - store : ', this.props.store);
    }

    componentDidMount() {
        console.log('Debug - store : ', this.props.store);
    }

    render() {
        return (
            <div>Debug</div>
        )
    }
}