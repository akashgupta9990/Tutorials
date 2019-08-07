# This

```js
function foo(num) {
    console.log( "foo: " + num );
// keep track of how many times `foo` is called
    this.count++;
}
foo.count = 0;
var i;
for (i=0; i<10; i++) {
    if (i > 5) {
        foo( i );
    }
}
/*
    window.count = nan(wasnt initialized)
    foo.count = 0(still) as while calling doo this was window
*/
```

# This & Lexical Scope
```js
function foo() {
    var a = 2; // this is local variable
    this.bar(); // this is window
}
function bar() {
    console.log(this.a); // still this is window
}
foo(); //undefined
```

```js
function foo() {
    console.log( this.a );
}
var a = 2;
var o = { a: 3, foo: foo };
var p = { a: 4 };
o.foo(); // 3
(p.foo = o.foo)();
```

# Undefined vs Undeclared
Undefined is declared but value is not assigned and when on console give undefined.
Undeclared is not declared & will give reference error on console.
