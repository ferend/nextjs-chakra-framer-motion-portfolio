import NextLink from 'next/link'
import Image from 'next/image'
import {
  Box,
  Center,
  Text,
  LinkBox,
  LinkOverlay,
  Button
} from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail, githubLink }) => (
  <Box w="100%" textAlign="center" >
    <LinkBox cursor="pointer">
      <Center>
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
          style={{ width: '300px', height: '200px' }} // Set a fixed size for the thumbnail
          objectFit="contain"
        />
      </Center>
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
    <Button
      as={NextLink}
      href={githubLink}
      scroll={false}
      colorScheme="teal"
      mt={2}
    >
      Source Code
    </Button>
  </Box>
)

export const WorkGridItem = ({
  children,
  category = 'works',
  id,
  title,
  thumbnail,
  link
}) => (
  <Box w="100%" textAlign="center">
    <NextLink href={link}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          objectFit="contain"
        />
        <LinkOverlay as="div" href={`/${category}/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)
export const GridItemStyle = () => (
  <Global
    styles={`
        .grid-item-thumbnail {
          border-radius: 12px;
        }
      `}
  />
)
