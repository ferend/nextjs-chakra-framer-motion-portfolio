// components/Layout.js
import { Box, Container } from "@chakra-ui/react";
import TerminalShell from "./TerminalShell";
import Scanlines from "./Scanlines";

export default function Layout({ children, path }) {
    return (
        <Box minH="100vh" bg="termBg" position="relative" overflow="hidden">
            <Scanlines />
            <Container maxW="5xl" pt={{ base: 6, md: 10 }} pb={16}>
                <TerminalShell path={path}>{children}</TerminalShell>
            </Container>
        </Box>
    );
}
