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
import Skills from "../components/Skills";
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
              Software Developer, IT Infrastructure Specialist
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
            I hold a background in Business Informatics and have gained practical experience through my career in IT 
            system and infrastructure administration. As a Software Developer, I specialize in creating scalable backend services,
            integrating databases, and enhancing user interfaces, with expertise in C#, .NET, and JavaScript technologies. 
            My experience includes developing mobile and web applications, implementing microservices, and utilizing 
            containerization tools.
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
            Graduated from Bachelor&apos;s Degree, Business Informatics
          </BioSection>
          <BioSection>
            <BioYear>2021 to 2023</BioYear>
             Software Developer at{' '}
            <NextLink legacyBehavior href="https://www.azerion.com" passHref>
              <a style={{ color: 'teal', textDecoration: 'underline' }}>
                Azerion
              </a>
            </NextLink>
          </BioSection>
          <BioSection>
            <BioYear>Currently</BioYear>
            Software and IT Infrastructure Specialist at {' '}
            <NextLink legacyBehavior href="https://viennalife.com.tr/" passHref>
              <a style={{ color: 'teal', textDecoration: 'underline' }}>
                Viennaife
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

            AWS Cloud Practitioner Essentials by AWS{' '}
            <NextLink
                legacyBehavior
                href="https://www.coursera.org/account/accomplishments/verify/625ZZOYRJKNY"
                passHref
            >
              <a style={{ color: 'teal' }}>(Credential)</a>
            </NextLink>
          </BioSection>
          <BioSection>
            <BioYear>•</BioYear>
            DevOps Professional Certificate by PagerDuty{' '}
            <NextLink
                legacyBehavior
                href="https://www.linkedin.com/learning/certificates/f4f6c84a76d13d9bbb5ed0d7feef45c10bd2f98463a96adcd389ee67fdfddcf5"
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
        <Skills />
      </Container>
    </Layout>
  )
}
export default Page
