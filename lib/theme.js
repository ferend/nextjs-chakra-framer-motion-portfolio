// lib/theme.js
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false
    },
    fonts: {
        heading: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
        body: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`
    },
    styles: {
        global: {
            'html, body': {
                bg: '#05060a',
                color: 'rgba(214, 255, 248, 0.92)'
            },
            '::selection': {
                background: 'rgba(0, 255, 208, 0.22)'
            }
        }
    },
    semanticTokens: {
        colors: {
            termBg: { default: '#05060a' },
            termPanel: { default: 'rgba(10, 14, 18, 0.72)' },
            termBorder: { default: 'rgba(0, 255, 208, 0.22)' },
            termGlow: { default: 'rgba(0, 255, 208, 0.18)' },
            termText: { default: 'rgba(214, 255, 248, 0.92)' },
            termDim: { default: 'rgba(214, 255, 248, 0.65)' },
            termAccent: { default: 'rgba(0, 255, 208, 0.95)' }
        }
    }
})
