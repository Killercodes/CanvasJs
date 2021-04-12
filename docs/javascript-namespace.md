# Javascript Namespace


- [Javascript Namespace](#javascript-namespace)
  - [Why it's needed](#why-its-needed)
    - [HTML Page code :](#html-page-code-)
- [Creating Namespaces in JavaScript](#creating-namespaces-in-javascript)
  - [Creating namespace with const](#creating-namespace-with-const)
    - [Why is this important?](#why-is-this-important)
***

JavaScript does not provide namespace by default. However, we can replicate this functionality by making a global object which can contain all functions and variables.
Namespacing is the act of wrapping a set of entities, variables, functions, objects under a single umbrella term.

## Why it's needed
the problem of global namespace pollution in JavaScript with an example. When working with JavaScript on a big project, you might hear senior developers saying during the code review, this code pollutes the global scope. In this video let's understand the problem of global namespace pollution. In our next video we will discuss how to write JavaScript in such a way that it does not pollute the global scope.

Let us say we have 2 software development teams (TeamA & TeamB) working on a large project for killer Technologies.

TeamA has created a customer constructor function with 2 parameters (firstName & lastName) and added it to `TeamA.js` file
```js
function customer (firstName, lastName) 
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function () 
    {
        return this.firstName + " " + this.lastName;
    }
}
```
TeamB has also created a customer constructor function but with 3 parameters (firstName, middleName & lastName) and added it `TeamB.js` file. 
```js
function customer (firstName, middleName, lastName) 
{
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;

    this.getFullName = function () 
    {
        return this.firstName + " " + this.middleName + " " + this.lastName;
    }
}
```
So at the moment we have 2 customer constructor functions. One version has 2 parameters (firstName & lastName) and the other version has 3 parameters (firstName, middleName & lastName). 

### HTML Page code : 
In this HTML page we want to use the customer constructor function that has 2 parameters (firstName & lastName). Notice that in the header section we are first loading TeamA.js and then TeamB.js.
```html
<html>
    <head>
        <script type="text/javascript" src="TeamA.js" ></script>
        <script type="text/javascript" src="TeamB.js" ></script>
    </head>
    <body>
        <div id="resultDiv"></div>
        <script type="text/javascript">
            document.getElementById("resultDiv").innerHTML = new customer("Tom", "Grover").getFullName();
        </script>
    </body>
</html>
```

When you view the page in the browser, we get the following output. We expected it to print to "Tom Grover"
```
Tom Grover undefined
```
This is because JavaScript does not support function overloading and as a result, the `customer()` constructor function with 3 parameters simply overwrites the `customer()` constructor function with 2 parameters.

You may be wondering why didn't it happen the other way round. Why didn't `customer()` constructor function with 2 parameters overwrite the `customer()` constructor function with 3 parameters. That is because TeamB.js is loaded after TeamA.js. So the `customer()` constructor function in TeamB.js has overwritten the `customer()` constructor function in TeamA.js.

The reason, one of the `customer()` constructor function got overwritten is because we have already polluted the global scope. Let's understand what we mean by this. 

1. window is the Global object in JavaScript

2. When TeamA.js script file is loaded, the customer() function in TeamA.js file is added to the global namespace

3. When TeamB.js script file is loaded, the customer() function in TeamB.js file is added to the global namespace. Since 2 functions with the same name cannot exist in the global namespce, the customer() function in TeamB.js overwrites the customer() function in TeamA.js. As a result we cannot use the customer() function in TeamA.js file.

4. In JavaScript if you declare a variable or a function second time, it simply overwrites the one you created earlier. JavaScript does not raise any errors like C# or Java if you redefine a variable or a function.

Polluting global namespace causes name collision. This is especially true in large projects where you may be using several JavaScript libraries (both internally developed as well as third party libraries). That's why it is very important not to add everything to the global namespace. If someone else use the same variable or function names it can lead to name collision.

In our next we will discuss, how to write JavaScript code in such a way that it does not pollute the global scope.

# Creating Namespaces in JavaScript
JavaScript lack namespaces. However we can use objects to create namespaces.

The following line says use the KillerTech object if it already exists, otherwise create an empty object.
```js
var KillerTech = KillerTech || {};
```

The following line adds a nested namespace. A nested namespace is a namespace inside another namespace. In JavaScript to define a nested namespace, you define an object inside another object. 
```js
KillerTech.TeamA = KillerTech.TeamA || {};
```
Modify the script in TeamA.js file as shown below. In this example we are adding customer() function to KillerTech.TeamA namespace. 
```js
var KillerTech = KillerTech || {};
KillerTech.TeamA = KillerTech.TeamA || {};

KillerTech.TeamA.customer = function (firstName, lastName) 
{
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function () 
    {
        return this.firstName + " " + this.lastName;
    }

    return this;
}
```
KillerTech will be added to the global namespace. window is the alias for global namespace in JavaScript. You can now access `customer()` function as shown below.
```js
KillerTech.TeamA.customer("Tom", "Grover")
```
OR
```js
window.KillerTech.TeamA.customer("Tom", "Grover")
```
Modify the script in TeamB.js file as shown below. In this example we are adding customer() function to KillerTech.TeamB namespace. 
```js
var KillerTech = KillerTech || {};
KillerTech.TeamB = KillerTech.TeamB || {};

KillerTech.TeamB.customer = function (firstName, middleName, lastName) 
{
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;

    this.getFullName = function () 
    {
        return this.firstName + " " + this.middleName + " " + this.lastName;
    }

    return this;
}
```
KillerTech will be added to the global namespace. You can now access customer() function as shown below.
```js
KillerTech.TeamB.customer("Tom", "T", "Grover")
```
OR
```js
window.KillerTech.TeamB.customer("Tom", "T", "Grover")
```

On any given HTML page you should be able to access both the versions of customer() function as shown below.
```html
<html>
    <head>
        <script type="text/javascript" src="TeamA.js" ></script>
        <script type="text/javascript" src="TeamB.js" ></script>
    </head>
    <body>
        <script type="text/javascript">
            // Call the customer function that is defined in TeamA.js
            alert(KillerTech.TeamA.customer("Tom", "Grover").getFullName());

            // Call the customer function that is defined in TeamB.js
            alert(KillerTech.TeamB.customer("Tom", "T", "Grover").getFullName());
        </script>
    </body>
</html>
```

## Creating namespace with const
The simplest way to create a namespace is by creating an object literal:
```js
const car = {
  start: () => {
    console.log('start')
  },
  stop: () => {
    console.log('stop')
  }
}
```
In this way, `start` and `stop` are namespaced under `car`: `car.start()` and `car.stop()`.

They are not polluting the global object.

### Why is this important? 
One good reason is that nothing can interfere with them.

The way works also by assigning a variable to an object after it’s created:
```js
const car = {}

car.start = () => {
  console.log('start')
}

car.stop = () => {
  console.log('stop')
}
```
But they are still accessible from the outside, thanks to the car object reference.

The best way to completely hide code from the outside is to wrap it into a block, which is a part of code wrapped in curly brackets, like an if or for block, but also an independent block formed like this:
```js
{
  const start = () => {
    console.log('start')
  }

  const stop = () => {
    console.log('stop')
  }
}
```
Those 2 functions are now inaccessible outside of the block.

But you need to pay attention at always using let or const, which are block scoped.

Using var instead would “leak” it outside of the block.

To workaround that you can use functions, which is the “old”, pre-let/const way:
```js
(function() {
  var start = () => {
    console.log('start')
  }

  const stop = () => {
    console.log('stop')
  }
})();
```
Now start and stop are both inaccessible from the outside, even if start is assigned to a variable defined with var.
