// IIFE(Immediately Invoked Function Expression)
(function () {
    for (var i = 0; i < 10; i++) {
        // capture the current state of 'i'
        // by invoking a function with its current value
        (function (i) {
            setTimeout(function () {
                console.log(i);
            }, 100 * i);
        })(i);
    }
    var _loop_1 = function (i_1) {
        setTimeout(function () {
            console.log(i_1);
        }, 100 * i_1);
    };
    for (var i_1 = 0; i_1 < 10; i_1++) {
        _loop_1(i_1);
    }
    // Note: Shadowing
    // Destructuring
    // Array destructuring
    var input = [1, 2];
    var first = input[0], second = input[1];
    console.log(first); // outputs 1
    console.log(second); // outputs 2
    // equals 
    first = input[0];
    second = input[1];
    var _a = [1, 2, 3, 4], first1 = _a[0], rest = _a.slice(1);
    console.log(first1); // outputs 1
    console.log(rest); // outputs [ 2, 3, 4 ]
    // Object destructuring
    var o = {
        a: "foo",
        b: 12,
        c: "bar",
        d: 14
    };
    var a = o.a, b = o.b;
    var newName1 = o.a, newName2 = o.b;
    var c = o.c, d = o.d;
    function keepWholeObject(wholeObject) {
        var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
    }
    function f(_a) {
        var a = _a.a, b = _a.b;
        // ...
    }
    // Spreads
    // It create a shallow copy, data will be concat but we will loose methods/functions
    var third = [1, 2];
    var fourth = [3, 4];
    var bothPlus = [0].concat(third, fourth, [5]);
})();
