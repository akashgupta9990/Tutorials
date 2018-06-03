/*
 * @author Akash Gupta(aakash.gupta9990@gmail.com)
 * Typescript Tutorials
 * Interfaces
 * They are a powerful way of defining contracts within your code as well as contracts with code outside of your project
 */
(function () {
    function printLabel(labelledObj) {
        console.log(labelledObj.label);
    }
    var myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj);
    function createSquare(config) {
        var a = { 'color': 'blue' };
        if (config.color) { // User can pass color or don't, it is optional
            a.color = config.color;
        }
    }
    ;
    var p1 = { x: 10 };
    p1.x = 5; // error!    // Can't change x property as it is readonly
    // Array
    var a = [1, 2, 3, 4];
    var ro = a;
    ro[0] = 12; // error!   // Error as complete array is only readonly
    a = ro; // error // Assigning ro to 'a' is also not possible as 'ro' it is readonly
    // We can bypass that using type assertion
    a = ro;
    // Readonly as constant
    // Variables use const whereas properties use readonly.
    // Excess property checks
    // If an object literal has any properties that the “target type” doesn’t have, you’ll get an error.
    var mySquare = createSquare({ colour: "red" }); // error: 'colour' not expected in type 'SquareConfig'
    // here squareConfig only need color param but we are passing colour, typescript throw error is any property is not available in interface and if we are using it
    // To bypass this use type assesertion
    var mySquare = createSquare({ width: 100, opacity: 0.5 }); // or
    var mySearch;
    mySearch = function (source, subString) {
        var result = source.search(subString);
        return result > -1;
    }; // here function is reading properties from interface searchFunc two params and return in boolean
    var square1 = {};
    square1.color = 'blue';
    function getCounter() {
        var counter = function (start) { };
        counter.interval = 123;
        counter.reset = function () { };
        return counter;
    }
    var c = getCounter();
    c(10);
    c.reset();
    c.interval = 5.0;
})();
