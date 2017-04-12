/**
 * Created by Stephane on 4/12/2017.
 */
const Mouse = {
    x: 0,

    y: 0,

    START: "mousedown",

    MOVE: "mousemove",

    END: "mouseup",

    get(event, elem){
        if (!elem){
            elem = event.currentTarget;
        }

        if (event.touches){
            if (event.touches.length){
                this.x = parseInt(event.touches[0].pageX);
                this.y = parseInt(event.touches[0].pageY);
            }
        }else{
            // mouse events
            this.x = parseInt(event.clientX);
            this.y = parseInt(event.clientY);
        }

        var rect = elem.getBoundingClientRect();
        this.x += elem.scrollLeft - elem.clientLeft - rect.left;
        this.y += elem.scrollTop - elem.clientTop - rect.top;
        return this;
    }
};

export default Mouse;