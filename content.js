let recipes = document.getElementsByClassName('tasty-recipes')
let recipe = recipes[0]


function scrollToRecipeElement() {
    recipe.scrollIntoView({
        behavior: "smooth"
    })
}


function handleMessage(request, sender, sendResponse) {
    if (request.command == "run") {
        sendResponse({farewell: "content script response"})
    }
    scrollToRecipeElement()
}


chrome.runtime.onMessage.addListener(handleMessage)