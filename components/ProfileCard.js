// components/ProfileCard.js
import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'

import { Box, HStack, VStack, Text, Link } from '@chakra-ui/react'
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
        <Box>
            <HStack spacing={2} color="termDim" mb={4}>
                <FiClock />
                <Text fontSize="xs">{mounted ? timeText : '--:--:--'}</Text>
            </HStack>

            <HStack align="flex-start" spacing={5}>
                <Box
                    position="relative"
                    flexShrink={0}
                    w={{ base: '56px', md: '68px' }}
                    h={{ base: '56px', md: '68px' }}
                    borderRadius="4px"
                    overflow="hidden"
                    border="1px solid"
                    borderColor="termBorder"
                    bg="black"
                >
                    <Image
                        src={profile.avatar}
                        alt={profile.name}
                        fill
                        sizes="68px"
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </Box>

                <VStack align="flex-start" spacing={1} flex={1}>
                    <Text
                        fontSize={{ base: 'xl', md: '2xl' }}
                        fontWeight="700"
                        color="termText"
                    >
                        {profile.name}
                    </Text>

                    <Text fontSize="sm" color="termDim">
                        {profile.title}
                    </Text>

                    <HStack spacing={1} color="termDim">
                        <FiMapPin size="12" />
                        <Text fontSize="xs">{profile.location}</Text>
                    </HStack>

                    <HStack spacing={4} pt={2}>
                        {profile.links.map((l) => {
                            const Icon = iconMap[l.icon] ?? FiMail
                            return (
                                <Link
                                    key={l.href}
                                    href={l.href}
                                    isExternal
                                    color="termDim"
                                    fontSize="md"
                                    _hover={{ color: 'termAccent', textDecoration: 'none' }}
                                >
                                    <Icon />
                                </Link>
                            )
                        })}
                    </HStack>
                </VStack>
            </HStack>
        </Box>
    )
}