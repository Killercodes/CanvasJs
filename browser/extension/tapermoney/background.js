// Background script
console.log("Tampermonkey-like Extension is running...");

// Listen for messages from the popup page
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.type === "getScripts") {
    // Retrieve user scripts from storage and send them to the popup page
    chrome.storage.local.get("scripts", function (data) {
      sendResponse(data.scripts || []);
    });
    return true;
  } else if (message.type === "saveScript") {
    // Save a user script to storage
    chrome.storage.local.get("scripts", function (data) {
      const scripts = data.scripts || [];
      scripts.push(message.script);
      chrome.storage.local.set({ scripts });
    });
  } else if (message.type === "removeScript") {
    // Remove a user script from storage
    chrome.storage.local.get("scripts", function (data) {
      const scripts = data.scripts || [];
      const index = scripts.findIndex((s) => s.name === message.name);
      if (index !== -1) {
        scripts.splice(index, 1);
        chrome.storage.local.set({ scripts });
      }
    });
  }
});
