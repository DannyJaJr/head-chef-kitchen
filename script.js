const searchInput = document.getElementById('searchInput');
const results = document.getElementById('results');
const randomMeal = document.getElementById('randomMeal');

let search ="";

// const fetchSearch = async() => {
//     meals = await fetch(
//         // API to Lookup for meals
//        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
//        .then(res => res.json())
//        .then(res => res.meals)
//        console.log(meals)

    
// }


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
                    <h5>origin: ${meal.strArea}</h5>
                    <h5>Category: ${meal.strCategory}</h5>
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

// for (let i = 0; i < 20; i++) {
//   let ingredients = [`strIngredient${i}`]
//   let arrayMeasurement = [`strMeasure${i}`]
//   if (arrayIngredient) {
//     ingredients.push(ingredientsList)
//       name: arrayIngredient,
//       measurement: arrayMeasurement
//     })
//   }


// }

//   //  function for ingredients and measurement
//   const ingredientsList = async () =>{
//       ingredients.map(index => (
//     <li>{index.name}, {index.measurement}</li>
//   ))
//       }


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
                    <h6>origin: ${meal.strArea}</h6>
                    <h6>Category: ${meal.strCategory}</h6>
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


