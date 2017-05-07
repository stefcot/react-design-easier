import PropTypes from 'prop-types';
import React from 'react';

class AtomicImage extends React.Component {
    constructor(props, ctx) {
        super(props, ctx);
        this.state = { dimensions: {}, };
        this.onImgLoad = this.onImgLoad.bind(this);
    }

    onImgLoad({target:img,}) {
        this.setState({
            dimensions:{
                height:img.offsetHeight,
                width:img.offsetWidth,
            },
        });

        this.props.onImageLoaded();
    }

    render() {
        return <img onLoad={this.onImgLoad} id={this.props.id} alt={this.props.alt} src={this.props.src} />;
    }
}

AtomicImage.propTypes = {
    onImageLoaded: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
};

export default AtomicImage;