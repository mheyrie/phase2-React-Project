import React from 'react'

function RecipesSearchBar() {
  return (
    <form className="recipe-search">
        <input className="search-text" type="text"/>
        <button className="search-btn" type="submit">Search</button>
    </form>
    
  )
}

export default RecipesSearchBar