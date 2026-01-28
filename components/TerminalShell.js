// components/TerminalShell.js
import { Box, Flex, Text, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import TerminalNav from "./TerminalNav";

const MotionBox = motion(Box);

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
            // enterprise: subtle elevation, no glow
            boxShadow="0 10px 30px rgba(0,0,0,0.35)"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
        >
            {/* top bar */}
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
                    {/* If you keep the "traffic lights", mute them. Or remove entirely. */}
                    <HStack spacing={2} opacity={0.55}>
                        <Box w="10px" h="10px" borderRadius="999px" bg="rgba(255,255,255,0.18)" />
                        <Box w="10px" h="10px" borderRadius="999px" bg="rgba(255,255,255,0.18)" />
                        <Box w="10px" h="10px" borderRadius="999px" bg="rgba(255,255,255,0.18)" />
                    </HStack>

                    <Text fontSize="sm" color="muted">
                        Portfolio
                        <Text as="span" mx={2} opacity={0.6}>•</Text>
                        <Text as="span" color="text">
                            {path}
                        </Text>
                    </Text>
                    
                </HStack>

                <TerminalNav path={path} />
            </Flex>

            {/* body */}
            <Box px={{ base: 4, md: 6 }} py={{ base: 6, md: 8 }}>
                {children}
            </Box>

            {/* Remove the terminal prompt entirely for enterprise feel */}
        </MotionBox>
    );
}
