# JavaScript Function bind()
The `bind()` method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
```js
const module = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42
```
An more simple example is:
```js
function fullname() 
{
    return this.firstName + " " + this.lastName;
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fn = fullname.bind(member);


fn(); //call
```

## Syntax
```
bind(thisArg)
bind(thisArg, arg1)
bind(thisArg, arg1, arg2)
bind(thisArg, arg1, ... , argN)
```
## Parameters
**thisArg**

  The value to be passed as the this parameter to the target function func when the bound function is called. The value is ignored if the bound function is constructed using the new operator. When using bind to create a function (supplied as a callback) inside a setTimeout, any primitive value passed as thisArg is converted to object. If no arguments are provided to bind, or if the thisArg is null or undefined, the this of the executing scope is treated as the thisArg for the new function.

**arg1, arg2, ...argN Optional**

Arguments to prepend to arguments provided to the bound function when invoking func.


**Return value**

A copy of the given function with the specified this value, and initial arguments (if provided).

## Description
The `bind()` function creates a new bound function, which is an exotic function object (a term from ECMAScript 2015) that wraps the original function object. Calling the bound function generally results in the execution of its wrapped function.


The simplest use of bind() is to make a function that, no matter how it is called, is called with a particular this value.

A common mistake for new JavaScript programmers is to extract a method from an object, then to later call that function and expect it to use the original object as its this (e.g., by using the method in callback-based code).

Without special care, however, the original object is usually lost. Creating a bound function from the function, using the original object, neatly solves this problem:
```js
this.x = 9;    // 'this' refers to global 'window' object here in a browser
const module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX();
//  returns 81

const retrieveX = module.getX;
retrieveX();
//  returns 9; the function gets invoked at the global scope

//  Create a new function with 'this' bound to module
//  New programmers might confuse the
//  global variable 'x' with module's property 'x'
const boundGetX = retrieveX.bind(module);
boundGetX();
//  returns 81
```
