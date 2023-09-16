import React from 'react'
import data from '../data/db.json'

function RecipeCard() {
  return (
    <div>
        <div className="container">
         {data.items.map((item) => {
          return (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <img src={item.image}/>
              <p>{item.description}</p>

              <h4>Ingredients:</h4>
              {item.ingredients.map((ingredient, index) => {
                return (
                  <li key={index}>{ingredient}</li>
                )
              })}
            
              <h4>Description:</h4>
              {item.instruction.map((instructn,index) => {
                return(
                  <li key={index}>{instructn}</li>
                )
              })}             

            </div>
          )
         })}
        </div>
    </div>
  )
}

export default RecipeCard