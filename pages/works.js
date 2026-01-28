// pages/works.js
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { works } from '../lib/data'
import TerminalCard from '../components/TerminalCard'

export default function Works() {
    return (
        <Box>
            <Heading fontSize="xl" color="termText" mb={2}>
                Professional Projects
            </Heading>
            <Text color="termDim" fontSize="sm" mb={5}>
                Selected shipped titles and platforms.
            </Text>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                {works.map(w => (
                    <TerminalCard key={w.title} title={w.title}  href={w.href} image={w.image} />
                ))}
            </SimpleGrid>
        </Box>
    )
}
