import React from "react"
import { Box, Text } from "@chakra-ui/react"
import SearchComponent from "../components/SearchComponent"
import Recipes from "../components/Recipes"
import RandomRecipes from "../components/RandomRecipes"

function Home(props) {
  const {
    loading,
    recipes,
    setSearch,
    error,
    search,
    getSearch,
    randomRecipes,
    query,
    getRecipe,
    addToFavorites,
    favoriteRecipes,
    removeFromFavorites,
    loadingRandom,
  } = props
  return (
    <Box minHeight="20rem">
      <SearchComponent
        search={search}
        setSearch={setSearch}
        getSearch={getSearch}
        getRecipe={getRecipe}
        query={query}
      />
      {error ? (
        <Text m="5rem" color="red.300" fontWeight="bolder" fontSize="2xl">
          {error}
        </Text>
      ) : (
        <Recipes
          loading={loading}
          recipes={recipes}
          query={query}
          addToFavorites={addToFavorites}
          favoriteRecipes={favoriteRecipes}
          removeFromFavorites={removeFromFavorites}
        />
      )}
      <RandomRecipes
        loadingRandom={loadingRandom}
        randomRecipes={randomRecipes}
        addToFavorites={addToFavorites}
        favoriteRecipes={favoriteRecipes}
        removeFromFavorites={removeFromFavorites}
      />
    </Box>
  )
}

export default Home
