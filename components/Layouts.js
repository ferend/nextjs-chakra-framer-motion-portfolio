// components/Layout.js
import { Box } from '@chakra-ui/react'
import TerminalShell from './TerminalShell'
import Scanlines from './Scanlines'

export default function Layout({ children, path }) {
    return (
        <Box minH="100vh" bg="termBg" position="relative" overflow="hidden">
            <Scanlines />

            {/* Centered terminal window with max width */}
            <Box
                pt={{ base: 6, md: 10 }}
                pb={16}
                px={{ base: 4, md: 6 }}
                display="flex"
                justifyContent="center"
            >
                <Box w="100%" maxW="1100px">
                    <TerminalShell path={path}>{children}</TerminalShell>
                </Box>
            </Box>
        </Box>
    )
}
