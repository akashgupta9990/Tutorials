// IIFE(Immediately Invoked Function Expression)

(function() {
   for (var i = 0; i < 10; i++) {
      // capture the current state of 'i'
      // by invoking a function with its current value
      (function (i) {
         setTimeout(function () {
            console.log(i);
         }, 100 * i);
      })(i);
   }

   for (let i = 0; i < 10; i++) {
      setTimeout(function () {
         console.log(i);
      }, 100 * i);
   }

   // Note: Shadowing

   // Destructuring
   // Array destructuring
      let input = [1, 2];
      let [first, second] = input;
      console.log(first); // outputs 1
      console.log(second); // outputs 2

      // equals 

      first = input[0];
      second = input[1];

      let [first1, ...rest] = [1, 2, 3, 4];
      console.log(first1); // outputs 1
      console.log(rest); // outputs [ 2, 3, 4 ]

   // Object destructuring
      let o = {
         a: "foo",
         b: 12,
         c: "bar",
         d: 14
      };
      let { a, b } = o;
      let { a: newName1, b: newName2 } = o;
      let { c, d }: { c: string, d: number } = o;

      function keepWholeObject(wholeObject: { a: string, b?: number }) {
         let { a, b = 1001 } = wholeObject;
      }

      type C = { a: string, b?: number }
      function f({ a, b }: C): void {
         // ...
      }

   // Spreads
   // It create a shallow copy, data will be concat but we will loose methods/functions
      let third = [1, 2];
      let fourth = [3, 4];
      let bothPlus = [0, ...third, ...fourth, 5];
   })();