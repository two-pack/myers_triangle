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
        if(this.isIsosceles(a, b, c) ||
           this.isIsosceles(b, c, a) ||
           this.isIsosceles(c, a, b)) {
            return ISOSCELES;
        }
        return NOT_TRIANGLE;
    },
    
    isIsosceles : function(a, b, c) {
        if(a == b) {
            if(a + b > c) {
                return true;
            }
        }
        return false;
    }
};

triangle = new MyersTriangle();

