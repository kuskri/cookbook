import React from "react"
import { Text, Box, Flex, Image, Button, Heading, IconButton, Spinner } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import { BiHeart } from "react-icons/bi"

function Recipes(props) {
  const { recipes, query, addToFavorites, favoriteRecipes, removeFromFavorites, loading } = props

  //capitalizing the first letter of the recipe label
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const favoriteRecipesURI = favoriteRecipes.map((recipe) => recipe.recipe.uri)

  return (
    <Box>
      <Heading marginTop={10}>{`${capitalizeFirstLetter(query)} Recipes`}</Heading>
      <Flex justifyContent="center">
        {/* if the results are loading we visualize the spinner */}
        {loading && <Spinner />}
        {/* when finished loading we visualize the recipes */}
        {!loading && (
          <Flex flexWrap="wrap" m={10} w="90%">
            {recipes !== [] &&
              recipes.map((recipe) => {
                return (
                  <Box key={uuidv4()} w={200} m={5} boxShadow="md" borderRadius="lg">
                    <Box height={200}>
                      {recipe.recipe.image.length !== 0 ? (
                        <Image
                          w={180}
                          src={recipe.recipe.image}
                          alt={recipe.recipe.label}
                          m={2}
                          borderRadius="lg"
                        />
                      ) : (
                        <Box boxSize={180} m={2} bgColor="red.200">
                          <Text>recipe.recipe.label</Text>
                        </Box>
                      )}
                    </Box>
                    <Text fontWeight="extrabold">
                      {recipe.recipe.label.length < 18
                        ? `${recipe.recipe.label}`
                        : `${recipe.recipe.label.substring(0, 19)}...`}
                    </Text>
                    <Flex flexDir="row">
                      <Button variant="outline">
                        <Link
                          to={{
                            pathname: `/recipe/${recipe.recipe.label}`,
                            state: { recipe: recipe.recipe },
                          }}
                        >
                          VIEW DETAILS
                        </Link>
                      </Button>
                      {/* conditional rendering of the favorite icon button */}
                      {favoriteRecipesURI.includes(recipe.recipe.uri) ? (
                        <IconButton
                          aria-label="favorite"
                          icon={<BiHeart />}
                          onClick={(event) => {
                            event.preventDefault()
                            removeFromFavorites(recipe)
                          }}
                        ></IconButton>
                      ) : (
                        <IconButton
                          variant="outline"
                          aria-label="favorite"
                          icon={<BiHeart />}
                          onClick={(event) => {
                            event.preventDefault()
                            addToFavorites(recipe)
                          }}
                        ></IconButton>
                      )}
                    </Flex>
                  </Box>
                )
              })}
          </Flex>
        )}
      </Flex>
    </Box>
  )
}

export default Recipes
