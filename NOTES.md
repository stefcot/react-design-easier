###How to calculate rotation in 2D in Javascript
See: http://stackoverflow.com/questions/17410809/how-to-calculate-rotation-in-2d-in-javascript
```
function rotate(cx, cy, x, y, angle) {
    var radians = (Math.PI / 180) * angle,
        cos = Math.cos(radians),
        sin = Math.sin(radians),
        nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
        ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
    return [nx, ny];
}
```

The first two parameters are the X and Y coordinates of the central point (the origin around which the second point will be rotated). The next two parameters are the coordinates of the point that we'll be rotating. The last parameter is the angle, in degrees.

As an example, we'll take the point (2, 1) and rotate it around the point (1, 1) by 90 degrees clockwise.

```
rotate(1, 1, 2, 1, 90);
// > [1, 0]
```

####Three notes about this function:

1. For clockwise rotation, the last parameter angle should be positive. For counterclockwise rotation (like in the diagram you provided), it should be negative.
2. Note that even if you provide arguments that should yield a point whose coordinates are whole numbers -- i.e. rotating the point (5, 0) by 90 degrees about the origin (0, 0), which should yield (0, -5) -- JavaScript's rounding behavior means that either coordinate could still be a value that's frustratingly close to the expected whole number, but is still a float. For example:<br>```rotate(0, 0, 5, 0, 90);
// > [3.061616997868383e-16, -5]```<br>
For this reason, both elements of the resulting array should be expected as a float. You can convert them to integers using Math.round(), Math.ceil(), or Math.floor() as needed.
3. Finally, note that this function assumes a Cartesian coordinate system, meaning that values on the Y axis become higher as you go "up" in the coordinate plane. In HTML / CSS, the Y axis is inverted -- values on the Y axis become higher as you move down the page.

###extracting rotation, scale values from 2d transformation matrix
See: https://math.stackexchange.com/questions/13150/extracting-rotation-scale-values-from-2d-transformation-matrix

#####Scale and Rotation Extraction for Action Script 3
```
package nid.utils 
{
    import flash.geom.Matrix;
    import flash.geom.Point;
    import nid.geom.DMatrix;
    /**
     * ...
     * @author Nidin P Vinayakan
     */
    public class MatrixConvertor 
    {
        public static const degree:Number = 180 / Math.PI;
        public static const radian:Number = Math.PI / 180;

        public function MatrixConvertor()
        {

        }
        public static function convert(mat:Matrix):DMatrix 
        {
            var dmat:DMatrix = new DMatrix(mat.a, mat.b, mat.c, mat.d, mat.tx, mat.ty);
            var rad:Number;
            var deg:Number;
            var sign:Number;
            /**
             * scaleX = √(a^2+c^2)
             * scaleY = √(b^2+d^2)
             * rotation = tan^-1(c/d) = tan^-1(-b/a) it will not work sometimes 
             * rotation = a / scaleX  = d / scaleY
             */
            with (dmat)
            {
                scaleX = Math.sqrt((a * a) + (c * c));
                scaleY = Math.sqrt((b * b) + (d * d));

                sign = Math.atan(-c / a);
                rad  = Math.acos(a / scaleX);
                deg  = rad * degree;

                if (deg > 90 && sign > 0)
                {
                    rotation = (360 - deg) * radian;
                }
                else if (deg < 90 && sign < 0)
                {
                    rotation = (360 - deg) * radian;
                }
                else
                {
                    rotation = rad;
                }
                rotationInDegree = rotation * degree;
            }
            return dmat;
        }
    }

}

/**
* DMatrix Class
*/
package nid.geom 
{
    import flash.geom.Matrix;
    /**
     * ...
     * @author Nidin P Vinayakan
     */
    public class DMatrix extends Matrix
    {
        public var rotation:Number=0;
        public var rotationInDegree:Number=0;
        public var scaleX:Number=1;
        public var scaleY:Number=1;

        public function DMatrix(a:Number=1, b:Number=0, c:Number=0, d:Number=1, tx:Number=0, ty:Number=0)
        {
            super(a, b, c, d, tx, ty);
        }

    }

}
```