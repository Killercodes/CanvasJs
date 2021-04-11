
# window location in JavaScript
The Window.location property returns a Location object that can be used to get information about the current page. Window.location property can also be used to redirect the browser to a new page.

In Part 73 of JavaScript tutorial we discussed how to detect if JavaScript is enabled by using [noscript] element. Another way is by using window.location property. Let us use the example we worked with in Part 73. We will use window.location property along with [noscript] element to detect if JavaScript is enabled.

Add a new HTML page to your project. Name it Default.htm. Copy and paste the following HTML and JavaScript.
```html
<html>
<head>
  <script>
        // If JavaScript is enabled this code redirects the user to HTMLPag1.htm
        // If JavaScript is disable this code will not execute and the user reamains on this
        // page and he gets to the see the message that JavaScript is disabled.
        window.location = "/HTMLPage1.htm";
  </script>
</head>
  <body>
    <h1>It seems that you have disabled JavaScript. Please enable JavaScript.</h1>
  </body>
</html>
```
We don't need to make any modification to HTMLPage1.htm.

At this point
- If you have JavaScript enabled, and if you visit Default.htm page, you will be redirected to HTMLPage1.htm
- If you have JavaScript disabled, and if you visit Default.htm page, you will reamin on Default.htm page and you will get to see the message that says JavaScript is disabled.

window.location property is especially useful if you have 2 sites
1. One for users with JavaScript 
2. Another for users without JavaScript

Make the home-page of Non-JavaScript website the default page. In the default page include the following JavaScript code to redirect the user to the 
```js
JavaScript-EnabledSite.com
window.location = "http://www.JavaScript-EnabledSite.com";
```

If you have JavaScript enabled, you will be redirected to JavaScript enabled website.
If you have JavaScript disabled, you will not be redirected and stay with the website which works without JavaScript.

Some of the useful properties of the location object 
- `window.location.href` - Returns the URL of the current page
- `window.location.hostname` - Returns the domain name
- `window.location.protocol` - Returns the protocol (http or https)
- `window.location.pathname` - Returns the path of the current page

```js
<script type="text/javascript">
    document.write("window.location.href = " + window.location.href + "<br/>");
    document.write("window.location.hostname = " + window.location.hostname + "<br/>");
    document.write("window.location.pathname = " + window.location.pathname + "<br/>");
    document.write("window.location.protocol = " + window.location.protocol + "<br/>");
</script>
```
Output :
```
window.location.href = http://localhost:57695/Default.htm
window.location.hostname = localhost
window.location.pathname = /Default.htm
window.location.protocol = http:
```


