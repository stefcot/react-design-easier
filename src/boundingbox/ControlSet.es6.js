// Copyright (C) 2013 Trevor McCauley
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import Control, { TRANSLATE, BORDER, ROTATE, SCALE_X, SCALE_Y, SCALE, SCALE_UNIFORM } from './Control.es6';

const ControlSet = {
    controlClass: Control,

    getStandard(){
        let translater = new this.controlClass(TRANSLATE);
        translater.hitTestTarget = true;

        return [
            new this.controlClass(BORDER),
            translater,
            new this.controlClass(ROTATE, 0,0, 0,0, 10),
            new this.controlClass(ROTATE, 0,1, 0,0, 10),
            new this.controlClass(ROTATE, 1,0, 0,0, 10),
            new this.controlClass(ROTATE, 1,1, 0,0, 10),
            new this.controlClass(SCALE_X, 0,.5, 0,0, 10),
            new this.controlClass(SCALE_X, 1,.5, 0,0, 10),
            new this.controlClass(SCALE_Y, .5,0, 0,0, 10),
            new this.controlClass(SCALE_Y, .5,1, 0,0, 10)
        ];
    },

    getScaler(){
        let translater = new this.controlClass(TRANSLATE);
        translater.hitTestTarget = true;

        return [
            new this.controlClass(BORDER),
            translater,
            new this.controlClass(SCALE, 0,0, 0,0, 10),
            new this.controlClass(SCALE, 0,1, 0,0, 10),
            new this.controlClass(SCALE, 1,0, 0,0, 10),
            new this.controlClass(SCALE, 1,1, 0,0, 10),
            new this.controlClass(SCALE_X, 0,.5, 0,0, 10),
            new this.controlClass(SCALE_X, 1,.5, 0,0, 10),
            new this.controlClass(SCALE_Y, .5,0, 0,0, 10),
            new this.controlClass(SCALE_Y, .5,1, 0,0, 10)
        ];
    },

    getUniformScaler(){
        let translater = new this.controlClass(TRANSLATE);
        translater.hitTestTarget = true;

        return [
            new this.controlClass(BORDER),
            translater,
            new this.controlClass(SCALE_UNIFORM, 0,0, 0,0, 10),
            new this.controlClass(SCALE_UNIFORM, 0,1, 0,0, 10),
            new this.controlClass(SCALE_UNIFORM, 1,0, 0,0, 10),
            new this.controlClass(SCALE_UNIFORM, 1,1, 0,0, 10)
        ];
    },

    getScalerWithRotate(){
        let translater = new this.controlClass(TRANSLATE, 0, 0, 0, 0, -1);
        // translate control is "selected" by clicking
        // on the target's shape, not the control point
        translater.hitTestTarget = true;

        return [
            new this.controlClass(BORDER),
            translater,
            new this.controlClass(ROTATE, .5,0, 0,-20, 10),
            new this.controlClass(SCALE, 0,0, 0,0, 10),
            new this.controlClass(SCALE, 0,1, 0,0, 10),
            new this.controlClass(SCALE, 1,0, 0,0, 10),
            new this.controlClass(SCALE, 1,1, 0,0, 10),
            new this.controlClass(SCALE_X, 0,.5, 0,0, 10),
            new this.controlClass(SCALE_X, 1,.5, 0,0, 10),
            new this.controlClass(SCALE_Y, .5,0, 0,0, 10),
            new this.controlClass(SCALE_Y, .5,1, 0,0, 10)
        ];
    },

    getDynamic(){
        let dyn = new this.controlClass(TRANSLATE);
        dyn.dynamicUV = true;
        dyn.hitTestTarget = true;

        return [
            new this.controlClass(BORDER),
            dyn
        ];
    },
}

export default ControlSet;