// pages/index.js
import { Box, Heading, Text, HStack, Link, Divider, SimpleGrid } from '@chakra-ui/react'
import { profile } from '../lib/data'
import TerminalCard from '../components/TerminalCard'
import Image from 'next/image'
import SkillGrid from '../components/SkillGrid'
import { skillIcons } from '../lib/data'

export default function Home() {
    return (
        <Box>

            <HStack spacing={4} align="center">
                <Box
                    position="relative"
                    w="88px"
                    h="88px"
                    borderRadius="10px"
                    overflow="hidden"
                    border="1px solid"
                    borderColor="termBorder"
                    bg="black"
                    boxShadow="0 0 18px rgba(0,255,208,0.35)"
                >
                    <Image
                        src={profile.logo}
                        alt="logo"
                        fill
                        style={{
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 0 6px rgba(0,255,208,0.7)) brightness(1.2)'
                        }}
                    />
                </Box>

                <Heading fontSize={{ base: '2xl', md: '3xl' }} color="termText">
                    {profile.name}
                </Heading>
            </HStack>

            <Text mt={2} color="termDim" fontSize="sm">
                {profile.title}
            </Text>

            <Divider my={5} borderColor="termBorder" />

            <Text fontSize="sm" color="termDim" whiteSpace="pre-line">
                <Text as="span" color="termAccent">
                    $ whoami
                </Text>
                {'\n'}
                {profile.summary}
            </Text>

            <HStack mt={6} spacing={4} flexWrap="wrap">
                {profile.links.map(l => (
                    <Link key={l.href} href={l.href} isExternal color="termAccent" _hover={{ textDecoration: 'none' }}>
                        [{l.label}: {l.handle}]
                    </Link>
                ))}
            </HStack>

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
