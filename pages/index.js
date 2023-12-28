import {
  Container,
  Box,
  Heading,
  Image,
  Button,
  List,
  ListItem,
  Link,
  Icon
} from '@chakra-ui/react'

import NextLink from 'next/link'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg="#ffffff40"
          p={4}
          mb={9}
          my={15}
          align="center"
        >
          Welcome to my website
        </Box>

        
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Ferhat Eren Dalçık
            </Heading>
            <p>
              Business Informatics Graduate, Software Developer, IT Specialist
            </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 8, md: 0 }}
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
              src="/images/ferhat2.jpg"
              alt="Profile Img"
            ></Image>
          </Box>
        </Box>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Links
          </Heading>

          <List>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/erendalcik/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  erendalcik
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/ferend" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  ferend
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/erendalcik" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  erendalcik
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            As a Software Developer, I had the opportunity to work as a Game
            Developer on various projects in my other job experiences that
            challenged me creatively and technically. I develop single and
            multiplayer HTML5 and mobile games, using Unity, Phaser, and PIXI
            frameworks. I graduated with a Bachelor`&apos;s in Business Informatics
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
            Graduated from Bachelor&apos;s Degree, Business Informatics at Department
            of Business
          </BioSection>
          <BioSection>
            <BioYear>2021 to 2023</BioYear>
            Worked as a Game Developer at{' '}
            <NextLink legacyBehavior href="https://www.azerion.com" passHref>
              <a style={{ color: 'teal', textDecoration: 'underline' }}>
                Azerion
              </a>
            </NextLink>
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Certifications
          </Heading>
          <Paragraph>
            <Image
              my={4}
              display="inline-block"
              borderRadius="full"
              src="/images/contents/badge.svg"
              alt="Profile Img"
            ></Image>
          </Paragraph>

          <BioSection>
            <BioYear>•</BioYear>
            Business Metrics for Data-Driven Companies{' '}
            <NextLink
              legacyBehavior
              href="https://www.coursera.org/account/accomplishments/verify/FS8ELVXGH8KB?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
              passHref
            >
              <a style={{ color: 'teal' }}>(Credential)</a>
            </NextLink>
          </BioSection>

          <BioSection>
            <BioYear>•</BioYear>
            Technical Support Training by Google{' '}
            <NextLink
              legacyBehavior
              href="https://www.coursera.org/account/accomplishments/verify/HQTUVRZVAFAG?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course"
              passHref
            >
              <a style={{ color: 'teal' }}>(Credential)</a>
            </NextLink>
          </BioSection>
          <BioSection>
            <BioYear>•</BioYear>
            IBM Data Science Orientation{' '}
            <NextLink
              legacyBehavior
              href="https://www.credly.com/badges/a66754f0-64a5-4220-8d2d-d7e153640737/linked_in"
              passHref
            >
              <a style={{ color: 'teal' }}>(Credential)</a>
            </NextLink>
          </BioSection>
        </Section>
      </Container>
    </Layout>
  )
}
export default Page
