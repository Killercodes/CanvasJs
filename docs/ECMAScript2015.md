# What's new in ECMAScript 2015 / ES6
> ECMAScript 6 was the second major revision to JavaScript.

> ECMAScript 6 is also known as ES6 and ECMAScript 2015.

The following are the most important features of ES6.


# "let" keyword
 The ```let``` keyword allows you to declare a variable with block scope.

**Example**
```js
var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10
```


# "const" keyword
 The const keyword allows you to declare a constant (a JavaScript variable with a constant value).

Constants are similar to let variables, except that the value cannot be changed.

**Example**
```js
var x = 10;
// Here x is 10
{
  const x = 2;
  // Here x is 2
}
// Here x is 10
```


# Arrow Function
 With arrow functions, you don't have to type the function keyword, the return keyword, and the curly brackets.

**Example**
```js
// ES5
var x = function(x, y) {
   return x * y;
}

// ES6
const x = (x, y) => x * y;
```
- Arrow functions do not have their own this. They are not well suited for defining object methods.

- Arrow functions are not hoisted. They must be defined before they are used.

- Using const is safer than using var, because a function expression is always a constant value.

- You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:

**Example**
```js
var v = (x,y) => {
    var c = x+y;
    return ("hello:" + c);
};

const x = (x, y) => { return x * y };

```

# The For/Of Loop
> The JavaScript for/of statement loops through the values of an iterable objects.

for/of lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.

The for/of loop has the following syntax:

Synatx
```js
for (variable of iterable) {
  // code block to be executed
}
```
- variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.

- iterable - An object that has iterable properties.

## Looping over an Array
**Example**
```js
var cars = ["BMW", "Volvo", "Mini"];
var x;

for (x of cars) {
  document.write(x + "<br >");
}
```

## Looping over a String
**Example**
```js
var txt = "JavaScript";
var x;

for (x of txt) {
  document.write(x + "<br >");
}
```

# JavaScript Classes
 JavaScript Classes are templates for JavaScript Objects.

Use the keyword ```class``` to create a class.

- Always add a method named constructor():

**Syntax**
```js
class ClassName {
  constructor() { ... }
}
```

**Example**
```js
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
```
*Note*
- The example above creates a class named "Car".
- The class has two initial properties: "name" and "year".
- A JavaScript class is not an object.
- It is a template for JavaScript objects.

## Using a Class
> When you have a class, you can use the class to create objects:

**Example**
```js
let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);
```

The constructor method is called automatically when a new object is created.

## The Constructor Method
The constructor method is a special method:

- It has to have the exact name "constructor"
- It is executed automatically when a new object is created
- It is used to initialize object properties
- If you do not define a constructor method, JavaScript will add an empty constructor method.

## Class Methods
Class methods are created with the same syntax as object methods.

- Use the keyword ```class``` to create a class.
- Always add a `constructor()` method.

Then add any number of methods.

**Syntax**
```
class ClassName {
  constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}
```
Create a Class method named "age", that returns the Car age:

**Example**
```js
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

//usage
let myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
"My car is " + myCar.age() + " years old.";
```
You can send parameters to Class methods:

**Example**
```js
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}

let date = new Date();
let year = date.getFullYear();

let myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML=
"My car is " + myCar.age(year) + " years old.";
```

## Class Inheritance
To create a class inheritance, use the extends keyword.

A class created with a class inheritance inherits all the methods from another class:

**Example**
Create a class named "Model" which will inherit the methods from the "Car" class:
```js
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = myCar.show();
```
The ```super()``` method refers to the parent class.

By calling the ```super()``` method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

> Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.

## Getters and Setters
Classes also allows you to use getters and setters.

It can be smart to use getters and setters for your properties, especially if you want to do something special with the value before returning them, or before you set them.

To add getters and setters in the class, use the get and set keywords.

**Example**
Create a getter and a setter for the "carname" property:
```js
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  get cnam() {
    return this.carname;
  }
  set cnam(x) {
    this.carname = x;
  }
}

let myCar = new Car("Ford");

document.getElementById("demo").innerHTML = myCar.cnam;
```
> **Note:** even if the getter is a method, you do not use parentheses when you want to get the property value.

The name of the getter/setter method cannot be the same as the name of the property, in this case carname.

Many programmers use an underscore character _ before the property name to separate the getter/setter from the actual property:

**Example**
You can use the underscore character to separate the getter/setter from the actual property:
```js
class Car {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

let myCar = new Car("Ford");

document.getElementById("demo").innerHTML = myCar.carname;
```
To use a setter, use the same syntax as when you set a property value, without parentheses:

**Example**
Use a setter to change the carname to "Volvo":
```js
class Car {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

let myCar = new Car("Ford");
myCar.carname = "Volvo";
document.getElementById("demo").innerHTML = myCar.carname;
```
## Hoisting
Unlike functions, and other JavaScript declarations, class declarations are not hoisted.

That means that you must declare a class before you can use it:

**Example**
```js
//You cannot use the class yet.
//myCar = new Car("Ford")
//This would raise an error.

class Car {
  constructor(brand) {
    this.carname = brand;
  }
}

//Now you can use the class:
let myCar = new Car("Ford")
```
> Note: For other declarations, like functions, you will NOT get an error when you try to use it before it is declared, because the default behavior of JavaScript declarations are hoisting (moving the declaration to the top).

## JavaScript Static Methods
Static class methods are defined on the class itself.

You cannot call a static method on an object, only on an object class.

**Example**
```js
class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

let myCar = new Car("Ford");

// You can calll 'hello()' on the Car Class:
document.getElementById("demo").innerHTML = Car.hello();

// But NOT on a Car Object:
// document.getElementById("demo").innerHTML = myCar.hello();
// this will raise an error.
```
If you want to use the myCar object inside the static method, you can send it as a parameter:

**Example**
```js
class Car {
  constructor(name) {
    this.name = name;
  }
  static hello(x) {
    return "Hello " + x.name;
  }
}
let myCar = new Car("Ford");
document.getElementById("demo").innerHTML = Car.hello(myCar);
```

# JavaScript Promises
 A Promise is a JavaScript object that links "Producing Code" and "Consuming Code".

 "Producing Code" can take some time and "Consuming Code" must wait for the result.

## Promise Syntax
```js
let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise).
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
```
**Example Using a Promise**
```js
let myPromise = new Promise(function(myResolve, myReject) {
  setTimeout(function() { myResolve("I love You !!"); }, 3000);
});

myPromise.then(function(value) {
  document.getElementById("demo").innerHTML = value;
});
```

# The Symbol Type
 A JavaScript Symbol is a primitive datatype just like Number, String, or Boolean.

 It represents a unique "hidden" identifier that no other code can accidentally access.

For instance, if different coders want to add a person.id property to a person object belonging to a third-party code, they could mix each others values.

- Using Symbol() to create a unique identifiers, solves this problem:

**Example**
```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

let id = Symbol('id');
person[id] = 140353;
// Now Person[id] = 140352
// but person.id is still undefined
```
**Note**
- Symbols are always unique.
- If you create two symbols with the same description they will have different values.

```js
Symbol("id") == Symbol("id") // false
```

# Default Parameter Values
ES6 allows function parameters to have default values.

**Example**
```js
function myFunction(x, y = 10) {
  // y is 10 if not passed or undefined
  return x + y;
}
myFunction(5); // will return 15
```
## Function Rest Parameter
The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:

**Example**
```js
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
```
# Array.find()
The find() method returns the value of the first array element that passes a test function.

This example finds (returns the value of ) the first element that is larger than 18:

**Example**
```js
var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
```
Note that the function takes 3 arguments:
```
The item value
The item index
The array itself
```
# Array.findIndex()
The findIndex() method returns the index of the first array element that passes a test function.

This example finds the index of the first element that is larger than 18:

**Example**
```js
var numbers = [4, 9, 16, 25, 29];
var first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
```
Note that the function takes 3 arguments:
```
The item value
The item index
The array itself
```
# New Math Methods
ES6 added the following methods to the Math object:

```
Math.trunc()
Math.sign()
Math.cbrt()
Math.log2()
Math.log10()
The Math.trunc() Method
Math.trunc(x) returns the integer part of x:
```
**Example**
```js
Math.trunc(4.9);    // returns 4
Math.trunc(4.7);    // returns 4
Math.trunc(4.4);    // returns 4
Math.trunc(4.2);    // returns 4
Math.trunc(-4.2);    // returns 4
```
## The Math.sign() Method

```Math.sign(x)``` returns if x is negative, null or positive:

**Example**
```js
Math.sign(-4);    // returns -1
Math.sign(0);    // returns 0
Math.sign(4);    // returns 1
```
## The Math.cbrt() Method
Math.cbrt(x) returns the cube root of x:

**Example**
```js
Math.cbrt(8);    // returns 2
Math.cbrt(64);    // returns 4
Math.cbrt(125);    // returns 5
```
## The Math.log2() Method
Math.log2(x) returns the base 2 logarithm of x:

**Example**
```js
Math.log2(2);    // returns 1
```
## The Math.log10() Method
Math.log10(x) returns the base 10 logarithm of x:

**Example**
```js
Math.log10(10);    // returns 1
```
# New Number Properties
ES6 added the following properties to the Number object:
```
EPSILON
MIN_SAFE_INTEGER
MAX_SAFE_INTEGER
```
**Example**
```js
var x = Number.EPSILON;
```
**Example**
```js
var x = Number.MIN_SAFE_INTEGER;
```
**Example**
```js
var x = Number.MAX_SAFE_INTEGER;
```
# New Number Methods
ES6 added 2 new methods to the Number object:

Number.isInteger()
Number.isSafeInteger()
The Number.isInteger() Method
The Number.isInteger() method returns true if the argument is an integer.

**Example**
```js
Number.isInteger(10);        // returns true
Number.isInteger(10.5);      // returns false
```

## The Number.isSafeInteger() Method
A safe integer is an integer that can be exactly represented as a double precision number.

The Number.isSafeInteger() method returns true if the argument is a safe integer.

**Example**
```js
Number.isSafeInteger(10);    // returns true
Number.isSafeInteger(12345678901234567890);  // returns false
```
Safe integers are all integers from -(253 - 1) to +(253 - 1).
This is safe: 9007199254740991. This is not safe: 9007199254740992.

# New Global Methods
ES6 added 2 new global number methods:
```
isFinite()
isNaN()
```
## The ```isFinite()``` Method
 The global ```isFinite()``` method returns false if the argument is Infinity or NaN.

Otherwise it returns true:

**Example**
```js
isFinite(10/0);       // returns false
isFinite(10/1);       // returns true
```
## The isNaN() Method
The global isNaN() method returns true if the argument is NaN. Otherwise it returns false:

**Example**
```js
isNaN("Hello");       // returns true
```



***
