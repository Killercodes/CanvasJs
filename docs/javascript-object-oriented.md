# JavaScript and object oriented programming
JavaScript is object oriented programming language. The following are the 4 pillars of any object oriented programming language.  
1. Inheritance
2. Encapsulation
3. Abstraction
4. Polymorphism

let's focus on creating objects in JavaScript. Objects in JavaScript can be broadly classified into 2 categories.
1. Standard built-in objects
2. Custom objects

## Standard built-in objects :
So far in this series, we have already seen many of the JavaScript standard built-in objects. Examples include string, array, RegExp, Date etc. In the example below we are creating Date object using the Date constructor function and then using it's `getFullYear()` method to get the year.
```js
var currentDate = new Date();
document.write(currentDate.getFullYear());
```
## Custom objects :
In C#, to create a custom object, we create a Custom class and then create an instance of a class. In JavaScript we don't have classes. Instead we use functions. 

In JavaScript there are two ways to create a custom object.
1. Constructor function 
2. Literal notation

## Creating an object in JavaScript using constructor function 
```js
<script type="text/javascript">
    function Employee(firstName, lastName) 
    {
        this.firstName = firstName;
        this.lastName = lastName;

        this.getFullName = function () 
        {
            return this.firstName + " " + this.lastName;
        }
    }

    var employee = new Employee("KillerCode", "Tech");
    document.write("FirstName = " + employee.firstName + "<br/>");
    document.write("LastName = " + employee.lastName + "<br/>");
    document.write("FullName = " + employee.getFullName() + "<br/>");
</script>
```

## Creating an object in JavaScript using literal notation
```js
<script type="text/javascript">
    var employee = 
    {
        firstName : "KillerCode",
        lastName : "Tech",

        getFullName : function () 
        {
            return this.firstName + " " + this.lastName;
        }
    }

    document.write("FirstName = " + employee.firstName + "<br/>");
    document.write("LastName = " + employee.lastName + "<br/>");
    document.write("FullName = " + employee.getFullName() + "<br/>");
</script>
```

Both the examples above produce the same output.

What is the difference between creating an object using constructor function and literal notation. 
1. In the constructor function the properties and their values separated using an equal-to sign(=) whereas in the literal version, they are separated using a colon (:)
2. In constructor function at the end of each property you can have a semi-colons (;) whereas in the literal version properties must be separated with a comma (,)
3. With literal notation you have already created an object, so to access firstName value you simply use employee.firstName. With the constructor function you have to first create an instance and then use the created instance and the property name separated by DOT as shown below.
```js
var employee = new Employee("killer", "Tech");
employee.firstName
```

## Object literal vs object constructor
### Creating an object using object literal notation
```js
<script type="text/javascript">
    var employee = 
    {
        name : "John"
    }

    // Create a new variable and assign the employee object
    var newEmployee = employee;

    // Change the name property of the employee object using the new variable
    newEmployee.name = "Mary";

    // Retrieve the name property from the original employee object
    // Notice that name is changed to Mary
    document.write(employee.name);
</script>
```
Output : 
```
Mary
```
Objects created using object literals are singletons. This means when a change is made to the object, it affects that object across the entire script.

### Creating an object using constructor function 
```js
<script type="text/javascript">
    var emp = function () 
    {
        this.name = "John";
    }

    // Create an instance of employee
    // employee.name will return John
    var employee = new emp();

    // Create an other instance of employee
    // newEmployee.name will return John
    var newEmployee = new emp();

    // Change the name property of the newEmployee object
    newEmployee.name = "Mary";

    // Retrieve the name property from the original employee object
    // Notice that name is not changed to Mary, it is still John
    document.write(employee.name);
</script>
```
Output : 
```
John
```

Object defined with a function constructor lets you have multiple instances of that object. This means change made to one instance, will not affect other instances.

#### So, when to use one over the other?

If you need multiple instances of the object use constructor function where as if you need just one instance of the object then use literal notation.

***


# Inheritance in JavaScript
Object oriented programming languages support inheritance. Since JavaScript is also an object oriented programming language, it supports inheritance. 

In Object oriented programming languages like C# and Java to implement inheritance, a class inherits from another class. In JavaScript, we don't have the concept of classes, so inheritance in JavaScript is prototype-based. This means to implement inheritance in JavaScript, an object inherits from another object. Let us understand this with an example.
```js
    // Employee will be the base object (Similar to base class in c#)
    var Employee = function (name) 
    {
        this.name = name;
    }

    // getName() function is added to the base object (Employee)
    Employee.prototype.getName = function () 
    {
        return this.name;
    }

    // PermanentEmployee will be the derived object
    var PermanentEmployee = function (annualSalary) 
    {
        this.annualSalary = annualSalary;
    }

    // Use prototype to associate Employee as the base object for PermanentEmployee
    PermanentEmployee.prototype = new Employee("Mark");

    var pe = new PermanentEmployee(50000);
    // Derived object (permanentEmployee) can see the base object (Employee) getName() method
    document.write(pe.getName());
    alert(pe instanceof Employee); // Returns true
    alert(pe instanceof PermanentEmployee); // Returns true
```

Notice that the derived object (PermanentEmployee) can see the base object (Employee) getName() method. When getName() method is called, JavaScript first tries to find this method in the derived object (). It can't find the method there so it goes to the parent object and finds it there.

If you add a new method to the parent object, it becomes available in the derived object.
```js
    var Employee = function (name) 
    {
        this.name = name;
    }

    Employee.prototype.getName = function () 
    {
        return this.name;
    }

    // Adding getNameLength() method to the parent object
    // which becomes available in the derived object
    Employee.prototype.getNameLength = function () 
    {
        return this.name.length + " characters";
    }

    // PermanentEmployee will be the derived object
    var PermanentEmployee = function (annualSalary) 
    {
        this.annualSalary = annualSalary;
    }

    PermanentEmployee.prototype = new Employee("Mark");

    var pe = new PermanentEmployee(50000);
    // Call getNameLength() method added to the parent object
    document.write(pe.getNameLength()); // Output : 4 characters 
```

Use hasOwnProperty() method to determine if a property is defined on the actual object or it's prototype. Here is an example.
```js
    var Employee = function (name) 
    {
        this.name = name;
    }
    
    var PermanentEmployee = function (annualSalary) 
    {
        this.annualSalary = annualSalary;
    }

    var employee = new Employee("Mark");

    PermanentEmployee.prototype = employee;

    var pe = new PermanentEmployee(50000);

    document.write("Employee.name: " + employee.hasOwnProperty('name'));
    document.write("Employee.annualSalary: " + employee.hasOwnProperty('annualSalary'));

    document.write("PermanentEmployee.name: " + pe.hasOwnProperty('name'));
    document.write("PermanentEmployee.annualSalary: " + pe.hasOwnProperty('annualSalary'));
```
Output :
```
Employee.name: true
Employee.annualSalary: false

PermanentEmployee.name: false
PermanentEmployee.annualSalary: true
```
***


# Abstract classes in JavaScript
Object oriented programming languages like C# and Java, support abstract classes. Abstract classes are incomplete. So, trying to create an instance of an abstract class raises a compiler error. Abstract classes can only be used as base classes. 

Since JavaScript is also an object oriented programming language, it also supports the concept of abstract classes. Here is an example.

Add a new HTML page to the project. Name it HTMLPage1.htm. Copy and paste the following code in HTMLPage1.htm.
```js
<script type="text/javascript">
    // Create a Shape object which is abstract
    var Shape = function () 
    {
        this.shapeName = "None";
        throw new Error("Cannot create an instance of abstract class");
    }

    // Error : Cannot create an instance of abstract class
    // var shape = new Shape();

    // Add draw function to the Shape prototype
    // Objects derived from Shape should be able to call draw() method
    Shape.prototype.draw = function () 
    {
        return "Drwaing " + this.shapeName;
    }

    // Create a Circle object
    var Circle = function (shapeName) 
    {
        this.shapeName = shapeName;
    }

    // Make shape the parent for Circle
    // Object.create() allows to create an object without using constructor
    Circle.prototype = Object.create(Shape.prototype);

    var circle = new Circle("Circle");
    // Since Circle inherits from abstract Shape object, it can call draw() method
    document.write(circle.draw());

    alert(circle instanceof Circle); // Returns true
    alert(circle instanceof Shape);  // Returns true
</script>
```
***
# Polymorphism in JavaScript
Since JavaScript is also an object oriented programming language, it also supports the concept of polymorphism. Here is an example.
```js
<script type="text/javascript">
    // Shape object is be the base object
    var Shape = function () { }

    // Add draw function to the Shape prototype
    // Objects derived from Shape should be able to override draw() method
    Shape.prototype.draw = function () 
    {
        return "I am a generic shape";
    }

    // Create a Circle object
    var Circle = function () { }

    // Make shape the parent for Circle
    Circle.prototype = Object.create(Shape.prototype);

    // Circle object overrides draw() method
    Circle.prototype.draw = function () 
    {
        return "I am a circle";
    }

    var Square = function () { }

    Square.prototype = Object.create(Shape.prototype);

    Square.prototype.draw = function () 
    {
        return "I am a square";
    }

    var Triangle = function () { }
    Triangle.prototype = Object.create(Shape.prototype);

    var shapes = [new Shape(), new Circle(), new Square(), new Triangle()];

    shapes.forEach(function (val) 
    {
        document.write(val.draw() + "<br/>") 
    });
</script>
```
Ouptut:
```
I am a generic shape
I am a circle
I am a square
I am a generic shape
```

***


# Private members in JavaScript
In any object oriented programming language, classes can have private and public members. An example is shown below.

JavaScript is object oriented programming language, so objects in JavaScript can also have private and public fields and functions. An example is shown below. 
```js
function Employee(firstName, lastName) 
{
    // Private Field
    var privateFullName;

    // Public Fields
    this.firstName = firstName;
    this.lastname = lastName;

    // Private Function
    var privateGetFullName = function () 
    {
        privateFullName = firstName + " " + lastName;
        return privateFullName;
    }

    // Privileged Function
    this.privilegedGetFullName = function () 
    {
        return privateGetFullName();
    }

    // Public Function
    Employee.prototype.publicGetFullName = function () 
    {
        return this.privilegedGetFullName();
    }
}
```


In the example above, we also have a privileged Function. So, what is a Privileged Function?
1. Privileged methods are created using `this` keyword and Public methods are created using prototype property of the constructor function.
2. Privileged method can access private variables and methods
3. Public methods can call Privileged methods but not Private methods.
4. Like Public methods, Privileged methods are also available outside the constructor function.

**Public fields** and functions are available both inside and outside of the `Employee()` constructor function. Private fields and functions are available only inside the Employee() constructor function. Attempting to access private fields and properties outside of the constructor function will result in undefined error.
```js
var employee = new Employee("Tom", "Grover");

document.write(employee.publicGetFullName() + "<br/>");     // Calling public function works fine
document.write(employee.privilegedGetFullName() + "<br/>"); // Calling Privileged function works fine
employee.privateGetFullName()                               // Calling private method - undefined error
employee.privateFullName                                    // Calling private field - undefined error
```

Can we modify a private field outside of the constructor function?
Straight answer, no you can't.

In the example below, when we call the private field (employee.privateFullName) it results in undefined error. On the next line we are adding a new public field with same name as the private field to the employee object. Is this going to change the private field (privateFullName). The answer is NO. You cannot access or modify private fields outside of the object. In this example, you are just adding new public field (employee.privateFullName) to the employee object. 
```js
var employee = new Employee("Tom", "Grover");
employee.privateFullName // Calling private field - undefined error

// Add a field with same name as private field
employee.privateFullName = "ABC"; 
document.write(employee.publicGetFullName() + "[br/]");
document.write(employee.privateFullName);
```


## Private fields - 
Declared using the `var` keyword inside the object, and can only be accessed by private functions and privileged methods.

## Public fields - 
Declared using `this` keyword and are available outside the object.

## Private functions -
Declared inside the object using one of the 2 ways shown below. Can be called only by privileged methods.
```js
var privateGetFullName = function () 
{
    privateFullName = firstName + " " + lastName;
    return privateFullName;
}
```
OR
```js
function privateGetFullName()
{
    privateFullName = firstName + " " + lastName;
    return privateFullName;
}
```

## Privileged methods - 
Declared using this keyoword and are available both within and outside the object.
```js
// Privileged Function
this.privilegedGetFullName = function () 
{
    return privateGetFullName();
}
```

## Public methods - 
Defined by using the object's prototype property and are available both within and outside the object.
```js
// Public Function
Employee.prototype.publicGetFullName = function () 
{
    return this.privilegedGetFullName();
}
```
***


# Properties in JavaScript
Since JavaScript is also an object oriented programming language, objects in JavaScript can also have properties. 

Why do we need properties when we have public fields
Encapsulation is one of the pillars of object oriented programming language. Properties provide encapsulation. If you use public fields you cannot control on what is assigned and returned from that public field.

In the example below we have an employee object with age public field. There is nothing stopping us from setting the age value of the employee object to 1000. Using properties you can control on what values can be assigned. You can also use properties to create just read-only or write-only properties.
```js
function Employee(age) 
{
    this.age = age;
}

var employee = new Employee(50);
// Nothing stops you from assigning a value of 1000 to age field
employee.age = 1000;
```
An example is shown below. In the example name is read-only property and age is read/write property.
```js
function Employee(name, age) 
{
    var _name = name;
    var _age = age;

    Object.defineProperty(this, "age", {
        get: function () { return _age; },
        set: function (value) {
            if (value [ 100 || value ] 1) 
            {
                alert("Invalid age");
            }
            else 
            {
                _age = value;
            }
        }
    });

    Object.defineProperty(this, "name", { 
        get: function () { return _name; }
    });
}

var employee = new Employee("Tom", 55);
// Cannot change the value of name property (read-only)
employee.name = "Tommy";
// Will alert an error - Invalid age
employee.age = 195;
document.write(employee.name + " " + employee.age);
```

***


# Overriding JavaScript functions
we discussed that one of the advantages of using prototype property to add functions is that it enables us to override an existing function if required. Let us continue with the same example we worked with in Part 60.
```js
function Employee(name) 
{
    this.name = name;
}

Employee.prototype.getName = function () 
{
    return this.name;
}

var e1 = new Employee("Mark");
var e2 = new Employee("Sara");

document.write("e1.name = " + e1.getName() + "[br/]");
document.write("e2.name = " + e2.getName() + "[br/]");
```

Output :
```
e1.name = Mark
e2.name = Sara
```
Let us say for some reason we want to override getName() function of Employee object. Notice that in GetEmployeeDetails() function we have overridden getName() function of the Employee object. The overridden version converts the name of the Employee to UPPERCASE.
```js
GetEmployeeDetails();

function GetEmployeeDetails() 
{
    Employee.prototype.getName = function () 
    {
        return this.name.toUpperCase();
    }

    var e1 = new Employee("Mark");
    var e2 = new Employee("Sara");

    document.write("e1.name = " + e1.getName() + "[br/]");
    document.write("e2.name = " + e2.getName() + "[br/]");
}

function Employee(name) 
{
    this.name = name;
}

Employee.prototype.getName = function () 
{
    return this.name;
}
```
Output :
```
e1.name = MARK
e2.name = SARA
```

In this example, all the JavaScript is in the same file, i.e
- The JavaScript that creates Employee constructor function and getName() function &
- The script that overrides getName() function 

The JavaScript that creates Employee constructor function and getName() function could even be present in a separate JavaScript file. 

- To your project add a new JScript file with name = EmployeeScript.js.

- Copy and paste the following JavaScript code in EmployeeScript.js file
```js
function Employee(name) 
{
    this.name = name;
}

Employee.prototype.getName = function () 
{
    return this.name;
}
```

- Modify the code on the HTML page as shown below.
```html
<html>
    <head>
        <script type="text/javascript" src="EmployeeScript.js">
        </script>
    </head>
    <body>
        <script>
            GetEmployeeDetails();

            function GetEmployeeDetails() 
            {
                Employee.prototype.getName = function () 
                {
                    return this.name.toUpperCase();
                }

                var e1 = new Employee("Mark");
                var e2 = new Employee("Sara");

                document.write("e1.name = " + e1.getName() + "<br/>");
                document.write("e2.name = " + e2.getName() + "<br/>");
            }
        </script>
    </body>
</html>
```

- Run the page and the output should be exactly the same as the previous example.

JavaScript built-in methods can also be overridden. The following example overrides the built-in JavaScript alert() function.
```html
<script type="text/javascript">

    // Overriding JavaScript alert function to write to the page 
    // instead of displaying the alert dialog box
    var alert = function (msg) 
    {
        document.write(msg);
    }

    // The following calls will invoke the overridden alert() method    
    alert("Hello");
    window.alert(" JavaScript");

</script>
```

Output : 
```
Hello JavaScript
```

***

# Object reflection in JavaScript
Object oriented programming languages like C# and Java, support reflection. Reflection allows us to inspect meta data of assemblies, modules and types. Since JavaScript is also an object oriented programming language, it also supports the concept of reflection. Let's understand Object reflection in JavaScript with an example.

Employee object in the following example has 4 public properties
1. firstName
2. lastName
3. email
4. gender

and 3 public functions
1. getFullName
2. getEmail
3. getGender

```js
var Employee = function (firstName, lastName, gender, email) 
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.email = email;
}

Employee.prototype.getFullName = function () 
{
    return this.firstName + " " + this.lastName;
}

Employee.prototype.getEmail = function () 
{
    return this.email;
}

Employee.prototype.getGender = function () 
{
    return this.gender;
}

var employee = new Employee("Mark", "Matt", "Male", "a@a.com");

The following code retrieves all the public properties and methods of the Employee object.

for (var property in employee) 
{
    document.write(property + "[br/]");
}
```
Output :
```
firstName
lastName
gender
email
getFullName
getEmail
getGender
```

The following code retrieves all the public properties & functions of the Employee object along with their values.
```js
for (var property in employee) 
{
    document.write(property + " : " + employee[property] + "[br/]");
}
```
Output :
```
firstName : Mark
lastName : Matt
gender : Male
email : a@a.com
getFullName : function () { return this.firstName + " " + this.lastName; }
getEmail : function () { return this.email; }
getGender : function () { return this.gender; }
```
The following code retrieves only the public properties of the Employee object.
```js
for (var property in employee) 
{
    if (typeof employee[property] != "function") 
    {
        document.write(property + " : " + employee[property] + "[br/]");
    }
}
```
Output:
```
firstName : Mark
lastName : Matt
gender : Male
email : a@a.com
```

The following code retrieves only the public functions of the Employee object.
```js
for (var property in employee) 
{
    if (typeof employee[property] == "function") 
    {
        document.write(property + " : " + employee[property] + "[br/]");
    }
}
```
Output :
```
getFullName : function () { return this.firstName + " " + this.lastName; }
getEmail : function () { return this.email; }
getGender : function () { return this.gender; }
```

When 2 objects are related thru inheritance, the child object will have access to parent object methods and properties. In this example, PermanentEmployee is a child of Employee. The following code shows all the properties and methods of the PermanentEmployee object including those it inherited from the Employee object.
```js
var employee = new Employee("Mark", "Matt", "Male", "a@a.com");

var PermanentEmployee = function (annualSalry) 
{
    this.annualSalary = annualSalry;
}

PermanentEmployee.prototype = employee;

var pe = new PermanentEmployee(50000);

for (var property in pe) 
{
    document.write(property + " : " + pe[property] + "[br/]");
}
```
Output : 
```
annualSalary : 50000
firstName : Mark
lastName : Matt
gender : Male
email : a@a.com
getFullName : function () { return this.firstName + " " + this.lastName; }
getEmail : function () { return this.email; }
getGender : function () { return this.gender; }
```

In this example, we are using hasOwnProperty() method to determine if a property is defined on the actual object or it's prototype. This method returns true if the property is defined by the object itself, otherwise false. The following code retrieves only the public members that are defined in the PermanentEmployee object. The members inherited from the base Employee object are excluded.
```js
for (var property in pe) 
{
    if (pe.hasOwnProperty(property)) 
    {
        document.write(property + " : " + pe[property] + "[br/]");
    }
}
```
Output : 
```
annualSalary : 50000
```

The following code retrieves only the public members inherited from the parent object. Public members defined in PermanentEmployee object are excluded.
```js
for (var property in pe) 
{
    if (!pe.hasOwnProperty(property)) 
    {
        document.write(property + " : " + pe[property] + "[br/]");
    }
}
```
Output : 
```
firstName : Mark
lastName : Matt
gender : Male
email : a@a.com
getFullName : function () { return this.firstName + " " + this.lastName; }
getEmail : function () { return this.email; }
getGender : function () { return this.gender; }
```
***


