class Request {
  constructor() {
    this.xhr = new XMLHttpRequest();
  }

  // Performs a GET request with the specified URL and optional headers.
  get(url, headers = {}) {
    return this.sendRequest("GET", url, null, headers);
  }

  // Performs a POST request with the specified URL, data, and optional headers.
  post(url, data, headers = {}) {
    return this.sendRequest("POST", url, data, headers);
  }

  // Performs a PUT request with the specified URL, data, and optional headers.
  put(url, data, headers = {}) {
    return this.sendRequest("PUT", url, data, headers);
  }

  // Performs a PATCH request with the specified URL, data, and optional headers.
  patch(url, data, headers = {}) {
    return this.sendRequest("PATCH", url, data, headers);
  }

  // Performs a DELETE request with the specified URL and optional headers.
  delete(url, headers = {}) {
    return this.sendRequest("DELETE", url, null, headers);
  }

  // Sends an HTTP request with the specified method, URL, data, and headers.
  sendRequest(method, url, data, headers) {
    return new Promise((resolve, reject) => {
      this.xhr.onreadystatechange = () => {
        if (this.xhr.readyState === 4) {
          if (this.xhr.status >= 200 && this.xhr.status < 300) {
            resolve(JSON.parse(this.xhr.responseText));
          } else {
            reject(this.xhr.statusText);
          }
        }
      };

      this.xhr.open(method, url, true);

      for (let header in headers) {
        this.xhr.setRequestHeader(header, headers[header]);
      }

      if (method === "GET" || method === "DELETE") {
        this.xhr.send();
      } else {
        this.xhr.setRequestHeader("Content-Type", "application/json");
        this.xhr.send(JSON.stringify(data));
      }
    });
  }
}
