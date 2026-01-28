// components/ProfileCard.js
import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import {
    Box,
    HStack,
    VStack,
    Text,
    IconButton,
    Link,

} from '@chakra-ui/react'
import { FiClock, FiMapPin, FiMail } from 'react-icons/fi'
import { FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa'

const iconMap = {
    github: FaGithub,
    twitter: FaTwitter,
    linkedin: FaLinkedin,
}

function pad2(n) {
    return String(n).padStart(2, '0')
}

export default function ProfileCard({ profile }) {
    const [now, setNow] = useState(() => new Date())

    useEffect(() => {
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
        <Box
            border="1px solid"
            borderColor="termBorder"
            bg="rgba(0,0,0,0.18)"
            borderRadius="16px"
            p={{ base: 5, md: 6 }}
            boxShadow="0 0 0 1px rgba(0,255,208,0.06), 0 0 40px rgba(0,255,208,0.10)"
        >
            {/* top row:+ clock */}
            <HStack justify="space-between" mb={5}>
                <HStack spacing={2} color="termDim">
                    <FiClock />
                    <Text fontSize="sm">{timeText}</Text>
                </HStack>
            </HStack>

            {/* avatar */}
            <VStack spacing={3}>
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

                <Text
                    fontSize={{ base: '2xl', md: '3xl' }}
                    fontWeight="700"
                    letterSpacing="0.5px"
                    color="termText"
                >
                    {profile.name}
                </Text>

                <Text fontSize="sm" color="termDim">
                    {profile.title}
                </Text>

                <HStack spacing={2} color="termDim">
                    <FiMapPin />
                    <Text fontSize="sm">{profile.location}</Text>
                </HStack>

                {/* socials */}
                <HStack spacing={2} pt={2}>
                    {profile.links.map((l) => {
                        const Icon = iconMap[l.icon] || FiMail
                        return (
                            <IconButton
                                key={l.href}
                                as={Link}
                                href={l.href}
                                isExternal
                                aria-label={l.label}
                                icon={<Icon />}
                                size="sm"
                                variant="outline"
                                borderColor="termBorder"
                                color="termDim"
                                _hover={{ color: 'termAccent', borderColor: 'termAccent', textDecoration: 'none' }}
                            />
                        )
                    })}
                </HStack>
                
            </VStack>
        </Box>
    )
}
