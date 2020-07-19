function messageContentScript() {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {command: "run"}, (response) => {
            console.log(response.farewell);
        });
    });
    // window.close() -- close browser_action popup
}


function readyButtonListener() {
    let button = document.getElementById('buttonTag')
    button.addEventListener('click', messageContentScript)
}
readyButtonListener();
