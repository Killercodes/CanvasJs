# JavaScript popup window
To open a popup window, use window.open() method. All the parameters are optional.
```js
window.open(URL, name, features, replace)
```
- `URL` - URL of the page to open. If URL is not specified, a new window with `about:blank` is opened
- `name` - Specifies the target attribute or the name of the window. 
- `_blank` - URL is loaded into a new window. This is the default value if not specified.
- `_parent` - URL is loaded into the parent frame
- `_self` - URL replaces the current page
- `_top` - URL replaces any framesets that may be loaded
- `name` - name of the window
- `features` - Must be a comma-separated list. Some of the browsers does not support these features.
- `menubar (yes/no)` - Shows or hides the browser menu
- `toolbar (yes/no)` - Shows or hides the browser navigation bar
- `location (yes/no)` - Shows or hides the address field
- `status (yes/no)` - Shows or hides the status bar
- `resizable (yes/no)` - Whether or not the window is resizable
- `scrollbars (yes/no)` - Whether or not to display scroll bars
- `top(pixels)` - The top position of the window
- `left(pixels)` - The left position of the window
- `height (pixels)` - The height of the new window
- `width (pixels)` - The width of the new window

- `replace` - Specifies whether the URL creates a new entry or replaces the current entry in the browser history. Works only if the url is loaded into the same window.
     - true - URL replaces the current document in the browser history list
     - false - URL creates a new entry in the browser history list

No parameters are passed to window.open() method. Since URL is not specified, a new window with about:blank will be opened.
```html
<input type="button" value="Open popup" onclick="window.open()" />
```
Most modern browsers open new tabs instead of separate windows. If you want to open the popup in a new window, one workaround I have found is to specify the URL, name, and features(height and width) parameters. This may not work in all browsers and it also depends on user's browser preferences.
```html
<input type="button" value="Open popup" onclick="window.open('http://google.com', '_blank', 'height=200,width=200')" />
```

When name parameter is set to _self, the new window replaces the current window
```html
<input type="button" value="Open popup" onclick="window.open('http://google.com', '_self')" />
```

Specify where you want the new popup window to be positioned using top and left features.
```html
<input type="button" value="Open popup" onclick="window.open('http://google.com', 'My Window', 'height=300,width=300, top=400, left=400')" />
```

Disable scrollbars and resizing. Works in IE but not in Chrome.
```html
<input type="button" value="Open popup" onclick="window.open('http://google.com', 'My Window', 'height=300,width=300, scrollbars=no, resizable=no')" />
```

To close pouup use window.close() method.
```html
<input type="button" value="Open popup" onclick="openPopup()" />
<input type="button" value="Close popup" onclick="closePopup()" />
<script type="text/javascript">
    var popup;
    function openPopup() 
    {
        popup = window.open("http://google.com","My Window", "height=300,width=300")
    }

    function closePopup() 
    {
        popup.close();
    }
</script>
```

***
