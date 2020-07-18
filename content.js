function handleMessage(request, sender, sendResponse) {
    console.log(sender.tab ?
        "from a content script" + sender.tab.url :
        "from the extension")
    if (request.command == "run") {
        sendResponse({farewell: "goodbye"})
    }
}


chrome.runtime.onMessage.addListener(handleMessage)