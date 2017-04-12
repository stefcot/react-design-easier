/**
 * Created by Stephane on 4/12/2017.
 */
import Matrix from 'Matrix.es6';
import Transformable from 'Transformable.es6';

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