//Call main
main();

let timeout;

//main
function main() {
    init();
    timeout = setInterval(init, 60000);
}

//initialize
function init()
{
    
    //EBlock("www.speedtest.net");
    //EBlock("stackoverflow.com");
    EBlock(document.location.host);
    EBlock("www.geeksforgeeks.org",".login-modal-div");
    EBlock("www.geeksforgeeks.org",".shell");
}

window.eblocker = function()
{
    console.log("eblocker");
}

//element blocker
function EBlock(HOST_NM,ELE_ID = "_")
{
    if(document.location.host == HOST_NM)
    {
        var tmpElement = null;

        if(ELE_ID.substring(0,1 == "#"))
        {
            var ID = ELE_ID.substring(1,ELE_ID.length);
            tmpElement = document.getElementById(ID);
            tmpElement.style = "display:none";
            console.log(Date.now() + ": EBlocker Ran to remove Id " + ID);
        }
        else if(ELE_ID.substring(0,1 == "."))
        {
            var CLS_NM = ELE_ID.substring(1,ELE_ID.length);
            tmpElement = document.getElementsByClassName(CLS_NM);
            for(var i =0;i<tmpElement.length;i++)
            {
               tmpElement[i].style = "display:none"; 
            }

            console.log(Date.now() + ": EBlocker Ran to remove class " + CLS_NM);
        }
        else if(ELE_ID == "_")
        {
            /*
            var iframes = document.getElementsByTagName("IFRAME");
            for(var i =0;i<iframes.length;i++) 
            { 
                iframes[i].style = "display:none"; 
            }
            */
            
            document.querySelectorAll('iframe').forEach(iframe => iframe.remove());

            console.log(Date.now() + ": EBlocker Ran to remove IFrames ");
        }
    }
}
