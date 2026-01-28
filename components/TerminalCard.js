// components/TerminalCard.js
import { Box, Heading, Text, HStack, Link, Tag } from '@chakra-ui/react'
import Image from 'next/image'

export default function TerminalCard({ title, desc, tags = [], href, meta, image }) {
    return (
        <Box
            border="1px solid"
            borderColor="termBorder"
            borderRadius="12px"
            overflow="hidden"
            bg="rgba(0,0,0,0.18)"
            _hover={{ boxShadow: '0 0 24px rgba(0,255,208,0.10)' }}
            transition="box-shadow 0.2s ease"
        >
            {image ? (
                <Box position="relative" w="100%" h="140px" borderBottom="1px solid" borderColor="termBorder">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: 'cover' }}
                        priority={false}
                    />
                    {/* subtle overlay to keep terminal mood */}
                    <Box
                        position="absolute"
                        inset={0}
                        bg="linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.55))"
                    />
                </Box>
            ) : null}

            <Box p={4}>
                <HStack justify="space-between" align="start" spacing={4}>
                    <Box>
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
                            <Text fontSize="sm" color="termDim">
                                {desc}
                            </Text>
                        ) : null}
                    </Box>
                </HStack>

                {tags.length ? (
                    <HStack mt={3} spacing={2} wrap="wrap">
                        {tags.map(t => (
                            <Tag key={t} size="sm" variant="outline" borderColor="termBorder" color="termAccent">
                                {t}
                            </Tag>
                        ))}
                    </HStack>
                ) : null}
            </Box>
        </Box>
    )
}
