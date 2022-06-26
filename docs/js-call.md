
# JavaScript Function `call()`
With the call() method, you can write a method that can be used on different objects.
> The call() allows for a function/method belonging to one object to be assigned and called for a different object.

call() provides a new value of this to the function/method. With call(), you can write a method once and then inherit it in another object, without having to rewrite the method for the new object.

- The `call()` method is a predefined JavaScript method.

- It can be used to invoke (call) a method with an owner object as an argument (parameter). 
- With call(), an object can use a method belonging to another object.

## Syntax
```js
call()
call(thisArg)
call(thisArg, arg1)
call(thisArg, arg1, arg2)
call(thisArg, arg1, ... , argN)
```

## Example:
```js
function fullname() 
{
    return this.firstName + " " + this.lastName;
}

const person1 = {
  firstName:"k",
  lastName: "c"
}

fullName.call(person1);
```

### The `call()` Method with Arguments
The `call()` method can accept arguments:
```js
function fullname() 
{
    return this.firstName + " " + this.lastName + "," + city + "," + country;
}

const person1 = {
  firstName:"k",
  lastName: "c"
}

fullName.call(person1, "bangalore", "India");
```

Example 2
```js
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

const cheese = new Food('feta', 5);
const fun = new Toy('robot', 40);

```
