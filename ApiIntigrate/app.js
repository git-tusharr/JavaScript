document.getElementById('searchBtn').addEventListener('click', searchRecipes);

function searchRecipes() {
    const query = document.getElementById('searchInput').value.trim();
    const results = document.getElementById('results');
    results.innerHTML = "Loading...";

    // Using TheMealDB free API for this example 
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then(response => response.json())
        .then(data => {
            if (data.meals) {
                results.innerHTML = data.meals.map(meal => `
                    <div class="recipe">
                        <h2>${meal.strMeal}</h2>
                        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                        <p><strong>Category:</strong> ${meal.strCategory} | <strong>Area:</strong> ${meal.strArea}</p>
                        <p><strong>Instructions:</strong> ${meal.strInstructions.substring(0, 150)}...</p>
                        <a href="${meal.strSource || meal.strYoutube}" target="_blank">More Details</a>
                    </div>
                `).join('');
            } else {
                results.innerHTML = "No recipes found.";
            }
        })
        .catch(err => {
            results.innerHTML = "Error fetching recipes.";
            console.error(err);
        });
}