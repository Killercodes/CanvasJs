# Closures in JavaScript
## What is a closure
A closure is an inner function that has access to the outer function’s variables in addition to it's own variables and global variables. The inner function has access not only to the outer function’s variables, but also to the outer function’s parameters. You create a closure by adding a function inside another function.

JavaScript Closure Example 
```js
function addNumbers(firstNumber, secondNumber) 
{
    var returnValue = "Result is : ";
    // This inner function has access to the outer function's variables & parameters
    function add() 
    {
        return returnValue + (firstNumber + secondNumber);
    }
    return add();
}

var result = addNumbers(10, 20);
document.write(result);
```

Output : 
```
Result is : 30
```

The following code Returns the inner function expression
```js
function addNumbers(firstNumber, secondNumber) 
{
    var returnValue = "Result is : ";
    function add() 
    {
        return returnValue + (firstNumber + secondNumber);
    }
    // We removed the parentheses. This will return the inner function expression without executing it.
    return add;
}

// addFunc will contain add() function (inner function) expression.
var addFunc = addNumbers(10, 20);
// call the addFunc() function and store the return value in result variable
var result = addFunc();

document.write(result);
```

Returning and executing the inner function
```js
function addNumbers(firstNumber, secondNumber) 
{
    var returnValue = "Result is : ";
    function add() 
    {
        return returnValue + (firstNumber + secondNumber);
    }
    // We removed the parentheses. This will return the inner function add() expression without executing it.
    return add;
}

// This returns add() function (inner function) definition and executes it. Notice the additonal parentheses.
var result = addNumbers(10, 20)();

document.write(result);
```

## JavaScript closure example
Using a global variable and incrementing it everytime we click the button : The problem with this approach is that, since clickCount is a global variable any script on the page can accidentally change the variable value.
```html
<script type="text/javascript">
    var clickCount = 0;
</script>
<input type="button" value="Click Me" onclick="alert(++clickCount);" />
```

Using a local variable with in a function and incrementing it by calling the function : The problem with this approach is that, click count is not incremented beyond 1, no matter how many times you click the button.
```html
<script type="text/javascript">
    function incrementClickCount() 
    {
        var clickCount = 0;
        return ++clickCount;
    }
</script>
<input type="button" value="Click Me" onclick="alert(incrementClickCount());" />
```


### Using a JavaScript closure : 
A closure is an inner function that has access to the outer function’s variables in addition to it's own variables and global variables. In simple terms a closure is function inside a function. These functions, that is the inner and outer functions could be named functions or anonymous functions. In the example below we have an anonymous function inside another anonymous function. The variable incrementClickCount is assigned the return value of the self invoking anonymous function.
```js
<script type="text/javascript">
    var incrementClickCount = (function () 
    {
        var clickCount = 0;
        return function () 
        {
            return ++clickCount;
        }
    })();
</script>
<input type="button" value="Click Me" onclick="alert(incrementClickCount);" />
```

In the example above, in the alert function we are calling the variable incrementClickCount without parentheses. At this point, when you click the button, you get the inner anonymous function expression in the alert. The point I want to prove here is that, the outer self-invoking anonymous function run only once and sets clickCount variable to ZERO, and returns the inner function expression. Inner function has access to clickCount variable. Now every time we click the button, the inner function increments the clickCount variable. The important point to keep in mind is that no other script on the page has access to clickCount variable. The only way to change the clickCount variable is thru incrementClickCount function.
```html
<script type="text/javascript">
    var incrementClickCount = (function () 
    {
        var clickCount = 0;
        return function () 
        {
            return ++clickCount;
        }
    })();
</script>
<input type="button" value="Click Me" onclick="alert(incrementClickCount());" />
```

***
