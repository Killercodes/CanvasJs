// Popup script
const rulesList = document.getElementById("rules-list");
const addRuleForm = document.getElementById("add-rule-form");
const addRuleUrlInput = document.getElementById("add-rule-url");
const addRuleFileInput = document.getElementById("add-rule-file");
const saveRuleButton = document.getElementById("save-rule-button");

// Send a message to the background script to retrieve URL rules and JavaScript file paths
chrome.runtime.sendMessage({ type: "getRules" }, function (response) {
  for (const rule of response.rules) {
    addRuleToList(rule);
  }
});

// Add a new rule to the list
function addRuleToList(rule) {
  const listItem = document.createElement("li");
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.onclick = function () {
    listItem.remove();
    chrome.runtime.sendMessage({ type: "removeRule", url: rule.url });
  };
  listItem.innerText = `${rule.url}: ${rule.files.map((f) => f.name).join(", ")}`;
  listItem.appendChild(deleteButton);
  rulesList.appendChild(listItem);
}

// Handle form submission to add a new rule
addRuleForm.onsubmit = function (event) {
  event.preventDefault();
  const url = addRuleUrlInput.value;
  const file = addRuleFileInput.files[0];
  if (url && file) {
    // Add the rule to the list and send a message to the background script to save it
    const rule = { url, files: [{ name: file.name, path: file.path }] };
    addRuleToList(rule);
    chrome.runtime.sendMessage({ type: "saveRule", rule });
  }
  addRuleUrlInput.value = "";
  addRuleFileInput.value = "";
};

// Disable the "Save" button until both the URL and file inputs have values
function updateSaveButtonState() {
  saveRuleButton.disabled = !addRuleUrlInput.value || !addRuleFileInput.files[0];
}
addRuleUrlInput.oninput = updateSaveButtonState;
addRuleFileInput.onchange = updateSaveButtonState;
