
const searchInput = document.getElementById('searchInput');
const results = document.getElementById('results');
const randomMeal = document.getElementById('randomMeal');

let search ="";



const fetchSearch = async(url) => {
    meals = await fetch(
        // API to Lookup for meals
       `https://www.themealdb.com/api/json/v1/1/${url}`)
       .then(res => res.json())
       .then(res => res.meals)
       console.log(meals)

    
}


const searchDisplay = async() => {
    // await fetchSearch();
    await fetchSearch(search);
    
    if (meals == null){
        results.innerHTML = '<span class="noResult">No Result! Try again</span>'
    }

    results.innerHTML = (
        meals.map(meal => (
            `
            <div class="searchContainer">
                <h2>${meal.strMeal}</h2>
                <div class="infos">
                    <h5 class="colorfull">origin: ${meal.strArea}</h5>
                    <h5 class="colorfull">Category: ${meal.strCategory}</h5>
                </div>
                <img src='${meal.strMealThumb}' /></br>
                <a href="${meal.strYoutube}" target="_blank"><i class="fab fa-youtube"></i></a>
            </div>
            `

        )).join('')
    );

};


searchInput.addEventListener('input', (e) => {
    // console.log(e.target.value);
    // search = e.target.value
    search = `search.php?s=${ e.target.value}`
    searchDisplay();

})


// let ingredientsList = [];




// ////random meal API
// //// // www.themealdb.com/api/json/v1/1/random.php
const randomMealDispalay = async () => {
    await fetchSearch('random.php')

    results.innerHTML = (
        meals.map(meal => (
            `
            <div class="searchContainer">
                <h1>${meal.strMeal}</h1>
                <div class="infos">
                    <h4>origin: ${meal.strArea}</h4>
                    <h4>Category: ${meal.strCategory}</h4>
                </div>
                <img src='${meal.strMealThumb}' /></br>
                <h3>${meal.strInstructions}</h3>
                
                <a href="${meal.strYoutube}" target="_blank"><i class="fab fa-youtube"></i></a>
            </div>
            `

        )).join('')
    );


};
randomMeal.addEventListener('click', randomMealDispalay);
randomMealDispalay();