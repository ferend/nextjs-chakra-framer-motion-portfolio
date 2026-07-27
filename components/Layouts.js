// components/Layout.js
import { Box } from '@chakra-ui/react'
import TerminalShell from './TerminalShell'
import Scanlines from './Scanlines'
import WebButtons from './WebButtons'
import { webButtons } from '../lib/data'

export default function Layout({ children, path }) {
    return (
        <Box minH="100vh" bg="termBg" position="relative" overflow="hidden">
            <Scanlines />

            <Box
                pt={{ base: 6, md: 10 }}
                pb={16}
                px={{ base: 4, md: 6 }}
                display="flex"
                flexDirection="column"
                alignItems="center"
            >
                <Box w="100%" maxW="1100px">
                    <TerminalShell path={path}>{children}</TerminalShell>
                </Box>

                <Box w="100%" maxW="1100px" position="relative" zIndex={2}>
                    <WebButtons items={webButtons} />
                </Box>
            </Box>
        </Box>
    )
}