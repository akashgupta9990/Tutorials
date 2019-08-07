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
These are all equal values
42..toFixed(2) seems inapropriate but is valid. Since zero after decimal is optional so here first . is treated as decimal number 42.0 and second . is treated as function seperator.
```

# Small Decimal values


