import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'

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
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}
export default website
