# Arrays in JS

[Arrays in JS](#arrays-in-js)
  - [Array Push & Pop](#array-push--pop)
    - [JavaScript push() method](#javascript-push-method)
    - [JavaScript pop() method](#javascript-pop-method)
    - [JavaScript unshift() Method](#javascript-unshift-method)
    - [JavaScript shift() Method](#javascript-shift-method)
  - [Array mutators](#array-mutators)
    - [JavaScript sort method :](#javascript-sort-method-)
  - [Array Filters](#array-filters)
    - [Parameters](#parameters)
      - [callbackFunction](#callbackfunction)
      - [thisArg](#thisarg)
    - [Callback Function Syntax](#callback-function-syntax)
      - [Callback Function Parameters](#callback-function-parameters)
  - [Two dimensional array in javascript](#two-dimensional-array-in-javascript)

***

Arrays are collections and ZERO indexed. This means the first element is at index ZERO and the last element is at index arrayObject.length - 1. length property of the array object returns the size of the array.

The following JavaScript code creates an empty array. length property returns 0 in this case.
```javascript
var emptyArray = [];
alert(emptyArray.length);
```

Output :
```
 0
```
Another way to create an array is by busing the Array constructor as shown below. In this example we are setting the length of the array to 10.
```javascript
var myArray = new Array(10);
alert(myArray.length);
```

Output : 
```
10
```

Retrieving first and last elements from the array using the array index
```js
var myArray = [10, 20, 30];
document.write("First element = " + myArray[0] + "[br/]");
document.write("Last element = " + myArray[myArray.length - 1] + "[br/]");
```
Output : 
```
First element = 10
Last element = 30
```
Populating an array in JavaScript : There are several ways to populate an array in JavaScript. Let's look at those different option now.

Declaring an array first and then populating using the array index
```javascript
var myArray = [];
        
myArray[0] = 10;
myArray[1] = 20;
myArray[2] = 30;
        
alert(myArray);
```

Output :
```
10, 20, 30
```

Declaring and populating the array at the same time
```javascript

var myArray = [10, 20, 30];        
alert(myArray);
```

Output : 
```
10, 20, 30
```

Declaring an array first using the Array constructor and then populating using the array index. Though the initial size is set to 3, adding a fourth element to the array will not throw an exception, because arrays in JavaScript can grow in size.
```javascript
var myArray = new Array(3);
        
myArray[0] = 10;
myArray[1] = 20;
myArray[2] = 30;      

alert(myArray);
```

Output : 
```
10, 20, 30
```

Declaring and populating the array at the same time using the Array constructor
```javascript

var myArray = new Array(10, 20, 30);
alert(myArray);
```


Output : 
```
10, 20, 30
```

> **Please note :** If only one number is passed to the Array constructor, then that number is used to set the size of the array. If more that one number is passed then those will be used as elements to populate the array.

A for loop can be used to populate and retrieve elements from the array object in JavaScript

Populating an array using for loop : The following JavaScript code stores even numbers in the array from 0 to 10. Notice that we are using a for loop to populate the array.
```javascript
var evenNumbersArray = [];
for (var i = 0; i [= 5; i++) 
{
    evenNumbersArray[i] = i * 2;
}
alert(evenNumbersArray);
```


Output :
```
 0,2,4,6,8,10
```

Retrieving elements from the array using for loop : 
```javascript
var evenNumbersArray = [];
for (var i = 0; i [= 5; i++) 
{
    evenNumbersArray[i] = i * 2;
}

for (var i = 0; i [ evenNumbersArray.length; i++) 
{
    document.write(evenNumbersArray[i] + "[br/]");
}
```


Output :
```
0
2
4
6
8
10
```

## Array Push & Pop
In the example below, we are populating myArray using a for loop and the array index. Subsequently we are using another for loop to retrieve the elements from the array. Finally we are displaying the length of the array using JavaScript alert.
```javascript
var myArray = [];

for (var i = 0; i [= 5; i++) 
{
    myArray[i] = i * 2;
}

for (var i = 0; i [= 5; i++) 
{
    document.write(myArray[i] + "[br/]");
}

alert(myArray.length);
```

Please note : Retrieving array elements using the array index, will not change the length of the array.

### JavaScript push() method
This method adds new items to the end of the array. This method also changes the length of the array. 

### JavaScript pop() method
This method removes the last element of an array, and returns that element. This method changes the length of an array.

**Example :** In the exampe below, we are using push() method to populate the array and pop() method to retrieve elements from the array. Notice that push() and pop() methods change the length property of the array.

```javascript
var myArray = [];

for (var i = 0; i [= 5; i++) 
{
    myArray.push(i * 2);
}

alert(myArray.length);

for (var i = 0; i [= 5; i++) 
{
    document.write(myArray.pop() + "[br/]");
}

alert(myArray.length);
```

### JavaScript unshift() Method
push() method adds new items to the end of the array. To add new items to the beginning of an array, then use unshift() method. Just like push() method, unshift() method also changes the length of an array

Example : 
```javascript
var myArray = [2,3];

// Adds element 4 after element 3
myArray.push(4);

// Adds element 1 before element 2
myArray.unshift(1);

document.write("Array elements = " + myArray + "[br/]");
document.write("Array Length = " + myArray.length);
```
### JavaScript shift() Method
pop() method removes the last element of an array, and returns that element. shift() method removes the first item of an array, and returns that item. Just like pop() method, shift() method also changes the length of an array.

Example : 
```javascript

var myArray = [1, 2, 3, 4, 5];

// removes the last element i.e 5 from the array
var lastElement = myArray.pop();
document.write("Last element = " + lastElement + "[br/]");

// removes the first element i.e 1 from the array
var firstElement = myArray.shift();
document.write("First element = " + firstElement + "[br/][br/]");

document.write("Array elements = " + myArray + "[br/]");
document.write("Array Length = " + myArray.length);
```

## Array mutators
There are several methods that can be used with the array object in JavaScript. Some methods modify the array object while the others do not. The methods that modify the array object are called as mutator methods. 

The following are the examples of non-mutator methods

- `contains`
- `indexOf`
- `lastIndexOf`


The following are the examples of mutator methods

- `push`
- `pop`
- `shift`
- `unshift`
- `reverse`
- `sort`
- `splice`

We discusssed push(), pop(), shift() and unshift() methods in Part 20. In this section we will discuss 

- `sort`
- `reverse`
- `splice`

### JavaScript sort method : 
Sorts the elements of an array. By default, the sort() method sorts the values by converting them to strings and then comparing those strings. This works well for strings but not for numbers. Let us look at an example.

Example : Notice that the strings are sorted correctly as expected.
```javascript
var myArray = ["Sam","Mark","Tom","David"];
myArray.sort();
document.write(myArray);
```
Output : 
```
David,Mark,Sam,Tom
```

Now, let's look at an example of sorting numbers. 
```javascript
var myArray = [20, 1 , 10 , 2, 3];
myArray.sort();
document.write(myArray);
```
Output : 
```
1,10,2,20,3
```

Notice that the numbers are not sorted as expected. We can fix this by providing a "compare function" as a parameter to the sort function. The compare function should return a negative, zero, or positive value.

Example :
```javascript
var myArray = [20, 1, 10, 2, 3];
myArray.sort(function (a, b) { return a - b });
document.write(myArray);
```
Output : 
```
1,2,3,10,20
```

Let's now discuss how the compare function work. The function has 2 parameters (a,b). This function subtracts a from b and returns the result. If the return value is
- Positive - a is a number bigger than b
- Negative - a is a number smaller than b
- ZERO - a is equal to b

So, based on these return values, the numbers in the array are sorted.

Sorting the numbers in descending order : There are 2 ways to sort an array in descending order

**1. Return (b-a) from the compare function instead of (a-b)**

Example : 

```javascript
var myArray = [20, 1, 10, 2, 3];
myArray.sort(function (a, b) { return b - a });
document.write(myArray);
```
Output : 
```
20,10,3,2,1
```

**2. Sort the numbers first in ascending order and then use the reverse function to reverse the order of the elements in the array.**

Example :

```javascript
var myArray = [20, 1, 10, 2, 3];
myArray.sort(function (a, b) { return a - b }).reverse();
document.write(myArray);
```
Output : 
```
20,10,3,2,1
```

**JavaScript reverse method :** reverses the order of the elements in an array.

**JavaScript splice method :** This method is used to add or remove elements from an array. 

Syntax : 
```js
array.splice(index,deleteCount,item1,.....,itemX)
```

**index** - Required. Specifies at what position to add or remove items
deleteCount - Required. The number of items to be removed. If set to 0, no items will be removed.
item1,.....,itemX - Optional. The new item(s) to be added to the array

Example : 

```javascript
var myArray = [1,2,5];
myArray.splice(2, 0, 3, 4);
document.write(myArray);
```
Output : 
```
1,2,3,4,5
```

Example : 

```javascript
var myArray = [1,2,55,67,3];
myArray.splice(2, 2);
document.write(myArray);
```

Output : 
```
1,2,3
```

## Array Filters
The filter() method creates a new array and populates that array with all the elements that meet the condition specified in a callback function.

Syntax : ```array.filter(callbackFunction[, thisArg])```

### Parameters
#### callbackFunction
Required. Function that gets called for each element of the array. If the function returns true, the element is kept otherwise filtered.

#### thisArg
Optional. An object to which the this keyword can refer in the callbackfn function.

The filter method calls the callbackfn function one time for each element in the array. If the callback function returns false for all elements of the array, the length of the new array that will be returned is 0.

### Callback Function Syntax
```
function callbackFunction(value, index, array)
```

#### Callback Function Parameters
**Value** The value of the element in the array
**Index** The index position of the element in the array
**Array** The source array object that contains the element


**Example 1 :** Retrieve only even numbers from myArray
```javascript
// Callback function
function IsEven(value, index, array) {
    if (value % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

// Source array
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Pass the callback function as argument to the filter method
var result = myArray.filter(IsEven);

document.write(result);
```

Output : 
```
2,4,6,8,10
```

**Example 2 :** In Example 1 we defined a callback function first and then passed it as an argument to the filter() method. In the example below, we created the callback function as an anonymous function directly in the filter method where it is required.

```js
// Source array
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// callback function created directly in the filter method as anonymous function
var result = myArray.filter(function (v, i, a) { return v % 2 == 0 });

document.write(result);
```

Output : 
```
2,4,6,8,10
```

**Example 3 :** Remove duplicates from javascript array
```js
var myArray = ["Sam", "Mark", "Tim", "Sam"];
var uniqueItems = myArray.filter(function (v, i, a) { return a.indexOf(v) == i });
document.write(uniqueItems);
```
Output :
```
Sam,Mark,Tim
```

## Two dimensional array in javascript
JavaScript does not have a special syntax for creating multidimensional arrays. Instead we create an array of arrays.

**Example :** The following JavaScript code creates a 2 dimensional 3x3 array
```js
var myArray1 = new Array(3)

for (i=0; i [ 3; i++)
myArray1[i]=new Array(3)

myArray1[0][0] = "1"
myArray1[0][1] = "2"
myArray1[0][2] = "3"

myArray1[1][0] = "4"
myArray1[1][1] = "5"
myArray1[1][2] = "6"

myArray1[2][0] = "7"
myArray1[2][1] = "8"
myArray1[2][2] = "9"

for (var i = 0; i [ 3; i++) 
{
    for (var j = 0; j [ 3; j++) 
    {
        document.write(myArray1[i][j] + "&emsp;");
    }
    document.write("[br/]");
}
```
In **Example 1**, we have manually populated each storage location in the array. Instead we can use to 2 nested for loops as shown below.

```js
var myArray1 = new Array(3)

for (i=0; i [ 3; i++)
myArray1[i]=new Array(3)

var start = 1;

for (var i = 0; i [ 3; i++) 
{
    for (var j = 0; j [ 3; j++) 
    {
        myArray1[i][j] = start;
        start = start + 1;
    }
}


for (var i = 0; i [ 3; i++) 
{
    for (var j = 0; j [ 3; j++) 
    {
        document.write(myArray1[i][j] + "&emsp;");
    }
    document.write("[br/]");
}
```

Performing addition between 2 two dimensional arrays in JavaScript 

**Example :** 
- The first 3 x 3 array should contain numbers from 1 to 9
- The second 3 x 3 array should contain numbers from 9 to 1
- The numbers present at each index position in the first and second array should be added and the result should be stored in a third 3x3 array.

```js
// Create the first 2 dimensional 3 X 3 array
var myArray1 = new Array(3)

for (i=0; i [ 3; i++)
myArray1[i]=new Array(3)

var start = 1;

for (var i = 0; i [ 3; i++) 
{
    for (var j = 0; j [ 3; j++) 
    {
        myArray1[i][j] = start;
        start = start + 1;
    }
}

for (var i = 0; i [ 3; i++) 
{
    for (var j = 0; j [ 3; j++) 
    {
        document.write(myArray1[i][j] + "&emsp;");
    }
    document.write("[br/]");
}

document.write("[br/]");
document.write("&emsp;+");
document.write("[br/]");
document.write("[br/]");

// Create the second 2 dimensional 3 X 3 array
var myArray2 = new Array(3)

for (i = 0; i [ 3; i++)
    myArray2[i] = new Array(3)

for (var i = 0; i [ 3; i++) 
{
    for (var j = 0; j [ 3; j++) 
    {
        start = start - 1;
        myArray2[i][j] = start;
    }
}

for (var i = 0; i [ 3; i++) 
{
    for (var j = 0; j [ 3; j++) 
    {
        document.write(myArray2[i][j] + "&emsp;");
    }
    document.write("[br/]");
}

document.write("[br/]");
document.write("&emsp;=");
document.write("[br/]");
document.write("[br/]");

// Create the third 2 dimensional 3 X 3 array
var myArray3 = new Array(3)

for (i = 0; i [ 3; i++)
    myArray3[i] = new Array(3)

for (var i = 0; i [ 3; i++) 
{
    for (var j = 0; j [ 3; j++) 
    {
        myArray3[i][j] = myArray1[i][j] + myArray2[i][j];
    }
}


for (var i = 0; i [ 3; i++) 
{
    for (var j = 0; j [ 3; j++) 
    {
        document.write(myArray3[i][j] + "&emsp;");
    }
    document.write("[br/]");
}

Creating a 2 dimensional 3 X 5 array

var myArray1 = new Array(3)

for (i=0; i [ 3; i++)
myArray1[i]=new Array(5)

var start = 101;

for (var i = 0; i [ 3; i++) 
{
    for (var j = 0; j [ 5; j++) 
    {
        myArray1[i][j] = start;
        start = start + 1;
    }
}

for (var i = 0; i [ 3; i++) 
{
    for (var j = 0; j [ 5; j++) 
    {
        document.write(myArray1[i][j] + "&emsp;");
    }
    document.write("[br/]");
}
```
***
