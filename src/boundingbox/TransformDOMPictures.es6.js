import Control from 'Control.es6';
import DOMControl from 'DOMControl.es6';
import ControlSet from 'ControlSet.es6';
import DOMTransformTool from 'DOMTransformTool.es6';
import Picture from 'Picture.es6';

class TramformDOMPictures {
	constructor() {
        let toolElem = document.getElementById("svg-tool");
        this.tool = new DOMTransformTool(toolElem);

        this._type = 'TramformDOMPictures';
        this.dom = document.getElementById("dom");

        this.displayList = [
            new Picture(document.getElementById("dunny"),0,0),
            new Picture(document.getElementById("fatcap"),150,100),
            new Picture(document.getElementById("piggy"),300,200),
            new Picture(document.getElementById("text-box"),450,300)
        ];

        toolElem.style.zIndex = this.displayList.length;

        this.setupTool();
        this.bindHandlers();

        // selects pictures on mouse down
        this.dom.addEventListener(Mouse.START, this.down);

        // draws initial screen
        this.render();
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    bindHandlers(){
        // instance-specific event handlers bound to this
        this.up = this.up.bind(this);
        this.down = this.down.bind(this);
        this.move = this.move.bind(this);
        this.render = this.render.bind(this);
    }

    setupTool(){
        ControlSet.controlClass = DOMControl;
        let controls = this.getCustomControls();
        this.tool.setControls(controls);
    }

    static getCustomControls(){
        let translater = new DOMControl(Control.TRANSLATE);
        // translate control is "selected" by clicking
        // on the target's shape, not the control point
        translater.hitTestTarget = true;

        let targetContent = new DOMControl(Control.TARGET);
        return [
            new DOMControl(Control.ROTATE, 0,0, 0,0, 30),
            new DOMControl(Control.ROTATE, 0,1, 0,0, 30),
            new DOMControl(Control.ROTATE, 1,0, 0,0, 30),
            new DOMControl(Control.ROTATE, 1,1, 0,0, 30),
            targetContent, // renders target between controls
            translater,
            new DOMControl(Control.BORDER),
            new DOMControl(Control.REGISTRATION, .5,.5, 0,0, 10),
            new DOMControl(Control.SKEW_Y, 0,.5, 0,0, 10),
            new DOMControl(Control.SCALE_X, 1,.5, 0,0, 10),
            new DOMControl(Control.SKEW_X, .5,0, 0,0, 10),
            new DOMControl(Control.SCALE_Y, .5,1, 0,0, 10),
            new DOMControl(Control.SCALE, 0,0, 0,0, 10),
            new DOMControl(Control.SCALE, 0,1, 0,0, 10),
            new DOMControl(Control.SCALE, 1,0, 0,0, 10),
            new DOMControl(Control.SCALE, 1,1, 0,0, 10),
            new DOMControl(Control.ROTATE_SCALE, 1,0, 15,-15, 10),
            new DOMControl(Control.SCALE_UNIFORM, 1,1, 15,15, 10),
            new DOMControl(Control.ROTATE, .5,0, 0,-20)
        ];
    }

    down(event){

        Mouse.get(event, this.dom);
        let controlled = this.tool.start(Mouse.x, Mouse.y);

        // if tool wasnt selected and being controlled
        // attempt to make a new selection at this location
        if (!controlled && this.selectImage(Mouse.x, Mouse.y)){
            // selection occurred
            // force select the translate control
            // to be able to start moving right away
            controlled = this.tool.start(Mouse.x, Mouse.y, this.findControlByType(Control.TRANSLATE));
        }

        if (controlled){
            // events for moving selection
            this.dom.addEventListener(Mouse.MOVE, this.move);
            document.addEventListener(Mouse.END, this.up);
        }

        requestAnimationFrame(this.render);
        event.preventDefault();
    }

    move(event){

        Mouse.get(event, this.dom);
        this.applyDynamicControls(event);
        this.tool.move(Mouse.x, Mouse.y);

        requestAnimationFrame(this.render);
        event.preventDefault();
    }

    up(event){

        this.tool.end();

        this.dom.removeEventListener(Mouse.MOVE, this.move);
        document.removeEventListener(Mouse.END, this.up);

        requestAnimationFrame(this.render);
        event.preventDefault();
    }

    applyDynamicControls(event){
        // if dynamic, set controls based on
        // keyboard keys
        let dyn = this.getDynamicControl();
        if (dyn){
            if (event.ctrlKey){
                if (event.shiftKey){
                    dyn.type = Control.ROTATE_SCALE;
                }else{
                    dyn.type = Control.ROTATE;
                }
            }else if (event.shiftKey){
                dyn.type = Control.SCALE;
            }else{
                dyn.type = Control.TRANSLATE;
            }
        }
    }

    getDynamicControl(){
        let i;
        let n = this.tool.controls.length;
        for (i=0; i<n; i++){
            if (this.tool.controls[i].dynamicUV){
                return this.tool.controls[i];
            }
        }
        return null;
    }

    findControlByType(type){
        let i;
        let n = this.tool.controls.length;
        for (i=0; i<n; i++){
            if (this.tool.controls[i].type === type){
                return this.tool.controls[i];
            }
        }
        return null;
    }

    selectImage(x, y){
        let pic = null;
        let t = null;

        // walk backwards selecting top-most first
        let i = this.displayList.length;
        while (i--){
            pic = this.displayList[i];
            t = pic.transform;
            if (t.matrix.containsPoint(x, y, t.width, t.height)){
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

    render(){
        this.drawDisplayList();
        this.tool.draw();
    }

    drawDisplayList(){
        let i;
        let n = this.displayList.length;
        for (i=0; i<n; i++){
            this.displayList[i].image.style.zIndex = i;
            this.displayList[i].draw();
        }
    }
}

export default new TramformDOMPictures();