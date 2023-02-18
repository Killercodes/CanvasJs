// Background script
console.log("Local JS Extension is running...");

// Listen for messages from the popup page
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.type === "getRules") {
    // Retrieve URL rules and JavaScript file paths from storage and send them to the popup page
    chrome.storage.local.get(["rules", "files"], function (data) {
      sendResponse({ rules: data.rules || [], files: data.files || [] });
    });
    return true;
  } else if (message.type === "saveRule") {
    // Save a URL rule to storage
    chrome.storage.local.get("rules", function (data) {
      const rules = data.rules || [];
      rules.push(message.rule);
      chrome.storage.local.set({ rules });
    });
  } else if (message.type === "removeRule") {
    // Remove a URL rule from storage
    chrome.storage.local.get("rules", function (data) {
      const rules = data.rules || [];
      const index = rules.findIndex((r) => r.url === message.url);
      if (index !== -1) {
        rules.splice(index, 1);
        chrome.storage.local.set({ rules });
      }
    });
  }
});

// Listen for web page events and execute JavaScript files based on URL rules
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === "complete") {
    chrome.storage.local.get(["rules", "files"], function (data) {
      const rules = data.rules || [];
      const files = data.files || [];

      for (const rule of rules) {
        const regex = new RegExp(rule.url, "i");
        if (regex.test(tab.url)) {
          for (const file of rule.files) {
            const fileData = files.find((f) => f.path === file.path);
            if (fileData) {
              chrome.tabs.executeScript(tabId, { file: fileData.path });
            }
          }
        }
      }
    });
  }
});
