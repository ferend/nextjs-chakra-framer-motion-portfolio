// components/SkillGrid.js
import { Wrap, WrapItem, HStack, Text } from '@chakra-ui/react'
import * as SiIcons from 'react-icons/si'
import { FiTerminal } from 'react-icons/fi'

function getIcon(name) {
    const Icon = SiIcons[name]
    return Icon ? Icon : FiTerminal
}

export default function SkillGrid({ items }) {
    return (
        <Wrap spacing={{ base: 4, md: 6 }}>
            {items.map((s) => {
                const Icon = getIcon(s.icon)
                return (
                    <WrapItem key={s.label}>
                        <HStack
                            spacing={2}
                            color="termDim"
                            transition="color 0.15s ease"
                            _hover={{ color: 'termAccent' }}
                        >
                            <Icon size={16} />
                            <Text fontSize="sm">{s.label}</Text>
                        </HStack>
                    </WrapItem>
                )
            })}
        </Wrap>
    )
}