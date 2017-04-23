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

export const SCALE = 1;
export const SCALE_X = 2;
export const SCALE_Y = 3;
export const SCALE_UNIFORM = 4;
export const ROTATE = 5;
export const TRANSLATE = 6;
export const REGISTRATION = 7;
export const SKEW_X = 8;
export const SKEW_Y = 9;
export const BORDER = 10;
export const TARGET = 11;
export const ROTATE_SCALE = 12;
export const SHAPE_CIRCLE = 1;
export const SHAPE_SQUARE = 2;
export const SHAPE_BORDER = 3;

export default class {

    constructor (type, u, v, offsetX, offsetY, size){
        this.tool = null;
        this.type = type;

        this.x = 0;
        this.y = 0;

        this.offsetX = offsetX || 0;
        this.offsetY = offsetY || 0;

        this.hitTestTarget = false;
        this.size = size || 15;
        this.shape = null;
        this.setDefaultShape();

        this.u = u;
        this.v = v;
        this.dynamicUV = false;

        this.drawCallback = null;
        this.transformCallback = null;
    }

    setDefaultShape(){

        switch(this.type){

            case ROTATE:
            case ROTATE_SCALE:
            case REGISTRATION:{
                this.shape = SHAPE_CIRCLE;
                break;
            }

            case SCALE:
            case SCALE_UNIFORM:
            case SCALE_X:
            case SCALE_Y:
            case SKEW_X:
            case SKEW_Y:{
                this.shape = SHAPE_SQUARE;
                break;
            }
            case BORDER:{
                this.shape = SHAPE_BORDER;
                break;
            }
            default:
        }
    }

    updatePosition(){
        if (!this.tool || !this.tool.target){
            return;
        }

        if (this.type === REGISTRATION){
            this.x = this.tool.regX;
            this.y = this.tool.regY;
            return;
        }

        let m = this.tool.endMatrix;

        // matrix transform for UV
        let w = this.tool.target.width * this.u;
        let h = this.tool.target.height * this.v;
        this.x = m.x + m.a * w + m.c * h;
        this.y = m.y + m.d * h + m.b * w;

        // offset
        let angle = 0;
        if (this.offsetX){
            angle = m.getRotationX();
            this.x += this.offsetX * Math.cos(angle);
            this.y += this.offsetX * Math.sin(angle);
        }
        if (this.offsetY){
            angle = m.getRotationY();
            this.x += this.offsetY * Math.sin(angle);
            this.y += this.offsetY * Math.cos(angle);
        }
    }

    draw(ctx){

        // for custom drawing methods, call
        // that method and skip standard drawing
        // if it returns false
        if (this.drawCallback !== null){
            if (!this.drawCallback(this, ctx)){
                return;
            }
        }

        // do not draw for non-positive sizes
        if (this.size <= 0){
            return;
        }

        let x = 0;
        let y = 0;

        ctx.save();
        ctx.beginPath();

        ctx.fillStyle = this.tool.fillStyle;
        ctx.strokeStyle = this.tool.strokeStyle;
        ctx.lineWidth = this.tool.lineWidth;

        switch(this.shape){

            case SHAPE_CIRCLE:{
                ctx.arc(this.x,this.y,this.size/2,0,Math.PI*2);
                ctx.fill();
                ctx.stroke();
                break;
            }

            case SHAPE_SQUARE:{
                x = (this.x - this.size/2)|0;
                y = (this.y - this.size/2)|0;
                ctx.fillRect(x, y, this.size, this.size);
                ctx.strokeRect(x, y, this.size, this.size);
                break;
            }

            case SHAPE_BORDER:{
                // render to half pixel for hard lines
                ctx.fillStyle = "";
                let t = this.tool.target;
                let m = this.tool.endMatrix;

                ctx.moveTo(m.x, m.y);
                x = m.x + m.a * t.width;
                y = m.y + m.b * t.width;
                ctx.lineTo(x, y);
                x = m.x + m.a * t.width + m.c * t.height;
                y = m.y + m.d * t.height + m.b * t.width;
                ctx.lineTo(x, y);
                x = m.x + m.c * t.height;
                y = m.y + m.d * t.height;
                ctx.lineTo(x, y);
                ctx.lineTo(m.x, m.y);
                ctx.stroke();
                break;
            }

            default:{
                // no draw
                break;
            }
        }

        ctx.restore();
    }

    contains(x, y){
        if (this.hitTestTarget){
            let t = this.tool.target;
            return t.matrix.containsPoint(x, y, t.width, t.height);

        }else{

            let cx = Math.abs(this.x - x);
            let cy = Math.abs(this.y - y);
            let sr = this.size/2;
            if (cx < sr && cy < sr){
                return true;
            }
        }

        return false;
    }
}