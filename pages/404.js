// pages/404.js
import NextLink from 'next/link'
import { Box, Heading, Text, Link } from '@chakra-ui/react'

export default function NotFound() {
    return (
        <Box>
            <Heading fontSize="xl" color="termText">
                404
            </Heading>
            <Text mt={2} color="termDim" fontSize="sm">
                This path doesn’t exist.
            </Text>
            <Link as={NextLink} href="/" color="termAccent" mt={4} display="inline-block" _hover={{ textDecoration: 'none' }}>
                ← back home
            </Link>
        </Box>
    )
}
