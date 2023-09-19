import React, {useState} from 'react'
import data from '../data/db.json'
import Ingrd from './Ingrd'
import Instru from './Instru'



function RecipeCard({query, showIngrd, showInstru, handleShowIngrd, handleShowInstru}) {





  // const[ingrd, setIngrd] = useState(true) 

   return (
    
        <div className="contain-all">
         {data.items.filter((item)=>item.name.toLowerCase().includes(query)).map((item) => {
          return (
            <div key={item.id}className="container">
              <h2>{item.name}</h2>
              <img src={item.image} alt="food pictures"/>
              <p>{item.description} </p>


              <button key={item.id} onClick={handleShowIngrd}>Ingredients:</button>
              <div>{
                showIngrd ? <Ingrd ingredients={item.ingredients}/> : null
                }
                </div> 
              
              <button key={item.id} onClick={handleShowInstru}>
                Instruction:
              </button>
              <div>
                  {
                  showInstru ? <Instru instruction={item.instruction} />
                    : null
                  }
              </div>
                
             
            </div>
          )
         })}
        </div>
    
  )
}

export default RecipeCard