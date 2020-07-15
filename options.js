let page = document.getElementById('buttonTag');
const recipeClassNames = ['wprm-recipe']

function runFunction() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {code: 'alert("Hello World!");'})
    })
}
function findRecipeDiv() {
    let button = page
    button.addEventListener('click', runFunction)
}
findRecipeDiv();
