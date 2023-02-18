{
  "manifest_version": 2,
  "name": "File Executer",
  "version": "1.0",
  "description": "This extension executes a file against the current webpage.",
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["content_script.js"]
    }
  ],
  "permissions": ["activeTab", "downloads", "<all_urls>"],
  "browser_action": {
    "default_icon": "icon.png",
    "default_title": "File Executer",
    "default_popup": "popup.html"
  }
}
