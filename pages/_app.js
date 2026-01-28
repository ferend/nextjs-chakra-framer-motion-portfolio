import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { theme } from '../lib/theme'
import Layout from '../components/Layouts'

if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual'
}

const pageVariants = {
    initial: { opacity: 0, y: 10, filter: 'blur(2px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    exit: { opacity: 0, y: -8, filter: 'blur(2px)' }
}

export default function App({ Component, pageProps, router }) {
    return (
        <ChakraProvider theme={theme}>
            <Layout path={router.pathname}>
                <AnimatePresence
                    mode="wait"
                    initial={true}
                    onExitComplete={() => {
                        if (typeof window !== 'undefined') window.scrollTo({ top: 0 })
                    }}
                >
                    <motion.div
                        key={router.asPath}
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                    >
                        <Component {...pageProps} />
                    </motion.div>
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}
