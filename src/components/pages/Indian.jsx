import React, { useEffect, useState } from 'react'
import RecipeCard from './Home/RecipeCard'
import axios from 'axios';

const Indian = () => {
    const [recipes, setRecipes] = useState([]);
    const ApiKey = import.meta.env.VITE_API_KEY;
    useEffect(() => {
        // for Random recipe
        const fetchDataIndian = async () => {
          try {
            const response = await axios.get(
              `https://api.spoonacular.com/recipes/complexSearch?apiKey=${ApiKey}&cuisine=indian&addRecipeInformation=true&number=1`
            );
            const data = response.data.results; // Assuming the data you need is in response.data.recipes
            setRecipes(data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchDataIndian();
      }, []);

  return (
    <main className="flex justify-center items-center bg-gray-100">
    <section className="container mx-auto">
      <h1 className="text-center text-lg md:text-xl lg:text-2xl font-semibold my-3">
        From Our Kitchen to Yours: A Collection of Indian Recipes
      </h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:gap-6 lg:grid-cols-4 justify-items-center">
        {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
      </div>
    </section>
  </main>
  )
}

export default Indian
