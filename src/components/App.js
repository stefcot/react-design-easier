/**
 * Created by Stephane on 3/16/2017.
 */
import React from 'react';
import Toolbar from './Toolbar';
import Button from './Button';

/**
 *
 * @see https://www.smashingmagazine.com/2015/12/generating-svg-with-react/
 * @constructor
 */

const App = React.createClass({
    clickButton(ev){
        console.log('clickButton - target : ', ev.target);
        console.log('clickButton - currentTarget.test : ', ev.currentTarget.test);
    },
    render(){
        return(
            <div className="container">
                <div className="row">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" width="800px" height="600px" viewBox="0 0 800 600">
                        <Toolbar />
                        <Button onClick={this.clickButton} xpos={'100'} ypos={'35'} icon={'Save'} />
                    </svg>
                </div>
            </div>
        )
    }
})

export default App;