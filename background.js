chrome.browserAction.onClicked.addListener(function(tab) {
  /*console.log('Turning ' + tab.url + ' red!');
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="red"'
  });*/

//attempting to load other scripts
    chrome.tabs.executeScript(null, {file: "tooltip-master/dist/css/js/tooltipster.core.js"});


chrome.tabs.executeScript(null, {file: "script.js"});

    console.log("maybe background is working");
  });




/*hrome.browserAction.onClicked.addListener(function(tab) {
	var active = false;
  //this looks good I don't know why its not  working
  chrome.runtime.sendMessage({active: true});

});
"content_scripts": [
	{
		*/
