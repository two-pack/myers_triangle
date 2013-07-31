module("triangle.js Test", {
    setup : function() {
        this.sut = new MyersTriangle();
    }
});

test("3-3-3の場合は正三角形を返す。",
    function() {
        deepEqual(this.sut.type(3, 3, 3), EQUILATERAL);
    });

test("2-2-1の場合は二等辺三角形を返す。",
        function() {
            deepEqual(this.sut.type(2, 2, 1), ISOSCELES);
        });

test("2-1-2の場合は二等辺三角形を返す。",
        function() {
            deepEqual(this.sut.type(2, 1, 2), ISOSCELES);
        });

test("1-2-2の場合は二等辺三角形を返す。",
        function() {
            deepEqual(this.sut.type(1, 2, 2), ISOSCELES);
        });

test("1-1-3の場合は二等辺三角形ではない。",
        function() {
            deepEqual(this.sut.type(1, 1, 3), NOT_TRIANGLE);
        });

test("3-4-5の場合は三角形である。",
        function() {
            deepEqual(this.sut.type(3, 4, 5), TRIANGLE);
        });

test("1-4-6の場合は三角形ではない。",
        function() {
            deepEqual(this.sut.type(1, 4, 6), NOT_TRIANGLE);
        });