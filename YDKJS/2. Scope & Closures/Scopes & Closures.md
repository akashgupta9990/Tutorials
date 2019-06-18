# Scopes
  Javascript follow Lexical Scope concept.
  Some other language follow Dynamic scope concept.(Perl)

    Example
  ```js
    function foo(a) {
      // Scope 2
      var b = a * 2;
      function bar(c) {
        // Scope 2
        console.log( a, b, c );
      }
      bar( b * 3 );
    }
    // Scope 3
    foo( 2 ); // 2, 4, 12
  ```

  Scope always lookup in nested parent scope for undefined variabled

  # Cheating Lexical Scope
      Synatx
      ```js
        with (obj) {
          a = 3;
          b = 4;
          c = 5;
        }
      ```

      1. Eval - It takes sting as an argument and execute that string as code
        Example
        ```js
          function foo(str, a) {
            eval( str ); // cheating!
            console.log( a, b );
          }
          var b = 2;
          foo( "var b = 3;", 1 ); // 1, 3

          // here b is defined outside of foo scope but on execute it is within the foo scope thus we cheat the scope of foo
        ```

      2. With(Deprecated)
        ```js
          function foo(obj) {
            with (obj) {
              a = 2;
            }
          }
          var o1 = {a: 3};
          var o2 = {b: 3};
          foo( o1 );
          console.log( o1.a ); // 2
          foo( o2 );
          console.log( o2.a ); // undefined
          console.log( a ); // 2—Oops, leaked global!
        ```

    Eval function update the existing lexical scope while with function create a whole new lexical scope.
  
  # Closure
      Hiding in plain sight
      ```js
        function doSomething(a) {
          function doSomethingElse(a) {
            return a - 1;
          }
          var b;
          b = a + doSomethingElse( a * 2 );
          console.log( b * 3 );
        }
        doSomething( 2 ); // 15
        // doSomethingElse & b is in private level and no outer scope can access that
      ```

   # IIFE(Immediately Invoked Function Expression)
   # Block as Scopes

   # Error Handling
      Try & Catch method
      ```js
        try {
          doSomething();
        } catch(e) {
          handleError(e);
        }
      ```

  # Let
    Let will define the declared variable in that block scope only. Using variable outside block scope will cause refrence Error
    Variable Hoisting will not happeded for let variables

    ## Garbage Collection

    ```js
      function process(data) {
        // do something interesting
      }
      var someReallyBigData = { .. };
      process( someReallyBigData );
      var btn = document.getElementById( "my_button" );
      btn.addEventListener( "click", function click(evt){
        console.log("button clicked");
      }, /*capturingPhase=*/false );
      // Here someReallyBigData is not required after process function but it is still available & not garbage collected.
      // To garbage colllect it we use block scope

      function process(data) {
        // do something interesting
      }
      // anything declared inside this block can go away after! since this is in block scope it will be garbage collected after this block is executed
      {
        let someReallyBigData = { .. };
        process( someReallyBigData );
      }
      var btn = document.getElementById( "my_button" );
      btn.addEventListener( "click", function click(evt){
        console.log("button clicked");
      }, /*capturingPhase=*/false );

    ```

    ## Const

      ES6 added const which is a block scope variable and used to define constants.
      Constant inside object can be changed.

      ```js
        var a = {a:1,b:2,c:3};
        const b = a;
        a.a = 2 // valid
        b = 3 // Error
      ```

  # Hoisting

      ```js
        console.log(a)
        var a = 2
        // output is 2 instead of undefined because of hoisting
      ```
    
    When compiler starts, one of its first task is to find all declaration and define those to associated scopes.
    So declaration of variable/function happened first irrespective of where it is defined.
    Only variables available in root scope are hoisted, if available inside function it will not be hoisted and will be declared at the time of execution of function.
    Function is hoisted first as compared to variable.
