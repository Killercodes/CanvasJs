# Javascript Variables
You use variables as symbolic names for values in your application. You give variables names by which you refer to them and which must conform to certain rules.

A JavaScript identifier, or name, must start with a letter or underscore ```("_");``` subsequent characters can also be digits (0-9). Because JavaScript is case sensitive, letters include the characters "A" through "Z" (uppercase) and the characters "a" through "z" (lowercase).
Some examples of legal names are `Number_hits`, `temp99`, and `_name`.
You can declare a variable in two ways:
- By simply assigning it a value; for example, `x = 42`
- With the keyword `var`; for example, `var x = 42`

When you set a variable identifier by assignment outside of a function, it is called a global variable, because it is available everywhere in the current document. When you declare a variable within a function, it is called a local variable, because it is available only within the function. Using var is optional, but you need to use it if you want to declare a local variable inside a function that has already been declared as a global variable.

You can access global variables declared in one window or frame from another window or frame by specifying the window or frame name. For example, if a variable called phoneNumber is declared in a FRAMESET document, you can refer to this variable from a child frame as parent.phoneNumber.

## Data type conversion
JavaScript is a loosely typed language. That means you do not have to specify the data type of a variable when you declare it, and data types are converted automatically as needed during script execution. So, for example, you could define a variable as follows:
```js
var answer = 42
```
And later, you could assign the same variable a string value, for example,
```
answer = "Thanks for all the fish..."
```
Because JavaScript is loosely typed, this assignment does not cause an error message.
In expressions involving numeric and string values, JavaScript converts the numeric values to strings. For example, consider the following statements:
```js
x = "The answer is " + 42;
y = 42 + " is the answer.";
```
The first statement returns the string `"The answer is 42."` The second statement returns the string `"42 is the answer."`

## Values
JavaScript recognizes the following types of values:
- `Numbers`, such as 42 or 3.14159
- `Logical (Boolean) values`, either true or false
- `Strings`, such as "Howdy!"
- `null`, a special keyword denoting a null value

## Local and global variables in javascript
In JavaScript there are 2 types of variables
1. Local variables
2. Global variables

## JavaScript local variables :
Local variables are the variables declared with in a function. These variables have local scope meaning these are available only inside the function that contains them. Local variables are created when a function starts, and deleted as soon as the function completes execution.

```js
function helloWorld() 
{
    var greeting = "Hello";
    // The variable greeting is available in the function
    greeting = greeting + " JavaScript";
    alert(greeting);
}

helloWorld();

// The variable greeting is not available outside the function
// Error : 'greeting' is undefined
alert(greeting);
```

## JavaScript global variables : 
Global variables are the variables declared outside a function. Global variables have global scope meaning all scripts and functions on the page can access them. The lifetime of a global variable starts with it's declaration and is deleted when the page is closed.
```js
// Global variable
var greeting = "Hello";

function helloWorld() 
{
    // The variable greeting is available in the function
    greeting = greeting + " JavaScript";
    alert(greeting);
}

helloWorld();
```

If you assign a value to a variable that has not been declared, it will automatically become a global variable, even if it is present inside a function.
```js
function helloWorld() 
{
    // The variable greeting is not declared but a value is assigned. 
    // So it will automatically become a global variable
    greeting = "Hello JavaScript";
}

helloWorld();

// Variable greeting is available outside the function
alert(greeting);
```

A local variable can have the same name as a global variable. Changing the value of one variable has no effect on the other. If the variable value is changed inside a function, and if a local version of the variable exists then the local variable gets modified. If the variable value is changed outside a function then the global variable gets modified.

```js
var greeting = "This is from global Variable";

function helloWorld() 
{
    var greeting = "This is from local variable";
    document.write(greeting + "[br/]");
}

// This line will modify the global greeting variable
greeting += "!!!";

helloWorld();

document.write(greeting);
```

Output : 
```
This is from local variable
This is from global Variable!!! 
```
Sometimes, variable hoisting and local & global variable with the same name can cause unexpected behavior.
```js
var greeting = "This is from global Variable";
helloWorld();

function helloWorld() 
{
    document.write(greeting);
    var greeting = "Hello from local variable"
}
```
Output :
```
undefined
```
At runtime due to variable hoisting, the above program would look more like as shown below.
```js
var greeting = "This is from global Variable";
helloWorld();

function helloWorld() 
{
    var greeting;
    document.write(greeting);
    greeting = "Hello from local variable"
}
```
Braces do not create scope in JavaScript : In the following example otherNumber is a global variable though it is defined inside braces. In many languages like C# and Java, braces create scope, but not JavaScript.
```js
var number = 100;

if (number ] 10) 
{
    var otherNumber = number;
}

document.write(otherNumber);
```
Output : 
```
100
```

## Literals

You use literals to represent values in JavaScript. These are fixed values, not variables, that you literally provide in your script.

### Integers
Integers can be expressed in `decimal (base 10)`, `hexadecimal (base 16)`, and `octal (base 8)`. 
A decimal integer literal consists of a sequence of digits without a leading `0 (zero)`. A leading 0 (zero) on an integer literal indicates it is in octal; a leading `0x (or 0X)` indicates hexadecimal. Hexadecimal integers can include `digits (0-9)` and the letters a-f and A-F. Octal integers can include only the digits 0-7. Some examples of integer literals are: `42`, `0xFFF`, and `-345`.

### Floating-point literals
A floating-point literal can have the following parts: a decimal integer, a decimal point ("."), a fraction (another decimal number), an exponent, and a type suffix. The exponent part is an "e" or "E" followed by an integer, which can be signed (preceded by "+" or "-"). A floating-point literal must have at least one digit, plus either a decimal point or "e" (or "E"). Some examples of floating-point literals are 3.1415, -3.1E12, .1e12, and 2E-12

### Boolean literals
The Boolean type has two literal values: true and false.

### String literals
A string literal is zero or more characters enclosed in double (") or single (') quotation marks. A string must be delimited by quotation marks of the same type; that is, either both single quotation marks or double quotation marks.
The following are examples of string literals: "blah", 'blah', "1234", "one line \n another line".
In addition to ordinary characters, you can also include special characters in strings, as shown in the last element in the preceding list.
Special Characters
Character |	Meaning
--|--
`\b` |	backspace
`\f` |	form feed
`\n` |	new line
`\r` |	carriage return
`\t` |	tab
`\\` |	backslash character

For characters not listed in the preceding table, a preceding backslash is ignored, with the exception of a quotation mark and the backslash character itself. You can insert quotation marks inside strings by preceding them with a backslash. This is known as escaping the quotation marks. For example,
```js
var quote = "He read \"The Cremation of Sam McGee\" by R.W. Service."
document.write(quote)
```
The result of this would be He read "The Cremation of Sam McGee" by R.W. Service. To include a literal backslash inside a string, you must escape the backslash character. For example, to assign the file path c:\temp to a string, use the following:
```js
var home = "c:\\temp"
```

***

