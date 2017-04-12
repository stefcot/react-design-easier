/**
 * Created by Stephane on 4/12/2017.
 */
import Control from 'Control.es6';

class DOMControl extends Control {

    constructor(type, u, v, offsetX, offsetY, size){
        super(type, u, v, offsetX, offsetY, size);

        this.idPrefix = "-dom-control-";
        this.idCounter = 0;
        this.id = this.idPrefix + (++this.idCounter);
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

            case Control.SHAPE_CIRCLE:{
                if (!elem){
                    elem = document.createElementNS(container.namespaceURI, "circle");
                    elem.id = this.id;
                    elem.r.baseVal.value = this.size/2;
                    this.setStyle(elem);
                    container.appendChild(elem);
                }

                elem.cx.baseVal.value = this.x;
                elem.cy.baseVal.value = this.y;
                break;
            }

            case Control.SHAPE_SQUARE:{
                if (!elem){
                    elem = document.createElementNS(container.namespaceURI, "rect");
                    elem.id = this.id;
                    elem.width.baseVal.value = this.size;
                    elem.height.baseVal.value = this.size;
                    this.setStyle(elem);
                    container.appendChild(elem);
                }

                elem.x.baseVal.value = (this.x - this.size/2);
                elem.y.baseVal.value = (this.y - this.size/2);
                break;
            }

            case Control.SHAPE_BORDER:{
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