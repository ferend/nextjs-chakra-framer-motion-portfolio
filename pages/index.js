// pages/index.js
import { Box, Heading, Text, Divider, SimpleGrid } from '@chakra-ui/react'
import { profile } from '../lib/data'
import TerminalCard from '../components/TerminalCard'
import SkillGrid from '../components/SkillGrid'
import { skillIcons } from '../lib/data'
import ProfileCard from '../components/ProfileCard'
export default function Home() {
    return (
        <Box>

            <Box>
                <ProfileCard profile={profile} />

                <Divider my={6} borderColor="termBorder" />
                
            </Box>
            
            
            <Divider my={5} borderColor="termBorder" />

            <Text fontSize="sm" color="termDim" whiteSpace="pre-line">
                <Text as="span" color="termAccent">
                    $ whoami
                </Text>
                {'\n'}
                {profile.summary}
            </Text>
            

            <Divider my={6} borderColor="termBorder" />

            <Heading fontSize="lg" color="termText" mb={3}>
                Bio
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                {profile.bio.map(item => (
                    <TerminalCard
                        key={item.year + item.text}
                        title={item.year}
                        desc={item.text}
                        href={item.href || null}
                    />
                ))}
            </SimpleGrid>

            <Divider my={6} borderColor="termBorder" />

            <Heading fontSize="lg" color="termText" mb={3}>
                Certifications
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                {profile.certifications.map(c => (
                    <TerminalCard key={c.href} title={c.text}  href={c.href} />
                ))}
            </SimpleGrid>

            <Divider my={6} borderColor="termBorder" />
            

            <Divider my={6} borderColor="termBorder" />

            <Heading fontSize="lg" color="termText" mb={3}>
                Technical Depth
            </Heading>
            <SkillGrid items={skillIcons} />
            
        </Box>
    )
}
