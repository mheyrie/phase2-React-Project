import React, {useState} from 'react'
import RecipeCard from '../pages/RecipeCard'




function Recipes() {

  const[query, setQuery] = useState("")
  const[showIngrd, setShowIngrd] =useState(false)
  const[showInstru, setShowInstru]= useState(false)
  

  function handleChange(e){
    setQuery(e.target.value)
  }

  function handleShowIngrd(e){
    setShowIngrd(()=>!showIngrd)
}

function handleShowInstru(e){
    setShowInstru(()=>!showInstru)
}
  
  return (
    <main>
        <form className="recipe-search">
        <input className="search-text" type="text" placeholder="Search Food.." onChange={handleChange} />
        </form>
        <RecipeCard 
        query={query}
        showIngrd={showIngrd}
        showInstru={showInstru}
        handleShowIngrd={handleShowIngrd}
        handleShowInstru={handleShowInstru}

        />
        
    </main>
  )
}

export default Recipes