import Head from "next/head";
import Navbar from "../navbar";
import WorkBench from "../workBench";

import { Box , Container } from "@chakra-ui/react";

const Main = ({children, router}) => {
    return (
    <Box as="main" pb={8}>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:title" content="F. Eren Dalcik - Homepage" />
        </Head>
        
        <Navbar path={router.asPath} />
        <WorkBench/>

        <Container maxW="container.md" pt={14}>
            {children}
        </Container>
    </Box>
  )
}

export default Main