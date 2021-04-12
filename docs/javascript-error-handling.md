# Error handling in JavaScript

- [Error handling in JavaScript](#error-handling-in-javascript)
  - [JavaScript try catch example :](#javascript-try-catch-example-)
  - [JavaScript try catch finally example :](#javascript-try-catch-finally-example-)
  - [Syntax errors and exceptions in JavaScript](#syntax-errors-and-exceptions-in-javascript)
  - [JavaScript throw statement :](#javascript-throw-statement-)
  - [JavaScript window onerror event](#javascript-window-onerror-event)
***

Use `try`/`catch`/`finally` to handle runtime errors in JavaScript. These runtime errors are called exceptions. An exception can occur for a variety of reasons. For example, referencing a variable or a method that is not defined can cause an exception. 

The JavaScript statements that can possibly cause exceptions should be wrapped inside a try block. When a specific line in the try block causes an exception, the control is immediately transferred to the catch block skipping the rest of the code in the try block.

## JavaScript try catch example :
```js
try 
{
    // Referencing a function that does not exist cause an exception
    document.write(sayHello());
    // Since the above line causes an exception, the following line will not be executed
    document.write("This line will not be executed");
}
// When an exception occurs, the control is transferred to the catch block
catch (e) 
{
    document.write("Description = " + e.description + "[br/]");
    document.write("Message = " + e.message + "[br/]");
    document.write("Stack = " + e.stack + "[br/][br/]");
}
document.write("This line will be executed");
```

> **Please note :** A try block should be followed by a catch block or finally block or both.

finally block is guaranteed to execute irrespective of whether there is an exception or not. It is generally used to clean and free resources that the script was holding onto during the program execution. For example, if your script in the try block has opened a file for processing, and if there is an exception, the finally block can be used to close the file.

## JavaScript try catch finally example :
```js
try 
{
    // Referencing a function that does not exist cause an exception
    document.write(sayHello());
    // Since the above line causes an exception, the following line will not be executed
    document.write("This line will not be executed");
}
// When an exception occurs, the control is transferred to the catch block
catch (e) 
{
    document.write("Description = " + e.description + "[br/]");
    document.write("Message = " + e.message + "[br/]");
    document.write("Stack = " + e.stack + "[br/][br/]");
}
finally 
{
    document.write("This line is guaranteed to execute");
}
```


## Syntax errors and exceptions in JavaScript
try/catch/finally block can catch exceptions but not syntax errors.

Example : In the example, below we have a syntax error - missing the closing parentheses. The associated catch block will not catch the syntax errors.
```js
try 
{
    alert("Hello";
}
catch (e) 
{
    document.write("JavaScript syntax errors cannot be caught in the catch block");       
}
```

## JavaScript throw statement : 
Use the throw statement to raise a customized exceptions. 

JavaScript throw exception example :
```js
function divide() 
{
    var numerator = Number(prompt("Enter numerator"));
    var denominator = Number(prompt("Enter denominator"));

    try 
    {
        if (denominator == 0) 
        {
            throw {
                error: "Divide by zero error",
                message: "Denominator cannot be zero"
            };
        }
        else 
        {
            alert("Result = " + (numerator / denominator));
        }

    }
    catch (e) 
    {
        document.write(e.error + "[br/]");
        document.write(e.message + "[br/]");
    }
}

divide();
```

## JavaScript window onerror event
In general we use try/catch statement to catch errors in JavaScript. If an error is raised by a statement that is not inside a try...catch block, the onerror event is fired.

> Assign a function to `window.onerror` event that you want to be executed when an error is raised as shown below. The function that is associated as the event handler for the onerror event has three parameters:

message Specifies the error message.
URL Specifies the location of the file where the error occurred.
line Specifies the line number where the error occurred.

**JavaScript window onerror event example**
```js
window.onerror = function (message, url, line) 
{
    alert("Message : " + message + "\nURL : " + url + "\nLine Number : " + line);
    // Return true to supress the browser error messages (like in older versions of Internet Explorer)
    return true;
}

NonExistingFunction();
```

If the error is handled by a try/catch statement, then the onerror event is not raised. onerror event is raised only when there is an unhandled exception.
```js
window.onerror = function (message, url, line) 
{
    alert("Message : " + message + "\nURL : " + url + "\nLine Number : " + line);
    // Return true to supress the browser error messages (like in older versions of Internet Explorer)
    return true;
}

try 
{
    NonExistingFunction();
}
catch (e) 
{
    document.write(e.message);    
}
```

Output : 
```
'NonExistingFunction' is undefined 
```

onerror event handler method can also be used with HTML elements : In the example below, since the image is not existing and cannot be found we get "There is a problem loading the image" error.
```html
<script type="text/javascript">
    function imageErrorHandler() 
    {
        alert("There is a problem loading the image");
    }
</script>
<img src="NonExistingImage.jpg" onerror="imageErrorHandler()" />
```
