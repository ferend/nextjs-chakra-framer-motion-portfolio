// lib/theme.js
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false,
    },
    fonts: {
        heading: "'Times New Roman', Times, Georgia, serif",
        body: "'Times New Roman', Times, Georgia, serif",
        mono: "'Times New Roman', Times, Georgia, serif",
    },
    styles: {
        global: {
            "html, body": {
                bg: "#0a0a0b",
                color: "#e8e8ea",
            },
            "::selection": {
                background: "rgba(212, 212, 216, 0.25)",
            },
        },
    },
    semanticTokens: {
        colors: {
            bg: { default: "#0a0a0b" },
            panel: { default: "#131316" },
            border: { default: "#2a2a2e" },

            text: { default: "#e8e8ea" },
            muted: { default: "#9a9aa0" },

            accent: { default: "#d4d4d8" },
            accent2: { default: "#a1a1aa" },

            termBg: { default: "#0a0a0b" },
            termPanel: { default: "#131316" },
            termBorder: { default: "#2a2a2e" },
            termText: { default: "#e8e8ea" },
            termDim: { default: "#9a9aa0" },
            termAccent: { default: "#d4d4d8" },

            termGlow: { default: "rgba(212, 212, 216, 0.15)" },
        },
    },
});