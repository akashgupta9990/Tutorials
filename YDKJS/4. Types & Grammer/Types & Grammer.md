# Dependency Injection
# Inversion of Control
Inversion of control will remove direct dependency & inject those as use dependency injection to pass instance to components
We pass dependency as parameter

# TDD, Generics, Delegates
 
 # Solid & Dry(Don't repeat yourself)
 SOLID is an acronym for:
    Single Responsibility Principle(Create small reusable component)
    Open/Closed Principle
    Liskov Substitution Principle
    Interface Segregation Principle
    Dependency Inversion

# Arrays
Deleting an array using delete will not update length property
We can add key value data in array but it wont be counted in length property.
a["13"] will coerced to a[13] in array.
Note: Array.from

Array are not immutable(i.e its value can be changed without assigning)
```js
var a = [1,2,3]
a.reverse();
a // [3,2,1]
```

# String
String are immutable i.e it value have to be reassigned to change
```js
var a = "String";
var b = a.toUpperCase();
a // String
b // STRING
```

# Numbers
Both decimal & normal numbers are stored in Number type
```js
/*42
42.0
42.
42 .
These are all equal values
42..toFixed(2) seems inapropriate but is valid. Since zero after decimal is optional so here first . is treated as decimal number 42.0 and second . is treated as function seperator.
```

# Small Decimal values
Javascript use binary floating point number to store numbers
```js
0.1 + 0.2 == 0.3 // false
/*
this is false because it uses binary floating point number to save 0.1 & 0.2
so this is equal to 0.30000000000000004
to compare values always use .toFixed(x) so it will convert to x decimal point and compare.
*/
```
max safe value in javascript is 2^53 - 1, which is 9007199254740991 and can be used by Num
ber.MAX_SAFE_INTEGER
similarly min safe value is -9007199254740991 & can be used as Number.MIN_SAFE_INTEGER

# Testing for integer
```js
Number.isInteger( 42 ); // true
Number.isInteger( 42.000 ); // true
Number.isInteger( 42.3 ); // false
```

## Void operator
it will nullify the values;
```js
var a = 3;
console.log(void a, a) // undefined, 3
```

## NAN(Not a Number)
NaN is invalid number, bad number, failed number
```js
var a = 2/"foo" // NaN
typeof a === "number"; // true
a == NaN; // false
a === NaN; // false
NaN == NaN; // false
// to compare if number is NaN we use isNaN but is has a flaw
window.isNaN(a); //true
window.isNaN("foo"); //true !!!ouch an ancient bug
// so a replacement is provided
Number.isNaN(a) // true
Number.isNaN("foo") // false
```

## Infinites
```js
var a = 1/0; // Infinity equal to Number.POSITIVE_INFINITY
var b = -1/0; // -Infinity equal to Number.NEGATIVE_INFINITY
Infinity/Infinity // NaN
Infinity/0 // Infinity
0/Infinity // 0
```

## Zeroes
we have both negative & positive zero
```js
var b = 0 / -3; // -0
JSON.stringify(b) // "0"
b.toString // "0"
String(b) // "0"
JSON.parse("-0") // -0
+"-0" // -0
Number("-0") // -0

//Comparision
var a = 0;
a == b; // true
-0 == 0; // true
a === b; // true
-0 === 0; // true
0 > -0; // false
a > b; // false
```

We need negative zero to check the movement/direction if required similar like in speed/acceleration physics chapter.

## Special Equality(Object.is() ES6 Feat)
```js
var a = 2 / "foo";
var b = -3 * 0;
Object.is( a, NaN ); // true
Object.is( b, -0 ); // true
Object.is( b, 0 ); // false
```
it should be used where "==" & "===" doesn't matter.

## Value vs Refrences
```js
var a = 2;
b = a;
b++;
console.log(a) // 2
console.log(b) // 3

var c = [1,2,3];
var d = c;
b.push(4);
console.log(c); // [1,2,3,4]
console.log(d); // [1,2,3,4]
d = [4,5,6]
console.log(c); // [1,2,3,4]
console.log(d); // [4,5,6] // Since refrence of d is changed, its original value is not changed
```

Primitive values(null, undefined, String, Numbers, Symbol, Boolean) are cloned and then assigned to variables.

#Natives
String, Number, Boolean, Array, Object, Function, RegExp, Date, Error, Symbol(added in ES6!)
```js
var a = new String( "abc" );
typeof a; // "object" ... not "String"
a instanceof String; // true
Object.prototype.toString.call( a ); // "[object String]" (type, instance)
```

## Boxing Wrappers
primitive value doesn't have any property/function.
While using them, JS automatically add a type wrapper so we can use their properties.

```js
var a = "abc";
a.length; // 3
a.toUpperCase(); //"ABC"
```

Explicitly adding wrapper decrease performance

## Unboxing Wrappers
we can use valueOf function to get primitive value.
```js
var a = "abc";
a.valueOf() // "abc"
```

## Native as constructors
### Arrays
```js
var a = new Array(3);
var b = [undefined, undefined, undefined];
var c = []; c.length = 3;

a // (3) [empty × 3]
b // [undefined, undefined, undefined]
c // (3) [empty × 3]
```

creating a & c will create array with 3 empty slots i.e it has 3 slots but empty
creating b will create array with 3 slots with undefined value.

```js
a.join("-") // "--"
b.join("-") // "--"
a.map(function(v,i){ return i; }); // [ undefined x 3 ]
b.map(function(v,i){ return i; }); // [ 0, 1, 2 ]
Array.apply( null, { length: 3 } ); // [undefined, undefined, undefined]
```

join and map works differently
map will iterate on elem not length property but var a has no element so it doesn't have anything to iterate.

### Date 
```js
var date = new Date(); // current date
date.getTime(); // 1567577305366
// this will print no of sec since Jan 1 1970
new Date(1567577305366) // Wed Sep 04 2019 11:38:25 GMT+0530 (India Standard Time)
```

### Error
It will capture the error stack so we will know the flow and where that error happened.


# Coercion
Two types of coercion
1. type casting - basically happened at compile time
2. type coercion - happened at runtime

Implicit Coercion - Happen automatically
Explicit Coercion - Happen from user side
```js
var a = 1;
var b = "b" + a; // a value(Number type 1) will be converted to String 1("1") Implicit coercion
var c = "c" + String(a); // Explicit coercion
```

## JSON Stringify
It will convert everything to string i.e 5 to "5" etc.
For undefined & empty function it will convert to null
```js
JSON.stringify( undefined ); // undefined
JSON.stringify( function(){} ); // undefined
JSON.stringify([1,undefined,function(){},4]); // "[1,null,null,4]"
JSON.stringify({ a:2, b:function(){} }); // "{"a":2}"
```

###  toJSON
It will call .toJSON function first if available to serialize the data.
```js
var o = { };
var a = {
    b: 42,
    c: o,
    d: function(){}
};
// create a circular reference inside `a`
o.e = a;
// would throw an error on the circular reference
// JSON.stringify( a );
// define a custom JSON value serialization
a.toJSON = function() {
    // only include the `b` property for serialization
    return { b: this.b };
};
JSON.stringify( a ); // "{"b":42}"
```

It is not compulsary that .toJSON will return json everytime.
```js
var a = {
    val: [1,2,3],
    // probably correct!
    toJSON: function(){
        return this.val.slice( 1 );
    }
};
var b = {
    val: [1,2,3],
    // probably incorrect!
    toJSON: function(){
        return "[" + this.val.slice( 1 ).join() + "]";
    }
};
JSON.stringify( a ); // "[2,3]"
JSON.stringify( b ); // ""[2,3]""
```

### Reducer
JSON.stringify accepts a second parameter (a function or an array(contains key to show)) which will skip the stringification of key, value which retun false in reducer.
```js
var a = {
    b: 42,
    c: "42",
    d: [1,2,3]
};
JSON.stringify( a, ["b","c"] ); // "{"b":42,"c":"42"}" passed array as reducer
JSON.stringify( a, function(k,v) {
    if (k !== "c") return v;
}); // passed function
// "{"b":42,"d":[1,2,3]}"
```

### Third parameter
Third parameter is for spacing, positive value add that many space while string will append to the key.
```js
var a = {
    b: 42,
    c: "42",
    d: [1,2,3]
};
JSON.stringify( a, null, 3 );
/*
"{
   "b": 42,
   "c": "42",
   "d": [
        1,
        2,
        3
    ]
}"
*/
JSON.stringify(a, null, "-----")
/*
"{
 -----"b": 42,
 -----"c": "42",
 -----"d": [
 ----------1,
 ----------2,
 ----------3
 -----]
}"
*/
```

# toNumber
It will convert any value to number format
True will be 1
False will be 0
undefined will be NaN
But null will be 0(wierd)

Object with number will first convert to primitive value(Not number format) & then coerced to number format.
First it will call toValue() to get number if not available it will call toString() and get Primitive value then coerce that value.

# toBoolean
In JS true, false(Boolean) are different tham 0,1(Number)
But 0,1 will coerce to true & false

Some js 

# ~(Blitwise operator)
~42 // -43

it is equal to -(42+1).
-1 is sentinal value
Blitwise will change the truth condition to false or vice versa
Using ~~ will give the same value as the input value
```js
var a = "Hello World";
~a.indexOf( "lo" ); // -4 <-- truthy!
if (~a.indexOf( "lo" )) { // true
// found it!
}
~a.indexOf( "ol" ); // 0 <-- falsy!
!~a.indexOf( "ol" ); // true
if (!~a.indexOf( "ol" )) { // true
// not found!
}
```
