// pages/index.js
import { Box, Heading, Text, Divider, SimpleGrid } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { profile, skillIcons } from '../lib/data'
import ProfileCard from '../components/ProfileCard'
import TerminalCard from '../components/TerminalCard'
import SkillGrid from '../components/SkillGrid'

const Reveal = ({ children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-90px' }}
        transition={{ duration: 0.35, ease: 'easeOut', delay }}
    >
        {children}
    </motion.div>
)

export default function Home() {
    return (
        <Box>
            <Reveal delay={0.02}>
                <ProfileCard profile={profile} />
            </Reveal>

            <Divider my={6} borderColor="termBorder" />

            <Reveal delay={0.04}>
                <Box
                    w="full"
                    border="1px solid"
                    borderColor="termBorder"
                    borderRadius="12px"
                    bg="rgba(0,0,0,0.18)"
                    p={5}
                >
                    {/* prompt line */}
                    <Text fontSize="sm" color="termAccent" mb={2}>
                        $ whoami
                    </Text>

                    {/* paragraph (no forced line breaks) */}
                    <Text
                        fontSize="sm"
                        color="termDim"
                        lineHeight="1.7"
                        textAlign="left"
                        whiteSpace="normal"
                    >
                        {String(profile.summary)
                            .replace(/\s*\n+\s*/g, ' ')
                            .replace(/\s{2,}/g, ' ')
                            .trim()}
                    </Text>
                </Box>


            </Reveal>

            <Divider my={6} borderColor="termBorder" />

            <Reveal delay={0.05}>
                <Heading fontSize="lg" color="termText" mb={3}>
                    Bio
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    {profile.bio.map((item) => (
                        <TerminalCard
                            key={`${item.year}-${item.text}`}
                            title={item.year}
                            desc={item.text}
                            href={item.href || null}
                        />
                    ))}
                </SimpleGrid>
            </Reveal>

            <Divider my={6} borderColor="termBorder" />

            <Reveal delay={0.05}>
                <Heading fontSize="lg" color="termText" mb={3}>
                    Certifications
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    {profile.certifications.map((c) => (
                        <TerminalCard key={c.href} title={c.text} desc="Open credential" href={c.href} />
                    ))}
                </SimpleGrid>
            </Reveal>

            <Divider my={6} borderColor="termBorder" />

            <Reveal delay={0.05}>
                <Heading fontSize="lg" color="termText" mb={3}>
                    Technical Depth
                </Heading>
                <SkillGrid items={skillIcons} />
            </Reveal>
        </Box>
    )
}
