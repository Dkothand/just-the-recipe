const recipeClasses = ['tasty-recipes', 'wprm-recipe', 'wpurp-container']
let foundRecipe = null


function findRecipeClass(classArray) {
    classArray.forEach((className) => {
        console.log(className)
        let pageSearch = document.getElementsByClassName(className)
        if (pageSearch.length > 0) {
            console.log("Recipe found!", pageSearch)
            foundRecipe = pageSearch[0]
        }
    })
}


function scrollToRecipeElement(recipe) {
    recipe.scrollIntoView({
        behavior: "smooth"
    })
}



function handleMessage(request, sender, sendResponse) {
    if (request.command == "run") {
        sendResponse({farewell: "success"})
    }
    if (foundRecipe) {
        scrollToRecipeElement(foundRecipe)
    } else {
        alert("No recipes found :(")
    }
}


chrome.runtime.onMessage.addListener(handleMessage)

findRecipeClass(recipeClasses)

