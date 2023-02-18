document.getElementById("executeButton").addEventListener("click", function() {
  const fileInput = document.getElementById("fileInput");
  if (fileInput.files.length === 0) {
    console.error("No file selected");
    return;
  }
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = function() {
    const script = reader.result;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(tabs[0].id, {code: script}, function(result) {
        console.log(result);
      });
    });
  };
  reader.readAsText(file);
});
