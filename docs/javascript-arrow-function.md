
# Arrow ==> function expressions
An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.

There are differences between arrow functions and traditional functions, as well as some limitations:

- Arrow functions don't have their own bindings to this, arguments or super, and should not be used as methods.
- Arrow functions don't have access to the new.target keyword.
- Arrow functions aren't suitable for call, apply and bind methods, which generally rely on establishing a scope.
- Arrow functions cannot be used as constructors.
- Arrow functions cannot use yield, within its body.

```js
const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));
// expected output: Array [8, 6, 7, 9]
```

## Converting Anonymous function ot Arrow function
```js
// Traditional Anonymous Function
function (a){
  return a + 100;
}

// Arrow Function Break Down

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
  return a + 100;
}

// 2. Remove the body braces and word "return" -- the return is implied.
(a) => a + 100;

// 3. Remove the argument parentheses
a => a + 100;
```
The `{ braces }` and `( parentheses )` and `"return"` are required in some cases.

For example, if you have multiple arguments or no arguments, you'll need to re-introduce parentheses around the arguments:
```js
// Traditional Anonymous Function
function (a, b){
  return a + b + 100;
}

// Arrow Function
(a, b) => a + b + 100;

// Traditional Anonymous Function (no arguments)
let a = 4;
let b = 2;
function (){
  return a + b + 100;
}

// Arrow Function (no arguments)
let a = 4;
let b = 2;
() => a + b + 100;
```
Likewise, if the body requires additional lines of processing, you'll need to re-introduce braces PLUS the `"return"` (arrow functions do not magically guess what or when you want to "return"):
```js
// Traditional Anonymous Function
function (a, b){
  let chuck = 42;
  return a + b + chuck;
}

// Arrow Function
(a, b) => {
  let chuck = 42;
  return a + b + chuck;
}
```
And finally, for named functions we treat arrow expressions like variables:
```js
// Traditional Function
function bob (a){
  return a + 100;
}

// Arrow Function
let bob = a => a + 100;
```

## Syntax
### Basic syntax
One param. With simple expression return is not needed:
```
param => expression
```
Multiple params require parentheses. With simple expression return is not needed:
```
(param1, paramN) => expression
```
Multiline statements require body braces and return:
```js
param => {
  let a = 1;
  return a + param;
}
```
Multiple params require parentheses. Multiline statements require body braces and return:
```js
(param1, paramN) => {
   let a = 1;
   return a + param1 + paramN;
}
```
### Advanced syntax
To return an object literal expression requires parentheses around expression:
```js
params => ({foo: "a"}) // returning the object {foo: "a"}
```
Rest parameters are supported:
```js
(a, b, ...r) => expression
```
Default parameters are supported:
```js
(a=400, b=20, c) => expression
```
Destructuring within params supported:
```js
([a, b] = [10, 20]) => a + b;  // result is 30
({ a, b } = { a: 10, b: 20 }) => a + b; // result is 30
```


- Arrow functions cannot be used as methods
- Arrow functions do not have their own this.
- Arrow functions do not have their own arguments object.
- Arrow functions cannot be used as constructors and will throw an error when used with new.
- Arrow functions do not have a prototype property.
- The yield keyword may not be used in an arrow function's body (except when permitted within functions further nested within it). As a consequence, arrow functions cannot be used as generators.


## Function body
Arrow functions can have either a concise body or the usual block body.

In a concise body, only an expression is specified, which becomes the implicit return value. In a block body, you must use an explicit return statement.
```js
var func = x => x * x;
// concise body syntax, implied "return"

var func = (x, y) => { return x + y; };
// with block body, explicit "return" needed
```

## Returning object literals
Keep in mind that returning object literals using the concise body `syntax params => {object:literal}` will not work as expected.
```js
var func = () => { foo: 1 };
// Calling func() returns undefined!

var func = () => { foo: function() {} };
// SyntaxError: function statement requires a name
```
This is because the code inside braces ({}) is parsed as a sequence of statements (i.e. foo is treated like a label, not a key in an object literal).

You must wrap the object literal in parentheses:
```js
var func = () => ({ foo: 1 });
```

## Basic usage
```js
// An empty arrow function returns undefined
let empty = () => {};

(() => 'foobar')();
// Returns "foobar"
// (this is an Immediately Invoked Function Expression)

var simple = a => a > 15 ? 15 : a;
simple(16); // 15
simple(10); // 10

let max = (a, b) => a > b ? a : b;

// Easy array filtering, mapping, ...

var arr = [5, 6, 13, 0, 1, 18, 23];

var sum = arr.reduce((a, b) => a + b);
// 66

var even = arr.filter(v => v % 2 == 0);
// [6, 0, 18]

var double = arr.map(v => v * 2);
// [10, 12, 26, 0, 2, 36, 46]

// More concise promise chains
promise.then(a => {
  // ...
}).then(b => {
  // ...
});

// Parameterless arrow functions that are visually easier to parse
setTimeout( () => {
  console.log('I happen sooner');
  setTimeout( () => {
    // deeper code
    console.log('I happen later');
  }, 1);
}, 1);
```



