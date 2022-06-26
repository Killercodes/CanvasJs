# Using regular expressions in JavaScript

- [Using regular expressions in JavaScript](#using-regular-expressions-in-javascript)
  - [JavaScript strings and regular expressions](#javascript-strings-and-regular-expressions)
  - [Using regular expression with JavaScript string object's `match()` method.](#using-regular-expression-with-javascript-string-objects-match-method)
  - [Using regular expression with JavaScript string object's replace() method.](#using-regular-expression-with-javascript-string-objects-replace-method)
  - [Using regular expression with JavaScript string object's `split()` method.](#using-regular-expression-with-javascript-string-objects-split-method)
  - [Using regular expression with JavaScript string object's search() method.](#using-regular-expression-with-javascript-string-objects-search-method)
  - [Global case insensitive match using a regular expression](#global-case-insensitive-match-using-a-regular-expression)
  - [JavaScript RegExp object](#javascript-regexp-object)
    - [Using a regular expression literal](#using-a-regular-expression-literal)
    - [Using the constructor function of the RegExp object](#using-the-constructor-function-of-the-regexp-object)
  - [Commonly used RegExp object properties](#commonly-used-regexp-object-properties)
  - [Commonly used RegExp object methods](#commonly-used-regexp-object-methods)
  - [Client side validation using regular expression](#client-side-validation-using-regular-expression)
***

> A regular expression is a sequence of characters that forms a search pattern. 

Let us understand the use of regular expressions with an example. The following strings contain words and numbers. From the string we want to extract all the numbers. Bsically the program should work with any string.
```
Mark-9 Tim-890 Sam-10 Sara-9902
Result : 9, 890, 10, 9902

908ABC12XYZ34
Result : 908, 12, 34

$1 $2 $901 ABC(100)
Result : 1, 2, 901, 100
```
Here is what we want the page to do
1. User enters the string in the first textbox
2. When "Process String" button is clicked, the numbers should be extracted from the string and displayed in the text area element.

It will be very complex and error prone if we have to achieve this without using regular expressions.
```html
<input type="text" id="txtBox" style="width:250px" />
<br /><br />
<input type="button" value="Process String" onclick="processString()" style="width:250px" />
<br /><br />
<textarea id="txtArea" rows="4" cols="30"></textarea>
<script type="text/javascript">
    function processString() 
    {
        // Clear the textarea element
        document.getElementById("txtArea").value = "";
        // Retrieve the user intput from the textbox
        var inputString = document.getElementById("txtBox").value;
        // Regular expression should be in 2 forward slashes //
        // Letter g at the end of the regular expression performs a global match
        // match() method returns all substrings that match the given regular expression
        var result = inputString.match(/\d+/g);

        if (result != null) {
            // Add the retrieved numbers to the textarea element
            for (var i = 0; i < result.length; i++) {
                document.getElementById("txtArea").value += result<i> + "\r\n";
            }
        }
    }
</script>
```

## JavaScript strings and regular expressions
In JavaScript regular expressions can be used with the following string methods.
1. `match()`
2. `replace()`
3. `split()`
4. `search()`

Along with regular expressions you can use modifiers to specify the kind of search you want to perform.
- `g` Global search
- `i` Case-insensitive search
- `m` Multiline search

Let us look at some examples of using the above methods with regular expressions 

## Using regular expression with JavaScript string object's `match()` method.
All the numbers in the string will be returned. The letter g at the end of the regular expression  performs a global match. If the letter g is omitted we will only get the first match.
```js
var string = "Tom contact number is 1011011010. His age is 35.";
string += "Mark contact number is 8912398912. His age is 45";

document.write(string.match(/\d+/g));
```
Output : 
```
1011011010,35,8912398912,45 
```

## Using regular expression with JavaScript string object's replace() method. 
All the numbers in the string will be replaced with `XXX`.
```js
var string = "Tom contact number is 1011011010. His age is 35.";
string += "Mark contact number is 8912398912. His age is 45";

document.write(string.replace(/\d+/g, "XXX"));
```

Output : 
```
Tom contact number is XXX. His age is XXX.Mark contact number is XXX. His age is XXX
```

## Using regular expression with JavaScript string object's `split()` method. 

`split()` method breaks a string into an array of substrings. The following example breaks the string into an array of substrings wherever it finds a number.
```js
var string = "Tom contact number is 1011011010. His age is 35.";
string += "Mark contact number is 8912398912. His age is 45";

document.write(string.split(/\d+/))
```

Output : 
```
Tom contact number is ,. His age is ,.Mark contact number is ,. His age is ,
```

## Using regular expression with JavaScript string object's search() method. 

`search()` method returns the index of the match, or -1 if the search item is not found. `search()` method returns the index of the first matching item only. The following example returns the index of the first occurrence of a number in the string.
```js
var string = "Tom contact number is 1011011010. His age is 35.";
string += "Mark contact number is 8912398912. His age is 45";

document.write(string.search(/\d+/))
```
## Global case insensitive match using a regular expression
```js
var string = "TOM contact number is 1011011010. tom is 35";
document.write(string.match(/tom/gi));
```
Output : 
```
TOM,tom
```

## JavaScript RegExp object
There are 2 ways to create a regular expression in JavaScript

### Using a regular expression literal
```js 
var regex = /\d+/g;
```

All the examples so far in this video series used regular expression literal to create a regular expression. Regular expressions created using regular expression literals are automatically compiled when the script is loaded. So if you know that the regular expression is not going to change then use this approach for better performance.

The following example replaces all the numbers with XXX.
```js
var string = "Tom contact number is 1011011010. His age is 35.";
string += "Mark contact number is 8912398912. His age is 45";

document.write(string.replace(/\d+/g, "XXX"));
```

Output : 
```
Tom contact number is XXX. His age is XXX.Mark contact number is XXX. His age is XXX 
```

### Using the constructor function of the RegExp object
```js
var regexp = new RegExp("\\d+", "g");
```

Regular expressions created using the constructor function are compiled at runtime. Use this approach when the regular expression is expected to change.

> **Please note :** Since the first argument of the RegExp constructor is a string, you have to escape the backslash.

The following example replaces all the numbers with XXX. 
```js
var string = "Tom contact number is 1011011010. His age is 35.";
string += "Mark contact number is 8912398912. His age is 45";

var regexp = new RegExp("\\d+", "g");

document.write(string.replace(regexp, "XXX"));
```
Output : 
```
Tom contact number is XXX. His age is XXX.Mark contact number is XXX. His age is XXX 
```

## Commonly used RegExp object properties

- `global`     - returns true if the global modifier (g) is set, otherwise false
- `ignoreCase` - returns true if the case-insensitive modifier (i) is set, otherwise false
- `multiline`    - returns true if the multi-line modifier (m) is set, otherwise false
- `source`     - Returns the text of the regular expression

**Example :** 
```js
var regexp = new RegExp("\\d+", "gi");

document.write("g = " + regexp.global + "[br/]");
document.write("i = " + regexp.ignoreCase + "[br/]");
document.write("m = " + regexp.multiline + "[br/]");
document.write("source = " + regexp.source + "[br/]");
```

## Commonly used RegExp object methods

- `exec()` - Tests for a match in a given string and returns the first match if found otherwise null.
- `test()` - Tests for a match in a gievn string and returns true or false
- `toString()` - Returns the string value of the regular expression
- `exec()` method returns the first match

```js
var string = "Tom contact number is 1011011010. His age is 35.";
string += "Mark contact number is 8912398912. His age is 45";

var regexp = new RegExp("\\d+");
document.write(regexp.exec(string));
```
Output : 
```
1011011010
```

To get all the matches call `.exec()` method repeatedly with the g flag as shown below
```js
var string = "Tom contact number is 1011011010. His age is 35.";
string += "Mark contact number is 8912398912. His age is 45";

var regexp = new RegExp("\\d+", "g");
var result;

while ((result = regexp.exec(string)) != null) 
{
    document.write(result[0] + "[br/]");
}
```

The following example calls `test()` method of the RegExp object to check if the string contains numbers.
```js
var string = "Tom contact number is 1011011010. His age is 35.";
string += "Mark contact number is 8912398912. His age is 45";

var regexp = new RegExp("\\d+", "g");
document.write("String contain numbers - " + regexp.test(string))
```

Output : 
```
String contain numbers - true
```


You can also call `exec()` and `test()` methods of the RegExp object as shown below
```js

var string = "Tom contact number is 1011011010. His age is 35.";
string += "Mark contact number is 8912398912. His age is 45";

var regexp = /\d+/g;
document.write("String contain numbers - " + regexp.test(string))
```
OR
```js
var string = "Tom contact number is 1011011010. His age is 35.";
string += "Mark contact number is 8912398912. His age is 45";

document.write("String contain numbers - " + /\d+/g.test(string))
```

## Client side validation using regular expression
On most of the websites it is common to check if the format of the email is valid. Using regular expressions we can achieve this very easily.

Here is an example.
```html
Email : <input type="text" id="txtEmail" onkeyup="validateEmail()" /> 
<script type="text/javascript">
    function validateEmail() {
        var emailTextBox = document.getElementById("txtEmail");
        var email = emailTextBox.value;
        var emailRegEx = /^((<^<>()<\>\\.,;:\s@\">+(\.<^<>()<\>\\.,;:\s@\">+)*)|(\".+\"))@((\<<0-9>{1,3}\.<0-9>{1,3}\.<0-9>{1,3}\.<0-9>{1,3}\>)|((<a-zA-Z\-0-9>+\.)+<a-zA-Z>{2,}))$/;

        emailTextBox.style.color = "white";

        if (emailRegEx.test(email)) {
            emailTextBox.style.backgroundColor = "green";
        }
        else {
            emailTextBox.style.backgroundColor = "red";
        }
    }
</script>
```
