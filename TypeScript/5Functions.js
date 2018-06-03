/*
 * @author Akash Gupta(aakash.gupta9990@gmail.com)
 * Typescript Tutorials
 * Functions
 */
/*
 * Functions
 */
(function () {
    // Functions
    // Named functions
    function named() { console.log('Named functions'); } //Function name is named
    // Unnamed Functions
    var unNamed = function () { console.log('UnNamed functions'); }; // there is no function is defined, we are assigning anonymous function to variable unNamed.
    // Functions Type
    function add(x, y) { return x + y; }
    var myAdd = function (x, y) { return x + y; };
    // we have defined x, y as number and this function will also return a number type
    // Or
    var myAdd1 = function (x, y) { return x + y; };
});
