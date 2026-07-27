// lib/theme.js
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false,
    },
    fonts: {
        heading: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        body: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
    },
    styles: {
        global: {
            "html, body": {
                bg: "#08050c",              // near-black, faint purple undertone
                color: "#EDE7F6",           // soft lavender-white
            },
            "::selection": {
                background: "rgba(192, 132, 252, 0.28)", // violet selection
            },
        },
    },
    semanticTokens: {
        colors: {
            bg: { default: "#08050c" },
            panel: { default: "#120b1a" },
            border: { default: "#2a1b3d" },

            text: { default: "#EDE7F6" },
            muted: { default: "#9b8bb0" },

            accent: { default: "#c084fc" },     // violet
            accent2: { default: "#f472b6" },    // magenta/pink, secondary glow

            // keep old names since components reference these directly:
            termBg: { default: "#08050c" },
            termPanel: { default: "#120b1a" },
            termBorder: { default: "#2a1b3d" },
            termText: { default: "#EDE7F6" },
            termDim: { default: "#9b8bb0" },
            termAccent: { default: "#c084fc" },

            termGlow: { default: "rgba(192, 132, 252, 0.18)" },
        },
    },
});