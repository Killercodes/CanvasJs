
main();


function main()
{
    console.log("Black White Extension Loaded");
}

function captureEvents()
{
    document.addEventListener("DOMContentLoaded", function() {
        // Run your code here...
    });
}


var all = document.querySelectorAll('*');
all.forEach(e => {
    e.attributes.forEach(a=> {
        console.log(a);
    })
});