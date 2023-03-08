declarativeNetRequest
===


declarativeNetRequest.updateDynamicRules() is a method in the Chrome Extensions API that allows extensions to dynamically update the rules used by the Declarative Net Request (DNR) system.

The Declarative Net Request system is a new approach to content blocking that was introduced in Chrome 88. It allows extensions to declare a set of rules in a JSON format that specify which network requests should be blocked or modified based on various criteria such as URL patterns, request types, request headers, etc.

With declarativeNetRequest.updateDynamicRules(), extensions can modify the DNR rules on the fly, without having to reload the entire extension or restart the browser. This can be useful in situations where the extension needs to update its blocking rules in response to changes in the user's behavior or preferences.

Note that this method is only available to extensions that have been granted the "declarativeNetRequest" permission in their manifest file.


The Declarative Net Request system is designed to be a more efficient and performant way for extensions to block or modify network requests. Traditionally, extensions used the webRequest API to intercept and modify network requests, but this approach had some drawbacks, such as increased memory usage and decreased performance.

With the Declarative Net Request system, extensions can declare a set of rules that are applied by the browser at a lower level, before the requests are actually sent. This approach is more efficient and allows the browser to handle a larger number of requests without impacting performance.

The rules used by the Declarative Net Request system are defined in a JSON format and can include various conditions based on the request URL, type, headers, cookies, and other factors. The rules can specify whether a request should be blocked, redirected, or modified in some other way.

Extensions can use the declarativeNetRequest.updateDynamicRules() method to modify the rules dynamically, based on changes in the user's preferences or other factors. This method accepts a JSON object that defines the new rules, and the changes take effect immediately without requiring the extension to reload or restart the browser.

It's worth noting that the Declarative Net Request system is still relatively new and may not be compatible with all extensions that use the webRequest API. However, it is a promising approach that offers better performance and efficiency, and it is likely to become more widely adopted in the future.




To use declarativeNetRequest.updateDynamicRules, you need to have a background script in your Chrome extension that listens for events related to declarativeNetRequest, such as chrome.declarativeNetRequest.onRequest.

Here is an example of how to use declarativeNetRequest.updateDynamicRules to dynamically update the blocking rules for URLs matching a particular pattern:

```js
// Define the blocking rule as an array of match patterns
const blockRule = {
  "id": "1",
  "priority": 1,
  "action": {
    "type": "block"
  },
  "condition": {
    "urlFilter": ["*://*.example.com/*"],
    "resourceTypes": ["main_frame"]
  }
};

// Define a function to update the blocking rules
function updateBlockingRules(newRules) {
  chrome.declarativeNetRequest.updateDynamicRules({
    "addRules": newRules,
    "removeRuleIds": []
  }, () => {
    console.log('Blocking rules updated successfully');
  });
}

// Call the function to add the block rule to the current ruleset
updateBlockingRules([blockRule]);

```


Let's say we have an extension that blocks all network requests to a certain domain, but we want to give the user the ability to temporarily whitelist that domain if they need to access it. We can use declarativeNetRequest.updateDynamicRules() to add or remove a rule that allows requests to the whitelisted domain.

Here's some sample code that demonstrates how this could work:

In this example, we first define a blocking rule as an object with an id, priority, action, and condition field. The condition field specifies the URL filter pattern and the resource types to block.

We then define a function updateBlockingRules that takes an array of rules as input and uses declarativeNetRequest.updateDynamicRules to update the ruleset. The addRules field specifies the new rules to add, and removeRuleIds specifies any rules to remove (which is not used in this example).

Finally, we call the updateBlockingRules function with the block rule as an argument to add it to the current ruleset.

Note that you will need to declare the "declarativeNetRequest" permission in your manifest.json file in order to use the declarativeNetRequest API.

```js
// Add initial blocking rule
chrome.declarativeNetRequest.updateDynamicRules({
  removeRuleIds: [], // No rules to remove
  addRules: [{
    id: 'block-domain',
    priority: 1,
    action: {
      type: 'block',
    },
    condition: {
      urlFilter: 'example.com/*',
    },
  }],
});

// Listen for requests to whitelist domain
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'whitelist-domain') {
    chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: ['block-domain'], // Remove blocking rule
      addRules: [{
        id: 'whitelist-domain',
        priority: 1,
        action: {
          type: 'allow',
        },
        condition: {
          urlFilter: request.domain + '/*', // Whitelist requested domain
        },
      }],
    });
    sendResponse({ message: 'Domain whitelisted.' });
  }
});

// Listen for requests to remove whitelist
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'remove-whitelist') {
    chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: ['whitelist-domain'], // Remove whitelist rule
      addRules: [{
        id: 'block-domain',
        priority: 1,
        action: {
          type: 'block',
        },
        condition: {
          urlFilter: 'example.com/*', // Reapply blocking rule
        },
      }],
    });
    sendResponse({ message: 'Whitelist removed.' });
  }
});


```





In this example, the extension initially blocks all requests to the example.com domain using a rule with the ID block-domain. When the extension receives a message from the user requesting to whitelist a specific domain, it uses declarativeNetRequest.updateDynamicRules() to remove the blocking rule and add a new rule that allows requests to the requested domain. When the user is done with the whitelisted domain, they can request to remove the whitelist, and the extension will remove the whitelist rule and reapply the blocking rule.

Note that this is just a simple example to illustrate the concept of using declarativeNetRequest.updateDynamicRules(). In a real-world extension, you would likely have more complex logic for determining which rules to modify based on user input or other factors.

## Url redirect

You can define multiple rules in the rules array of your Declarative Net Request rule set to handle redirects for multiple domains and paths.

For example, to redirect requests for t.xyz.com/t/img.jpg to i.xyz.com/i/img.jpg, and requests for abc.com to def.com, you could define the following rules in your manifest:

```js
"declarative_net_request": {
  "rulesets": [{
    "id": "example-redirects",
    "rules": [{
      "id": "t-to-i-redirect",
      "action": {
        "type": "redirect",
        "redirect": { "regexSubstitution": "https://i.xyz.com/i$&" }
      },
      "condition": {
        "urlFilter": "https://t.xyz.com/t/*",
        "resourceTypes": ["image"]
      }
    }, {
      "id": "abc-to-def-redirect",
      "action": {
        "type": "redirect",
        "redirect": { "url": "https://def.com/" }
      },
      "condition": {
        "urlFilter": "https://abc.com/*",
        "resourceTypes": ["main_frame"]
      }
    }]
  }]
}
```

In this example, we define two rules - one for redirecting t.xyz.com/t/img.jpg to i.xyz.com/i/img.jpg for the image resource type, and another for redirecting abc.com to def.com for the main_frame resource type.

The regexSubstitution property in the redirect object of the first rule specifies a regular expression that matches the entire URL for the t.xyz.com/t/* pattern and replaces it with https://i.xyz.com/i/. The url property in the redirect object of the second rule simply specifies the new URL to which the request should be redirected.

Note that you can define as many rules as you need to handle different redirect scenarios for different domains and paths.



In the context of the Declarative Net Request API, a resource type refers to the type of resource being requested or loaded by the browser.

There are several different resource types that can be matched by the resourceTypes condition in a Declarative Net Request rule, including:

"main_frame": The main frame of the web page being loaded
"sub_frame": A sub-frame of the web page being loaded
"stylesheet": A CSS stylesheet requested by the web page
"script": A JavaScript file requested by the web page
"image": An image requested by the web page
"font": A font requested by the web page
"media": Audio or video media requested by the web page
"websocket": A WebSocket connection requested by the web page
"xmlhttprequest": An XMLHttpRequest made by the web page
"fetch": A Fetch API request made by the web page
"ping": A beacon request made by the web page
By specifying one or more resource types in the resourceTypes array of a rule's condition, you can limit the scope of the rule to only apply to requests for those types of resources. For example, you might want to redirect only images or JavaScript files, rather than all requests made by the web page.
