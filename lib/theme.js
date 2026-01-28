// lib/theme.js
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false,
    },
    fonts: {
        heading: "Inter, system-ui, sans-serif",
        body: "Inter, system-ui, sans-serif",
        mono: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
    },
    styles: {
        global: {
            "html, body": {
                bg: "#0B1220",              // enterprise navy
                color: "#E5E7EB",           // neutral gray-200
            },
            "::selection": {
                background: "rgba(37, 99, 235, 0.28)", // corporate blue selection
            },
        },
    },
    semanticTokens: {
        colors: {
            bg: { default: "#0B1220" },
            panel: { default: "#111827" },
            border: { default: "#1F2937" },

            text: { default: "#E5E7EB" },
            muted: { default: "#9CA3AF" },

            accent: { default: "#2563EB" },     // blue
            accent2: { default: "#60A5FA" },    // optional lighter blue

            // keep your old names if you don't want to refactor all components:
            termBg: { default: "#0B1220" },
            termPanel: { default: "#111827" },
            termBorder: { default: "#1F2937" },
            termText: { default: "#E5E7EB" },
            termDim: { default: "#9CA3AF" },
            termAccent: { default: "#2563EB" },

            // if anything references termGlow, make it subtle and blue (not teal)
            termGlow: { default: "rgba(37, 99, 235, 0.18)" },
        },
    },
});
