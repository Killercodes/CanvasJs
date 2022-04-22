
//NOADS - is a ad blocker by (c)killercodes.github.io
(async () => {
  var dummyCallback = function (details) {
    //console.log(details)
    return {
      cancel: true
    };
  };

  var jsonArray = await fetch("https://raw.githubusercontent.com/Killercodes/js/main/lib/ext/req-block/list.json");
  var list = await jsonArray.json();
  var blockedUrls = {
    urls: list
  };

  //Add Listener
  chrome.webRequest.onBeforeRequest.addListener(dummyCallback,blockedUrls,["blocking"]);
})();
