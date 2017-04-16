/**
 * Created by Stephane on 4/13/2017.
 */
import React from 'react';
import TramformDOMPictures from './../boundingbox/TransformDOMPictures.es6';
import AtomicImage from './AtomicImage';

/**
 *
 * @see https://www.smashingmagazine.com/2015/12/generating-svg-with-react/
 * @constructor
 */
class TranformDOMPicturesComponents extends React.Component {
    constructor(){
        super();
    }

    /**
     * The application entry file has to instantiated before render
     */
    componentWillMount(){
        this.application = new TramformDOMPictures();
    }

    /**
     * In this example, we havve to wait that all pictures have been loaded
     * before initializing the free transform box SVG layer
     */
    onImageLoaded(){
        this.application.init();
    }

    render(){
        return(
            <div>
                <div id="dom">
                    <AtomicImage onImageLoaded={this.onImageLoaded.bind(this)} id={'dunny'} alt={'dunny'} src={'images/dunny.png'}/>
                    <AtomicImage onImageLoaded={this.onImageLoaded.bind(this)} id={'fatcap'} alt={'fatcap'} src={'images/fatcap.png'}/>
                    <AtomicImage onImageLoaded={this.onImageLoaded.bind(this)} id={'piggy'} alt={'piggy'} src={'images/piggy.png'}/>
                    <div id="text-box">Lorem <b>ipsum</b> dolor <u>sit</u> amet, consectetur <i>adipisicing</i> elit</div>
                    <svg id="svg-tool" xmlns="http://www.w3.org/2000/svg"/>
                </div>

                <button onClick={this.application.setStandardMode.bind(this.application)}>Standard</button>
                <button onClick={this.application.setScalerMode.bind(this.application)}>Scaler</button>
                <button onClick={this.application.setScalerWithRotateMode.bind(this.application)}>Scaler With Rotate</button>
                <button onClick={this.application.setUniformScalerMode.bind(this.application)}>Uniform Scaler</button>
                <button onClick={this.application.setDynamicMode.bind(this.application)}>Dynamic</button>
            </div>)
    }
}

export default TranformDOMPicturesComponents;
