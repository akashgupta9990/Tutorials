/*
 * @author Akash Gupta(aakash.gupta9990@gmail.com)
 * Typescript Tutorials
 * Functions
 */

/*
 * Functions
 */
(function(){
    // Functions
        // Named functions
            function named() {console.log('Named functions')} //Function name is named
        // Unnamed Functions
            var unNamed = function () {console.log('UnNamed functions')}
            // there is no function is defined, we are assigning anonymous function to variable unNamed.

    // Functions Type
        function add(x: number, y: number): number {return x + y;}
        let myAdd = function(x: number, y: number): number { return x + y; };
        // we have defined x, y as number type and this function will also return a number type

    // Or
        let myAdd1: (baseValue: number, increment: number) => number =
        function(x: number, y: number): number { return x + y; };

    // 
        
})