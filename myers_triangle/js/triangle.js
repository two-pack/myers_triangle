const EQUILATERAL = 1;
const ISOSCELES = 2;

var MyersTriangle = function(model) {
    
};

MyersTriangle.prototype = {
    type : function(a, b, c) {
        if(a == b && b == c) {
            return EQUILATERAL;
        }
        if(a == b || b == c || c == a) {
            return ISOSCELES;
        }
        return -1;
    }
};

triangle = new MyersTriangle();

