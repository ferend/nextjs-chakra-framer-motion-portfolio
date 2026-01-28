// pages/projects.js
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { projects } from '../lib/data'
import TerminalCard from '../components/TerminalCard'

export default function Projects() {
    return (
        <Box>
            <Heading fontSize="xl" color="termText" mb={2}>
                Personal Projects
            </Heading>
            <Text color="termDim" fontSize="sm" mb={5}>
                You can play the live game projects by clicking their links.
            </Text>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                {projects.map(p => (
                    <TerminalCard
                        key={p.title}
                        title={p.title}
                        desc={[
                            p.href ? 'Live: available' : 'Live: n/a',
                            p.github ? 'GitHub: available' : 'GitHub: n/a'
                        ].join(' | ')}
                        href={p.href || p.github || null}
                        meta={p.github ? `github: ${p.github}` : null}
                    />
                ))}
            </SimpleGrid>
        </Box>
    )
}
