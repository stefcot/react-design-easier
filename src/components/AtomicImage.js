import React, {Component} from 'react';

export default class AtomicImage extends Component {
    constructor(props) {
        super(props);
        this.state = {dimensions: {}};
        this.onImgLoad = this.onImgLoad.bind(this);
    }

    onImgLoad({target:img}) {
        this.setState({dimensions:{height:img.offsetHeight,
            width:img.offsetWidth}});

        this.props.onImageLoaded();
    }
    render(){
        return <img onLoad={this.onImgLoad} id={this.props.id} alt={this.props.alt} src={this.props.src} />;
    }
}
