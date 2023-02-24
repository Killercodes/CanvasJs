Service worker
===

A service worker is a type of web worker that is used to provide advanced functionality to web applications. It is a JavaScript file that runs in the background and can be used to implement features such as offline functionality, push notifications, background syncing, and more.

Service workers act as a proxy between the web application and the network, allowing for powerful caching and other performance optimizations. They are persistent, meaning they can continue to run even after the user closes the web application or navigates away from the page.

Service workers are typically registered by the web application during the page load process and run independently of the main JavaScript execution context, allowing them to perform tasks without blocking the user interface or affecting the performance of the web application.

## Bi-Directional Service Worker

A bi-directional service worker is a type of service worker that allows two-way communication between a web page and the service worker. This means that the web page can send messages to the service worker and receive responses back, and the service worker can also send messages to the web page and receive responses back.

Here's an example of a bi-directional service worker:

**index.html**
```html
<!DOCTYPE html>
<html>
<head>
	<title>Bi-Directional Service Worker Example</title>
</head>
<body>
	<h1>Bi-Directional Service Worker Example</h1>
	<button id="send-to-worker">Send Message to Service Worker</button>
	<p id="response"></p>

	<script>
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('service-worker.js')
			.then((reg) => {
				console.log('Service worker registered!', reg);

				// Send message to service worker
				document.querySelector('#send-to-worker').addEventListener('click', () => {
					navigator.serviceWorker.controller.postMessage('Hello from web page!');
				});
			})
			.catch((err) => {
				console.log('Service worker registration failed:', err);
			});
		}
		else {
			console.log('Service workers are not supported.');
		}

		// Listen for message from service worker
		navigator.serviceWorker.addEventListener('message', (event) => {
			console.log('Message from service worker:', event.data);
			document.querySelector('#response').textContent = event.data;
		});
	</script>
</body>
</html>

```
**service-worker.js**

```js
// Listen for message from web page
self.addEventListener('message', (event) => {
	console.log('Message from web page:', event.data);

	// Send response back to web page
	event.source.postMessage('Hello from service worker!');
});


```
In this example, the web page registers a service worker and sends a message to the service worker when the "Send Message to Service Worker" button is clicked. The service worker listens for the message and sends a response back to the web page. The web page displays the response in the "response" paragraph element. The navigator.serviceWorker object is used to register the service worker and send/receive messages between the web page and service worker.


Apart from bidirectional service workers, there are unidirectional service workers and hybrid service workers.

**Unidirectional service workers**: These service workers are used to handle requests from the client to the server. The client sends a request to the service worker, which then passes it on to the server. Once the server returns the response, the service worker passes it back to the client. These types of service workers are useful for scenarios where the client and server are not tightly coupled, and the client needs to communicate with the server asynchronously.

**Hybrid service workers**: These service workers combine the capabilities of both bidirectional and unidirectional service workers. They can handle requests from the client to the server and vice versa. They are useful for scenarios where the client and server need to communicate with each other frequently and in real-time.


## Unidirectional service workers 
Unidirectional service workers are service workers that are designed to only receive events from their client pages and not send any events back. They are typically used to cache and serve assets for offline use, and are not designed for real-time communication between client and server.

Unidirectional service workers are simpler to implement than bi-directional service workers because they don't require message passing or event listeners to communicate with the client. Instead, they use a simple caching strategy to serve cached assets when the client is offline or the network is slow.

Unidirectional service workers are commonly used in Progressive Web Apps (PWAs) to provide offline support and faster load times for static assets such as HTML, CSS, and JavaScript files. They can also be used to cache API responses and other dynamic data for faster load times and improved performance.

here is a code example of a unidirectional service worker:
```js
// Register the service worker
navigator.serviceWorker.register('sw.js').then(registration => {
  console.log('Service worker registered:', registration);
}).catch(error => {
  console.log('Service worker registration failed:', error);
});

// Send a message to the service worker
navigator.serviceWorker.ready.then(registration => {
  registration.active.postMessage({ action: 'hello' });
});

// Listen for messages from the service worker
navigator.serviceWorker.addEventListener('message', event => {
  console.log('Message received from service worker:', event.data);
});


```
In this example, we register a service worker using navigator.serviceWorker.register() method. Then we send a message to the service worker using navigator.serviceWorker.ready and postMessage() method. Finally, we listen for messages from the service worker using navigator.serviceWorker.addEventListener() method.

> Note that in a unidirectional service worker, the main script can only send messages to the service worker and listen for messages from the service worker, but it cannot directly access the service worker's cache or perform any other operations on it.



## Hybrid service workers

A hybrid service worker is a type of service worker that combines features of both uni-directional and bi-directional service workers. It allows bidirectional communication between the main thread and the service worker, as well as the ability to intercept network requests and cache responses like a traditional service worker.

The main difference between hybrid service workers and traditional service workers is that the former allows for communication between the main thread and the service worker. This can be useful in situations where you need to send data from the main thread to the service worker, or vice versa.

Hybrid service workers can also be used to improve performance by caching frequently used data, such as images or API responses, and serving them from the cache instead of making new network requests each time.



```js
// Register the service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(reg => {
      // If the service worker is not controlling the page yet
      if (!navigator.serviceWorker.controller) {
        // Do something
        console.log('Service worker not controlling the page yet')
      } else {
        // Do something else
        console.log('Service worker is already controlling the page')
      }
    })
    .catch(err => {
      // Handle errors
      console.error('Error registering service worker:', err)
    })
}

// Listen for messages from the service worker
navigator.serviceWorker.addEventListener('message', event => {
  // Do something with the message
  console.log('Message from service worker:', event.data)
})

// Send a message to the service worker
navigator.serviceWorker.controller.postMessage('Hello from the page!')

```
This code registers a service worker and checks whether it is controlling the page or not. It also listens for messages from the service worker and sends a message to it. This is an example of a hybrid service worker because it combines features of both unidirectional and bidirectional service workers.

