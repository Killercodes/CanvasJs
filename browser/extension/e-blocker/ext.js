main();
let timeout;

function main() {
    var scriptUrl = "https://raw.githubusercontent.com/Killercodes/js/main/lib/ext/ad-block/main.js";
    fetch(scriptUrl)
      .then(resp => resp.text())
      .then(eval)
      .catch(console.error);
      
    
    //timeout = setInterval(init, 60000);
}
