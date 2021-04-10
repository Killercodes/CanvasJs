# Javascript
JavaScript is a compact, object-based scripting language for developing client and server Internet applications. Netscape Navigator interprets JavaScript statements embedded in an HTML page, and LiveWire enables you to create server-based applications similar to Common Gateway Interface (CGI) programs.

JavaScript is Netscape's cross-platform, object-based scripting language for client and server applications. There are two types of JavaScript:
Navigator JavaScript, also called client-side JavaScript
LiveWire JavaScript, also called server-side JavaScript
      JavaScript is a language. Client and server JavaScript differ in numerous ways, but they have the following elements in common:
- Keywords, statement syntax, and grammar
- Rules for expressions, variables, and literals
- Underlying object model (although Navigator and LiveWire have different object frameworks)
- Built-in objects and functions

## Where it can be used
```html
<html lang="en">

  <head>
    <title>... replace with your document's title ...</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <script type="text/javascript" src="... insert link to file with your JavaScript code here ..."></script>

    <script type="text/javascript">
      //<!-- Begin to hide script contents from old browsers.
      ... or insert your JavaScript code here ...
      // End the hiding here. -->
    </script>

  </head>

  <body>
    ... replace with your document's content ...

    <script type="text/javascript">
      //<!-- Begin to hide script contents from old browsers.
      ... or insert your JavaScript code here ...
      // End the hiding here. -->
    </script>

    ... replace with your document's content ...

    <input type="button" value="Click Me" onClick="... or insert your JavaScript code here ..." />

    <a href="... any link or sharp ..." onBlur="... or insert your JavaScript code here ...">... replace with your text ...</a>

    ... replace with your document's content ...
  </body>

</html>

```

##  JavaScript Simple Examples

### Hello World!
```js
<html>
  <head></head>
  <body>
    <strong>Example:</strong>
    <script type="text/javascript">
      //<!--
      document.write("Hello World!");
      //-->
    </script>
    <div>All done.</div>
  </body>
</html>
```

