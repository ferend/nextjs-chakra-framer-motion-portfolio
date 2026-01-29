import { Box, Heading, Text, HStack, Link, Tag } from '@chakra-ui/react'
import Image from 'next/image'
import { MotionBox } from './motion'

export default function TerminalCard({
                                         title,
                                         desc,
                                         tags = [],
                                         href,
                                         meta,
                                         image,
                                         variant // "bio" or undefined
                                     }) {
    const isBio = variant === 'bio'

    return (
        <MotionBox
            w="full"
            maxW="full"
            border="1px solid"
            borderColor="termBorder"
            borderRadius="12px"
            overflow="hidden"
            bg="rgba(0,0,0,0.18)"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            whileHover={{ y: -5, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            style={{ transform: 'translateZ(0)' }}
            _hover={{ boxShadow: '0 0 24px rgba(0,255,208,0.14)' }}
        >
            {image ? (
                <Box position="relative" w="100%" h="140px" borderBottom="1px solid" borderColor="termBorder">
                    <Image
                        src={image}
                        alt={isBio ? (desc || title) : title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: 'cover' }}
                        priority={false}
                    />
                    <Box
                        position="absolute"
                        inset={0}
                        bg="linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.55))"
                    />
                </Box>
            ) : null}

            <Box p={4} w="full" maxW="full">
                {isBio ? (
                    <Box w="full">
                        <Text fontSize="sm" color="termText" mb={2}>
                            {href ? (
                                <Link
                                    href={href}
                                    isExternal
                                    color="termText"
                                    _hover={{ textDecoration: 'none', color: 'termText' }}
                                >
                                    {desc}
                                </Link>
                            ) : (
                                desc
                            )}
                        </Text>

                        <Text fontSize="xs" color="termDim">
                            {title}
                        </Text>
                    </Box>
                ) : (
                    <Box w="full">
                        <HStack justify="space-between" align="start" spacing={4}>
                            <Box w="full" maxW="full">
                                <Heading fontSize="md" color="termText" mb={1}>
                                    {href ? (
                                        <Link href={href} isExternal color="termAccent" _hover={{ textDecoration: 'none' }}>
                                            {title}
                                        </Link>
                                    ) : (
                                        title
                                    )}
                                </Heading>

                                {meta ? (
                                    <Text fontSize="xs" color="termDim" mb={2}>
                                        {meta}
                                    </Text>
                                ) : null}

                                {desc ? (
                                    <Text fontSize="sm" color="termDim" w="full" maxW="full">
                                        {desc}
                                    </Text>
                                ) : null}
                            </Box>
                        </HStack>

                        {tags.length ? (
                            <HStack mt={3} spacing={2} wrap="wrap">
                                {tags.map((t) => (
                                    <Tag key={t} size="sm" variant="outline" borderColor="termBorder" color="termAccent">
                                        {t}
                                    </Tag>
                                ))}
                            </HStack>
                        ) : null}
                    </Box>
                )}
            </Box>
        </MotionBox>
    )
}
