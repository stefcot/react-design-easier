/**
 * Created by Stephane on 4/12/2017.
 */
class Matrix {

    static temp = new Matrix();

    constructor(a,b,c,d,x,y){
        this.a = (a !== null) ? a : 1;
        this.b = b || 0;
        this.c = c || 0;
        this.d = (d !== null) ? d : 1;
        this.x = x || 0;
        this.y = y || 0;
    }

    // used as a single object pool for
    // some matrix operations
    toString(){
        return "matrix("+this.a+","+this.b+","+this.c+","+this.d+","
            +this.x+","+this.y+")";
    }

    equals(m){
        return (this.a === m.a
            &&  this.b === m.b
            &&  this.c === m.c
            &&  this.d === m.d
            &&  this.x === m.x
            &&  this.y === m.y);
    }

    identity(){
        this.a = 1;
        this.b = 0;
        this.c = 0;
        this.d = 1;
        this.x = 0;
        this.y = 0;
    }

    clone(){
        return new Matrix(
            this.a,
            this.b,
            this.c,
            this.d,
            this.x,
            this.y
        );
    }

    copyFrom(m){
        this.a = m.a;
        this.b = m.b;
        this.c = m.c;
        this.d = m.d;
        this.x = m.x;
        this.y = m.y;
    }

    rotate(angle){
        let u = Math.cos(angle);
        let v = Math.sin(angle);

        let temp = this.a;
        this.a = u * this.a - v * this.b;
        this.b = v * temp + u * this.b;
        temp = this.c;
        this.c = u * this.c - v * this.d;
        this.d = v * temp + u * this.d;
        temp = this.x;
        this.x = u * this.x - v * this.y;
        this.y = v * temp + u * this.y;
    }

    translate(x, y){
        this.x += x;
        this.y += y;
    }

    concat(m){
        let a = this.a * m.a;
        let b = 0;
        let c = 0;
        let d = this.d * m.d;
        let x = this.x * m.a + m.x;
        let y = this.y * m.d + m.y;

        if (this.b !== 0 || this.c !== 0 || m.b !== 0 || m.c !== 0) {
            a += this.b * m.c;
            d += this.c * m.b;
            b += this.a * m.b + this.b * m.d;
            c += this.c * m.a + this.d * m.c;
            x += this.y * m.c;
            y += this.x * m.b;
        }

        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.x = x;
        this.y = y;
    }

    invert() {
        if (this.b === 0 && this.c === 0 && this.a !== 0 && this.d !== 0) {

            this.a = 1/this.a;
            this.d = 1/this.d;
            this.b = 0;
            this.c = 0;
            this.x = -this.a*this.x;
            this.y = -this.d*this.y;

        }else{

            let det = this.a*this.d - this.b*this.c;
            if (det === 0) {
                this.identity();
                return;
            }
            det = 1/det;

            let temp = this.a;
            this.a = this.d * det;
            this.b = -this.b * det;
            this.c = -this.c * det;
            this.d = temp * det;

            temp = this.y;
            this.y = -(this.b * this.x + this.d * this.y);
            this.x = -(this.a * this.x + this.c * temp);
        }
    }

    getRotationX(){
        return Math.atan2(this.b, this.a);
    }

    getRotationY(){
        return Math.atan2(this.c, this.d);
    }

    getTransformedX(x, y){
        return this.x + this.a * x + this.c * y;
    }

    getTransformedY(x, y){
        return this.y + this.d * y + this.b * x;
    }

    scale(x, y) {
        this.a *= x;
        this.b *= y;
        this.c *= x;
        this.d *= y;
        this.x *= x;
        this.y *= y;
    }

    containsPoint(x, y, w, h) {
        // find mouse in local target space
        // and check within bounds of that area
        let inv = Matrix.temp; // use pooled Matrix to reduce allocations
        inv.copyFrom(this);
        inv.invert();

        let tx = inv.x + inv.a * x + inv.c * y;
        let ty = inv.y + inv.d * y + inv.b * x;
        // compare locations in non-transformed space (inverted)
        return (tx >= 0 && tx <= w && ty >= 0 && ty <= h);
    }
}

export default Matrix;