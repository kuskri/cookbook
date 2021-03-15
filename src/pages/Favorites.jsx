import React from "react"
import { Text, Box, Flex, Image, Heading, Button, IconButton } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import { AiOutlineDelete } from "react-icons/ai"

function Favorites(props) {
  const { removeFromFavorites, favoriteRecipes } = props

  return (
    <Box minHeight={355}>
      <Heading m={10}>{`My Favorite Recipes`}</Heading>
      <Flex justifyContent="center">
        <Flex flexWrap="wrap" m={5} w="90%">
          {favoriteRecipes !== [] &&
            favoriteRecipes.map((recipe) => {
              return (
                <Box key={uuidv4()} w={200} m={5} boxShadow="md">
                  <Box height={200}>
                    <Image w={180} src={recipe.recipe.image} alt={recipe.recipe.label} m={2} />
                  </Box>
                  <Text fontWeight="extrabold">
                    {recipe.recipe.label.length < 19
                      ? `${recipe.recipe.label}`
                      : `${recipe.recipe.label.substring(0, 20)}...`}
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
                    <IconButton
                      variant="delete"
                      aria-label="remove"
                      icon={<AiOutlineDelete />}
                      onClick={() => {
                        removeFromFavorites(recipe)
                      }}
                    ></IconButton>
                  </Flex>
                </Box>
              )
            })}
        </Flex>
      </Flex>
    </Box>
  )
}

export default Favorites
