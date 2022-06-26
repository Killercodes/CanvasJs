# JavaScript Cookies

- [JavaScript Cookies](#javascript-cookies)
  - [Why are cookies needed](#why-are-cookies-needed)
  - [What are cookies](#what-are-cookies)
  - [How does a cookie look](#how-does-a-cookie-look)
  - [How to write a cookie](#how-to-write-a-cookie)
  - [How to read a cookie](#how-to-read-a-cookie)
  - [JavaScript cookie attributes](#javascript-cookie-attributes)
    - [Optional Cookie Attributes](#optional-cookie-attributes)
  - [What is the difference between expires and max-age attributes](#what-is-the-difference-between-expires-and-max-age-attributes)
    - [domain attribute :](#domain-attribute-)
    - [path attribute :](#path-attribute-)
    - [secure attribute :](#secure-attribute-)
  - [Store multiple key value pairs in a cookie](#store-multiple-key-value-pairs-in-a-cookie)
  - [Set and get multiple cookies in JavaScript](#set-and-get-multiple-cookies-in-javascript)
  - [Update and delete cookies](#update-and-delete-cookies)
    - [Updating a cookie :](#updating-a-cookie-)
    - [Deleting a cookie :](#deleting-a-cookie-)
   - [Cookie limitations](#cookie-limitations)
      - [How to check if cookies are enabled](#how-to-check-if-cookies-are-enabled)
      - [How to check if JavaScript is enabled](#how-to-check-if-javascript-is-enabled)


## Why are cookies needed
Web applications work on HTTP protocol which is a stateless protocol. This means after the web server has processed the client request for a web page, the web server will not remember anything about the client that made the request. Let us understand what this statement means with an example.

1. Design a web page with a DropDownList.

2. When the user selects a color from the DropDownList we want to change the background color of the page to the selected color.


3. We want the web application to remember the user's preferred color. On a subsequent visit to the same page it should display the page with the background color that we previously selected. 

4. Now close the browser. Open a new instance of the browser and navigate to the same page. Notice that, the page does not remember the color we selected earlier. This is because web applications work on HTTP protocol which is a stateless protocol. This means after the web server has processed the initial client request, it does not remember aynthing about the settings the client made. There are several ways to make a web application remember these settings. One of the easiest and common ways is by using cookies.

## What are cookies
Cookies are small text files that a browser stores in the visitor's computer. A cookie is basically a string of name-value pairs separated by semi-colons.

## How does a cookie look 
```
color=red;expires=Fri, 5 Aug 2016 01:00:00 UTC;
```
In the cookie string above we have 2 name-value pairs. 
The expires attribute specifies when the cookie is going to expire. By default cookies are deleted when the current browser session ends. If you want to store the cookie on the client computer even after the browser session has ended then specify either expires or max-age attributes. The color attribute is set to "red".

## How to write a cookie
Use the document object's cookie property to write the cookie.
```js
document.cookie = "color=red;expires=Fri, 5 Aug 2016 01:00:00 UTC;"
```
## How to read a cookie
Use the document object's cookie property to read the cookie.
```js
var cookieString = document.cookie;
```

Here is the complete example which remembers the user color preference
```html
<select id="ddlTheme" onchange="setColorCookie()">
    <option value="Select Color">Select Color</option>
    <option value="red">Red</option>
    <option value="green">Green</option>
    <option value="blue">Blue</option>
</select>
<script type="text/javascript">
    window.onload = function () 
    {
        if (document.cookie.length != 0) {
            var nameValueArray = document.cookie.split("=");
            document.getElementById("ddlTheme").value = nameValueArray<1>;
            document.bgColor = nameValueArray<1>;
        }
    }
    
    function setColorCookie() 
    {
        var selectedValue = document.getElementById("ddlTheme").value;
        if (selectedValue != "Select Color") 
        {
            document.bgColor = selectedValue;
            document.cookie = "color=" + selectedValue + ";expires=Fri, 5 Aug 2016 01:00:00 UTC;";
        }
    }
</script>
```
## JavaScript cookie attributes

### Optional Cookie Attributes
- expires
- max-age
- domain
- path
- secure

The following code creates a cookie that expires as soon as the browser is closed
```js
document.cookie = "color=red";
```
expires and max-age attributes : If you want to create a persistent cookie, that is a cookie that is not deleted after the browser is closed either use expires or max-age attributes
```js
document.cookie = "color=red;expires=Fri, 5 Aug 2016 01:00:00 UTC";
```
OR
```js
document.cookie = "color=red;max-age=" + (60 * 60 * 24 * 30) + ";"// Creates a cookie that expires in 30 days
```
## What is the difference between expires and max-age attributes
With expires attribute you set an expiry date. The expires attribute is obsolete. Very few modern browsers support this attribute. Internet Explorer is one of them.
With max-age attribute you specify the expiry time in seconds. Most modern browsers support this attribute except Internet Explorer.

If you want to create a persistent cookie that works in IE and all the other browsers then specify both expires and max-age attributes.

### domain attribute : 
Specifies the doamin for which the cookie is valid. If you specify the doamin as KillerTech.Blog.com then that cookie will be valid only for that sub-domain. It will not be valid for KillerTech.com. 

If you want a cookie to be valid for all sub-domains of KillerTech.com then specify `domain=KillerTech.com.` So this cookie will be valid for
```
KillerTech.com
KillerTech.Blog.com
KillerTech.Blog.KudKillerCode.com
```
### path attribute :
 By default cookies are valid only for web pages in the directory of the current web page that stored them, as well as its descendants. 

**Example :** The following diagram shows the directory structure of a web application

If a cookie is set by `http://localhost/Home/Page2.htm`, it will be valid for `http://localhost/Home/SubFolder/Page1`... but not for `http://localhost/Page3.htm`

If you want to create a cookie that is valid across all your pages in your website, then set the path attribute to the root of your web directory, that is, `"/"`.
```js
document.cookie = "color=red;max-age=" + (60 * 60 * 24 * 30) + ";path=/";
```
### secure attribute : 
secure attribute specifies that the cookie is secure and is only used over HTTPS protocol which ensures that the cookie is always encrypted when transmitting from client to server.

## Store multiple key value pairs in a cookie
When we click "Set Cookie" button, we want to store name, email & gender along with their values in the cookie.

Copy and paste the following code in HTMLPage1.htm
```html
<html>
<head></head>
<body>
    <table border="1">
        <tr>
            <td>
                Name
            </td>
            <td>
                <input type="text" id="txtName" />
            </td>
        </tr>
        <tr>
            <td>
                Email
            </td>
            <td>
                <input type="text" id="txtEmail" />
            </td>
        </tr>
        <tr>
            <td>
                Gender
            </td>
            <td>
                <input type="text" id="txtGender" />
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <input type="button" value="Set Cookie" onclick="setCookie()" />
                <input type="button" value="Get Cookie" onclick="getCookie()" />
                <input type="button" value="Clear" onclick="clearTextBoxes()" />
            </td>
        </tr>
    </table>
    <script type="text/javascript">

        function setCookie() 
        {
            var cookieString = "name=" + document.getElementById("txtName").value +
                               ";email=" + document.getElementById("txtEmail").value +
                               ";gender=" + document.getElementById("txtGender").value;

            document.cookie = cookieString;
        }

        function getCookie() 
        {
            alert(document.cookie);
        }

        function clearTextBoxes() 
        {
            document.getElementById("txtName").value = "";
            document.getElementById("txtEmail").value = "";
            document.getElementById("txtGender").value = "";
        }
    </script>
</body>
</html>
```

1. Run the application. 
2. Fill in data for Name, Email and Gender. 
3. Click "Set Cookie" button
4. Click "Get Cookie" button

Notice that we only get the first key-value pair. This is because you can only store one key-value pair in one cookie
name=KillerCode

If you want to store all the 3 key-value pairs, you have 2 options
1. Create a custom object, serialize the object to a JSON string and store the serialized string in a cookie
2. Use a different cookie for each key-value pair you want to store

Create a custom object, serialize the object to a JSON string and store the serialized string in a cookie : 

Modify the code in `setCookie()` function as shown below. 
```js
function setCookie() 
{
    var customObject = {};

    customObject.name = document.getElementById("txtName").value;
    customObject.email = document.getElementById("txtEmail").value;
    customObject.gender = document.getElementById("txtGender").value;

    var jsonString = JSON.stringify(customObject);

    document.cookie = "cookieObject=" + jsonString;
}
```
`JSON.stringify()` method converts a JavaScript object to a JavaScript Object Notation (JSON) string.

Modify the code in `getCookie()` function as shown below. 
```js
function getCookie() 
{
    var nameValueArray = document.cookie.split("=");

    var customObject = JSON.parse(nameValueArray[1]);

    document.getElementById("txtName").value = customObject.name;
    document.getElementById("txtEmail").value = customObject.email;
    document.getElementById("txtGender").value = customObject.gender;
}
```
`JSON.parse()` method parses a JSON string and returns the corresponding object.

In our next video we will discuss the second option, i.e using a different cookie for each key-value pair that we want to store.

## Set and get multiple cookies in JavaScript
When we click "Set Cookie" button we want to store the following 3 key-value pairs in 3 cookies.
```
name=Killer;
email=Killercodes@gmail.com;
gender=Male;
```
When we click **"Get Cookie"** button we want to retrieve all the 3 key-value pairs from the 3 cookies

Modify the code in `setCookie()` function as shown below. 
```js
function setCookie() 
{
    document.cookie = "name=" + document.getElementById("txtName").value;
    document.cookie = "email=" + document.getElementById("txtEmail").value;
    document.cookie = "gender=" + document.getElementById("txtGender").value;
}
```

The above code creates 3 cookies and stores the 3 key-value pairs. At this point document.cookie property contains the following string
```
"name=KillerCode; email=Kudvenkat@gmail.com; gender=Male"
```

Now, modify the code in getCookie() function as shown below. 
```js
function getCookie() 
{
    if (document.cookie.length != 0) 
    {
        var cookiesArray = document.cookie.split("; ");
        for (var i = 0; i [ cookiesArray.length; i++) 
        {
            var nameValueArray = cookiesArray[i].split("=");
            if (nameValueArray[0] == "name") 
            {
                document.getElementById("txtName").value = nameValueArray[1];
            }
            else if (nameValueArray[0] == "email") 
            {
                document.getElementById("txtEmail").value = nameValueArray[1];
            }
            else if (nameValueArray[0] == "gender") 
            {
                document.getElementById("txtGender").value = nameValueArray[1];
            }
        }
    }
    else 
    {
        alert("No cookies found");
    }
}
```

## Update and delete cookies

1. Updating a cookie
2. Deleting a cookie
3. Cookie limitations

### Updating a cookie :
 To update a cookie, set a cookie with the same name again. The following code updates the color cookie with the New_Color if a cookie with name=color exists otherwise it creates a new cookie with that name.
```js
document.cookie = "color=New_Color";
```
### Deleting a cookie :
 To delete a cookie, set a cookie with max-age attribute set to a negative value
```js
document.cookie = "color=red;max-age=-60";
```

If you are using a browser that supports expires attribute, then set the expires attribute to a date in the past.
```js
document.cookie = "color=red;expires=Mon, 01 Jan 1900 01:00:00 UTC;";
```

> **Please note:** Users can also use the browser interface to delete cookies anytime they want.

## Cookie limitations 
1. What is the maximum allowed cookie size per cookie
2. How many cookies are allowed per domain

#### How to check if cookies are enabled
Most websites rely on browser cookies being enabled. For example, if you have disabled cookies and if you try to log into gmail.com, you will receive an error message saying - Oops! Your browser seems to have cookies disabled. Make sure cookies are enabled or try opening a new browser window. 

The following JavaScript code detects if cookies are enabled. Most modern browser's support navigator.cookieEnabled property. This property returns true if cookies are enabled and false if cookies are disabled. Some old browsers don't support this property. For those browsers that don't support navigator.cookieEnabled property, we are setting "mytestcookie" and then reading again to make sure cookies are enabled. If we are not able to read "mytestcookie" then we know that cookies are disabled.
```html
<div id="msg"></div>
<script type="text/javascript">
    function cookiesEnabled() 
    {
        var cookiesEnabled = (navigator.cookieEnabled) ? true : false;

        if (typeof navigator.cookieEnabled == "undefined" && !cookiesEnabled) 
        {
            document.cookie = "mytestcookie";
            cookiesEnabled = (document.cookie.indexOf("mytestcookie") != -1) ? true : false;
        }

        return cookiesEnabled;
    }

    if (cookiesEnabled()) 
    {
        document.getElementById("msg").innerHTML = "Cookies enabled";
    }
    else 
    {
        document.getElementById("msg").innerHTML = "Cookies disabled";
    }
</script>
```
#### How to check if JavaScript is enabled
We have a page that captures Name and Gender. Both fields are required. The page relies on JavaScript being enabled for performing validation. We should always have server side validation irrespective of whether we have client side validation or not. It is not a good practice to rely just on client side validation, but for the purpose of this demo, let us say we only have client side validation.

If JavaScript is enabled then we want to display the Name and Gender elements and the user can continue to use the application.

If JavaScript is disabled then we want to hide the Name and Gender elements and we want to display the following message.
It seems that you have disabled JavaScript. Please enable JavaScript.

The easiest way to detect if JavaScript is enabled is by using noscript tag. The content inside the [noscript] element will be displayed only if scripts are not supported, or are disabled in the user's browser. 
```html
<noscript>
    <style type="text/css">
        .rootDiv
        {
            display: none;
        }
    </style>
    <h1>It seems that you have disabled JavaScript. Please enable JavaScript.</h1>
</noscript>
<div id="rootElement" class="rootDiv">
    <table border="1">
        <tr>
            <td>
                Name
            </td>
            <td>
                <input id="txtName" type="text" onfocus="validateIfEmpty('txtName')" 
                onblur="validateIfEmpty('txtName')" onkeyup="validateIfEmpty('txtName')" />
            </td>
        </tr>
        <tr>
            <td>
                Gender
            </td>
            <td>
                <input id="txtGender" type="text" onfocus="validateIfEmpty('txtGender')" 
                onblur="validateIfEmpty('txtGender')" onkeyup="validateIfEmpty('txtGender')" />
            </td>
        </tr>
    </table>
</div>
<script type="text/javascript">
    function validateIfEmpty(control) 
    {
        var controlToValidate = document.getElementById(control);
        if (controlToValidate.value == "") 
        {
            controlToValidate.style.background = "red";
        }
        else 
        {
            controlToValidate.style.background = "white";
        }
    }
</script>
```
