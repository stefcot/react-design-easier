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

import Matrix from './Matrix.es6';
import Transformable from './Transformable.es6';

/**
 * Display list item showing a picture
 */
class Picture {
    constructor(image, x, y){
        this.image = image;

        let m = new Matrix(1,0,0,1,x,y);
        let w = image.width || image.clientWidth;
        let h = image.height || image.clientHeight;

        this.transform = new Transformable(w, h, m, this);

        let origin = "0 0";
        let style = image.style;
        if (typeof style.transformOrigin !== "undefined"){
            style.transformOrigin = origin;

        }else if (typeof style.webkitTransformOrigin !== "undefined"){
            style.webkitTransformOrigin = origin;
        }else if (typeof style.msTransformOrigin !== "undefined"){
            style.msTransformOrigin = origin;
        }else if (typeof style.MozTransformOrigin !== "undefined"){
            style.MozTransformOrigin = origin;
        }else if (typeof style.OTransformOrigin !== "undefined"){
            style.OTransformOrigin = origin;
        }
    }

    draw(){
        let trans = this.transform.matrix.toString();
        let style = this.image.style;

        if (typeof style.transform !== "undefined"){
            style.transform = trans;

        }else if (typeof style.webkitTransform !== "undefined"){
            style.webkitTransform = trans;
        }else if (typeof style.msTransform !== "undefined"){
            style.msTransform = trans;
        }else if (typeof style.MozTransform !== "undefined"){
            style.MozTransform = trans;
        }else if (typeof style.OTransform !== "undefined"){
            style.OTransform = trans;
        }
    }
}

export default Picture;