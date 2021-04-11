
# Strict Mode in JavaScript
How to enable strict mode in JavaScript : Just add "use strict" statement in your script file as shown below. When you run the page, you will now get an error stating - Variable undefined in strict mode. To see the error in google chrome, please go the console window in developer tools.
```html
<script type="text/javascript">

"use strict";

myString = "This is a string";

document.write(myString);

</script>
```

Since `"use strict";` is specified at the top of the JavaScript file, strictness will be enforced across the entire script file.

How to enforce JavaScript strictness in a specific function : Just add "use strict" statement in the function as shown below. In this example, strictness is enforced only in myFunction().
```html
<script type="text/javascript">

myString = "This is a string<br/>";
document.write(myString);

function myFunction() 
{
    "use strict";
    var myOtherString = "This is also a string";
    document.write(myOtherString);
}

myFunction();

</script>
```

Output :
```
This is a string
This is also a string
```

Let us look at another example : In C# if you assign a value to a read-only property you get an error. For example, the following C# code would raise an error stating - Property or indexer 'Demo.Employee.Name' cannot be assigned to -- it is read only.
```cs
public partial class WebForm1 : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        Employee employee = new Employee("Mark");
        employee.Name = "Mark M";
    }
}

public class Employee
{
    private string _name;
    public Employee(string name)
    {
        this._name = name;
    }
        
    public string Name
    {
        get
        {
            return this._name;
        }
    }
}
```
We discussed JavaScript properties in JavaScript tutorial.

In JavaScript, if you assign a value to a read-only property, JavaScript silently fails without raising an error.
```html
<script type="text/javascript">

    var Employee = function (name) 
    {
        var _name = name;

        Object.defineProperty(this, "name", {
            get: function () 
            {
                return _name;
            }
        });
    }

    var employee = new Employee("Mark");
    // name is readonly property. It is an error to assign a value to a read-only property 
    // JavaScript silently fails the following line without raising an error
    employee.name = "Mark M";

    document.write(employee.name);

</script>
```
If you want JavaScript to raise an error instead of failing silently, use JavaScript strict mode. The code below raises an error stating - Assignment to read-only properties is not allowed in strict mode.
```html
<script type="text/javascript">

    "use strict";

    var Employee = function (name) 
    {
        var _name = name;

        Object.defineProperty(this, "name", {
            get: function () 
            {
                return _name;
            }
        });
    }

    var employee = new Employee("Mark");
    employee.name = "Mark M";

    document.write(employee.name);

</script>
```
ECMAScript version 5 introduced strict mode to JavaScript. With strict mode on it is easier to detect JavaScript silent errors as they would throw an error now. This makes debugging much easier and the chances of developers making mistakes is reduced. Most modern browsers support strict mode.

