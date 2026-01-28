// components/SkillGrid.js
import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import * as SiIcons from 'react-icons/si'
import { FiTerminal } from 'react-icons/fi'

function getIcon(name) {
    const Icon = SiIcons[name]
    return Icon ? Icon : FiTerminal
}

export default function SkillGrid({ items }) {
    return (
        <Box
            border="1px solid"
            borderColor="termBorder"
            borderRadius="12px"
            p={{ base: 4, md: 6 }}
            bg="rgba(0,0,0,0.18)"
        >
            <SimpleGrid columns={{ base: 2, sm: 3, md: 3 }} spacing={{ base: 6, md: 8 }}>
                {items.map((s) => {
                    const Icon = getIcon(s.icon)
                    return (
                        <Box key={s.label} textAlign="center">
                            <Box
                                display="inline-flex"
                                alignItems="center"
                                justifyContent="center"
                                w="56px"
                                h="56px"
                                borderRadius="14px"
                                border="1px solid"
                                borderColor="termBorder"
                                boxShadow="0 0 18px rgba(0,255,208,0.10)"
                                bg="rgba(0,0,0,0.25)"
                            >
                                <Icon size={28} />
                            </Box>
                            <Text mt={3} fontSize="sm" color="termDim">
                                {s.label}
                            </Text>
                        </Box>
                    )
                })}
            </SimpleGrid>
        </Box>
    )
}
