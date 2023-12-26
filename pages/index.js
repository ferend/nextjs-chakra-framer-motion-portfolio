import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg="gray"
        p={5}
        mb={6}
        align="center"
      >
        Welcome to my website 
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Ferhat Eren Dalçık
          </Heading>
          <p>Business Informatics Graduate, Software Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="gray"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/ferhat.jpg"
            alt="Profile Img"
          ></Image>
        </Box>
      </Box>
    </Container>
  )
}
export default Page
