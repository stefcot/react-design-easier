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

import Control, { SHAPE_CIRCLE, SHAPE_SQUARE, SHAPE_BORDER }  from './Control.es6';

let idPrefix = "-dom-control-";
let idCounter = 0;

class DOMControl extends Control {

    constructor(type, u, v, offsetX, offsetY, size){
        super(type, u, v, offsetX, offsetY, size);
        this.id = idPrefix + (++idCounter);
    }

    undraw(){
        let elem = document.getElementById(this.id);
        if (elem && elem.parentNode){
            elem.parentNode.removeChild(elem);
        }
    }

    setStyle(elem, fill){
        if (fill !== false){
            elem.setAttribute("fill", this.tool.fillStyle);
        }else{
            elem.setAttribute("fill", "none");
        }
        elem.setAttribute("stroke", this.tool.strokeStyle);
        elem.setAttribute("stroke-width", this.tool.lineWidth);
    }

    draw(container){
        // for custom drawing methods, call
        // that method and skip standard drawing
        // if it returns false
        if (this.drawCallback !== null){
            if (!this.drawCallback(this, container)){
                return;
            }
        }

        // do not draw for non-positive sizes
        if (this.size <= 0){
            return;
        }

        let elem = document.getElementById(this.id);

        let x = 0;
        let y = 0;

        let i = 0;
        let n = 0;

        switch(this.shape){

            case SHAPE_CIRCLE:{
                if (!elem){
                    elem = document.createElementNS(container.namespaceURI, "circle");
                    elem.id = this.id;
                    elem.r.baseVal.value = this.size/2;
                    this.setStyle(elem);
                    container.appendChild(elem);
                }

                // Add to assign a default value causing :
                // Uncaught TypeError: Failed to set the 'value' property on 'SVGLength':
                // The provided float value is non-finite.
                elem.cx.baseVal.value = this.x || 0;
                elem.cy.baseVal.value = this.y || 0;
                break;
            }

            case SHAPE_SQUARE:{
                if (!elem){
                    elem = document.createElementNS(container.namespaceURI, "rect");
                    elem.id = this.id;
                    elem.width.baseVal.value = this.size;
                    elem.height.baseVal.value = this.size;
                    this.setStyle(elem);
                    container.appendChild(elem);
                }

                // Add to assign a default value causing :
                // Uncaught TypeError: Failed to set the 'value' property on 'SVGLength':
                // The provided float value is non-finite.
                elem.x.baseVal.value = (this.x - this.size/2) || 0;
                elem.y.baseVal.value = (this.y - this.size/2) || 0;
                break;
            }

            case SHAPE_BORDER:{
                if (!elem){
                    elem = document.createElementNS(container.namespaceURI, "polygon");
                    elem.id = this.id;
                    for (i=0; i<4; i++){
                        elem.points.appendItem(container.createSVGPoint());
                    }
                    this.setStyle(elem, false);
                    container.appendChild(elem);
                }

                let pt;
                if (this.tool && this.tool.target){
                    let t = this.tool.target;
                    let m = this.tool.endMatrix;

                    pt = elem.points.getItem(0);
                    pt.x = m.x;
                    pt.y = m.y;

                    pt = elem.points.getItem(1);
                    pt.x = m.x + m.a * t.width;
                    pt.y = m.y + m.b * t.width;

                    pt = elem.points.getItem(2);
                    pt.x = m.x + m.a * t.width + m.c * t.height;
                    pt.y = m.y + m.d * t.height + m.b * t.width;

                    pt = elem.points.getItem(3);
                    pt.x = m.x + m.c * t.height;
                    pt.y = m.y + m.d * t.height;
                }

                break;
            }

            default:{
                // no draw
                break;
            }
        }

        // without a target, the control is not displayed
        if (elem && this.tool){
            if (!this.tool.target){
                elem.style.display = "none";
            }else{
                elem.style.display = "";
            }
        }
    }
}

export default DOMControl;