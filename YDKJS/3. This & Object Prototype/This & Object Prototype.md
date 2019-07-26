## Default Binding rule
if a global function is called without any precedence(a.b() ot this.b()) in that case this will point to window.
In strict mode this will be undefined.
    
### Implicit Binding rule
    If a function is called by refrence of object i.e a.b() here a will be the this object.
    this will always point to the nearest reference.
```js
    //For Ex
    function foo() {
        console.log( this.a );
    }
    var obj2 = {
        a: 42,
        foo: foo
    };
    var obj1 = {
        a: 2,
        obj2: obj2
    };
    obj1.obj2.foo(); // 42
    // here this is obj2
    var a = "global";
    var bar = obj2.foo(); // global
}
```

# Explicit Binding
Using call & apply we explicitly define functions what will be their this keyword. These are called explicit binding.
## Call
```js
    function foo() {
        console.log(this.name)
    }
    var obj = {
        name: "john doe"
    }
    foo.call(obj)
    // Explicitly we define this as obj
```

### Boxing
When we pass a primitive value to call function it will be converted to (new String(..), new Boolean(..), or new Number(..), respectively).

## Hard Binding
```js
function foo() {
    console.log( this.a );
}
var obj = {
    a: 2
};
var bar = function() {
    foo.call( obj );
};
bar(); // 2
setTimeout( bar, 100 ); // 2
// hard-bound `bar` can no longer have its `this` overridden
bar.call( window ); // 2
```

# Constructors
A constructor is called by calling any class with new keyword.
A constructor will be called only by new keyword.
A brand new object is created with new.


# Learn Currying
# Method vs function

# Arrow Function

# Objects
## Literal Form
var foo = {a:1}
## Constructed Form
var foo = new Object();
foo.a = 1;
## Six primary types in javascript
    String, Number, Boolean, null(also an object, an old bug), undefined, Object
    Functions is a subtype of object(aka "callable Object" or First Class).
    Arrays are form of object with extra behaviour.

## Everything is object
```js
var strPrimitive = "I am a string";
typeof strPrimitive; // "string"
strPrimitive instanceof String; // false

var strObject = new String( "I am a string" );
typeof strObject; // "object"
strObject instanceof String; // true

// inspect the object sub-type
Object.prototype.toString.call( strObject ); // [object String]
```

Using the literal form to define anything is primitive data and not object
But when we use ony inbuild function on that it will be automatically coerce to a object by js engine.

null & undefined has no object form
Date can not be created using literal form, only by constructed form.

### dot(.) operator & bracket([]) operator
dot operator referred to "property access" while bracket operator refer to "key access"
Bracket notation always use a string value to fetch data.
If we pass anything accept string it will first convert it to a string and fetch data
for ex
```js
var a = {};
a[Object] = "object";
a["[ObjectObject]"] // object
```

# Arrays[]
Adding data inside array using bracket notation will also increase its length if 