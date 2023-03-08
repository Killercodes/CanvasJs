// List of blocked domains
var blockedDomains = //["adserver.com", "adnetwork.net", "*.example.com"];
[
	"*://*.doubleclick.net/*",
	"*://*.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.moat.com/*",
	"*://*.taboola.com/*",
	"*://*.pubmine.com/*",
	"*://*.adroll.com/*"
];


blockedDomains.forEach((domain, index) => {
    let id = index + 1;

    chrome.declarativeNetRequest.updateDynamicRules(
       {addRules:[{
          "id": id,
          "priority": 1,
          "action": { "type": "block" },
          "condition": {"urlFilter": domain, "resourceTypes": ["main_frame"] }}
         ],
         removeRuleIds: [id]
       },
    )
})

