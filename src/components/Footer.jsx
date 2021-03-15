import React from 'react'
import {Box, Flex, Spacer, Text} from "@chakra-ui/react"

function Footer() {
    return (
        <Box bgColor='tomato' h='10rem' textColor='whitesmoke'>
            <Flex>
                <Box m={5}>
                    <Text>Cookbook</Text>
                </Box>
                <Spacer />
                <Box>

                </Box>
            </Flex>
        </Box>
    )
}

export default Footer
