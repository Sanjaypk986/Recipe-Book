import React from 'react'
const Ingredients = ({Ingredients}) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4'>
      {
        Ingredients.map((ingredient)=>(
            <Ingredient ingredient={ingredient} />
        ))
      }
    </div>
  )
}

export default Ingredients

const Ingredient = (props) => {
  return (
    <div className='flex flex-col items-center gap-2 p-2 border rounded-lg'>
      <div className='relative w-full max-w-[100px] pb-[50%] overflow-hidden rounded'>
        <img 
          className='absolute inset-0 w-full h-full object-cover' 
          src={`https://img.spoonacular.com/ingredients_100x100/${props.ingredient.image}`} 
          alt="ingredient" 
        />
      </div>
      <span className='text-center text-sm md:text-base'>{props.ingredient.name}</span>
    </div>
  )
}

