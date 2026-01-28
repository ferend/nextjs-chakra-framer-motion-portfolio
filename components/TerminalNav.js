// components/TerminalNav.js
import NextLink from 'next/link'
import { HStack, Link, Text } from '@chakra-ui/react'

const Item = ({ href, path, children }) => {
    const active = path === href
    return (
        <Link
            as={NextLink}
            href={href}
            fontSize="sm"
            color={active ? 'termAccent' : 'termDim'}
            _hover={{ color: 'termAccent', textDecoration: 'none' }}
        >
            <Text as="span" opacity={0.85}>
                [
            </Text>
            <Text as="span">{children}</Text>
            <Text as="span" opacity={0.85}>
                ]
            </Text>
        </Link>
    )
}

export default function TerminalNav({ path }) {
    return (
        <HStack spacing={4}>
            <Item href="/" path={path}>
                home
            </Item>
            {/*<Item href="/projects" path={path}>*/}
            {/*    projects*/}
            {/*</Item>*/}
            <Item href="/works" path={path}>
                works
            </Item>
        </HStack>
    )
}
