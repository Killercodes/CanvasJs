
# Events in JavaScript

# What is an event ?
An event is a signal from the browser that something has happened. For example, 
1. When a user clicks on an HTML element, click event occurs
2. When a user moves the mouse over an HTML element, mouseover event occurs

When events occur, we can execute JavaScript code or functions in response to those events. To do this we need to associate JavaScript code or functions to the events. The function that executes in response to an event is called event handler.

In JavaScript, there are several ways to associate an event handler to the event
1. Using the attributes of an HTML tag
2. Using DOM object property
3. Using special methods

In this file we will discuss associating event handler methods to events using the attributes of HTML tags. 

In the following example, the code to execute in response to onmouseover & onmouseout events is set directly in the HTML markup. The keyword "this" references the current element. In this example `this` references the button control.

```html
<input type="button" value="Click me" id="btn" 
onmouseover="this.style.background= 'red'; this.style.color = 'yellow'" 
onmouseout="this.style.background= 'black'; this.style.color = 'white'" />
```

The above example, can be rewritten as shown below. In this case the code to execute in response to the event is placed inside a function and then the function is associated with the event.

``` html
<input type="button" value="Click me" id="btn" 
onmouseover="changeColorOnMouseOver()" 
onmouseout="changeColorOnMouseOut()" />

<script type="text/javascript">
    function changeColorOnMouseOver() 
    {
        var control = document.getElementById("btn");
        control.style.background = 'red';
        control.style.color = 'yellow';
    }

    function changeColorOnMouseOut() 
    {
        var control = document.getElementById("btn");
        control.style.background = 'black';
        control.style.color = 'white';
    }
</script>
```

Events are very useful in real-world applications. For example they can be used to 
- Display confirmation dialog box on submitting a form
- Form data validation and many more

How to show confirmation dialog in JavaScript

```html
<input type="submit" value="Submit" id="btn" onclick="return confirmSubmit()" />
<script type="text/javascript">
    function confirmSubmit() 
    {
        if (confirm("Are you sure you want to submit")) 
        {
            alert("You selected OK");
            return true;
        }
        else 
        {
            return false;
            confirm("You selected cancel");
        }
    }
</script>
```

## JavaScript form validation example :
 In this example, both First Name and Last Name fields are required fields. When you type the first character in any of the textbox, the background colour is automatically changed to green. If you delete all the characters you typed or if you leave the textbox without entering any characters the background colour changes to red indicating the field is required. We made this possible using onkeyup and onblur events.

- `onkeyup` occurs when the user releases a key.
- `onblur` occurs when an element loses focus.

```html

<table>
    <tr>
        <td>
            First Name
        </td>
        <td>
            <input type="text" id="txtFirstName" onkeyup="validateRequiredField('txtFirstName')"
                   onblur="validateRequiredField('txtFirstName')"/>
        </td>
    </tr>
    <tr>
        <td>
            Last Name
        </td>
        <td>
            <input type="text" id="txtLastName" onkeyup="validateRequiredField('txtLastName')" 
                   onblur="validateRequiredField('txtLastName')"/>
        </td>
    </tr>
</table>
<script type="text/javascript">
    function validateRequiredField(controlId) 
    {
        var control = document.getElementById(controlId);
        control.style.color = 'white';
        if (control.value == "") 
        {
            control.style.background = 'red';
        }
        else 
        {
            control.style.background = 'green';
        }
    }
</script>

```

# Event handlers in JS 
In JavaScript there are several ways to associate an event handler to the event. In Part 36, we discussed, associating event handler methods to events using the attributes of HTML tags. In this video we will discuss using DOM object property to assign event handlers to events.

## First let us understand, what is DOM
DOM stands for Document Object Model. When a browser loads a web page, the browser creates a Document Object Model of that page. The HTML DOM is created as a tree of Objects. 

**Example :**
```js
<html>
    <head>
        <title>My Page Title</title>
    </head>
    <body>
        <script type="text/javascript">
        </script>        
        <div>
            <h1>This is browser DOM</h1>
        </div>
    </body>
</html>
```


JavaScript can be used to access and modify these DOM objects and their properties. For example, you can add, modify and remove HTML elements and their attributes. Along the same lines, you can use DOM object properties to assign event handlers to events. We will discuss the DOM object in detail in a later session.

We will continue with the same examples that we worked with in Part 36. Notice that in this case, we are assigning event handlers using the DOM object properties (onmouseover & onmouseout) instead of using the attributes of the HTML tag. We are using this keyword to reference the current HTML element. 

In this example `this` references the button control.

```html
<input type="button" value="Click me" id="btn"/>
<script type="text/javascript">
    document.getElementById("btn").onmouseover = changeColorOnMouseOver;
    document.getElementById("btn").onmouseout = changeColorOnMouseOut;

    function changeColorOnMouseOver() 
    {
        this.style.background = 'red';
        this.style.color = 'yellow';
    }

    function changeColorOnMouseOut() 
    {
        this.style.background = 'black';
        this.style.color = 'white';
    }
</script>
```


The following example is same as the above. In this case we are assigning an anonymous function to onmouseover & onmouseout properties.
```html
<input type="button" value="Click me" id="btn" />
<script type="text/javascript">
    document.getElementById("btn").onmouseover = function () 
    {
        this.style.background = 'red';
        this.style.color = 'yellow';
    }

    document.getElementById("btn").onmouseout = function () 
    {
        this.style.background = 'black';
        this.style.color = 'white';
    }
</script>
```

If an event handler is assigned using both, i.e an HTML attribute and DOM object property, the handler that is assigned using the DOM object property overwrites the one assigned using HTML attribute. Here is an example.

```html
<input type="button" value="Click me" id="btn" onclick="clickHandler1()"/>
<script type="text/javascript">
    document.getElementById("btn").onclick = clickHandler2;

    function clickHandler1() 
    {
        alert("Handler set using HTML attribute");
    }

    function clickHandler2() 
    {
        alert("Handler set using DOM object property");
    }
</script>
```


Using this approach you can only assign one event handler method to a given event. The handler that is assigned last wins. In the following example, Handler2() is assigned after Handler1. So Handler2() owerites Handler1().

```html
<input type="button" value="Click me" id="btn"/>
<script type="text/javascript">
    document.getElementById("btn").onclick = clickHandler1;
    document.getElementById("btn").onclick = clickHandler2;

    function clickHandler1() 
    {
        alert("Handler 1");
    }

    function clickHandler2() 
    {
        alert("Handler 2");
    }
</script>
```

## addeventlistener and removeeventlistener in JavaScript

assigning event handlers in JavaScript using the following special methods
- `addEventListener`
- `removeEventListener`
- `attachEvent`
- `detachEvent`

Internet Explorer 9 (and later versions) & all the other modern browsers support `addEventListener()` and `removeEventListener()` methods. 

Sytnax for assigning event handler using `addEventListener()` method
```js
element.addEventListener(event, handler, phase)
```

**Sytnax** for removing event handler using `removeEventListener()` method
```js
element.removeEventListener(event, handler, phase)
```

> **Please note :**  The third parameter phase is usually set to false as it is not used.

**Example :** In this example, we are passing values for all the 3 parameters including phase. 

```html
<input type="button" value="Click me" id="btn"/>
<script type="text/javascript">
    btn.addEventListener("mouseover", changeColorOnMouseOver, false);
    btn.addEventListener("mouseout", changeColorOnMouseOut, false);

    function changeColorOnMouseOver() 
    {
        this.style.background = 'red';
        this.style.color = 'yellow';
    }

    function changeColorOnMouseOut() 
    {
        this.style.background = 'black';
        this.style.color = 'white';
    }
</script>
```

Since the third parameter "phase" is optional you can omit it if you wish.
```js
btn.addEventListener("mouseover", changeColorOnMouseOver);
btn.addEventListener("mouseout", changeColorOnMouseOut);
```

**Example :** This example demonstrates removing event handlers.

```html
<input type="button" value="Click me" id="btn"/>
<input type="button" value="Remove Event Handlers" onclick="removeEventHandlers()" />
<script type="text/javascript">
    btn.addEventListener("mouseover", changeColorOnMouseOver);
    btn.addEventListener("mouseout", changeColorOnMouseOut);

    function changeColorOnMouseOver() 
    {
        this.style.background = 'red';
        this.style.color = 'yellow';
    }

    function changeColorOnMouseOut() 
    {
        this.style.background = 'black';
        this.style.color = 'white';
    }

    function removeEventHandlers() 
    {
        btn.removeEventListener("mouseover", changeColorOnMouseOver);
        btn.removeEventListener("mouseout", changeColorOnMouseOut);
    }
</script>
```

Using this approach you can assign more than one event handler method to a given event. The order in which handler methods are executed is not defined. In this example, 2 event handler methods (clickHandler1 & clickHandler3) are assigned to click event of the button control.

When you click the button both the handler methods are executed.

```html
<input type="button" value="Click me" id="btn"/>
<script type="text/javascript">
    btn.addEventListener("click", clickHandler1);
    btn.addEventListener("click", clickHandler2);

    function clickHandler1() 
    {
        alert("Handler 1");
    }

    function clickHandler2() 
    {
        alert("Handler 2");
    }
</script>
```

`attachEvent()` and `detachEvent()` methods only work in Internet Explorer 8 and earlier versions. 

Sytnax for assigning event handler using `attachEvent()` method
```js
element.attachEvent( "on"+event, handler)
```

Sytnax for removing event handler using `detachEvent()` method
```js
element.detachEvent( "on"+event, handler)
```

**Example :** This example will only work in Internet Explorer 8 and earlier versions.

```html
<input type="button" value="Click me" id="btn"/>
<script type="text/javascript">
    btn.attachEvent("onclick", clickEventHandler);

    function clickEventHandler() 
    {
        alert("Click Handler");
    }
</script>
```

**Cross browser solution :** For the above example to work in all browsers, modify the script as shown below.

```html
<input type="button" value="Click me" id="btn"/>
<script type="text/javascript">

    if (btn.addEventListener) 
    {
        btn.addEventListener("click", clickEventHandler);
    }
    else 
    {
        btn.attachEvent("onclick", clickEventHandler);
    }

    function clickEventHandler() 
    {
        alert("Click Handler");
    }
</script>
```

# JavaScript event object
Whenever an event (like click, mouseover, mouseout etc) occurs, the relevant data about that event is placed into the event object. For example, the event object contains event data like, the X and Y coordinates of the mouse pointer when the event occurred, the HTML element that fired the event, which mouse button is clicked etc.

Obtaining the event object is straightforward. The event object is always passed to the event handler method. Let us understand this with an example. When we click the button, we want to capture the following event data
1. Event name
2. Mouse X coordinate when the event occured
3. Mouse Y coordinate when the event occured
4. The control that raised the event
5. The HTML tag name that raised the event

**Notice** that in the example below, we are passing event object as a parameter to the event handler method. The type property gives us the event name that occured. clientX and clientY properties return the X and Y coordinates of the mouse pointer. Target property returns the HTML element that raised the event. Target property is supported by all modern browsers and Internet Explorer 9 and above. The following code will not work in Internet Explorer 8 and earlier versions. 

In addition to click event, the following example returns mouseover and mouseout event data.

```html
<input type="button" value="Click me" id="btn" 
       onclick="displayEventDetails(event)" 
       onmouseover="displayEventDetails(event)" 
       onmouseout="displayEventDetails(event)" />
<br /><br />
<div id="resultDiv"></div>
<script type="text/javascript">
    function displayEventDetails(event) 
    {
        var eventDetails = "Event = " + event.type + "<br/> X = " + event.clientX + "<br/>Y = " +
                            event.clientY + "<br/>Target Type = " + event.target.type +
                            "<br/>Target Tag Name = " + event.target.tagName;

        document.getElementById("resultDiv").innerHTML = eventDetails;
    }
</script>
```

The following code works in all browsers including Internet Explorer 8 and earlier versions. IE 8 and earlier versions use srcElement property to return the HTML element that raised the event. IE 9 and all the other modern browsers use target property. So this is a cross browser solution.

```html
<input type="button" value="Click me" id="btn" onclick="displayEventDetails(event)" 
       onmouseover="displayEventDetails(event)" 
       onmouseout="displayEventDetails(event)" />
<br /><br />
<div id="resultDiv"></div>
<script type="text/javascript">
    function displayEventDetails(event) 
    {
        var sourceElement;

        if (event.srcElement) 
        {
            sourceElement = event.srcElement;
        }
        else 
        {
            sourceElement = event.target;
        }

        var eventDetails = "Event = " + event.type + "<br/> X = " + event.clientX + "<br/>Y = " +
                            event.clientY + "<br/>Target Type = " + sourceElement.type +
                            "<br/>Target Tag Name = " + sourceElement.tagName;

        document.getElementById("resultDiv").innerHTML = eventDetails;
    }
</script>

```

The following example retrieves mousemove event data. Notice that as you move the mouse pointer over the button, the X & Y coordinates changes.

```html
<input type="button" value="Click me" id="btn" onmousemove="displayEventDetails(event)" />
<br /><br />
<div id="resultDiv"></div>
<script type="text/javascript">
    function displayEventDetails(event) 
    {
        var sourceElement;

        if (event.srcElement) 
        {
            sourceElement = event.srcElement;
        }
        else 
        {
            sourceElement = event.target;
        }

        var eventDetails = "Event = " + event.type + "<br/> X = " + event.clientX + "<br/>Y = " +
                            event.clientY + "<br/>Target Type = " + sourceElement.type +
                            "<br/>Target Tag Name = " + sourceElement.tagName;

        document.getElementById("resultDiv").innerHTML = eventDetails;
    }
</script>
```


# Event bubbling in JavaScript
## What is event bubbling 
Let us understand this with an example. HTML elements can be nested inside each other. For example a button element can be nested inside a span element and the span element inturn can be nested inside a div element.

Notice that we have onclick attribute specified for all the 3 elements.

```html
<html>
<head>
    <style type="text/css">
        .styleClass
        {
            display: table-cell;
            border: 1px solid black;
            padding: 20px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="styleClass" onclick="alert('Div click handler')">DIV element 
        <span class="styleClass" onclick="alert('Span click handler')">Span element
            <input type="button" value="Click me" onclick="alert('Button click handler')" />
        </span>
    </div>
</body>
</html>
```

A click on the button, causes a click event to be fired on the button. The button click event handler method handles the event. The click event then bubbles up to the button element parent (span element), which is handled by the span element event handler method. The click event then bubbles up to the span element parent (div element). This is called event bubbling.

Notice that if you click on the `<span>` element, it's event handler and it's parent(`<div>`) element event handler are called. If you click on the `<div>` element, just the [div] element event handler method is called. So, the event bubbling process starts with the element that triggered the event and then bubbles up to the containing elements in the hierarchy.

The following example is similar to the one above, except we removed the onclick attribute from button and span elements. Because of event bubbling, when you click on the button or the span element, the event gets handled by the div element handler.

```html
<html>
<head>
    <style type="text/css">
        .styleClass
        {
            display: table-cell;
            border: 1px solid black;
            padding: 20px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="styleClass" onclick="alert('Click event handled by DIV element')">DIV element 
        <span class="styleClass">Span element
            <input type="button" value="Click me"/>
        </span>
    </div>
</body>
</html>
```


When the event gets bubbled, the keyword this references the current element to which the event is bubbled. In the example below, we are using "this" keyword to reference the current div element and change it's border color. When you click on the innermost [div] element, all the 3 [div] elements border get changed due to event bubbling.

```html
<html>
<head>
    <style type="text/css">
        .divStyle
        {
            display: table-cell;
            border: 5px solid black;
            padding: 20px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div id="DIV1" class="divStyle">
        DIV 1
        <div id="DIV2" class="divStyle">
            DIV 2
            <div id="DIV3" class="divStyle">
                DIV 3
            </div>
        </div>
    </div>
    <script type="text/javascript">
        var divElements = document.getElementsByTagName('div');

        for (var i = 0; i < divElements.length; i++) {
            divElements<i>.onclick = function () {
                this.style.borderColor = "red";
                alert(this.getAttribute("id") + " backgound changed");
            }
        }
    </script>
</body>
</html>
```

### Stopping event bubbling :
 If you don't want the event to be bubbled up, you can stop it. 

With Internet Explorer 8 and earlier versions
```js
event.cancelBubble = true
```
With Internet Explorer 9 (and later versions) & all the other browsers
```js
event.stopPropagation()
```

## Custom Eventes in Javascript

A custom event can be created with
```js
var event1 = new Event("onEvent1",{bubbles:true,cancelable:true}); 
```

and can be dispatched with
```js
window.dispatchEvent(event1);
```


this is how to create and dispatch event 
```js
  function create_DispatchEvent() 
  {
    var event1 = new Event("onEvent1",{bubbles:true,cancelable:true});        
    window.dispatchEvent(event1);        
  }
```

But once all these things are done you need to listen for it with:
```js
    window.addEventListener('onEvent1',function(e) {  });
```

### For Example i can create `OnChange` event as 
```js
var OnChange  = new Event("OnChangeEvent",{bubbles:true,cancelable:true});
```
Now we can define an Handler for thsi Event as :

```js
window.addEventListener('OnChangeEvent',function(e) {  });

//or
function OnChangeEventhandler(e)
{
  //handler code with parameter "e"
}

window.addEventListener('onEvent1',OnChangeEventhandler(e));
```

Then we can invoke this even from any where in the form, this in turen will ccall the function

```js
window.dispatchEvent(OnChange);
```


## JavaScript event capturing
Event capturing is the opposite of event bubbling. We discussed event bubbling in detail in Part 40 of JavaScript tutorial.

With event bubbling the event bubbles up from the inner most element to the outer most element in the DOM hierarchy. With event capuring the opposite happens, the event gets captured from the outer most element to innermost element. In real world event capturing is rarely used. Let us understand this with an example.

In the following example we have 3 [div] nested elements. Notice that we are using addEventListener() method to assign event handler to each [div] element. To enable event capturing we have set the third parameter (phase) of addEventListener() method to true. Now when you click on the innermost [div] (DIV3), notice that the events are fired from the outermost [div] to innermost [div] (DIV1 =] DIV 2 =] DIV 3).

```html
<html>
<head>
    <style type="text/css">
        .divStyle
        {
            display: table-cell;
            border: 5px solid black;
            padding: 20px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div id="DIV1" class="divStyle">
        DIV 1
        <div id="DIV2" class="divStyle">
            DIV 2
            <div id="DIV3" class="divStyle">
                DIV 3
            </div>
        </div>
    </div>
    <script type="text/javascript">
        var divElements = document.getElementsByTagName('div');

        for (var i = 0; i < divElements.length; i++) 
        {
            divElements<i>.addEventListener("click", clickHandler, true);
        }

        function clickHandler() {
            alert(this.getAttribute("id") + " click event handled");
        }
    </script>
</body>
</html>
```

> **Please note :** IE8 and earlier versions does not support addEventListener() method. This implies that event capturing is not supported in IE8 and earlier versions, and hence the above code will not work in IE 8 and earlier versions.

Stopping event capturing : Stopping event capturing is very similar to stopping event bubbling. With the example below, when you click on any [div] element notice that DIV 1 element handles the click event and it does not get captured down.

```html
<html>
<head>
    <style type="text/css">
        .divStyle
        {
            display: table-cell;
            border: 5px solid black;
            padding: 20px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div id="DIV1" class="divStyle">
        DIV 1
        <div id="DIV2" class="divStyle">
            DIV 2
            <div id="DIV3" class="divStyle">
                DIV 3
            </div>
        </div>
    </div>
    <script type="text/javascript">
        var divElements = document.getElementsByTagName('div');

        for (var i = 0; i < divElements.length; i++) 
        {
            divElements<i>.addEventListener("click", clickHandler, true);
        }

        function clickHandler(event) 
        {
            event.stopPropagation();
            alert(this.getAttribute("id") + " click event handled");
        }
    </script>
</body>
</html>
```

Using **addEventListener()** method with last argument set to true is the only way to enable event capturing. If the thid parameter (phase) is set to true event capturing is enabled and if it is set to false event bubbling is enabled. If you want both even bubbling and capturing to be enabled, then assign handlers 2 times, once with the phase parameter set to false and once with the phase parameter set to true as shown below.

```html

<html>
<head>
    <style type="text/css">
        .divStyle
        {
            display: table-cell;
            border: 5px solid black;
            padding: 20px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div id="DIV1" class="divStyle">
        DIV 1
        <div id="DIV2" class="divStyle">
            DIV 2
            <div id="DIV3" class="divStyle">
                DIV 3
            </div>
        </div>
    </div>
    <script type="text/javascript">
        var divElements = document.getElementsByTagName('div');

        for (var i = 0; i < divElements.length; i++) 
        {
            divElements<i>.addEventListener("click", clickHandler, false);
            divElements<i>.addEventListener("click", clickHandler, true);
        }

        function clickHandler() {
            alert(this.getAttribute("id") + " click event handled");
        }
    </script>
</body>
</html>
```

With both event capturing and bubbling enabled, events are first captured from the outermost element to the innermost element and then bubbles up from the innermost to the outermost element.

## Preventing browser default action
In this video we will discuss how to prevent browser default action. First let's look at some of the browser default actions. For example,
1. When you click on a link, the browser navigates to the page specified in the link
2. When you right click on a web page, the browser displays the context menu

In some situations you may want to prevent these default actions of the browser. For example some of the websites prevent you from right clicking on the page. Disabling right click is annoying users. Many people say they disabled right click for security, because they do not want their content to be copied. But if you disable JavaScript in the browser, you will still be able to right click and copy the content. So you are achieving nothing by disabling right click. 

Having said that, now let us see how to prevent the context menu from appearing when you right click on the web page. There are 2 ways you can do this. 

Using oncontextmenu attribute of the body element to disable right click
```html
<html>
    <head>
    </head>
    <body oncontextmenu="return false">
        <h1>On this page right click is disabled</h1>    
    </body>
</html>
```

## Using the event object to disable right click 

IE 8 and earlier versions 
```js
event.returnValue = false;
```
IE 9 & later versions and all other browsers
```js
event.preventDefault();
```

```html
<h1>On this page right click is disabled</h1>
<script type="text/javascript">
    document.oncontextmenu = disableRightClick;

    function disableRightClick(event) 
    {
        event = event || window.event;

        if (event.preventDefault) 
        {
            event.preventDefault();
        }
        else 
        {
            event.returnValue = false
        }
    }
</script>
```

When you click on a link, how to prevent the browser from navigating to the page specified in the link
```html
<a href="http://google.com" onclick="return false">
    Clicking on the link will not take you to PragimTech 
</a>
```

**OR**

```js
<a id="linkElement" href="http://pragimtech.com" onclick="preventLinkNavigation(event)">
    Clicking on the link will not take you to PragimTech 
</a>
```

```js
<script type="text/javascript">
    function preventLinkNavigation(event) 
    {
        event = event || window.event;

        if (event.preventDefault) 
        {
            event.preventDefault();
        }
        else 
        {
            event.returnValue = false
        }
    }
</script>
```

### JavaScript to detect which mouse button is clicked

In this tutorial, we will discuss how to use JavaScript and detect which mouse button is clicked. 

Depending on the browser, `event.button` or `event.which` properties of the event object are used to determine which mouse button is clicked. 

IE 8 & earlier versions use `event.button` property
- `Left Button 1`
- `Middle Button 4`
- `Right Button 2`

IE 9 & later versions and most other W3C compliant browsers use event.which property
- `Left Button 1`
- `Middle Button 2`
- `Right Button 3`

Depending on the browser used, the following code returns left, middle and right click codes.

```html
<input type="button" value="Click Me" onmouseup="getMouseClickCode(event)" />
<input type="button" value="Clear" onclick="clearText()" />
<br />
<br />
<textarea id="txtArea" rows="3" cols="10"></textarea>

<script type="text/javascript">
    function clearText() 
    {
        document.getElementById("txtArea").value = "";
    }

    function getMouseClickCode(event) 
    {
        if (event.which) 
        {
            document.getElementById("txtArea").value += "event.which = " + event.which + "\r\n";
        }
        else 
        {
            document.getElementById("txtArea").value += "event.button = " + event.button + "\r\n";
        }
    }

    document.oncontextmenu = disableRightClick;

    function disableRightClick(event) 
    {
        event = event || window.event;

        if (event.preventDefault) 
        {
            event.preventDefault();
        }
        else 
        {
            event.returnValue = false
        }
    }
</script>
```

Test the above script is tested with Google chrome or IE 9 (or later version). Notice that these browsers support event.which property. 

Test the above script is tested with IE 8 (or earlier version). Notice that IE & earlier versions support event.button property. 

The following JavaScript code detects which mouse button is clicked. It works in all versions of IE and most other W3C complaint browsers.

```js
<script type="text/javascript">
    function whichMouseButtonClicked(event) 
    {
        var whichButton;
        if (event.which) 
        {
            switch (event.which) 
            {
                case 1:
                    whichButton = "Left Button Clicked";
                    break;
                case 2:
                    whichButton = "Middle Button Clicked";
                    break;
                case 3:
                    whichButton = "Right Button Clicked";
                    break;
                default:
                    whichButton = "Invalid Button Clicked";
                    break;
            }
        }
        else
        {
            switch (event.button) 
            {
                case 1:
                    whichButton = "Left Button Clicked";
                    break;
                case 4:
                    whichButton = "Middle Button Clicked";
                    break;
                case 2:
                    whichButton = "Right Button Clicked";
                    break;
                default:
                    whichButton = "Invalid Button Clicked";
                    break;
            }
        }

        alert(whichButton);
    }

    document.oncontextmenu = disableRightClick;

    function disableRightClick(event) 
    {
        event = event || window.event;

        if (event.preventDefault) 
        {
            event.preventDefault();
        }
        else 
        {
            event.returnValue = false
        }
    }
</script>
<button onmouseup="whichMouseButtonClicked(event)">Click Me</button>
```

# JavaScript mouse events
In this tutorial we will discuss the commonly used JavaScript mouse events. Most browsers support these events.

- `mouseover` - Occurs when the mouse pointer is moved over an element
- `mouseout` - Occurs when the mouse pointer is moved out of an element
- `mousemove` - Occurs when the mouse pointer is moving while it is over an element
- `mouseup` - Occurs when the mouse button is released over an element
- `mousedown` - Occurs when the mouse button is pressed over an element
- `click` - Occurs when the mouse button is clicked. `mousedown`, `mouseup` & `click` events occur in sequence
- `dblclick` - Occurs when the mouse button is double-clicked. mousedown, mouseup, - `mousedown`, `mouseup`, `click` & `dblclick` events occur in sequence
- `contextmenu` - Occurs when the mouse right button is clicked. `mousedown`, `mouseup` & `contextmenu` events occur in sequence

Here is an example which logs the mouse events to textarea element as they occur.

```html
<input type="button" value="Single, Double or Right Click" onclick="logEvent(event)" 
       onmousedown="logEvent(event)" onmouseup="logEvent(event)" onmouseover="logEvent(event)" 
       onmouseout="logEvent(event)" ondblclick="logEvent(event)" oncontextmenu="logEvent(event)" />
<input type="button" value="Clear" onclick="clearText()"/>
<br /><br />
<textarea id="txtArea" rows="10" cols="20"></textarea>
<script type="text/javascript">
    function logEvent(event) 
    {
        event = event || window.event;
        document.getElementById("txtArea").value += event.type + "\r\n";
    }

    function clearText() 
    {
        document.getElementById("txtArea").value = "";
    }
</script>
```
* * *
