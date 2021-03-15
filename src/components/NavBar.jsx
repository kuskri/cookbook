import React from "react"
import {
  Box,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Spacer,
  IconButton,
} from "@chakra-ui/react"
import { BiUserCircle } from "react-icons/bi"
import { GiHamburgerMenu } from "react-icons/gi"

import { Link } from "react-router-dom"

function NavBar() {
  return (
    <Box paddingY={7}>
      <Box position="fixed" zIndex="2" w="100%" top={0} bgColor="tomato">
        <Flex>
          <Menu>
            <MenuButton
              as={IconButton}
              colorScheme="black"
              backgroundColor="transparent"
              fontSize="3xl"
              marginY={3}
              marginX={6}
              aria-label="Menu"
              icon={<GiHamburgerMenu />}
            ></MenuButton>
            <MenuList marginY={1}>
              <Box m={10}>
                <Link m={2} to="/favorites">
                  <MenuItem fontWeight="semibold">Your Favorites</MenuItem>
                </Link>
                <Link m={2} to="/">
                  <MenuItem fontWeight="semibold">Expert Advice</MenuItem>
                </Link>
                <Link m={2} to="/">
                  <MenuItem fontWeight="semibold">Ingredients</MenuItem>
                </Link>
                <Link m={2} to="/">
                  <MenuItem fontWeight="semibold">Holidays and Events</MenuItem>
                </Link>
                <Heading color="red.300" marginY={10} letterSpacing="widest">
                  Cookbook
                </Heading>
              </Box>
            </MenuList>
          </Menu>
          <Spacer />
          <Link to="/">
            <Heading textColor="whitesmoke" p={2} marginLeft="7.3rem" letterSpacing="widest">
              Cookbook
            </Heading>
          </Link>
          <Spacer />
          <Link>
            <Flex>
              <IconButton
                marginY={3}
                colorScheme="white"
                backgroundColor="transparent"
                fontSize="3xl"
                aria-label="User"
                icon={<BiUserCircle />}
              />
              <Text color="white" fontSize="lg" textAlign="center" marginY={4} marginLeft={2}>
                Sign Up
              </Text>
            </Flex>
          </Link>
          <Text color="white" fontSize="3xl" marginY={1} marginX={2}>
            |
          </Text>
          <Link>
            <Text color="white" fontSize="lg" marginY={4} marginRight={5}>
              Log In
            </Text>
          </Link>
        </Flex>
      </Box>
    </Box>
  )
}

export default NavBar
