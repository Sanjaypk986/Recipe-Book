import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <article className="w-full w-64 border border-gray-300 rounded-lg shadow-md overflow-hidden bg-white my-2">
    <Link to={`/recipe/${recipe.id}`} >
    <img
        src={recipe.image}
        alt="recipe"
        className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover"
      />
      <div className="p-4 flex flex-col space-y-2 text-center items-center">
        <h2 className="text-lg font-semibold">{recipe.title}</h2>
        <div className="flex justify-between w-full px-4 py-2 bg-gray-100">
          <span className="flex items-center">
            <FontAwesomeIcon icon={faClock} className="mr-2" /> {recipe.readyInMinutes}
          </span>
          <span className="flex items-center">
            <FontAwesomeIcon icon={faUsers} className="mr-2" />{recipe.servings}
          </span>
        </div>
      </div>
    </Link>
    </article>
  );
};

export default RecipeCard;
