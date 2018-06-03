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
(function(){
   var fullName : string = "Akash Gupta";
   var age : number = 25;

   // Numbers
   // Type script support number/hexadecimal/decimal/binary/octal
      let decimal: number = 6; // Decimal
      let hex: number = 0xf00d; // Hexadecimal
      let binary: number = 0b1010; // Binary
      let octal: number = 0o744; // Octal

   // Strings embedded expressions.
      var sentence: string = `Hello, my name is ${fullName}. I'll be ${ age + 1} years old in october.`;
      // This is similar to 
      var sentence1: string = "Hello, my name is " + fullName + "I'll be " + (age + 1) + " years old next month.";

   // Array can be defined two ways
      var array: number[] = [1, 2, 3];
      // The second way uses a generic array type, Array<elemType>
      var array: Array <number> =[1, 2, 3];

   // Tuple
      // It allows to declare multiple elemType in array 
      var tuple: [string, number] = ['a', 1];

    // Enum
      // It allows to choose variable from predefined options
      enum Color1 {red, green, blue}
      var enum1 : Color1 = Color1.green; // Can also be used as Color[1]
      // Enum index works like array
      // If want to start index not from 0
      enum Color2 {black=1, yellow, pink}
      // Set index manually
      enum Color2 {brown=1, grey=2, purple=4};

    // Any
      // When element type is not fixed use any to define any elemType
      // With any elemType internal functions will might not Work
      var notSure: any = 4;
      notSure.ifItExists(); // okay, ifItExists might exist at runtime
      notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

      var prettySure: Object = 4;
      // prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

    // Void, null, undefined
      // Declaring void is not useful as it assign only null or undefined
      var unusable: void = null;
      var u: undefined = undefined;
      var n: null = null;

    // Note - --strictNullChecks, Never

    // Type assertion
    // https://basarat.gitbooks.io/typescript/docs/types/type-assertion.html
      var assertion: number = (<string>sentence).length;
      var assertion1: number = (sentence as string).length;
})();