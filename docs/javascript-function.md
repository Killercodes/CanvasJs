# Functions in JavaScript
A function is a block of reusable code. A function allows us to write code once and use it as many times as we want just by calling the function.

JavaScript function syntax
```js
function functionName(parameter1, parameter2,..parameter_n)
{
  //function statements
}
```

**Points to remember**
1. Use the function keyword to define a function, followed by the name of the function. The name of the function should be followed by parentheses ().
2. Function parameters are optional. The parameter names must be with in parentheses separated by commas.

Example : JavaScript function to add 2 numbers. The following JavaScript function adds 2 numbers and return the sum
```js
function addNumbers(firstNumber, secondNumber) 
{
    var result = firstNumber + secondNumber;
    return result;
}
```
**Calling the JavaScript function :** Call the JavaScript function by specifying the name of the function and values for the parameters if any.
```js
var sum = addNumbers(10, 20);
alert(sum);
```
```
Output : 30
```

> What happens when you do not specify values for the function parameters when calling the function
The parameters that are missing values are set to undefined

**Example :** In the example below, we are passing 10 for the firstNumber parameter but the secondNumber parameter is missing a value, so this parameter will be set to undefined. When a plus (+) operator is applied between 10 and undefined we get not a number (NaN) and that will be alerted.
```js
function addNumbers(firstNumber, secondNumber) 
{
    var result = firstNumber + secondNumber;
    return result;
}

var sum = addNumbers(10);
alert(sum);
```

Output : 

```
NaN
```

What happens when you specify too many parameter values when calling the function. 
The extra parameter values are ignored.

**Example :** In the example below, 30 & 40 are ignored.

```js
function addNumbers(firstNumber, secondNumber) 
{
    var result = firstNumber + secondNumber;
    return result;
}

var sum = addNumbers(10, 20, 30, 40);
alert(sum);
```

> Should a javascript function always return a value
No, they don't have to. It totally depends on what you want the function to do. If an explicit return is omitted, undefined is returned automatically. Let's understand this with an example.

The following function returns the sum of two numbers. We are storing the return value of the function in sum variable and writing it's value to the document.
```js
function addNumbers(firstNumber, secondNumber) 
{
    var result = firstNumber + secondNumber;
    return result;
}

var sum = addNumbers(10, 20);
document.write(sum);
```

The following function does not return any value. It simply writes the sum of two numbers to the page. However, we are assigning the return value of addNumbers() function to sum variable. Since `addNumbers()` function in this case does not have an explicit return statement, undefined will be returned.
```js
function addNumbers(firstNumber, secondNumber) 
{
    var result = firstNumber + secondNumber;
    document.write(result);
}

var sum = addNumbers(10, 20);
alert(sum);
```

## Different ways of defining functions in JavaScript

In JavaScript, there are several different ways of defining functions.

Defining a function using function declaration

**Example 1 :** Declaring a function first and then calling it.
```js
function addNumbers(firstNumber, secondNumber) 
{
    var result = firstNumber + secondNumber;
    return result;
}

var sum = addNumbers(10, 20);
document.write(sum);
```

Output : 
```
30
```

Example 2 : A function call is present before the respective function declaration

In Example 1, we are first defining the function and then calling it. The call to a JavaScript function can be present anywhere, even before the function is declared. The following code also works just fine. In the example below, we are calling the function before it is declared.

```js
var sum = addNumbers(10, 20);
document.write(sum);

function addNumbers(firstNumber, secondNumber) 
{
    var result = firstNumber + secondNumber;
    return result;
}
```

## Function Hoisting :
By default, JavaScript moves all the function declarations to the top of the current scope. This is called function hoisting. This is the reason JavaScript functions can be called before they are declared.

### Defining a JavaScript function using a function expression : 
A Function Expression allows us to define a function using an expression (typically by assigning it to a variable). There are 3 different ways of defining a function using a function expression.

### Anonymous function expression example : 
In this example, we are creating a function without a name and assigning it to variable add. We use the name of the variable to invoke the function.
```js
var add = function (firstNumber, secondNumber) 
{
    var result = firstNumber + secondNumber;
    return result;
}

var sum = add(10, 20);
document.write(sum);
```


> Functions defined using a function expression are not hoisted. So, this means a function defined using a function expression can only be called after it has been defined while a function defined using standard function declaration can be called both before and after it is defined.
```js
// add() is undefined at this stage
var sum = add(10, 20);
document.write(sum);

var add = function (firstNumber, secondNumber) 
{
    var result = firstNumber + secondNumber;
    return result;
}
```

### Named function expression example :
This is similar to the example above. The difference is instead of assigning the variable to an anonymous function, we’re assigning it to a named function (with the name computeFactorial). 
```js
var factorial = function computeFactorial(number) 
{
    if (number [= 1) 
    {
        return 1;
    }

    return number * computeFactorial(number - 1);
}

var result = factorial(5);
document.write(result);
```

The name of the function (i.e computeFactorial) is available only with in the same function. This syntax is useful for creating recursive functions. If you use computeFactorial() method outside of the function it raises _computeFactorial is undefined error_
```js
var factorial = function computeFactorial(number) 
{
    if (number [= 1) 
    {
        return 1;
    }

    return number * computeFactorial(number - 1);
}

var result = computeFactorial(5);
document.write(result);
```

Output : 
```
Error - 'computeFactorial' is undefined.
```

### Self invoking function expression example :

```js
var result = (function computeFactorial(number) 
{
    if (number [= 1) 
    {
        return 1;
    }

    return number * computeFactorial(number - 1);
})(5);

document.write(result);
```

Output : 
```
120
```

These are called with different names
- Immediately-Invoked Function Expression (IIFE)
- Self-executing anonymous functions
- Self-invoked anonymous functions

## Recursive function in JavaScript
Recursion is a programming concept that is applicable to all programming languages including JavaScript. 

### What is a recursive function?
Recursive function is function that calls itself. 

When writing recursive functions there must be a definite break condition, otherwise we risk creating infinite loops.

**Example :** Computing the factorial of a number without recursion

```js
function factorial(n) 
{
    if (n == 0 || n == 1) 
    {
        return 1;
    }
    var result = n;
    while (n ] 1) 
    {
        result = result * (n - 1)
        n = n - 1;
    }
    return result;
}

document.write(factorial(5));
```

Output : 
```
120
```

**Example :** Computing the factorial of a number using a recursive function
```js
function factorial(n) 
{
    if (n == 0 || n == 1) 
    {
        return 1;
    }
    return n * factorial(n - 1);
}

document.write(factorial(5));
```

Output : 
```
120
```

# JavaScript arguments object
The JavaScript arguments object is a local variable available within all functions. It contains all the function parameters that are passed to the function and can be indexed like an array. The length property of the arguments object returns the number of arguments passed to the function.

**JavaScript arguments object example :**
```js
function printArguments() 
{
    document.write("Number of arguments = " + arguments.length + "[br/]")
    for (var i = 0; i [ arguments.length; i++) 
    {
        document.write("Argument " + i + " = " + arguments[i] + "[br/]");
    }
    document.write("[br/]");
}

printArguments();
printArguments("A", "B");
printArguments(10, 20, 30);
```

Is it possible to pass variable number of arguments to a JavaScript function
Yes, you can pass as many arguments as you want to any javascript function. All the parameters will be stored in the arguments object.
```js
function addNumbers() 
{
    var sum = 0;
    document.write("Count of numbers = " + arguments.length + "[br/]")
    for (var i = 0; i [ arguments.length; i++) 
    {
        sum = sum + arguments[i];
    }
    document.write("Sum of numbers = " + sum);
    document.write("[br/][br/]");
}

addNumbers();
addNumbers(10, 20, 30);
```

The arguments object is available only inside a function body. Attempting to access the arguments object outside a function results in 'arguments' is undefined error. Though you can index the arguments object like an array, it is not an array. It does not have any Array properties except length. For example it does not have the sort() method, that the array object has. However, you can convert the arguments object to an array.

## Converting JavaScript arguments object to an array
```js
function numbers() 
{
    var argsArray = Array.prototype.slice.call(arguments);
    argsArray.sort();
    document.write(argsArray);
}

numbers(50, 20, 40);
```

Output : 
```
20, 40, 50
```

## Converting JavaScript arguments object to an array using array literals
```js
function numbers() 
{
    var argsArray = [].slice.call(arguments);
    argsArray.sort();
    document.write(argsArray);
}

numbers(50, 20, 40);
```

Output : 
```
20, 40, 50
```

***
