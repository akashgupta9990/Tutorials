/*
 * @author Akash Gupta(aakash.gupta9990@gmail.com)
 * Typescript Tutorials
 * Variable Types
 */
// Watch and automatically convert typescript to javascript
// npm install -g typescript
// tsc filename.ts --watch --target ES5
/*
 * Variable Types
 *  @Syntax
 * var variable: variableType = "variable";
 * @param variableType(string, boolean, number, array, any)
 */
(function () {
    var fullName = "Akash Gupta";
    var age = 25;
    // Numbers
    // Type script support number/hexadecimal/decimal/binary/octal
    var decimal = 6; // Decimal
    var hex = 0xf00d; // Hexadecimal
    var binary = 10; // Binary
    var octal = 484; // Octal
    // Strings embedded expressions.
    var sentence = "Hello, my name is " + fullName + ". I'll be " + (age + 1) + " years old in october.";
    // This is similar to 
    var sentence1 = "Hello, my name is " + fullName + "I'll be " + (age + 1) + " years old next month.";
    // Array can be defined two ways
    var array = [1, 2, 3];
    // The second way uses a generic array type, Array<elemType>
    var array = [1, 2, 3];
    // Tuple
    // It allows to declare multiple elemType in array 
    var tuple = ['a', 1];
    // Enum
    // It allows to choose variable from predefined options
    var Color1;
    (function (Color1) {
        Color1[Color1["red"] = 0] = "red";
        Color1[Color1["green"] = 1] = "green";
        Color1[Color1["blue"] = 2] = "blue";
    })(Color1 || (Color1 = {}));
    var enum1 = Color1.green; // Can also be used as Color[1]
    // Enum index works like array
    // If want to start index not from 0
    var Color2;
    (function (Color2) {
        Color2[Color2["black"] = 1] = "black";
        Color2[Color2["yellow"] = 2] = "yellow";
        Color2[Color2["pink"] = 3] = "pink";
    })(Color2 || (Color2 = {}));
    // Set index manually
    (function (Color2) {
        Color2[Color2["brown"] = 1] = "brown";
        Color2[Color2["grey"] = 2] = "grey";
        Color2[Color2["purple"] = 4] = "purple";
    })(Color2 || (Color2 = {}));
    ;
    // Any
    // When element type is not fixed use any to define any elemType
    // With any elemType internal functions will might not Work
    var notSure = 4;
    notSure.ifItExists(); // okay, ifItExists might exist at runtime
    notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
    var prettySure = 4;
    // prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
    // Void, null, undefined
    // Declaring void is not useful as it assign only null or undefined
    var unusable = null;
    var u = undefined;
    var n = null;
    // Note - --strictNullChecks, Never
    // Type assertion
    // https://basarat.gitbooks.io/typescript/docs/types/type-assertion.html
    var assertion = sentence.length;
    var assertion1 = sentence.length;
})();
