/**
 * Created by Stephane on 3/16/2017.
 */
import React from 'react';
import Grid from './Grid';
import Canvas from './Canvas';
import ToolBar from './ToolBar';
import YellowFrame from './YellowFrame';
//import TranformDOMPicturesComponents from './TranformDOMPicturesComponents';
import FreeTransformTool from './FreeTransformTool';
import Toolbarcontainer from '../actions/toolbar/container';

/**
 *
 * @see https://www.smashingmagazine.com/2015/12/generating-svg-with-react/YellowFrame
 *
 * @param props {object}
 *
 * @constructor
 */
const App = React.createClass({
    render(){
        return(
            <div id="design-easier-app-container">
                <div className="design-easier-app">
                    <Grid />
                    <Canvas width={800} height={600} />
                    <FreeTransformTool/>
                    <Toolbarcontainer />
                    <YellowFrame />
                </div>
            </div>
        )
    }
});

export default App;