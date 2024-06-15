import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Ingredients from "../Ingredients";

const RecipeDetails = () => {
  const [recipes, setRecipes] = useState([]);
  const { recipeId } = useParams();
  const ApiKey = "f75ed18627aa405f84684294f84b7f1b";

  useEffect(() => {
    fetchDataDetails();
  }, [recipeId])
  
  const fetchDataDetails = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${ApiKey}`
      );
      const data = response.data; // Assuming the data you need is in response.data.recipes

      setRecipes(data);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <main>
      <section className="container mx-auto my-5">
      <h2 className="text-xl font-semibold mb-2 text-lg md:text-2xl lg:text-3xl mb-6 text-center">
              {recipes.title}
            </h2>
        <div className="grid  gap-4 items-center text-center p-4">
          <div >
            <img
              className="w-full h-80 object-cover mx-auto"
              src={recipes.image}
              alt="recipe image"
            />
          </div>
          <div>
            <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed text-centertext-sm md:text-base lg:text-lg text-gray-700 leading-relaxed text-center bg-gray-100 border border-gray-200 rounded-md p-1" dangerouslySetInnerHTML={{__html:recipes.summary}}>
            </p>
          </div>
        </div>
        {/* ingredients */}
        <div className="my-3">
          <Ingredients Ingredients = {recipes.extendedIngredients || [] } />
          {/* instruction */}
        </div>
    <div className="w-full bg-gray-100">
      <p className="text-center lg:text-left p-3  rounded " dangerouslySetInnerHTML={{__html: recipes.instructions}}>
      </p>
    </div>
      </section>
    </main>
  );
};

export default RecipeDetails;
