import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}


// Extend Chakra UI theme to include your custom styles
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#000000', // Set your desired background color here
      },
    },
  },
});


const website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
            <Fonts />
      <Layout router={router}>
      <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
        <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        <Analytics />
      </Layout>
    </ChakraProvider>
  )
}
export default website
