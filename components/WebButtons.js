// components/WebButtons.js
import { Wrap, WrapItem, Link, Text } from '@chakra-ui/react'

export default function WebButtons({ items }) {
    if (!items?.length) return null

    return (
        <Wrap justify="center" spacing={3} mt={8} mb={2}>
            {items.map((item) => (
                <WrapItem key={item.href}>
                    <Link
                        href={item.href}
                        isExternal
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        w="88px"
                        h="31px"
                        px={1}
                        border="1px solid"
                        borderColor="termBorder"
                        bg="rgba(0,0,0,0.35)"
                        _hover={{
                            textDecoration: 'none',
                            borderColor: 'termAccent',
                            boxShadow: '0 0 10px rgba(192,132,252,0.35)',
                        }}
                    >
                        <Text
                            fontFamily="mono"
                            fontSize="9px"
                            lineHeight="1.2"
                            textAlign="center"
                            color="termDim"
                            _groupHover={{ color: 'termAccent' }}
                        >
                            {item.label}
                        </Text>
                    </Link>
                </WrapItem>
            ))}
        </Wrap>
    )
}