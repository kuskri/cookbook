import "./App.css"
import { Box } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Copyright from "./components/Copyright"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Recipe from "./pages/Recipe"
import ScrollToTop from "./components/ScrollToTop"
import Favorites from "./pages/Favorites"

const APP_ID = "f2f2fe85"
const APP_KEY = "f586f28be41289f5aa3ce324d05c40b7	"

//will fetch the reciper for RandomRecipes component
const url = `https://api.edamam.com/search?q=random&app_id=${APP_ID}&app_key=${APP_KEY}`

//saving to Lacal Storage
const favoriteRecipesFromLocalStorage = JSON.parse(localStorage.getItem("favorites") || "[]")

function App() {
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [loadingRandom, setLoadingRandom] = useState(false)
  const [query, setQuery] = useState("italian")
  const [randomRecipes, setRandomRecipes] = useState([])
  const [favoriteRecipes, setFavoriteRecipes] = useState(favoriteRecipesFromLocalStorage)

  useEffect(() => {
    getRandomRecipes()
  }, [])

  const getRecipe = async () => {
    try {
      setLoading(true)
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      )
      const data = await response.json()
      if (data.hits.length === 0) {
        setError("Your search did not return any Recipes")
      } else {
        setRecipes(data.hits)
        setError("")
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
      setSearch("")
    }
  }

  //handling the submit
  const getSearch = (event) => {
    event.preventDefault()
    setQuery(search)
  }

  //getting the recipes for the RandomRecipes Component
  const getRandomRecipes = async () => {
    try {
      setLoadingRandom(true)
      const response = await fetch(url)
      const data = await response.json()
      setRandomRecipes(data.hits)
    } catch (error) {
      console.log(error)
    } finally {
      setLoadingRandom(false)
    }
  }

  //adding to Favorites array
  const addToFavorites = (recipe) => {
    const alreadyToFavorites = favoriteRecipes.find(
      (prevRecipe) => prevRecipe.recipe.uri === recipe.recipe.uri
    )
    if (favoriteRecipes.length === 0) {
      setFavoriteRecipes([recipe])
    } else if (alreadyToFavorites) {
      setFavoriteRecipes(favoriteRecipes)
    } else {
      setFavoriteRecipes([...favoriteRecipes, recipe])
    }
  }

  //removing from Favorites array
  const removeFromFavorites = (recipe) => {
    const existsInFavorites = favoriteRecipes.find(
      (prevRecipe) => prevRecipe.recipe.uri === recipe.recipe.uri
    )
    if (existsInFavorites) {
      setFavoriteRecipes(
        favoriteRecipes.filter((prevRecipe) => prevRecipe.recipe.uri !== recipe.recipe.uri)
      )
    }
  }

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteRecipes))
  }, [favoriteRecipes])

  return (
    <Router>
      <ScrollToTop />
      <Box className="App">
        <NavBar paddingBottom={10} />
        <Switch>
          <Route exact path="/">
            <Home
              loading={loading}
              error={error}
              recipes={recipes}
              setSearch={setSearch}
              search={search}
              getSearch={getSearch}
              randomRecipes={randomRecipes}
              query={query}
              addToFavorites={addToFavorites}
              favoriteRecipes={favoriteRecipes}
              removeFromFavorites={removeFromFavorites}
              getRecipe={getRecipe}
              query={query}
              loadingRandom={loadingRandom}
            />
          </Route>
          <Route path="/recipe/:name">
            <Recipe />
          </Route>
          <Route path="/favorites">
            <Favorites
              favoriteRecipes={favoriteRecipes}
              removeFromFavorites={removeFromFavorites}
            />
          </Route>
        </Switch>
        <Footer />
        <Copyright />
      </Box>
    </Router>
  )
}

export default App
