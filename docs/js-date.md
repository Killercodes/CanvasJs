# Working with `Date()` in javascript

- [Working with `Date()` in javascript](#working-with-date-in-javascript)
  - [`getFullYear()`](#getfullyear)
  - [`getMonth()`](#getmonth)
  - [`getDate()`](#getdate)
  - [`getDay()`](#getday)
***


To create date object in JavaScript use `Date()` constructor

The following example writes the current Date and Time to the web page
```js
document.write(new Date());
```

If the `Date()` constructor is used without any arguments, it returns the current date and time. To create a date object with specific dates there are 2 ways.

Creating a specific date object in JavaScript using a date string
```js
var dateOfBirth = new Date("January 13, 1980 11:20:00");
document.write(dateOfBirth);
```

You can also create a specific date object using number for year, month, day, hours, minutes, seconds, & milliseconds. The syntax is shown below.
```js
var dateOfBirth = new Date(year, month, day, hours, minutes, seconds, milliseconds);
```
**Example :**
```js
var dateOfBirth = new Date(1980, 0, 13, 11, 20, 0, 0);
document.write(dateOfBirth);
```
> **Please note :** In JavaScript month numbers start from ZERO. So if you want the month of march then use 2 instead of 3.

The above code produces the following output on my machine, because I have (UTC) Dublin, Edinburgh, Lisbon, London time zone selected on my machine
```
Sun Jan 13 1980 11:20:00 GMT+0000 (GMT Standard Time) 
```
If you have a different time zone selected on your computer, you may get a slightly different result. For example if you have (UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi time zone selected, the result will be as shown below
```
Sun Jan 13 1980 11:20:00 GMT+0530 (India Standard Time)
```

Some useful Date object methods in JavaScript

## `getFullYear()`
> Returns the full year (all the four digits)


**Example :** The following example returns 1980
```js
var year = new Date(1980, 0, 13, 11, 20, 0, 0).getFullYear();
document.write(year);
```

## `getMonth()` 
> Returns the month number (from 0-11)

**Example :** The following example returns 0 (for January)
```js
var month = new Date(1980, 0, 13, 11, 20, 0, 0).getMonth();
document.write(month);
```

You can use the following code to get the month name from the month number in Javascript. The following example returns January.
```js
function getMonthNameFromNumber(monthNumber) 
{
    var monthNames = ["January", "February", "March", "April",
                        "May", "June", "July", "August", "September", 
                        "October", "November", "December"];
    return monthNames[monthNumber];
}

var monthName = getMonthNameFromNumber(new Date(1980, 0, 13, 11, 20, 0, 0).getMonth());
document.write(monthName);
```
## `getDate()` 
> Returns the day of the month (from 1-31)

**Example :** The following example returns 13
```js
var dayOfMonth = new Date(1980, 0, 13, 11, 20, 0, 0).getDate();
document.write(dayOfMonth);
```
## `getDay()` 
> Returns the day number of the week (from 0-6). 0 is sunday, 1 is monday and so on.

**Example :** The following example returns 0
```js
var dayOfWeek = new Date(1980, 0, 13, 11, 20, 0, 0).getDay();
document.write(dayOfWeek);
```

You can use the following code to get the day of the week from the day number in Javascript. The following example returns Sunday.
```js
function getWeekDayNameFromNumber(dayNumber) 
{
    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekDays[dayNumber];
}

var weekdayName = getWeekDayNameFromNumber(new Date(1980, 0, 13, 11, 20, 0, 0).getDay());
document.write(weekdayName);
```

You also have the following methods that return the time parts of the date object
- **getHours()** - Returns the hour (from 0-23)
- **getMinutes()** - Returns the minutes (from 0-59)
- **getSeconds()** - Returns the seconds (from 0-59)
- **getMilliseconds()** - Returns the milliseconds (from 0-999)

How to convert date in javascript to `dd/mm/yyyy` format
```js
function formatDate(date) 
{
    var day = date.getDate();
    if (day [ 10) 
    {
        day = "0" + day;
    }

    var month = date.getMonth() + 1;
    if (month [ 10) 
    {
        month = "0" + month;
    }

    var year = date.getFullYear();

    return day + "/" + month + "/" + year;
}

document.write(formatDate(new Date()));
```

If you don't want ZERO (0) before a single digit month or day number, then modify the formatDate() function as shown below.
```js
function formatDate(date) 
{
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    return day + "/" + month + "/" + year;
}

document.write(formatDate(new Date()));
```
