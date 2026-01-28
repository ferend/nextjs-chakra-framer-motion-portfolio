// components/Scanlines.js
import { Box } from '@chakra-ui/react'

export default function Scanlines() {
    return (
        <>
            {/* soft vignette */}
            <Box
                pointerEvents="none"
                position="fixed"
                inset="0"
                bg="radial-gradient(1200px 700px at 50% 20%, rgba(0,255,208,0.10), transparent 60%)"
                opacity={0.9}
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
