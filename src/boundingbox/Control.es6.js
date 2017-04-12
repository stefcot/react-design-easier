/**
 * Created by Stephane on 4/12/2017.
 */
class Control {

    static SCALE = 1;
    static SCALE_X = 2;
    static SCALE_Y = 3;
    static SCALE_UNIFORM = 4;
    static ROTATE = 5;
    static TRANSLATE = 6;
    static REGISTRATION = 7;
    static SKEW_X = 8;
    static SKEW_Y = 9;
    static BORDER = 10;
    static TARGET = 11;
    static ROTATE_SCALE = 12;
    static SHAPE_CIRCLE = 1;
    static SHAPE_SQUARE = 2;

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

    setDefaultShape = function(){

        switch(this.type){

            case Control.ROTATE:
            case Control.ROTATE_SCALE:
            case Control.REGISTRATION:{
                this.shape = Control.SHAPE_CIRCLE;
                break;
            }

            case Control.SCALE:
            case Control.SCALE_UNIFORM:
            case Control.SCALE_X:
            case Control.SCALE_Y:
            case Control.SKEW_X:
            case Control.SKEW_Y:{
                this.shape = Control.SHAPE_SQUARE;
                break;
            }
            case Control.BORDER:{
                this.shape = Control.SHAPE_BORDER;
                break;
            }
        }
    }

    updatePosition = function(){
        if (!this.tool || !this.tool.target){
            return;
        }

        if (this.type === Control.REGISTRATION){
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

    draw = function(ctx){

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

            case Control.SHAPE_CIRCLE:{
                ctx.arc(this.x,this.y,this.size/2,0,Math.PI*2);
                ctx.fill();
                ctx.stroke();
                break;
            }

            case Control.SHAPE_SQUARE:{
                x = (this.x - this.size/2)|0;
                y = (this.y - this.size/2)|0;
                ctx.fillRect(x, y, this.size, this.size);
                ctx.strokeRect(x, y, this.size, this.size);
                break;
            }

            case Control.SHAPE_BORDER:{
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

    contains = function(x, y){
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

export default Control;