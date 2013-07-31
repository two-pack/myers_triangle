module("triangle.js Test", {
    setup : function() {
        this.sut = new MyersTriangle();
    }
});

test("3-3-3の場合は正三角形を返す。",
    function() {
        deepEqual(this.sut.type(3, 3, 3), EQUILATERAL);
    });
