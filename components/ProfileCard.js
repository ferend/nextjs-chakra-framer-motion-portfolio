// components/ProfileCard.js
import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { MotionBox } from './motion'

import { Box, HStack, VStack, Text, IconButton, Link } from '@chakra-ui/react'
import { FiClock, FiMapPin, FiMail } from 'react-icons/fi'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

const iconMap = {
    github: FaGithub,
    twitter: FaTwitter,
    linkedin: FaLinkedin,
    mail: FiMail
}

function pad2(n) {
    return String(n).padStart(2, '0')
}

export default function ProfileCard({ profile }) {
    const [mounted, setMounted] = useState(false)
    const [now, setNow] = useState(() => new Date())

    useEffect(() => {
        setMounted(true)
        const t = setInterval(() => setNow(new Date()), 1000)
        return () => clearInterval(t)
    }, [])

    const timeText = useMemo(() => {
        const h = pad2(now.getHours())
        const m = pad2(now.getMinutes())
        const s = pad2(now.getSeconds())
        return `${h}:${m}:${s}`
    }, [now])

    return (
        <MotionBox
            position="relative"
            border="1px solid"
            borderColor="termBorder"
            bg="rgba(0,0,0,0.18)"
            borderRadius="16px"
            p={{ base: 5, md: 6 }}
            boxShadow="0 0 0 1px rgba(0,255,208,0.06), 0 0 40px rgba(0,255,208,0.10)"
            initial={{ opacity: 0, y: 14, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 220, damping: 22, mass: 0.8 }}
        >
            <MotionBox
                position="absolute"
                inset={0}
                pointerEvents="none"
                borderRadius="16px"
                initial={{ opacity: 0.08 }}
                animate={{ opacity: [0.06, 0.14, 0.06] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                    background:
                        'radial-gradient(600px 220px at 50% 0%, rgba(0,255,208,0.14), transparent 65%)'
                }}
            />

            <HStack justify="space-between" mb={5} position="relative">
                <HStack spacing={2} color="termDim">
                    <FiClock />
                    <MotionBox
                        animate={{ opacity: [0.85, 1, 0.85] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        {/* IMPORTANT: avoid hydration mismatch */}
                        <Text fontSize="sm">{mounted ? timeText : '--:--:--'}</Text>
                    </MotionBox>
                </HStack>
            </HStack>

            <VStack spacing={3} position="relative">
                <MotionBox
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 180, damping: 18, delay: 0.05 }}
                >
                    <Box
                        position="relative"
                        w={{ base: '110px', md: '140px' }}
                        h={{ base: '110px', md: '140px' }}
                        borderRadius="999px"
                        overflow="hidden"
                        border="2px solid"
                        borderColor="termBorder"
                        bg="black"
                        boxShadow="0 0 30px rgba(0,255,208,0.12)"
                    >
                        <Image
                            src={profile.avatar}
                            alt={profile.name}
                            fill
                            sizes="140px"
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                        <Box
                            position="absolute"
                            inset={0}
                            bg="radial-gradient(circle at 30% 20%, rgba(0,255,208,0.12), transparent 55%)"
                        />
                    </Box>
                </MotionBox>

                <MotionBox
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut', delay: 0.08 }}
                >
                    <Text
                        fontSize={{ base: '2xl', md: '3xl' }}
                        fontWeight="700"
                        letterSpacing="0.5px"
                        color="termText"
                        textAlign="center"
                    >
                        {profile.name}
                    </Text>
                </MotionBox>

                <MotionBox
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut', delay: 0.12 }}
                >
                    <Text fontSize="sm" color="termDim" textAlign="center">
                        {profile.title}
                    </Text>
                </MotionBox>

                <MotionBox
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut', delay: 0.16 }}
                >
                    <HStack spacing={2} color="termDim" justify="center">
                        <FiMapPin />
                        <Text fontSize="sm">{profile.location}</Text>
                    </HStack>
                </MotionBox>

                {/* socials */}
                <MotionBox
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut', delay: 0.20 }}
                >
                    <HStack spacing={2} pt={2} justify="center">
                        {profile.links.map((l) => {
                            const Icon = iconMap[l.icon] ?? FiMail
                            return (
                                <MotionBox
                                    key={l.href}
                                    whileHover={{ y: -2, scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                                    style={{ transform: 'translateZ(0)' }}
                                >
                                    <IconButton
                                        as={Link}
                                        href={l.href}
                                        isExternal
                                        aria-label={l.label}
                                        icon={<Icon />}
                                        size="sm"
                                        variant="outline"
                                        borderColor="termBorder"
                                        color="termDim"
                                        _hover={{
                                            color: 'termAccent',
                                            borderColor: 'termAccent',
                                            textDecoration: 'none',
                                            boxShadow: '0 0 14px rgba(0,255,208,0.35)'
                                        }}
                                        _active={{ transform: 'translateY(0px)' }}
                                    />
                                </MotionBox>
                            )
                        })}
                    </HStack>
                </MotionBox>
            </VStack>
        </MotionBox>
    )
}
