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
import {SCALE,
        SCALE_X,
        SCALE_Y,
        SCALE_UNIFORM,
        SKEW_X,
        SKEW_Y,
        ROTATE_SCALE,
        ROTATE,
        TRANSLATE,
        REGISTRATION, }  from './Control.es6';

export default class {

	constructor(container) {
        this.container = container;
        this.target = null;

        // transform interaction
        // where interaction starts
        this.startMatrix = new Matrix();
        this.regStartU = 0.5;
        this.regStartV = 0.5;
        this.startX = 0;
        this.startY = 0;

        // transforms to apply
        this.preMatrix = new Matrix();
        this.postMatrix = new Matrix();

        // where interaction ends
        this.endMatrix = new Matrix();
        this.regEndU = 0.5;
        this.regEndV = 0.5;
        this.endX = 0;
        this.endY = 0;

        // transform UV delta
        this.dU = 0;
        this.dV = 0;

        // registration point in px
        this.regX = 0;
        this.regY = 0;

        // inverted matrices
        this.inv = new Matrix();

        // transform controls
        this.control = null;
        this.controls = [];

        // style guide for controls
        this.fillStyle = "none";
        this.strokeStyle = "#000000";
        this.lineWidth = 1;
	}

    setTarget (target){
        console.log('TransformTool::setTarget');
        if (this.target === target){
            return;
        }

        this.target = target;
        this.updateFromTarget();
    }

    updateFromTarget (){
        console.log('TransformTool::updateFromTarget');
		if (this.target && this.target.matrix){
			this.endMatrix.copyFrom(this.target.matrix);
			this.commit();
			this.updateRegistration();
			this.updateControls();
		}
	}

    setControls (controls){
        console.log('TransformTool::setControls');
        this.controls.length = 0;
        if (!controls || !controls.length){
            return;
        }

        let n = controls.length;
        for (let i=0; i<n; i++){
            controls[i].tool = this;
            this.controls[i] = controls[i];
            this.controls[i].updatePosition();
        }
    }

    updateControls(){
        console.log('TransformTool::updateControls');
        let n = this.controls.length;
        for (let i=0; i<n; i++){
            this.controls[i].updatePosition();
        }
    }

    getControlAt(x, y){
        console.log('TransformTool::getControlAt');
        // walking in reverse order to find those
        // drawn on top (later in list) first
        let i = this.controls.length;

        while(i--){
            if (this.controls[i].contains(x, y)){
                return this.controls[i];
            }
        }

        // control not found
        return null;
    }

    draw(){
        console.log('TransformTool::draw');
        if (!this.shouldDraw()){
            return;
        }

        let n = this.controls.length;
        for (let i=0; i<n; i++){
            this.controls[i].draw(this.container);
        }
    }

    shouldDraw(){
        console.log('TransformTool::shouldDraw');
        return this.target !== null;
    }

    /**
     *
     * @param x
     * @param y
     * @param control
     * @return {boolean}
     */
    start(x, y, control){
        if (!this.target){
            return false;
        }

        // commits and gives default state
        this.end();

        this.control = control || this.getControlAt(x, y);

        console.log('TransformTool::start');

        if (this.control){

            this.startX = x;
            this.startY = y;
            this.dU = 0;
            this.dV = 0;

            if (this.control.dynamicUV){
                // update the control point location
                // to match the mouse location at start
                let cx = x - this.startMatrix.x;
                let cy = y - this.startMatrix.y;
                this.control.u = (this.inv.a * cx + this.inv.c * cy)/this.target.width;
                this.control.v = (this.inv.d * cy + this.inv.b * cx)/this.target.height;
            }

            this.updateRegistration();

            return true;
        }

        return false;
    }

    move(x, y){
        console.log('TransformTool::move');
        this.updateMoveValues(x, y);

        if (this.control){
            this.applyControl();
            this.updateTransform();

            this.updateTarget();
            this.updateRegistration();
            this.updateControls();
        }
    }

    end(){
        console.log('TransformTool::end');
        this.commit();
        this.control = null;
    }

    updateMoveValues(x, y){
        console.log('TransformTool::updateMoveValues');
        this.endX = x;
        this.endY = y;

        let cx = this.endX - this.startX;
        let cy = this.endY - this.startY;

        // inline transformPoint to target local space
        this.dU = (this.inv.a * cx + this.inv.c * cy) / this.target.width;
        this.dV = (this.inv.d * cy + this.inv.b * cx) / this.target.height;
    }

    applyControl(){
        console.log('TransformTool::applyControl');
        if (this.control){

            // for custom drawing methods, call
            // that method and skip standard drawing
            // if it returns false
            if (this.control.transformCallback !== null){
                if (!this.control.transformCallback(this.control)){
                    return;
                }
            }

            // variables for working with position and size
            let x = 0;
            let y = 0;
            let w = this.target.width;
            let h = this.target.height;

            // difference between registration and control points
            let cu = this.control.u - this.regStartU;
            let cv = this.control.v - this.regStartV;

            // if the abs px difference is less than 0, normalize to
            // 1 (or -1) to prevent outrageous divisions by 0 or a
            // very small number resulting in oversized transforms
            if (cu > 0){
                if (cu*w < 1){
                    cu = 1/w;
                }
            }else if (cu*w > -1){
                cu = -1/w;
            }

            if (cv > 0){
                if (cv*h < 1){
                    cv = 1/h;
                }
            }else if (cv*h > -1){
                cv = -1/h;
            }

            // perform transform based on control type
            switch(this.control.type){

                case SCALE:{
                    x = (cu + this.dU)/cu;
                    y = (cv + this.dV)/cv;
                    this.preMatrix.scale(x, y);
                    break;
                }

                case SCALE_X:{
                    x = (cu + this.dU)/cu;
                    this.preMatrix.scale(x, 1);
                    break;
                }

                case SCALE_Y:{
                    y = (cv + this.dV)/cv;
                    this.preMatrix.scale(1, y);
                    break;
                }

                case SCALE_UNIFORM:{
                    x = (cu + this.dU)/cu;
                    y = (cv + this.dV)/cv;

                    // find the ratio to make the scaling
                    // uniform in both the x (w) and y (h) axes
                    w = y ? Math.abs(x/y) : 0;
                    h = x ? Math.abs(y/x) : 0;

                    // for 0 scale, scale both axises to 0
                    if (w === 0 || h === 0){
                        x = 0;
                        y = 0;

                        // scale mased on the smaller ratio
                    }else if (w > h){
                        x *= h;
                    }else{
                        y *= w;
                    }

                    this.preMatrix.scale(x, y);
                    break;
                }

                case SKEW_X:{
                    this.preMatrix.c = (w/h) * (this.dU/cv);
                    break;
                }

                case SKEW_Y:{
                    this.preMatrix.b = (h/w) * (this.dV/cu);
                    break;
                }

                case ROTATE_SCALE:{
                    // rotation in global space
                    x = this.startX - this.regX;
                    y = this.startY - this.regY;
                    let ex = this.endX - this.regX;
                    let ey = this.endY - this.regY;

                    let angle = Math.atan2(ey, ex) - Math.atan2(y, x);
                    this.postMatrix.rotate(angle);

                    // determine scale factor from change
                    // this is also done in global space
                    // in matching with the rotation
                    let s = Math.sqrt(x*x + y*y);
                    if (s === 0){
                        this.preMatrix.scale(0, 0);
                    }else{
                        s = Math.sqrt(ex*ex + ey*ey)/s;
                        this.preMatrix.scale(s, s);
                    }

                    break;
                }

                case ROTATE:{
                    // rotation in global space
                    x = Math.atan2(this.startY - this.regY, this.startX - this.regX);
                    y = Math.atan2(this.endY - this.regY, this.endX - this.regX);
                    this.postMatrix.rotate(y - x);
                    break;
                }

                case TRANSLATE:{
                    // translate in global space
                    this.postMatrix.translate(this.endX - this.startX, this.endY - this.startY);
                    break;
                }

                case REGISTRATION:{
                    this.regEndU = this.regStartU + this.dU;
                    this.regEndV = this.regStartV + this.dV;
                    // reg UV isn't set until end()
                    break;
                }

                default:
            }
        }
    }

    updateRegistration(){
        console.log('TransformTool::updateRegistration');
        let x = this.regEndU * this.target.width;
        let y = this.regEndV * this.target.height;
        let m = this.endMatrix;
        this.regX = m.x + m.a * x + m.c * y;
        this.regY = m.y + m.d * y + m.b * x;
    }

    updateTransform(){
        console.log('TransformTool::updateTransform');

        // apply transforms (pre, post)
        this.endMatrix.identity();
        this.endMatrix.concat(this.preMatrix);
        this.endMatrix.concat(this.startMatrix);

        // next, the post transform is concatenated on top
        // of the previous result, but for the post transform,
        // translation (x,y) values are not transformed. They're
        // saved with the respective post transform offset, then
        // reassigned after concatenating the post transformation
        let x = this.endMatrix.x + this.postMatrix.x;
        let y = this.endMatrix.y + this.postMatrix.y;

        // finally, concatenate post transform on to final
        this.endMatrix.concat(this.postMatrix);

        // reassign saved tx and ty values with the
        // included registration offset
        this.endMatrix.x = x;
        this.endMatrix.y = y;

        // shift for registration not being in (0,0)
        this.applyRegistrationOffset();

        // reset transforms
        this.preMatrix.identity();
        this.postMatrix.identity();
    }

    applyRegistrationOffset(){
        console.log('TransformTool::applyRegistrationOffset');

        if (this.regEndU !== 0 || this.regEndV !== 0){
            // registration offset
            // local registration location
            let x = this.regEndU * this.target.width;
            let y = this.regEndV * this.target.height;
            // delta tansform by start matrix
            let rx = this.startMatrix.a * x + this.startMatrix.c * y;
            let ry = this.startMatrix.d * y + this.startMatrix.b * x;
            // subtract delta transform end matrix
            rx -= this.endMatrix.a * x + this.endMatrix.c * y;
            ry -= this.endMatrix.d * y + this.endMatrix.b * x;
            // shift by remaining
            this.endMatrix.translate(rx, ry);
        }
    }

    updateTarget(){
        console.log('TransformTool::updateTarget');
        if (this.target && this.target.matrix && !this.target.matrix.equals(this.endMatrix)){
            this.target.matrix.copyFrom(this.endMatrix);
            if (this.target.changed !== null){
                this.target.changed();
            }
        }
    }

    commit(){
        console.log('TransformTool::commit');
        // registration
        this.regStartU = this.regEndU;
        this.regStartV = this.regEndV;

        // transform
        this.startMatrix.copyFrom(this.endMatrix);
        this.sanitizeStartMatrix(); // prevent by-0 errors

        // update inversion matrix
        this.inv.copyFrom(this.startMatrix);
        this.inv.invert();
    }

    sanitizeStartMatrix(){
        console.log('TransformTool::sanitizeStartMatrix');
        if (!this.target){
            return;
        }

        if (this.startMatrix.a === 0 && this.startMatrix.b === 0){
            this.startMatrix.a = 1/this.target.width;
        }

        if (this.startMatrix.d === 0 && this.startMatrix.c === 0){
            this.startMatrix.d = 1/this.target.height;
        }
    }
}