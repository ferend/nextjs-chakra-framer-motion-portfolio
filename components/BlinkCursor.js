// components/BlinkCursor.js
import { MotionBox } from './motion'

export default function BlinkCursor() {
    return (
        <MotionBox
            as="span"
            display="inline-block"
            ml={2}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        >
            ▋
        </MotionBox>
    )
}
