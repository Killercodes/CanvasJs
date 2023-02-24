Web Workers
===

Web Workers are a type of JavaScript API that allows running scripts in the background without affecting the user interface. They provide a way to run scripts in a separate thread from the main thread of the web application, allowing long-running tasks to execute without freezing the UI. Web Workers operate in a separate global scope, without access to the main thread's scope, allowing for truly parallel execution of JavaScript code.

Web Workers can be used for a variety of tasks, including complex calculations, file processing, network requests, and more. They are commonly used in applications that require significant computation or data processing, such as video editors, games, and scientific simulations. Web Workers are supported in all modern web browsers, including Chrome, Firefox, Safari, and Edge.


There are two types of web workers:

1. **Dedicated Workers**: Dedicated Workers are created using the Worker() constructor and are only accessible from the script that created them. They run in their own thread and can communicate with the main thread through message passing.

2. **Shared Workers**: Shared Workers are created using the new SharedWorker() constructor and can be accessed by multiple scripts from different windows, iframes, or workers. They run in a shared thread and can communicate with any script that has a reference to them through message passing.

## Dedicated Workers
Dedicated Workers, also known as Dedicated Web Workers, are a type of Web Worker that run scripts in the background of a web page. They are completely separate from the main thread of the web page, which means that they can run complex and time-consuming operations without blocking the UI or causing performance issues.

Dedicated Workers are dedicated to a single script and are created using the Worker constructor. Once created, they can communicate with the main thread and other workers using the postMessage method and the message event.

One important thing to note about Dedicated Workers is that they have their own global scope, which means that they do not have access to the DOM or the other resources of the main thread. They can, however, import scripts using the importScripts method.

Dedicated Workers are useful for performing computationally expensive tasks such as image manipulation, data processing, and encryption. By running these tasks in the background, they allow the main thread to continue to handle user interactions and update the UI without interruption.

### One Way
here is an example of one-way communication using dedicated web worker in JavaScript:

index.html
```html
<!DOCTYPE html>
<html>
<head>
	<title>One-Way Communication Example</title>
</head>
<body>
	<h1>One-Way Communication Example</h1>
	<button id="startWorker">Start Worker</button>
	<button id="stopWorker">Stop Worker</button>
	<div id="output"></div>

	<script>
		let worker;

		document.getElementById("startWorker").addEventListener("click", () => {
			// Create a new worker
			worker = new Worker("worker.js");

			// When the worker posts a message, display it in the output div
			worker.onmessage = (event) => {
				document.getElementById("output").textContent = event.data;
			};
		});

		document.getElementById("stopWorker").addEventListener("click", () => {
			// Terminate the worker
			worker.terminate();
			document.getElementById("output").textContent = "Worker stopped";
		});
	</script>
</body>
</html>

```
worker.js
```js
// Post a message to the parent window every second
setInterval(() => {
    postMessage("Hello from worker");
}, 1000);

```

In this example, we have an HTML file with two buttons, "Start Worker" and "Stop Worker", and an output div. When the "Start Worker" button is clicked, we create a new dedicated web worker using the Worker constructor, passing the URL of the worker script as an argument. We then listen for messages from the worker using the onmessage event handler, and update the output div with the message received. When the "Stop Worker" button is clicked, we terminate the worker using the terminate method.

The worker script simply posts a message to the parent window every second using the postMessage method. The parent window listens for these messages using the onmessage event handler and updates the output div with the message received.

This is an example of one-way communication because the worker is only sending messages to the parent window, and the parent window is only listening for messages from the worker.
It's important to note that the postMessage() method sends a copy of the data to the receiving end, not a reference to the original data object. Therefore, any changes made to the data object in the receiving end will not affect the original object in the sending end.



## Two Way
And Yes, dedicated web workers do support two-way communication between the web worker and the main thread. The communication is done using the postMessage() method and the onmessage event handler. The main thread can send data to the web worker using the postMessage() method, and the web worker can respond by sending data back to the main thread using the same method.

here is an example of two-way communication with a Dedicated Web Worker:

index.html file:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Dedicated Web Worker</title>
  </head>
  <body>
    <input type="text" id="input">
    <button id="send">Send Message to Worker</button>
    <p id="output"></p>
    <script>
      const worker = new Worker('worker.js');
      const input = document.getElementById('input');
      const output = document.getElementById('output');
      const sendButton = document.getElementById('send');

      // Send a message to the worker when the button is clicked
      sendButton.addEventListener('click', () => {
        worker.postMessage(input.value);
      });

      // Receive messages from the worker and display them
      worker.addEventListener('message', (event) => {
        output.textContent = event.data;
      });
    </script>
  </body>
</html>

```

worker.js file:
```js
// Receive messages from the main thread and send responses back
self.addEventListener('message', (event) => {
  const message = event.data;
  const response = `Worker received message: ${message}`;

  self.postMessage(response);
});


```
In this example, we create a Dedicated Web Worker in worker.js. The worker listens for messages from the main thread using the addEventListener method. When it receives a message, it constructs a response and sends it back to the main thread using the postMessage method.

In index.html, we create a new instance of the worker using the Worker constructor. We add an event listener to the button to send a message to the worker when clicked, and we add another event listener to receive messages from the worker and update the UI accordingly.

## Shared Workers

Shared Web Workers are a type of web worker in JavaScript that allow multiple scripts running in different browsing contexts (such as different tabs) to share a single thread. This type of web worker enables data and resources to be shared across multiple scripts.

Unlike Dedicated Web Workers, Shared Web Workers are not dedicated to a single script and can be used by multiple scripts at the same time. Additionally, Shared Web Workers can communicate bi-directionally with multiple scripts, meaning they can send and receive messages to and from multiple browsing contexts.

To create a Shared Web Worker, you can use the SharedWorker constructor, which takes a URL as its argument, just like Worker. The URL points to a script file that contains the code for the Shared Web Worker.

Here's an example of a simple Shared Web Worker that communicates bi-directionally with multiple scripts:

### One Way 
Shared Web Worker script: sharedWorker.js
```js
let clients = [];

onconnect = function(e) {
  const port = e.ports[0];
  clients.push(port);
  
  port.addEventListener('message', function(e) {
    console.log('Message received by Shared Web Worker:', e.data);
    clients.forEach(function(client) {
      client.postMessage('Message sent from Shared Web Worker');
    });
  });
  
  port.start();
};

```
In this example, the onconnect event handler is triggered when a browsing context establishes a connection with the Shared Web Worker. The event contains a reference to a MessagePort object, which is used to communicate with the browsing context that initiated the connection.

When a message is received by the Shared Web Worker, it logs the message to the console and sends a response message to all connected browsing contexts by iterating over the clients array of MessagePort objects.

To use this Shared Web Worker in your script, you can create a new SharedWorker instance and communicate with it using the postMessage method:

```js
const sharedWorker = new SharedWorker('sharedWorker.js');

sharedWorker.port.addEventListener('message', function(e) {
  console.log('Message received from Shared Web Worker:', e.data);
});

sharedWorker.port.start();

sharedWorker.port.postMessage('Message sent to Shared Web Worker');

```
In this example, the script creates a new SharedWorker instance and adds an event listener to receive messages from the Shared Web Worker. It also starts the MessagePort object and sends a message to the Shared Web Worker using the postMessage method. The Shared Web Worker responds with a message that is logged to the console by the event listener.


### Two Way
Shared web workers support two-way communication. Multiple scripts can communicate with the same shared worker instance, and the worker can communicate with all connected scripts.

Here's an example of a shared web worker that allows for two-way communication between the main thread and the worker:

index.html
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Shared Web Worker Example</title>
    <script>
      const worker = new SharedWorker('worker.js');

      // Message event listener for messages received from the worker
      worker.port.onmessage = event => {
        console.log(`Received message from worker: ${event.data}`);
      };

      // Send a message to the worker
      worker.port.postMessage('Hello from the main thread!');
    </script>
  </head>
  <body>
    <h1>Shared Web Worker Example</h1>
  </body>
</html>

```

worker.js
```js
// Create a shared worker and get its port
const sharedWorker = self.SharedWorkerGlobalScope;
const port = sharedWorker ? sharedWorker.port : self;

// Message event listener for messages received from the main thread
port.onmessage = event => {
  console.log(`Received message from main thread: ${event.data}`);
  
  // Send a message back to the main thread
  port.postMessage('Hello from the worker!');
};

```

In this example, the main thread creates a new SharedWorker instance and sends a message to it using the postMessage method. The worker script listens for messages using the onmessage event listener, and responds to messages by sending a message back to the main thread using the postMessage method. Both the main thread and the worker have access to the same port object, which allows for two-way communication.













