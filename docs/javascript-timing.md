# JavaScript timing events
In JavaScript a piece of code can be executed at specified time interval. For example, you can call a specific JavaScript function every 1 second. This concept in JavaScript is called timing events. 

The global window object has the following 2 methods that allow us to execute a piece of JavaScript code at specified time intervals.

## setInterval(func, delay)
Executes a specified function, repeatedly at specified time interval. This method has 2 parameters. The func parameter specifies the name of the function to execute. The delay parameter specifies the time in milliseconds to wait before calling the specified function.

## setTimeout(func, delay)
Executes a specified function, after waiting a specified number of milliseconds. This method has 2 parameters. The func parameter specifies the name of the function to execute. The delay parameter specifies the time in milliseconds to wait before calling the specified function. The actual wait time (delay) may be longer.

Let's understand timing events in JavaScript with an example. The following code displays current date and time in the div tag.
```html
<div id="timeDiv"></div>
<script type="text/javascript">
    function getCurrentDateTime() {
        document.getElementById("timeDiv").innerHTML = new Date();
    }

    getCurrentDateTime();
</script>
```

At the moment the time is static. To make the time on the page dynamic modify the script as shown below. Notice that the time is now updated every second. In this example, we are using setInterval() method and calling getCurrentDateTime() function every 1000 milli-seconds.

```js
<div id="timeDiv" ></div>
<script type="text/javascript">
    setInterval(getCurrentDateTime, 1000);

    function getCurrentDateTime() {
        document.getElementById("timeDiv").innerHTML = new Date();
    }
</script>
```

## clearInterval(intervalID)
Cancels the repeated execution of the method that was set up using setInterval() method. intervalID is the identifier of the repeated action you want to cancel. This ID is returned from setInterval() method. The following example demonstrates the use of `clearInterval()` method.

**Starting and stopping the clock with button click :**
 In this example, `setInterval()` method returns the intervalId which is then passed to `clearInterval()` method. When you click the "Start Clock" button the clock is updated with new time every second, and when you click "Stop Clock" button it stops the clock.

```html
<div id="timeDiv" ></div>
<br />
<input type="button" value="Start Clock" onclick="startClock()" />
<input type="button" value="Stop Clock" onclick="stopClock()" />
<script type="text/javascript">
    var intervalId;

    function startClock() {
        intervalId = setInterval(getCurrentDateTime, 1000);
    }

    function stopClock() {
        clearInterval(intervalId);
    }

    function getCurrentDateTime() {
        document.getElementById("timeDiv").innerHTML = new Date();
    }

    getCurrentDateTime();
</script>
```


Now let's look at example of using `setTimeout()` and `clearTimeout()` functions. The syntax and usage of these 2 functions is very similar to `setInterval()` and `clearInterval()`. 

**Countdown timer example :** When we click `"Start Timer"` button, the value 10 displayed in the textbox must start counting down. When click "Stop Timer" the countdown should stop. When you click `"Start Timer"` again, it should start counting down from where it stopped and when it reaches ZERO, it should display done in the textbox and function should return.

## timing events

```html

<input type="text" value="10" id="txtBox" />
<br /><br />
<input type="button" value="Start Timer" onclick="startTimer('txtBox')" />
<input type="button" value="Stop Timer" onclick="stopTimer()" />
<script type="text/javascript">
    var intervalId;

    function startTimer(controlId) 
    {
        var control = document.getElementById(controlId);
        var seconds = control.value;
        seconds = seconds - 1;
        if (seconds == 0) 
        {
            control.value = "Done";
            return;
        }
        else 
        {
            control.value = seconds;
        }

        intervalId = setTimeout(function () { startTimer('txtBox'); }, 1000);
    }

    function stopTimer() 
    {
        clearTimeout(intervalId);
    }
</script>

```
