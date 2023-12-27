import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button
} from '@chakra-ui/react'

import NextLink from 'next/link'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Layout>
      <Container mt={8}>
        <Box borderRadius="lg" bg="#ffffff40" p={4} mb={9} align="center">
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
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            As a Software Developer, I had the opportunity to work as a Game
            Developer on various projects in my other job experiences that
            challenged me creatively and technically. I develop single and
            multiplayer HTML5 and mobile games, using Unity, Phaser, and PIXI
            frameworks. I graduated with a Bachelor's in Business Informatics
            from İstanbul Bilgi Üniversitesi in June 2021. I gained a solid
            foundation in programming, data analysis, and business processes
            during my studies.
          </Paragraph>
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/works"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              My portfolio
            </Button>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1999</BioYear>
            Born in Tekirdag, Turkey
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Graduated from Bachelor's Degree, Business Informatics at Department
            of Business
          </BioSection>
          <BioSection>
            <BioYear> 2021 to 2023</BioYear>
            Worked as a Game Developer at Azerion
          </BioSection>
        </Section>
      </Container>
    </Layout>
  )
}
export default Page
