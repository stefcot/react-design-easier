/**
 * Created by Stephane on 3/16/2017.
 */
import React from 'react';
import Grid from './Grid';
import ToolBar from './ToolBar';
import YellowFrame from './YellowFrame';
import TranformDOMPicturesComponents from './TranformDOMPicturesComponents';

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
            <div className="container">
                <div className="row design-easier">
                    <Grid />
                    <ToolBar />
                    <YellowFrame />
                </div>
                <TranformDOMPicturesComponents/>
            </div>
        )
    }
});

export default App;