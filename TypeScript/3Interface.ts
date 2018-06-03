/*
 * @author Akash Gupta(aakash.gupta9990@gmail.com)
 * Typescript Tutorials
 * Interfaces
 * They are a powerful way of defining contracts within your code as well as contracts with code outside of your project
 */
(function() {
   interface LabelledValue {
      label: string;
   }
   function printLabel(labelledObj: LabelledValue) {
      console.log(labelledObj.label);
   }
   let myObj = { size: 10, label: "Size 10 Object" };
   printLabel(myObj);
   // PrintLabel require param LabelledValue which require label variable of type string as mandatory

   // Optional Properties
      interface SquareConfig {
         color?: string;
      }
      function createSquare(config: SquareConfig) {
         var a = {'color': 'blue'};
         if (config.color) {        // User can pass color or don't, it is optional
            a.color = config.color;
         }
      };

   // Readonly property
      // Object
         interface Point {
            readonly x: number;
         }
         let p1: Point = { x: 10 };
         p1.x = 5; // error!    // Can't change x property as it is readonly
      
      // Array
         let a: number[] = [1, 2, 3, 4];
         let ro: ReadonlyArray<number> = a;
         ro[0] = 12; // error!   // Error as complete array is only readonly
         a = ro; // error // Assigning ro to 'a' is also not possible as 'ro' it is readonly
         // We can bypass that using type assertion
            a = ro as number[];

      // Readonly as constant
         // Variables use const whereas properties use readonly.

   // Excess property checks
      // If an object literal has any properties that the “target type” doesn’t have, you’ll get an error.
      var mySquare = createSquare({ colour: "red" }); // error: 'colour' not expected in type 'SquareConfig'
      // here squareConfig only need color param but we are passing colour, typescript throw error is any property is not available in interface and if we are using it

      // To bypass this use type assesertion
         var mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig); // or

         interface SquareConfig1 {
            color?: string;
            width?: number;
            [propName: string]: any;
         } // use '[propName: string]: any;' to define any property with any type. or

   // Function Types
      interface SearchFunc {
         (source: string, subString: string): boolean;
      }
      let mySearch: SearchFunc;
      mySearch = function (source: string, subString: string) {
         let result = source.search(subString);
         return result > -1;
      } // here function is reading properties from interface searchFunc two params and return in boolean

   //Note:   Read Indexing(not understand) & class(related to C# and java), Interfaces Extending Classes

   // Extending Interfaces
      interface Shape {
         color: string
      }
      interface Square extends Shape {
         sides: number
      }
      let square1 = <Square>{};
      square1.color = 'blue';
      // An interface can extend multiple interface using comma separated

   // Hybrid Types
      // Combination of function and object
      interface Counter {
         (start: number): string;
         interval: number;
         reset(): void;
      }
      function getCounter(): Counter {
         let counter = <Counter>function (start: number) { };
         counter.interval = 123;
         counter.reset = function () { };
         return counter;
      }
      let c = getCounter();
      c(10);
      c.reset();
      c.interval = 5.0;
})();