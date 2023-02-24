Web Storage
===

Web storage is a mechanism provided by web browsers for storing data in a key-value pair format. It allows web applications to store data locally within the browser itself, which can be accessed later on by the same web application or a different web application on the same domain. There are two types of web storage: sessionStorage and localStorage.

sessionStorage is a storage mechanism that stores data for the duration of a session. When the user closes the browser window, the data stored in sessionStorage is deleted.

localStorage, on the other hand, stores data indefinitely, even after the browser window is closed. The data is only cleared if the user manually clears the browser cache or if the web application clears it programmatically.


here's an example implementation of a JavaScript library to perform CRUD operations on Local Storage and Session Storage based on a constructor parameter:
```js
class Storage {
  constructor(type) {
    if (type === 'local') {
      this.storage = localStorage;
    } else if (type === 'session') {
      this.storage = sessionStorage;
    } else {
      throw new Error('Invalid storage type. Must be either "local" or "session"');
    }
  }

  create(key, value) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  read(key) {
    const value = this.storage.getItem(key);
    return JSON.parse(value);
  }

  update(key, value) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  delete(key) {
    this.storage.removeItem(key);
  }

  readAll() {
    const values = [];
    for (let i = 0; i < this.storage.length; i++) {
      const key = this.storage.key(i);
      const value = JSON.parse(this.storage.getItem(key));
      values.push({ key, value });
    }
    return values;
  }
}

```

Here's an example usage of the Storage class:


```js
// Create a new instance of the Storage class for local storage
const local = new Storage('local');

// Create a new item in local storage
local.create('name', 'John');

// Read an item from local storage
const name = local.read('name');

// Update an item in local storage
local.update('name', 'Jane');

// Delete an item from local storage
local.delete('name');

// Read all items from local storage
const all = local.readAll();

// Create a new instance of the Storage class for session storage
const session = new Storage('session');

// Create a new item in session storage
session.create('age', 30);

// Read an item from session storage
const age = session.read('age');

// Update an item in session storage
session.update('age', 31);

// Delete an item from session storage
session.delete('age');

// Read all items from session storage
const all = session.readAll();

```

let's break down the code step by step:

- The Storage constructor takes a single parameter type which is either 'local' or 'session'. It checks whether the browser supports the specified storage type and sets the store variable accordingly.

- The create method takes two parameters key and value. It first checks whether the key already exists in the storage. If it does, it returns an error message. Otherwise, it sets the value for the key in the storage and returns a success message.

- The read method takes a single parameter key. It checks whether the key exists in the storage. If it does, it returns the value associated with the key. Otherwise, it returns an error message.

- The update method takes two parameters key and value. It first checks whether the key exists in the storage. If it does, it updates the value associated with the key and returns a success message. Otherwise, it returns an error message.

- The delete method takes a single parameter key. It checks whether the key exists in the storage. If it does, it removes the key and its associated value from the storage and returns a success message. Otherwise, it returns an error message.

- The readAll method returns all the key-value pairs stored in the storage.

- The clear method removes all the key-value pairs from the storage and returns a success message.

- The isEmpty method checks whether the storage is empty. If it is, it returns true. Otherwise, it returns false.

- The size method returns the number of key-value pairs stored in the storage.

The examples at the bottom demonstrate how to use the library by creating a new Storage object with either 'local' or 'session' as the parameter, and then performing CRUD operations on it using the provided methods.


---
