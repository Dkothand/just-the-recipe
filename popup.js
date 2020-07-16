// const recipeClassNames = ['wprm-recipe']
recipeClassNames = false


function runWindowScroll(script) {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.executeScript(tabs[0].id, {code: script})
    })
}


function findRecipeDiv() {
    let script = ""
    if (!recipeClassNames) {
        script = 'alert("Could not find recipe :(");'
    } else {
        script = 'alert("Recipe found!");'
    }
    runWindowScroll(script)
}


function readyButtonListener() {
    let button = document.getElementById('buttonTag')
    button.addEventListener('click', findRecipeDiv)
}
readyButtonListener();
