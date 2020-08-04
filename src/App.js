import React,{useEffect, useState} from 'react';
import './App.css';

function App() {

  const APP_ID = 'c4b71d03'
  const APP_KEY = '9b9dcd12fc2de6ef5a434b65170d5690'

  const [recipes, setRecipes] = useState([])

  useEffect(() => { //this function runs everytime when page load
   getRecipes()
  }, [])
  
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
    const data = await response.json() //once the response comes,will create json out of it
    setRecipes(data.hits)
  }

  return (
    <div className="App">
      <form className="search-form">
        <div>
          <input className="search-bar" type="text" />
          <button className="search-button" type="submit">
            search
          </button>
        </div>
      </form>
    </div>
  )
}

export default App;
