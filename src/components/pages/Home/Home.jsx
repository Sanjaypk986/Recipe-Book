// src/Home.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  const ApiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    // for Random recipe
    const fetchDataRandom = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/random?apiKey=${ApiKey}&addRecipeInformation=true&number=4`
        );
        const data = response.data.recipes; // Assuming the data you need is in response.data.recipes
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataRandom();
  }, []);

  return (
    <main className="flex justify-center items-center bg-gray-100">
      <section className="container mx-auto">
        <h1 className="text-center text-lg md:text-xl lg:text-2xl font-semibold my-3">
          From Our Kitchen to Yours: A Collection of Delightful Recipes
        </h1>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:gap-6 lg:grid-cols-4 justify-items-center">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
