import React from 'react';
import tape from 'tape';
import jsxEquals from 'tape-jsx-equals';
import addAssertions from 'extend-tape';
import createComponent from 'react-unit';

const test = addAssertions(tape, {jsxEquals});

import AtomicImage from '../../src/components/AtomicImage';

test('Should have onImageLoaded method different from undefined', function (t) {
    let component = createComponent(<AtomicImage onImageLoaded={undefined} src={'test'} id={'test'} alt={'test'} />);

    t.ok(component !== undefined, 'Component is different from undefined');

    t.end();
});