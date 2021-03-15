import React from "react"
import { Text, Box, Flex, Image, Button, Heading, IconButton, Spinner } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import { BiHeart } from "react-icons/bi"

function Recipes(props) {
  const {
    randomRecipes,
    addToFavorites,
    removeFromFavorites,
    favoriteRecipes,
    loadingRandom,
  } = props
  const favoriteRecipesURI = favoriteRecipes.map((recipe) => recipe.recipe.uri)
  return (
    <Box>
      <Heading>Delicious Suggestions</Heading>
      <Flex justifyContent="center">
        {loadingRandom && <Spinner />}

        {!loadingRandom && (
          <Flex flexWrap="wrap" m={10} w="90%">
            {randomRecipes !== [] &&
              randomRecipes.map((randomRecipe) => {
                return (
                  <Box key={uuidv4()} w={200} m={5} boxShadow="md" borderRadius="lg">
                    <Box h={200}>
                      <Image
                        w={180}
                        src={randomRecipe.recipe.image}
                        alt={randomRecipe.recipe.label}
                        m={2}
                        borderRadius="lg"
                      />
                    </Box>
                    <Text fontWeight="extrabold">
                      {randomRecipe.recipe.label.length < 18
                        ? `${randomRecipe.recipe.label}`
                        : `${randomRecipe.recipe.label.substring(0, 19)}...`}
                    </Text>
                    <Flex flexDir="row">
                      <Button variant="outline">
                        <Link
                          to={{
                            pathname: `/recipe/${randomRecipe.recipe.label}`,
                            state: { recipe: randomRecipe.recipe },
                          }}
                        >
                          VIEW DETAILS
                        </Link>
                      </Button>
                      {favoriteRecipesURI.includes(randomRecipe.recipe.uri) ? (
                        <IconButton
                          aria-label="favorite"
                          icon={<BiHeart />}
                          onClick={(event) => {
                            event.preventDefault()
                            removeFromFavorites(randomRecipe)
                          }}
                        ></IconButton>
                      ) : (
                        <IconButton
                          variant="outline"
                          aria-label="favorite"
                          icon={<BiHeart />}
                          onClick={(event) => {
                            event.preventDefault()
                            addToFavorites(randomRecipe)
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
