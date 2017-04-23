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
     * @param event
     * @param elem
     * @return {Mouse} The Mouse object
     */
    get(event, elem){
        if (!elem){
            elem = event.currentTarget;
        }

        if (event.touches){
            if (event.touches.length){
                this.x = parseInt(event.touches[0].pageX, 10);
                this.y = parseInt(event.touches[0].pageY, 10);
            }
        } else {
            // mouse events
            this.x = parseInt(event.clientX, 10);
            this.y = parseInt(event.clientY, 10);
        }

        let rect = elem.getBoundingClientRect();

        this.x += elem.scrollLeft - elem.clientLeft - rect.left;
        this.y += elem.scrollTop - elem.clientTop - rect.top;

        return this;
    },
};

export default Mouse;