const NOT_TRIANGLE = -1;
const EQUILATERAL = 1;
const ISOSCELES = 2;

var MyersTriangle = function(model) {
    
};

MyersTriangle.prototype = {
    type : function(a, b, c) {
        if(a == b && b == c) {
            return EQUILATERAL;
        }
        if(this.isIsosceles(a, b, c)) {
            return ISOSCELES;
        }
        return NOT_TRIANGLE;
    },
    
    isIsosceles : function(a, b, c) {
        if(this.isIsoscelesXeqY(a, b, c) ||
           this.isIsoscelesXeqY(b, c, a) ||
           this.isIsoscelesXeqY(c, a, b)) {
            return true;
        }
        return false;
    },

    isIsoscelesXeqY : function(x, y, z) {
        if(x == y) {
            if(x + y > z) {
                return true;
            }
        }
        return false;
    }
};

triangle = new MyersTriangle();

