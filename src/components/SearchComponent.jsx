import React, { useState, useEffect } from "react"
import { FormControl, Input, Button, Box, FormLabel } from "@chakra-ui/react"
import image from "../img/banner-2.jpg"

function SearchComponent(props) {
  const { getSearch, setSearch, getRecipe, query } = props

  const [input, setInput] = useState("")

  //handling change
  const handleChange = (event) => {
    setInput(event.target.value)
  }

  //handlign button click
  const handleClick = (event) => {
    setSearch(input)
  }

  //calling the getRecipe function only when the query changes and setting the input to empty string
  useEffect(() => {
    getRecipe()
    setInput("")
  }, [query])

  return (
    <Box
      bgImage={`url(${image})`}
      bgPosition="center"
      h={300}
      w="100%"
      bgRepeat="no-repeat"
      letterSpacing="widest"
    >
      <form onSubmit={getSearch} m={10}>
        <Box p="4rem">
          <FormLabel textAlign="center" color="white" fontSize={"2xl"} fontWeight="extrabold">
            Find a Recipe
          </FormLabel>
          <FormControl id="recipe" isRequired>
            <Input
              autoComplete="off"
              variant="filled"
              type="text"
              fontWeight="semibold"
              letterSpacing="widest"
              color="white"
              name="recipeName"
              w="80%"
              m={5}
              placeholder="Search by Recipe or by Ingredient..."
              value={input}
              onChange={handleChange}
            />
          </FormControl>
          <Button type="submit" colorScheme="red" bgColor="tomato" onClick={handleClick}>
            SEARCH
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export default SearchComponent
