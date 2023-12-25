import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="gray" p={3} mb={6} align="center">
        Hello I am a softare developer.
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Ferhat Eren Dalçık
          </Heading>
          <p>Business Informatics Graduate, Software Developer</p>
        </Box>
      </Box>
    </Container>
  )
}
export default Page
