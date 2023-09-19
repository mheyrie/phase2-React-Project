import React from 'react'


function Ingrd({ingredients}) {
  return (
    <div>
        {ingredients.map((ingredient, index) => {
                return (
                  <li key={index}>{ingredient}</li>
                )
              })}
    </div>
  )
}

export default Ingrd