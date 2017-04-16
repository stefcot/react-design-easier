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

import TransformTool from './TransformTool.es6';

/**
 * @extends
 */
class DOMTransformTool extends TransformTool {
	constructor(container) {
		super(container);
	}

    setControls(controls){
        // remove old, persistent svg elements
        if (this.controls){
            //let i;
            let n = this.controls.length;
            for (let i=0; i<n; i++){
                this.controls[i].undraw(this.container);
            }
        }

        super.setControls(controls);
    }

    shouldDraw(){
        // always draws since dom elements persistent
        return true;
    }
}

export default DOMTransformTool;