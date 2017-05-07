import React from 'react';
import createComponent from 'react-unit';
import AtomicImage from './../../src/components/AtomicImage';

/**
 * Added matchers to jasmine with jasmine-expect
 *
 * @see https://www.npmjs.com/package/jasmine-expect#installation
 */
describe('AtomicImage', () => {
    // Here component is the rendered AtomicImage component
    const component = createComponent(<AtomicImage onImageLoaded={'test'} src={'test'} id={'test'} alt={'test'} />);

    it('Should have imageLoad method different from undefined', () => {
        expect(component).toBeDefined();
    });

    it('Should have onLoad to be defined', () => {
        expect(component.props.onLoad).toBeFunction();
    });
});