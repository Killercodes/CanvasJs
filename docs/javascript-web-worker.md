# Web worker

Define **web_worker.js** as 

```js
var i=0;

function timedCount() {
    i=i+1;
    postMessage(i);
    setTimeout("timedCount()", 500);
}

timedCount();
```

then Call it form page as 
```js
var w;

function startWorker() {
  if(typeof(Worker) !== "undefined") {
    if(typeof(w) == "undefined") {
      w = new Worker("web_workers.js");
    }
    w.onmessage = function(event) {
      document.getElementById("result").innerHTML = event.data;
    };
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
  }
}

function stopWorker() { 
  w.terminate();
  w = undefined;
}
```
