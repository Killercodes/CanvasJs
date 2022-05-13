
# JavaScript Function apply()
The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).


## Syntax
```js
apply(thisArg)
apply(thisArg, argsArray)
```

## Parameters
### **thisArg**
The value of this provided for the call to func.

Note that this may not be the actual value seen by the method: if the method is a function in non-strict mode code, null and undefined will be replaced with the global object, and primitive values will be boxed. This argument is required.

### **argsArray Optional**
An array-like object, specifying the arguments with which func should be called, or null or undefined if no arguments should be provided to the function.

Starting with ECMAScript 5 these arguments can be a generic array-like object instead of an array. See below for browser compatibility information.

## Return value
The result of calling the function with the specified this value and arguments.

> **Note:** While the syntax of this function is almost identical to that of call(), the fundamental difference is that call() accepts an argument list, while apply() accepts a single array of arguments.

In this example the fullName method of person is applied on person1:
```js
function fullname() 
{
    return this.firstName + " " + this.lastName;
}

const person1 = {
  firstName: "k",
  lastName: "c"
}

// This will return "k c":
fullName.apply(person1);
```
A simple example is :
```js
const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]
```


## The Difference Between call() and apply()
The difference is:

- The `call()` method takes arguments separately.
- The `apply()` method takes arguments as an array.
- The `apply()` method is very handy if you want to use an array instead of an argument list.

## The apply() Method with Arguments
> The apply() method accepts arguments in an array:
```js
function fullName(city, country) 
{
    return this.firstName + " " + this.lastName + "," + city + "," + country;
}

const person1 = {
  firstName:"K",
  lastName: "C"
}

fullName.apply(person1, ["bangalore", "India"]);
//fullName.call(person1, "bangalore", "India"); //Call
```

> In JavaScript strict mode, if the first argument of the apply() method is not an object, it becomes the owner (object) of the invoked function. In "non-strict" mode, it becomes the global object.


