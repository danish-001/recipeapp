import React, { useEffect, useState } from 'react';
import Recipe from './Recipe'
import './App.css';

const App = () => {

  const APP_ID = 'c4b71d03'
  const APP_KEY = '9b9dcd12fc2de6ef5a434b65170d5690'

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('') //used for search bar
  const [query, setQuery] = useState('apple') //will run only when hit search

  useEffect(() => { //this function runs everytime when page load
   getRecipes()
  }, [query])
  
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
    const data = await response.json() //once the response comes,will create json out of it
    setRecipes(data.hits)
    console.log(data.hits)
  }

  const updateSearch = (e) => {
     setSearch(e.target.value)
  }

  const getSearch = (e) => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="search..."
        />
        <button className="search-button" type="submit">
          search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
