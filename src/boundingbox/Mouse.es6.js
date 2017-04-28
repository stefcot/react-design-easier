/**
 * Created by Stephane on 4/12/2017.
 */
const Mouse = {
    x: 0,

    y: 0,

    START: "mousedown",

    MOVE: "mousemove",

    END: "mouseup",

    /**
     *
     * @param ev {TouchEvent}
     * @param elem {HTMLElement}
     * @return {Mouse} The Mouse object
     */
    get(ev, elem){
        if (!elem){
            elem = ev.currentTarget;
        }

        if (ev.touches){
            if (ev.touches.length){
                this.x = parseInt(ev.touches[0].pageX, 10);
                this.y = parseInt(ev.touches[0].pageY, 10);
            }
        } else {
            // mouse events
            this.x = parseInt(ev.clientX, 10);
            this.y = parseInt(ev.clientY, 10);
        }

        let rect = elem.getBoundingClientRect();

        this.x += elem.scrollLeft - elem.clientLeft - rect.left;
        this.y += elem.scrollTop - elem.clientTop - rect.top;

        return this;
    },
};

export default Mouse;