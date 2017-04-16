
/**
 * Loads Image objects in bulk and calls a a callback
 * function when all images have loaded.
 */
export default class ImagesLoader {

    constructor (completeCallback){
        this.images = [];
        this.imageCount = 0;
        this.completeCallback = completeCallback;
    }

    load(imgList){
        //let i;
        this.imageCount = imgList.length;
        for (let i=0; i<this.imageCount; i++){
            this.loadImage(imgList[i]);
        }
    }

    loadImage(url){
        var img = new Image();
        this.images.push(img);
        this.images[url] = img;

        img.onload = this.handleOnLoad.bind(this);
        img.onerror = this.handleOnError.bind(this);
        img.src = url; // starts load
    }

    handleOnLoad(){

        this.checkComplete();

    }

    handleOnError(){

        console.log("Failed to load img " + this);
        this.checkComplete();

    }

    checkComplete(){
        if (--this.imageCount <= 0){
            if (this.completeCallback != null){
                var temp = this.completeCallback;
                this.completeCallback = null;
                temp();
            }
        }
    }
}