import { TRANSLATE, BORDER, ROTATE, SCALE_X, SCALE_Y, SCALE, SCALE_UNIFORM, REGISTRATION, SKEW_Y, SKEW_X, ROTATE_SCALE, TARGET } from './Control.es6';

import DOMControl from './DOMControl.es6';
import ControlSet from './ControlSet.es6';
import DOMTransformTool from './DOMTransformTool.es6';
import Picture from './Picture.es6';
import Mouse from './Mouse.es6';

/**
 *
 */
class TramformDOMPictures {
    /**
     *
     */
	constructor() {}

    /**
     *
     * @return {TramformDOMPictures|*}
     */
    init(){
        let toolElem = document.getElementById("svg-tool");

        this.tool = new DOMTransformTool(toolElem);
        this.dom = document.getElementById("transform-box-layer");
        this.displayList = [
            new Picture(document.getElementById("dunny"),50,100),
            new Picture(document.getElementById("fatcap"),250,100),
            new Picture(document.getElementById("piggy"),400,200),
            new Picture(document.getElementById("text-box"),650,300)
        ];

        toolElem.style.zIndex = this.displayList.length;

        this.setupTool();
        this.bindHandlers();

        // selects pictures on mouse down
        this.dom.addEventListener(Mouse.START, this.down);

        // draws initial screen
        this.render();
    }

    /**
     *
     */
    bindHandlers(){
        // instance-specific event handlers bound to this
        this.up = this.up.bind(this);
        this.down = this.down.bind(this);
        this.move = this.move.bind(this);
        this.render = this.render.bind(this);
    }

    /**
     *
     */
    setupTool(){
        ControlSet.controlClass = DOMControl;
        let controls = this.getCustomControls();
        this.tool.setControls(controls);
    }

    /**
     *
     * @return {Array}
     */
    getCustomControls(){
        let translater = new DOMControl(TRANSLATE);
        // translate control is "selected" by clicking
        // on the target's shape, not the control point
        translater.hitTestTarget = true;

        let targetContent = new DOMControl(TARGET);
        return [
            new DOMControl(ROTATE, 0,0, 0,0, 30),
            new DOMControl(ROTATE, 0,1, 0,0, 30),
            new DOMControl(ROTATE, 1,0, 0,0, 30),
            new DOMControl(ROTATE, 1,1, 0,0, 30),
            targetContent, // renders target between controls
            translater,
            new DOMControl(BORDER),
            new DOMControl(REGISTRATION, .5,.5, 0,0, 10),
            new DOMControl(SKEW_Y, 0,.5, 0,0, 10),
            new DOMControl(SCALE_X, 1,.5, 0,0, 10),
            new DOMControl(SKEW_X, .5,0, 0,0, 10),
            new DOMControl(SCALE_Y, .5,1, 0,0, 10),
            new DOMControl(SCALE, 0,0, 0,0, 10),
            new DOMControl(SCALE, 0,1, 0,0, 10),
            new DOMControl(SCALE, 1,0, 0,0, 10),
            new DOMControl(SCALE, 1,1, 0,0, 10),
            new DOMControl(ROTATE_SCALE, 1,0, 15,-15, 10),
            new DOMControl(SCALE_UNIFORM, 1,1, 15,15, 10),
            new DOMControl(ROTATE, .5,0, 0,-20)
        ];
    }

    /**
     *
     * @param ev {Event}
     */
    down(ev){
        Mouse.get(ev, this.dom);

        let controlled = this.tool.start(Mouse.x, Mouse.y);

        // if tool wasnt selected and being controlled
        // attempt to make a new selection at this location
        if (!controlled && this.selectImage(Mouse.x, Mouse.y)){
            // selection occurred
            // force select the translate control
            // to be able to start moving right away
            controlled = this.tool.start(Mouse.x, Mouse.y, this.findControlByType(TRANSLATE));
        }

        if (controlled){
            // events for moving selection
            this.dom.addEventListener(Mouse.MOVE, this.move);
            document.addEventListener(Mouse.END, this.up);
        }

        requestAnimationFrame(this.render);
        ev.preventDefault();
    }

    /**
     *
     * @param ev {Event}
     */
    move(ev){
        Mouse.get(ev, this.dom);
        this.applyDynamicControls(ev);
        this.tool.move(Mouse.x, Mouse.y);

        requestAnimationFrame(this.render);
        ev.preventDefault();
    }

    /**
     *
     * @param ev {Event}
     */
    up(ev){
        this.tool.end();

        this.dom.removeEventListener(Mouse.MOVE, this.move);
        document.removeEventListener(Mouse.END, this.up);

        requestAnimationFrame(this.render);
        ev.preventDefault();
    }

    /**
     *
     * @param ev {Event}
     */
    applyDynamicControls(ev){
        // if dynamic, set controls based on
        // keyboard keys
        let dyn = this.getDynamicControl();
        if (dyn){
            if (ev.ctrlKey){
                if (ev.shiftKey){
                    dyn.type = ROTATE_SCALE;
                }else{
                    dyn.type = ROTATE;
                }
            }else if (ev.shiftKey){
                dyn.type = SCALE;
            }else{
                dyn.type = TRANSLATE;
            }
        }
    }

    /**
     *
     * @return {*}
     */
    getDynamicControl(){
        let n = this.tool.controls.length;
        for (let i=0; i<n; i++){
            if (this.tool.controls[i].dynamicUV){
                return this.tool.controls[i];
            }
        }
        return null;
    }

    /**
     *
     * @param type
     * @return {*}
     */
    findControlByType(type){
        let n = this.tool.controls.length;
        for (let i=0; i<n; i++){
            if (this.tool.controls[i].type === type){
                return this.tool.controls[i];
            }
        }
        return null;
    }

    /**
     *
     * @param x
     * @param y
     * @return {boolean}
     */
    selectImage(x, y){
        let pic = null;
        let t = null;

        // walk backwards selecting top-most first
        let i = this.displayList.length;
        //
        while (i--){
            //
            pic = this.displayList[i];
            //
            t = pic.transform;
            //
            if (t.matrix.containsPoint(x, y, t.width, t.height)){
                //
                if (this.tool.target !== t){
                    // select
                    this.tool.setTarget(t);
                    // reorder for layer rendering
                    this.displayList.splice(i,1);
                    this.displayList.push(pic);
                    return true;
                }
                // already selected
                return false;
            }
        }
        // deselect
        this.tool.setTarget(null);
        return false;
    }

    /**
     *
     */
    render(){
        this.drawDisplayList();
        this.tool.draw();
    }

    /**
     *
     */
    drawDisplayList(){
        let n = this.displayList.length;
        for (let i=0; i<n; i++){
            this.displayList[i].image.style.zIndex = i;
            this.displayList[i].draw();
        }
    }

    /**
     *
     */
    setStandardMode(){
        console.log(this);

        this.tool.setControls(ControlSet.getStandard());
        this.render();
    };

    /**
     *
     */
    setScalerMode(){
        this.tool.setControls(ControlSet.getScaler());
        this.render();
    };

    /**
     *
     */
    setScalerWithRotateMode(){
        this.tool.setControls(ControlSet.getScalerWithRotate());
        this.render();
    };

    /**
     *
     */
    setUniformScalerMode(){
        this.tool.setControls(ControlSet.getUniformScaler());
        this.render();
    };

    /**
     *
     */
    setDynamicMode(){
        this.tool.setControls(ControlSet.getDynamic());
        this.render();
    };
}

export default TramformDOMPictures;