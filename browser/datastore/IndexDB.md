IndexDB
====
IndexedDB is a client-side database technology for web applications, which allows you to store and retrieve large amounts of structured data, such as JSON objects, in a browser environment. It is an alternative to using cookies or local storage in web applications, with a few distinct advantages:

- Capacity: IndexedDB can store much larger amounts of data than cookies or local storage, typically up to hundreds of megabytes or more, depending on the browser implementation.

- Structured data: IndexedDB provides a more structured approach to data storage, allowing you to store complex data types such as objects and arrays.

- Indexed: IndexedDB allows you to create indexes on data fields, enabling efficient querying and sorting of large data sets.

- Asynchronous: IndexedDB uses asynchronous API calls, which means that data operations are non-blocking and do not affect the performance of the main thread.

To perform CRUD operations on IndexedDB, you would typically use the following API methods:

- `open()`: Open a connection to the database.

- `createObjectStore()`: Create a new object store, which is like a table in a traditional database.

- `add()`: Add a new object to an object store.

- `get()`: Retrieve an object from an object store.

- `put()`: Update an object in an object store.

- `delete()`: Delete an object from an object store.

- `clear()`: Delete all objects from an object store.

- `getAll()`: Retrieve all objects from an object store.

- `getAllKeys()`: Retrieve all keys from an object store.

These methods are available on the IndexedDB global object, which you can access in JavaScript using the window.indexedDB property.

Here's an example of a JavaScript library for performing CRUD operations on an IndexedDB database:

```js
const DB_NAME = "myDatabase";
const DB_VERSION = 1;
const DB_STORE_NAME = "myStore";

class IndexedDB {
  constructor() {
    this.db = null;
  }

  async open() {
    return new Promise((resolve, reject) => {
      const request = window.indexedDB.open(DB_NAME, DB_VERSION);

      request.onerror = () => {
        reject(request.error);
      };

      request.onsuccess = () => {
        this.db = request.result;
        resolve(this.db);
      };

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        const store = db.createObjectStore(DB_STORE_NAME, { keyPath: "id", autoIncrement: true });
      };
    });
  }

  async close() {
    return new Promise((resolve, reject) => {
      if (this.db) {
        this.db.close();
        this.db = null;
        resolve();
      } else {
        reject(new Error("Database is not open"));
      }
    });
  }

  async add(record) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([DB_STORE_NAME], "readwrite");
      const store = transaction.objectStore(DB_STORE_NAME);

      const request = store.add(record);

      request.onsuccess = () => {
        resolve(request.result);
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  }

  async update(record) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([DB_STORE_NAME], "readwrite");
      const store = transaction.objectStore(DB_STORE_NAME);

      const request = store.put(record);

      request.onsuccess = () => {
        resolve(request.result);
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  }

  async delete(id) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([DB_STORE_NAME], "readwrite");
      const store = transaction.objectStore(DB_STORE_NAME);

      const request = store.delete(id);

      request.onsuccess = () => {
        resolve();
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  }

  async get(id) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([DB_STORE_NAME], "readonly");
      const store = transaction.objectStore(DB_STORE_NAME);

      const request = store.get(id);

      request.onsuccess = () => {
        resolve(request.result);
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  }

  async getAll() {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([DB_STORE_NAME], "readonly");
      const store = transaction.objectStore(DB_STORE_NAME);

      const request = store.getAll();

      request.onsuccess = () => {
        resolve(request.result);
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  }
}


```
This is a basic example, but you can modify and extend it to meet your specific requirements. The example defines a class IndexedDB that encapsulates the common CRUD operations for an IndexedDB database. You can use it like this:


```js
// Create a new database with name 'myDB'
var myDB = new IndexDB('myDB');

// Open the database
myDB.open();

// Define a new object store named 'users'
myDB.createObjectStore('users', { keyPath: 'id' });

// Add a new user to the 'users' object store
myDB.add('users', { id: 1, name: 'John Doe', email: 'johndoe@example.com' });

// Retrieve a user with id 1 from the 'users' object store
myDB.get('users', 1).then(function(user) {
  console.log(user);
});

// Update the user with id 1 in the 'users' object store
myDB.update('users', { id: 1, name: 'Jane Doe', email: 'janedoe@example.com' });

// Delete the user with id 1 from the 'users' object store
myDB.delete('users', 1);

// Retrieve all users from the 'users' object store
myDB.getAll('users').then(function(users) {
  console.log(users);
});

// Close the database
myDB.close();

```
In the example above, we first create a new instance of the IndexDB class and open the database with myDB.open(). We then define a new object store named 'users' using the myDB.createObjectStore() method.

We then add a new user to the 'users' object store with myDB.add(), retrieve the user with id 1 from the 'users' object store with myDB.get(), update the user with id 1 in the 'users' object store with myDB.update(), and delete the user with id 1 from the 'users' object store with myDB.delete().

Finally, we retrieve all users from the 'users' object store with myDB.getAll() and close the database with myDB.close().

