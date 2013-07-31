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
        if(a == b) {
            if(a + b > c) {
                return true;
            }
        }
        if(b == c) {
            if(b + c > a) {
                return true;
            }
        }
        if(c == a) {
            if(c + a > b) {
                return true;
            }
        }
        return false;
    }
};

triangle = new MyersTriangle();

