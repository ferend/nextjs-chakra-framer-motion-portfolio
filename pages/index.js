import Head from "next/head";
import { Box, Heading, Text, Divider, HStack, Link } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { profile, skillIcons } from '../lib/data'
import ProfileCard from '../components/ProfileCard'
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
    const cleanSummary = String(profile.summary)
        .replace(/\s*\n+\s*/g, ' ')
        .replace(/\s{2,}/g, ' ')
        .trim()

    return (
        <>
            <Head>
                <title>Ferhat Dalçık</title>
                <meta
                    name="description"
                    content="Personal portfolio of Ferhat Dalçık"
                />
            </Head>

            <Box>
                <Reveal delay={0.02}>
                    <ProfileCard profile={profile} />
                </Reveal>

                <Divider my={6} borderColor="termBorder" />

                {/* WHOAMI PANEL */}
                <Reveal delay={0.04}>
                    <Box
                        w="full"
                        borderLeft="2px solid"
                        borderColor="termAccent"
                        pl={4}
                    >
                        <Text fontSize="sm" color="termAccent" mb={2}>
                            $ whoami
                        </Text>

                        <Text
                            fontSize="sm"
                            color="termDim"
                            lineHeight="1.7"
                            textAlign="left"
                            whiteSpace="normal"
                        >
                            {cleanSummary}
                        </Text>
                    </Box>
                </Reveal>

                <Divider my={6} borderColor="termBorder" />

                {/* BIO */}
                <Reveal delay={0.05}>
                    <Heading fontSize="lg" color="termText" mb={3}>
                        Bio
                    </Heading>

                    <Box>
                        {profile.bio.map((item, i) => (
                            <Box
                                key={`${item.year}-${item.text}`}
                                py={3}
                                borderTop={i === 0 ? 'none' : '1px solid'}
                                borderColor="termBorder"
                            >
                                <HStack justify="space-between" align="flex-start">
                                    <Text fontSize="sm" color="termText">
                                        {item.text}
                                    </Text>
                                    <Text fontSize="xs" color="termAccent" whiteSpace="nowrap" pl={4}>
                                        {item.year}
                                    </Text>
                                </HStack>
                            </Box>
                        ))}
                    </Box>
                </Reveal>

                <Divider my={6} borderColor="termBorder" />

                {/* CERTIFICATIONS */}
                <Reveal delay={0.05}>
                    <Heading fontSize="lg" color="termText" mb={3}>
                        Certifications
                    </Heading>

                    <Box>
                        {profile.certifications.map((c, i) => (
                            <Box
                                key={c.href}
                                py={3}
                                borderTop={i === 0 ? 'none' : '1px solid'}
                                borderColor="termBorder"
                            >
                                <Link
                                    href={c.href}
                                    isExternal
                                    fontSize="sm"
                                    color="termDim"
                                    _hover={{ color: 'termAccent', textDecoration: 'underline' }}
                                >
                                    {c.text}
                                </Link>
                            </Box>
                        ))}
                    </Box>
                </Reveal>

                <Divider my={6} borderColor="termBorder" />

                {/* SKILLS */}
                <Reveal delay={0.05}>
                    <Heading fontSize="lg" color="termText" mb={3}>
                        Technical Depth
                    </Heading>
                    <SkillGrid items={skillIcons} />
                </Reveal>
            </Box>
        </>
    )
}