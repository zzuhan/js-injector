console.log("I am background.js");
chrome.browserAction.onClicked.addListener(function (tab) {
	// 插入页面dom
	// chrome.tabs.executeScript({
 //    	code: 'document.body.style.backgroundColor="red"'
 //  	}); 
 	chrome.tabs.executeScript(null, {file: 'inject-js.js'});
});