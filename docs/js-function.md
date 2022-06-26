# Functions in JavaScript

- [Functions in JavaScript](#functions-in-javascript)
  - [Defining a function](#defining-a-function)
  - [Different ways of defining functions in JavaScript](#different-ways-of-defining-functions-in-javascript)
  - [Function Hoisting :](#function-hoisting-)
    - [Defining a JavaScript function using a function expression :](#defining-a-javascript-function-using-a-function-expression-)
    - [Anonymous function expression example :](#anonymous-function-expression-example-)
    - [Named function expression example :](#named-function-expression-example-)
    - [Self invoking function expression example :](#self-invoking-function-expression-example-)
  - [Recursive function in JavaScript](#recursive-function-in-javascript)
    - [What is a recursive function?](#what-is-a-recursive-function)
  - [Using functions](#using-functions)
  - [Built-in Functions](#built-in-functions)
    - [isNaN(testValue)](#isnantestvalue)
      - [Arguments](#arguments)
    - [parseFloat](#parsefloat)
    - [parseInt](#parseint)
- [JavaScript arguments object](#javascript-arguments-object)
  - [Converting JavaScript arguments object to an array](#converting-javascript-arguments-object-to-an-array)
  - [Converting JavaScript arguments object to an array using array literals](#converting-javascript-arguments-object-to-an-array-using-array-literals)

***

A function is a block of reusable code. A function allows us to write code once and use it as many times as we want just by calling the function. Functions are one of the fundamental building blocks in JavaScript. A function is a JavaScript procedure - a set of statements that performs a specific task. To use a function, you must first define it; then your script can call it.

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

## Defining a function
A function definition consists of the `function` keyword, followed by
- The `name` of the function.
- A list of `arguments` to the function, enclosed in parentheses and separated by commas.
- The JavaScript statements that define the function, enclosed in curly braces, `{ }`. The statements in a function can include calls to other functions defined in the current application.
- 
In Navigator JavaScript, it is good practice to define all your functions in the HEAD of a page so that when a user loads the page, the functions are loaded first.
**For example**, here is the definition of a simple function named pretty_print:
```js
function pretty_print(str) {
  document.write("<hr><p>" + str);
}
```

, or semantically equivalent:
```js
var pretty_print = function(str) {
  document.write("<hr><p>" + str);
}
```
This function takes a string, str, as its argument, adds some HTML tags to it using the concatenation operator (+), and then displays the result to the current document using the write method.

## Different ways of defining functions in JavaScript

In JavaScript, there are several different ways of defining functions.

Defining a function using function declaration

### **Function Declarations :** Declaring a function first and then calling it.
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

**Example 2 :** A function call is present before the respective function declaration

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


### Arrow Functions
> Arrow functions allows a short syntax for writing function expressions.

You don't need the function keyword, the return keyword, and the curly brackets.

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

Using const is safer than using var, because a function expression is always constant value.

You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:


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
## Using functions
In a Navigator application, you can use (or call) any function defined in the current page. You can also use functions defined by other named windows or frames. In a LiveWire application, you can use any function compiled with the application.

Defining a function does not execute it. You have to call the function for it to do its work. For example, if you defined the example function pretty_print in the **HEAD** of the document, you could call it as follows:
```js
<script type="text/javascript">
  pretty_print("This is some text to display")
</script>
```
The arguments of a function are not limited to strings and numbers. You can pass whole objects to a function, too.
A function can even be recursive, that is, it can call itself. For example, here is a function that computes factorials:
```js
function factorial(n) {
  if ((n == 0) || (n == 1)) return 1
  else {
    result = (n * factorial(n-1) )
    return result
  }
}
```
You could then display the factorials of one through five as follows:
```js
for (x = 0; x < 5; x++) {
  document.write("<br />", x, " factorial is ", factorial(x))
}
```
The results are:
```
0 factorial is 1
1 factorial is 1
2 factorial is 2
3 factorial is 6
4 factorial is 24
5 factorial is 120
```

## Built-in Functions

###  isNaN(testValue)
The isNaN function evaluates an argument to determine if it is **"NaN"** (not a number).
 
#### Arguments
testValue is the value you want to evaluate.
On platforms that support NaN, the parseFloat and parseInt functions return "NaN" when they evaluate a value that is not a number. isNaN returns true if passed "NaN," and false otherwise.

```js
/* The following code evaluates floatValue to determine if it is a number and then calls a procedure accordingly: */
floatValue=parseFloat(toFloat);
if (isNaN(floatValue)) {
  notFloat();
} else {
  isFloat();
}
```

### parseFloat
`parseFloat` parses its argument, the string str, and attempts to return a floating-point number. If it encounters a character other than a sign (+ or -), a numeral (0-9), a decimal point, or an exponent, then it returns the value up to that point and ignores that character and all succeeding characters. If the first character cannot be converted to a number, it returns "NaN" (not a number).
```js
parseFloat("5.347");
```

### parseInt
`parseInt` parses its first argument, the string str, and attempts to return an integer of the specified radix (base), indicated by the second, optional argument, radix. For example, a radix of ten indicates to convert to a decimal number, eight octal, sixteen hexadecimal, and so on. For radixes above ten, the letters of the alphabet indicate numerals greater than nine. For example, for hexadecimal numbers (base 16), A through F are used.

If `parseInt` encounters a character that is not a numeral in the specified radix, it ignores it and all succeeding characters and returns the integer value parsed up to that point. If the first character cannot be converted to a number in the specified radix, it returns "NaN." The `parseInt` function truncates numbers to integer values.
```js
parseInt("7");
```


# JavaScript arguments object

The arguments of a function are maintained in an array. Within a function, you can address the parameters passed to it as follows:
```
functionName.arguments[i]
```
where functionName is the name of the function and i is the ordinal number of the argument, starting at zero. So, the first argument passed to a function named myfunc would be myfunc.arguments[0]. The total number of arguments is indicated by the variable arguments.length.

Using the arguments array, you can call a function with more arguments than it is formally declared to accept using. This is often useful if you don't know in advance how many arguments will be passed to the function. You can use arguments.length to determine the number of arguments actually passed to the function, and then treat each argument using the arguments array.

For example, consider a function defined to create HTML lists. The only formal argument for the function is a string that is "U" for an unordered (bulleted) list or "O" for an ordered (numbered) list. The function is defined as follows:
```js
function list(type) {
  document.write("<" + type + "l>") // begin list
  // iterate through arguments
  for (var i = 1; i < list.arguments.length; i++)
    document.write("<li>" + list.arguments[i]);
  document.write("</" + type + "l>") // end list
}
```
You can pass any number of arguments to this function, and it will then display each argument as an item in the indicated type of list. For example, the following call to the function
```js
list("o", "one", 1967, "three", "etc., etc...")
```

results in this output:
```
1.one
2.1967
3.three
4.etc., etc...
```
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
