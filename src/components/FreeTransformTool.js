/**
 * Created by Stephane on 4/13/2017.
 */
import React from 'react';
import FreeTransformToolController from '../freeTransformTool/FreeTransformToolController';

/**
 *
 * @see https://www.smashingmagazine.com/2015/12/generating-svg-with-react/
 * @constructor
 */
class FreeTransformTool extends React.Component {
    constructor(){
        super();
    }

    /**
     * The application entry file has to instantiated before render
     */
    componentWillMount(){
        this.transformTool = new FreeTransformToolController();
    }

    /**
     * The application entry file has to instantiated before render
     */
    componentDidMount(){
        this.transformTool.init();
        // Set more simple behavior, instead of default dynamic mode
        this.transformTool.setScalerWithRotateMode();
    }

    render(){
        return(
            <div id="transform-box-layer" className="transform-box-layer">
                <svg id="svg-tool" className="appElement transformTool" xmlns="http://www.w3.org/2000/svg"/>
            </div>
        )
    }
}

export default FreeTransformTool;
