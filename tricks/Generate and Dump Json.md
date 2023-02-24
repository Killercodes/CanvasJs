How to create and download Json file from url
===

In this example, a JSON object is created and populated with data. The JSON.stringify method is used to convert the JSON object to a string. A blob is created with the JSON string and a MIME type of "application/json". A link is then created with the download attribute set to "data.json", which will be the name of the file that is downloaded. The href attribute is set to the URL of the blob, which is created using window.URL.createObjectURL. Finally, the click method is triggered to start the download.

Here's an example of how to create and write a JSON file with JavaScript without using Node.js:
```html
<script>
    function createAndWriteJSON() {
        // Create a JSON object
        var jsonData = {
            "name": "Killercodes",
            "age": 100,
            "city": "Bangalore"
        };
        
        // Convert the JSON object to a string
        var jsonString = JSON.stringify(jsonData);
        
        // Create a blob with the JSON string
        var blob = new Blob([jsonString], {type: "application/json"});
        
        // Create a link to download the JSON file
        var link = document.createElement("a");
        link.download = "data.json";
        link.href = window.URL.createObjectURL(blob);
        
        // Trigger the download
        link.click();
    }
</script>

<button onclick="createAndWriteJSON()">Create and Write JSON</button>
```


When you run this code in a browser and click the "Create and Write JSON" button, it will create a JSON file named "data.json" and download it to your computer.

