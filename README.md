# head-chef-kitchen



<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>




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
                    <h class="colorfull">origin: ${meal.strArea}</h5>
                    <h5 class="colorfull">Category: ${meal.strCategory}</h5>
                </div>
                <a href="${meal.strYoutube}" <img src='${meal.strMealThumb}'  /></br>
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
            <div class="container mt-5 text-center  border border-dark">
            <div class=class="col-12 col-md-6 col-lg-3 col-xl-3">
           




            <div class="searchContainer">
                <h1>${meal.strMeal}</h1>
                <div class="infos">
                    <h2>origin: ${meal.strArea}</h2>
                    <h2>Category: ${meal.strCategory}</h2>
                </div>
                <img class="card-img-top"  src='${meal.strMealThumb}'   class="card-img-top"   alt="logo load image" />
                </br>
                <div class="card-body">
                <p  class="card-text">${meal.strInstructions}</p>
                
                <a href="${meal.strYoutube}"  class="btn btn-primary  target="_blank"><i class="fab fa-youtube"></i></a>
                 </div>
            </div>


            </div>


            

          </div>



          

            






           
            `

        )).join('')
    );


};
randomMeal.addEventListener('click', randomMealDispalay);
randomMealDispalay();


