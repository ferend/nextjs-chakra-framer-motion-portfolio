import NextLink from 'next/link'
import { HStack, Link, Text, Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const Item = ({ href, path, children }) => {
    const active = path === href

    return (
        <Box position="relative" px={1} py={1}>
            <Link
                as={NextLink}
                href={href}
                fontSize="sm"
                color={active ? 'termAccent' : 'termDim'}
                _hover={{ color: 'termAccent', textDecoration: 'none' }}
            >
                <motion.span
                    style={{ display: 'inline-block' }}
                    whileHover={{ y: -1 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 22 }}
                >
                    <Text as="span" opacity={0.85}>
                        [
                    </Text>
                    <Text as="span">{children}</Text>
                    <Text as="span" opacity={0.85}>
                        ]
                    </Text>
                </motion.span>
            </Link>

            {active ? (
                <MotionBox
                    layoutId="nav-indicator"
                    position="absolute"
                    left="6px"
                    right="6px"
                    bottom="0px"
                    height="2px"
                    borderRadius="999px"
                    bg="termAccent"
                    opacity={0.9}
                    transition={{ type: 'spring', stiffness: 500, damping: 32 }}
                />
            ) : null}
        </Box>
    )
}

export default function TerminalNav({ path }) {
    return (
        <HStack spacing={4}>
            <Item href="/" path={path}>
                home
            </Item>

            <Item href="/works" path={path}>
                works
            </Item>
        </HStack>
    )
}
