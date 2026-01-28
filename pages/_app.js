// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import { theme } from '../lib/theme'
import Layout from "../components/Layouts";

if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual'
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
                    <Component {...pageProps} key={router.asPath} />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}
