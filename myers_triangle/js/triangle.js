const EQUILATERAL = 1;

var MyersTriangle = function(model) {
    
};

MyersTriangle.prototype = {
    type : function(a, b, c) {
        return EQUILATERAL;
    }
};

triangle = new MyersTriangle();

