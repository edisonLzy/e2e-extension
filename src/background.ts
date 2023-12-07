
async function getCurrentTab() {
	const queryOptions = { active: true, currentWindow: true };
	const [tab] = await chrome.tabs.query(queryOptions);
	return tab;
}

chrome.commands.onCommand.addListener(function (command) {
  if (command === 'open') {
    getCurrentTab().then(tab => {
        const currentTab =  tab as Required<chrome.tabs.Tab>;
        if(currentTab.url.includes('specs')){
          chrome.tabs.sendMessage(currentTab.id, {request: "open"});
        }
    })
  }
});
