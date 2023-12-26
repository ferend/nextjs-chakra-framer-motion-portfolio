import { ChakraProvider } from "@chakra-ui/react";
import Layout from '../components/layouts/main'
import Fonts
 from "../components/fonts";
const website = ({Component , pageProps, router}) => {
    return (
        <ChakraProvider>
            <Fonts/>
            <Layout router={router}>
            <Component {...pageProps} key = {router.route} />
            </Layout>
        </ChakraProvider>
    )
}
export default website