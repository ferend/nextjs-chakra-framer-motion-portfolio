// components/Scanlines.js
import { Box } from '@chakra-ui/react'

export default function Scanlines() {
    return (
        <>
            {/* soft vignette, top */}
            <Box
                pointerEvents="none"
                position="fixed"
                inset="0"
                bg="radial-gradient(1200px 700px at 50% 20%, rgba(192,132,252,0.12), transparent 60%)"
                opacity={0.9}
                zIndex={0}
            />
            {/* second glow layer, bottom — magenta undertone for depth */}
            <Box
                pointerEvents="none"
                position="fixed"
                inset="0"
                bg="radial-gradient(1000px 600px at 50% 100%, rgba(244,114,182,0.08), transparent 65%)"
                opacity={0.85}
                zIndex={0}
            />
            {/* scanlines */}
            <Box
                pointerEvents="none"
                position="fixed"
                inset="0"
                zIndex={1}
                opacity={0.10}
                mixBlendMode="soft-light"
                bgImage="repeating-linear-gradient(to bottom, rgba(255,255,255,0.22), rgba(255,255,255,0.22) 1px, transparent 1px, transparent 3px)"
            />
        </>
    )
}