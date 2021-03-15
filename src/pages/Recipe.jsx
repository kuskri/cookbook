import React from "react"
import {
  Text,
  Box,
  Flex,
  Image,
  Heading,
  Link,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react"
import { useLocation } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import { ExternalLinkIcon } from "@chakra-ui/icons"

function Recipe() {
  let location = useLocation()

  return (
    <Box m={10}>
      <Flex flexDir="column" justifyContent="center">
        <Heading marginBottom={5}>{location.state.recipe.label}</Heading>
        <Image
          src={location.state.recipe.image}
          borderRadius="3xl"
          boxShadow="xl"
          w={300}
          m="auto"
        ></Image>
        <Text fontSize="lg" fontWeight="semibold" marginTop={10}>
          INGREDIENTS
        </Text>
        <Table w={400} alignSelf="center">
          <Thead>
            <Tr>
              <Th w={100}></Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {location.state.recipe.ingredients.map((ingredient, key) => {
              return (
                <Tr key={uuidv4()}>
                  <Td>
                    {ingredient.image !== null ? (
                      <Image
                        boxSize={50}
                        borderRadius="full"
                        boxShadow="lg"
                        src={ingredient.image}
                      ></Image>
                    ) : (
                      ""
                    )}
                  </Td>
                  <Td h="5rem">{ingredient.text}</Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
        {/* 
        {location.state.recipe.ingredients.map((ingredient, key) => {
          return (
            <Box m="auto" key={uuidv4()}>
              <Flex flexDir="row" w={500} h={50} m={10}>
                {ingredient.image !== null ? (
                  <Image boxSize={50} src={ingredient.image}></Image>
                ) : (
                  ""
                )}
                <Text verticalAlign="center" marginLeft={5}>
                  {ingredient.text}
                </Text>
              </Flex>
            </Box>
          )
        })} */}
        <Box m={5}>
          <Link href={location.state.recipe.url} w={300} fontWeight="semibold" isExternal>
            Get the recipe here
            <ExternalLinkIcon marginX={2} />
          </Link>
        </Box>
      </Flex>
    </Box>
  )
}

export default Recipe
