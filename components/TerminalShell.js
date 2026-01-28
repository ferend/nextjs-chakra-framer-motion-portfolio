// components/TerminalShell.js
import { Box, Flex, Text, HStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import TerminalNav from './TerminalNav'
import BlinkCursor from './BlinkCursor'

const MotionBox = motion(Box)

const shellVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.995 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 180,
            damping: 22,
            mass: 0.9,
            when: 'beforeChildren',
            staggerChildren: 0.06
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 6 },
    show: { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut' } }
}

export default function TerminalShell({ children, path }) {
    return (
        <MotionBox
            position="relative"
            zIndex={2}
            border="1px solid"
            borderColor="border"
            bg="panel"
            borderRadius="16px"
            overflow="hidden"
            boxShadow="0 10px 30px rgba(0,0,0,0.35)"
            variants={shellVariants}
            initial="hidden"
            animate="show"
        >
            {/* subtle breathing highlight (very light, not “glow”) */}
            <MotionBox
                pointerEvents="none"
                position="absolute"
                inset={0}
                opacity={0.06}
                animate={{ opacity: [0.04, 0.08, 0.04] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                    background:
                        'radial-gradient(600px 220px at 50% 0%, rgba(0,255,208,0.22), transparent 60%)'
                }}
            />

            {/* top bar */}
            <MotionBox variants={itemVariants}>
                <Flex
                    align="center"
                    justify="space-between"
                    px={{ base: 4, md: 6 }}
                    py={4}
                    borderBottom="1px solid"
                    borderColor="border"
                    bg="rgba(255,255,255,0.02)"
                >
                    <HStack spacing={3}>
                        <HStack spacing={2} opacity={0.55}>
                            <Box w="10px" h="10px" borderRadius="999px" bg="rgba(255,255,255,0.18)" />
                            <Box w="10px" h="10px" borderRadius="999px" bg="rgba(255,255,255,0.18)" />
                            <Box w="10px" h="10px" borderRadius="999px" bg="rgba(255,255,255,0.18)" />
                        </HStack>

                        <Text fontSize="sm" color="muted">
                            Portfolio
                            <Text as="span" mx={2} opacity={0.6}>
                                •
                            </Text>
                            <Text as="span" color="text">
                                {path}
                            </Text>
                        </Text>
                    </HStack>

                    <MotionBox variants={itemVariants}>
                        <TerminalNav path={path} />
                    </MotionBox>
                </Flex>
            </MotionBox>

            {/* body */}
            <MotionBox variants={itemVariants}>
                <Box px={{ base: 4, md: 6 }} py={{ base: 6, md: 8 }}>
                    {children}
                </Box>
            </MotionBox>

            {/* optional prompt bar (subtle) */}
            <MotionBox
                variants={itemVariants}
                borderTop="1px solid"
                borderColor="border"
                bg="rgba(255,255,255,0.015)"
                px={{ base: 4, md: 6 }}
                py={3}
            >
                <Text fontSize="sm" color="muted">
                    <Text as="span" opacity={0.75}>
                        $
                    </Text>{' '}
                    <Text as="span" color="text">
                        help
                    </Text>
                    <BlinkCursor />
                </Text>
            </MotionBox>
        </MotionBox>
    )
}
