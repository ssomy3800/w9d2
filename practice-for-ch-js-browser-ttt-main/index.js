//grab the dom elements we need (groceries, grocery-form, recipe-list, recipes)
const groceries = document.querySelector('.groceries')
const groceryForm = document.querySelector('.grocery-form') //CSS selector
const recipeList = document.getElementsByClassName('recipe-list')[0] //just class name string
const recipes = document.querySelector('.recipes')

//create variables to hold localStorage things
const lsItems = JSON.parse(localStorage.getItem('items')) || [];
const lsRecipes = JSON.parse(localStorage.getItem('recipes')) || [];

// // how is this in localStorage? you setItem
// // e.g. in console: 
// localStorage.setItem("Date?", "Tuesday");
// const lsRecipes = JSON.parse(localStorage.setItem('recipes')) || [];

// where is it saved? cookie? Kin: not sure, usu in browser,
// scope today is just what do and how use.

// localStorage can store items across refreshes, provided by DOM.

//---------------PHASE 1 DOM MANIPULATION DEMO-----------------//
//create event handler that adds to our grocery list
const addItem = (e) => {
	// concept: (e) - whatis? e refers to event triggered.
	// eventListener passes an event object into event handler.

	// Block default form submission behavior (HTTP request & page refresh)
	// Grab info from input of new item to add
	// Persist info to localStorage to protect against page refreshes
	// Create an HTML element to be added
	// Add HTML element in its place.

	e.preventDefault();

	let inputEl = document.querySelector("input[name='add-grocery']"); // <input>...
	let value = inputEl.value; // banana

	// This is a simple object with key of 'value' and the actualy value pointing to var 'value' (which points to 'banana')
	const item = { value: value }
	lsItems.push(item);
	localStorage.setItem("items", JSON.stringify(lsItems)); //localStorage needs string format if setting k-v pairs

	updateList();

	// Reset input field to be blank.

	groceryForm.reset();

}

//create action to render grocery list items
const updateList = () => {

	// method 1: using string html element
	// groceries.innerHTML = lsItems.map(item => { //this will rewrite inner HTML each time run.
	// 	return `<li>${item.value}</li>`
	// })
	
	// method 2: using document.createElement
		// using #appendChild
	if(!groceries.hasChildNodes()){ //check if the <ul> already have any child elements under
		// debugger
		lsItems.map(item => {
			let li = document.createElement('li');
			li.innerText = item.value;
			groceries.appendChild(li); //this will add it right under the groceries <ul> element
		})
	} else { //if there are existing child elements, just add one
		// debugger
		let li = document.createElement('li');
		li.innerText = lsItems[lsItems.length - 1].value;
		groceries.appendChild(li);
	}
}

//create event handler to cross out list items on click
const markAsDone = (e) => {
	// e.stopPropagation();
	// let element = e.target; // actual element clicked on, li element
	let element = e.target; // actual element clicked on, li element
	// element.classList.add("done");
	element.classList.toggle("done");  //bit more robust than add/remove
}

//---------------PHASE III FOR WINDOW, LOCATION, HISTORY DEMO-----------------//

//create event handler that adds to our recipes list
const addRecipe = (e) => {

    let recipeText = e.target.innerText;

    lsRecipes.push({ recipeText }); // This will auto { recipeText: recipeText (the var) }
    localStorage.setItem("recipes", JSON.stringify(lsRecipes))

    updateWeeklyRecipe();
}

//create action to render our recipes list
const updateWeeklyRecipe = () => {

    recipes.innerHTML = lsRecipes.map((recipe) => {
        return `
            <a href="" class="recipeText">
                ${recipe.recipeText}
            </a>
            `
    });
        
//ADD AN EVENT LISTENER to set window.location.hash
		recipes.addEventListener('click', (e) => {
			e.preventDefault() //this will prevent the link click from redirecting
			let text = e.target.innerText
			window.location.hash = text.trim() //trim remove any spaces on either side of text
				// url.com/#/spaghetti
		})
}

//---------------------------------------------------------------------//

//add event listener to on submit for form to process add item

groceryForm.addEventListener("submit", addItem); //do NOT invoke here in second arg - pass in only uninvoked callback.
updateList(); 
// above, ensure we update the list with things stored in localStorage even if we refresh page.

//add event listener to cross out a list item
groceries.addEventListener("click", markAsDone); //HOW TO PREVENT ALERT FROM POPPING UP?

//add event listener to to add recipe

recipeList.addEventListener('click', addRecipe);

updateList()
updateWeeklyRecipe()

//call our methods to populate DOM


//--------------------PHASE II EVENT BUBBLIING DEMO---------------------------------//

// THIS IS NO BUENO - slow! memory leak!
// let groc = document.querySelectorAll(".groceries li") //select the li's
// groc.forEach((child) => {
//     child.addEventListener("click", markAsDone);
// })
// const boo = (e) => {
//     alert("Boo from the groceries ul! You didn't expect this, did you?!")
// }

// groceries.addEventListener("click", boo); //parent

//---------------------------------------------------------------------//