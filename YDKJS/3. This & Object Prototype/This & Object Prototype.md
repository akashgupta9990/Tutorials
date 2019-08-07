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
Adding data inside array using bracket notation will also increase its length if bracket notation value is positive numerical number.
But if bracket notation value is other than numeric it will not increase length.

#Property Descriptors
Define object
```js
var myObject = {};
Object.defineProperty( myObject, "a", {
    value: 2,
    writable: true,
    configurable: true,
    enumerable: true
});
myObject.a // 2
// To Get property descriptors we use getOwnPropertyDescriptor.
Object.getOwnPropertyDescriptor( myObject, "a" );
{
    value: 2,
    writable: true,
    enumerable: true,
    configurable: true
}
```
## Writable
    Ability to change the value of any object.
    if true we can change the object property value else not.
    In Non Strict Mode, while changing value it will silently fail but in strict mode it will throw error.

## Configurable
    Ability to change the descriptors values.
    if true we can change the object property descriptors else not.
    Note: Changing the configurable to false cannot be undone.
    We can change writable can be changed from true to false but not vice versa
    if false we cannot delete the object key using delete property

## Enumerable
    It will ignore the loop from iterating on that property if set to false.
```js
var myObject = { };
Object.defineProperty(
    myObject,
    "a",
    { enumerable: true, value: 2 } // make `a` enumerable, as normal
);

Object.defineProperty(
    myObject,
    "b",
    { enumerable: false, value: 3 } // make `b` NON-enumerable
);

myObject.b; // 3
("b" in myObject); // true
myObject.hasOwnProperty( "b" ); // true

for (var k in myObject) {
    console.log( k, myObject[k] );
}
// "a" 2

Object.keys( myObject ); // ["a"]
Object.getOwnPropertyNames( myObject ); // ["a", "b"]
```
    To check if any object is enumerable or not we use Object.propertyIsEnumerable("key").

## Immutability
    This will make the object constant.
    Note: Only first level data will be immutable.

    Using both writable & configurable will make the key immutable(cannot be changed, redifined & deleted).

### prevent Extensions
```js
var myObj = {a:2};
Object.preventExtensions(myObj);
myObject.b = 3;
myObject.b; // undefined
// In non strict mode it will fail silently but in Strict mode it will throw error.
```

### Seal
Seal will not only add functionality of preventExtensions but also not allow to delete or reconfigure(have to check) existing data i.e configurable = false.
```js
Object.seal(myObj)
```

### freeze
Freeze is inhertiance of seal + not allow to edit any file i.e writable = false
```js
Object.freeze(myObj);
```

# Internal [[Get]] & [[Set]]
Calling myObj.a will call internal [[get]] function and find a, if not available return undefined.
Similarly we use [[set]] to seta data(more on chapter 5)

# Getter & Setter(Javascript/data accessors)
```js
//Object literal syntax
var myObject = {
    get a() { // define a getter for `a`
        return this._a_;
    }
};

Explicit Definition
Object.defineProperty(
    myObject, // target
    "a", { // property name
        set: function(val){ this._a_ =  val * 2}, // define a getter for `b`
        enumerable: true // make sure `b` shows up as an object property
    }
);

myObject.a = 2;
myObject.a; // 4
```

# Existence
To check if any object have any key available we use hasOwnProperty.
```js
myObj.hasOwnProperty("a")
```

# Shadowing
## Implicit Shadowing
```js
var anotherObject = {
    a: 2
};
var myObject = Object.create( anotherObject );
anotherObject.a; // 2
myObject.a; // 2
anotherObject.hasOwnProperty( "a" ); // true
myObject.hasOwnProperty( "a" ); // false
myObject.a++; // oops, implicit shadowing!
anotherObject.a; // 2
myObject.a; // 3
myObject.hasOwnProperty( "a" ); // true
```

# Prototype
Pre ES6 to inherit any prototype to another object we use
```js
Bar.prototype = Object.create(Foo.prototype) // This will discard initial Bar.prototype data and inherit Foo.prototype
```

After ES6 it introduce new way to inherit prototype
```js
Object.setPrototypeOf( Bar.prototype, Foo.prototype ); // This will modify the Bar.prototype value with additional data of Foo.prorotype
```

__proto__ is called as dunder proto.

# Object.create pollyfill
```js
var anotherObject = {
    a: 2
};
var myObject = Object.create( anotherObject, {
    b: {
        enumerable: false,
        writable: true,
        configurable: false,
        value: 3
    },
    c: {
        enumerable: true,
        writable: false,
        configurable: false,
        value: 4
    }
});
myObject.hasOwnProperty( "a" ); // false
myObject.hasOwnProperty( "b" ); // true
myObject.hasOwnProperty( "c" ); // true
myObject.a; // 2
myObject.b; // 3
myObject.c; // 4
```

# Class Design Pattern
```js
class Task {
    id;
    // constructor `Task()`
    Task(ID) { id = ID; }
    outputTask() { output( id ); } // Parent Function
}
class XYZ inherits Task {
    label;
    // constructor `XYZ()`
    XYZ(ID,Label) { super( ID ); label = Label; }
    outputTask() { super(); output( label ); } // Overriding parent function by giving same name
}
```

# Behaviour Delegation, Delegation Theory(Object Linked to Other Objects<OLOO>)
Use Objects instead of classes and inherits parent object using delegation.
```js
Task = {
    setID: function(ID) { this.id = ID; },
    outputID: function() { console.log( this.id ); } // parent function
};
// make `XYZ` delegate to `Task`
XYZ = Object.create( Task );
XYZ.prepareTask = function(ID,Label) { // Inheriting parent function and adding additional functionalities
    this.setID( ID );
    this.label = Label;
};
XYZ.outputTaskDetails = function() {
    this.outputID();
    console.log( this.label );
};
```

Note: Check comment of parent function overriding & inheriting in class & delegation.

# Delegation Vs OO Code
## OO
```js
function Foo(who) {
    this.me = who;
}
Foo.prototype.identify = function() {
    return "I am " + this.me;
};
function Bar(who) {
    Foo.call( this, who );
}
Bar.prototype = Object.create( Foo.prototype );
Bar.prototype.speak = function() {
    alert( "Hello, " + this.identify() + "." );
};
var b1 = new Bar( "b1" );
var b2 = new Bar( "b2" );
b1.speak();
b2.speak();
```

## OLOO
```js
Foo = {
    init: function(who) {
        this.me = who;
    },
    identify: function() {
        return "I am " + this.me;
    }
};
Bar = Object.create( Foo );
Bar.speak = function() {
    alert( "Hello, " + this.identify() + "." );
};
var b1 = Object.create( Bar );
b1.init( "b1" );
var b2 = Object.create( Bar );
b2.init( "b2" );
b1.speak();
b2.speak();
```