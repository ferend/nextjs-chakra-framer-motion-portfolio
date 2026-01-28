// components/TerminalShell.js
import Image from 'next/image'
import { profile } from '../lib/data'
import { Box, Flex, Text, HStack, Badge } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import TerminalNav from './TerminalNav'



const MotionBox = motion(Box)

export default function TerminalShell({ children, path }) {
    return (
        <MotionBox
            position="relative"
            zIndex={2}
            border="1px solid"
            borderColor="termBorder"
            bg="termPanel"
            borderRadius="14px"
            overflow="hidden"
            boxShadow="0 0 0 1px rgba(0,255,208,0.08), 0 0 40px rgba(0,255,208,0.10)"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
        >
            {/* title bar */}
            <Flex align="center" justify="space-between" px={4} py={3}>
                <HStack spacing={3}>
                    {/* mac buttons */}
                    <HStack spacing={2}>
                        <Box w="10px" h="10px" borderRadius="999px" bg="rgba(255,80,80,0.85)" />
                        <Box w="10px" h="10px" borderRadius="999px" bg="rgba(255,200,80,0.85)" />
                        <Box w="10px" h="10px" borderRadius="999px" bg="rgba(80,255,160,0.85)" />
                    </HStack>

                    {/* terminal path */}
                    <Text fontSize="sm" color="termDim">
                        eren@portfolio:~ <Text as="span" color="termAccent">{path}</Text>
                    </Text>
                </HStack>

                <TerminalNav path={path} />
            </Flex>


            {/* body */}
            <Box px={{ base: 4, md: 6 }} py={{ base: 5, md: 6 }}>
                {children}
            </Box>

            {/* bottom prompt */}
            <Box
                px={{ base: 4, md: 6 }}
                py={4}
                borderTop="1px solid"
                borderColor="termBorder"
                bg="rgba(0,0,0,0.18)"
            >
                <Text fontSize="sm" color="termDim">
                    <Text as="span" color="termAccent">
                        $
                    </Text>{' '}
                    <Text as="span">run</Text>{' '}
                    <Text as="span" color="termAccent">
                        help
                    </Text>
                    <Text as="span" ml={2} opacity={0.9}>
                        ▋
                    </Text>
                </Text>
            </Box>
        </MotionBox>
    )
}
