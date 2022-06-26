# JavaScript Class 
### Index
- [JavaScript Class](#javascript-class)
  - [Using a Class](#using-a-class)
  - [The Constructor Method](#the-constructor-method)
  - [Class Methods](#class-methods)
  - [Hoisting](#hoisting)
  - [Getters and Setters](#getters-and-setters)
  - [Class Inheritance](#class-inheritance)
  - [Class Inheritance and Method Overriding](#class-inheritance-and-method-overriding)
  - [The Super Keyword](#the-super-keyword)
  - [Static Methods](#static-methods)
  - [Private class features](#private-class-features)
    - [Private fields](#private-fields)
    - [Private instance fields](#private-instance-fields)
    - [Private static fields](#private-static-fields)
  - [Private methods](#private-methods)
    - [Private instance methods](#private-instance-methods)
    - [Private static methods](#private-static-methods)
   
## JavaScript Class
 JavaScript Classes are templates for JavaScript Objects.

- Use the keyword `class` to create a class.
- Always add a method named `constructor()`

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
**Note:**
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
```js
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
> __Note:__ For other declarations, like functions, you will NOT get an error when you try to use it before it is declared, because the default behavior of JavaScript declarations are hoisting (moving the declaration to the top).


## Getters and Setters
Classes also allows you to use getters and setters.

It can be smart to use getters and setters for your properties, especially if you want to do something special with the value before returning them, or before you set them.

To add getters and setters in the class, use the get and set keywords.

**Example**
Create a getter and a setter for the __carname__ property:
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

## Class Inheritance and Method Overriding
Method Overriding is a mechanism by which the child class redefines the superclass method. The following example illustrates the same −
```js
'use strict' ;
class PrinterClass { 
   doPrint() { 
      console.log("doPrint() from Parent called… ");
   }
}
class StringPrinter extends PrinterClass { 
   doPrint() { 
      console.log("doPrint() is printing a string…"); 
   } 
} 
var obj = new StringPrinter(); 
obj.doPrint();
```
In the above Example, the child class has changed the superclass function’s implementation.

The following output is displayed on successful execution of the above code.
```
doPrint() is printing a string…
```
## The Super Keyword
ES6 enables a child class to invoke its parent class data member. This is achieved by using the super keyword. The super keyword is used to refer to the immediate parent of a class.

Consider the following example −
```js
'use strict' 
class PrinterClass { 
   doPrint() {
      console.log("doPrint() from Parent called…") 
   } 
}  
class StringPrinter extends PrinterClass { 
   doPrint() { 
      super.doPrint() 
      console.log("doPrint() is printing a string…") 
   } 
} 
var obj = new StringPrinter() 
obj.doPrint()
```
The doPrint() redefinition in the class StringWriter, issues a call to its parent class version. In other words, the super keyword is used to invoke the doPrint() function definition in the parent class - PrinterClass.

The following output is displayed on successful execution of the above code.
```js
doPrint() from Parent called.
doPrint() is printing a string.
```

## Static Methods
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

## Private class features
Class fields are public by default, but private class members can be created by using a hash # prefix. The privacy encapsulation of these class features is enforced by JavaScript itself.

__Syntax:__
```js
class ClassWithPrivateField {
  #privateField;
}

class ClassWithPrivateMethod {
  #privateMethod() {
    return 'hello world';
  }
}

class ClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD;
}

class ClassWithPrivateStaticMethod {
  static #privateStaticMethod() {
    return 'hello world';
  }
}
```

### Private fields
Private fields include private instance fields and private static fields.

### Private instance fields
Private instance fields are declared with # names (pronounced "hash names"), which are identifiers prefixed with #. The # is a part of the name itself. Private fields are accessible on the class constructor from inside the class declaration itself. They are used for declaration of field names as well as for accessing a field's value.

It is a syntax error to refer to # names from out of scope. It is also a syntax error to refer to private fields that were not declared before they were called, or to attempt to remove declared fields with delete.
```js
class ClassWithPrivateField {
  #privateField;

  constructor() {
    this.#privateField = 42;
    delete this.#privateField;   // Syntax error
    this.#undeclaredField = 444; // Syntax error
  }
}

const instance = new ClassWithPrivateField()
instance.#privateField === 42;   // Syntax error
```
> __Note:__ Use the in operator to check for potentially missing private fields (or private methods). This will return true if the private field or method exists, and false otherwise.

Like public fields, private fields are added at construction time in a base class, or at the point where `super()` is invoked in a subclass.
```js
class ClassWithPrivateField {
  #privateField;

  constructor() {
    this.#privateField = 42;
  }
}

class SubClass extends ClassWithPrivateField {
  #subPrivateField;

  constructor() {
    super();
    this.#subPrivateField = 23;
  }
}

new SubClass();
// SubClass {#subPrivateField: 23}
```
> __Note:__ `#privateField` from the ClassWithPrivateField base class is private to ClassWithPrivateField and is not accessible from the derived Subclass.

### Private static fields
Private static fields are added to the class constructor at class evaluation time. Like their public counterparts, private static fields are only accessible on the class itself or on the this context of static methods, but not on the this context of instance methods.
```js
class ClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD;

  static publicStaticMethod() {
    ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD = 42;
    return ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD;
  }

  publicInstanceMethod() {
    ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD = 42;
    return ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD;
  }
}

console.log(ClassWithPrivateStaticField.publicStaticMethod()); // 42
console.log(new ClassWithPrivateStaticField().publicInstanceMethod()); // 42
```

There is a restriction on __private static fields:__ Only the class which defines the private static field can access the field. This can lead to unexpected behavior when using this. 

In the following example, this refers to the SubClass class (_not the BaseClassWithPrivateStaticField class_) when we try to call SubClass.basePublicStaticMethod(), and so causes a TypeError.
```js
class BaseClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD;

  static basePublicStaticMethod() {
    this.#PRIVATE_STATIC_FIELD = 42;
    return this.#PRIVATE_STATIC_FIELD;
  }
}

class SubClass extends BaseClassWithPrivateStaticField { };

let error = null;

try {
  SubClass.basePublicStaticMethod()
} catch(e) { error = e};

console.log(error instanceof TypeError);
// true
console.log(error);
// TypeError: Cannot write private member #PRIVATE_STATIC_FIELD
// to an object whose class did not declare it
```
## Private methods

### Private instance methods
Private instance methods are methods available on class instances whose access is restricted in the same manner as private instance fields.
```js
class ClassWithPrivateMethod {
  #privateMethod() {
    return 'hello world';
  }

  getPrivateMessage() {
    return this.#privateMethod();
  }
}

const instance = new ClassWithPrivateMethod();
console.log(instance.getPrivateMessage());
// hello world
```

Private instance methods may be generator, async, or async generator functions. Private getters and setters are also possible, although not in generator, async, or async generator forms.
```js
class ClassWithPrivateAccessor {
  #message;

  get #decoratedMessage() {
    return `🎬${this.#message}🛑`;
  }
  set #decoratedMessage(msg) {
    this.#message = msg;
  }

  constructor() {
    this.#decoratedMessage = 'hello world';
    console.log(this.#decoratedMessage);
  }
}

new ClassWithPrivateAccessor();
// 🎬hello world🛑
```
### Private static methods
Like their public equivalent, private static methods are called on the class itself, not instances of the class. Like private static fields, they are only accessible from inside the class declaration.
```js
class ClassWithPrivateStaticMethod {
  static #privateStaticMethod() {
    return 42;
  }

  static publicStaticMethod1() {
    return ClassWithPrivateStaticMethod.#privateStaticMethod();
  }

  static publicStaticMethod2() {
    return this.#privateStaticMethod();
  }
}

console.log(ClassWithPrivateStaticMethod.publicStaticMethod1() === 42);
// true
console.log(ClassWithPrivateStaticMethod.publicStaticMethod2() === 42);
// true
```

> Private static methods may be generator, async, and async generator functions.

The same restriction previously mentioned for private static fields holds for private static methods, and similarly can lead to unexpected behavior when using this. In the following example, when we try to call Derived.publicStaticMethod2(), this refers to the Derived class (not the Base class) and so causes a TypeError.
```js
class Base {
  static #privateStaticMethod() {
    return 42;
  }
  static publicStaticMethod1() {
    return Base.#privateStaticMethod();
  }
  static publicStaticMethod2() {
    return this.#privateStaticMethod();
  }
}

class Derived extends Base {}

console.log(Derived.publicStaticMethod1());
// 42
console.log(Derived.publicStaticMethod2());
// TypeError: Cannot read private member #privateStaticMethod
// from an object whose class did not declare it
```
---
