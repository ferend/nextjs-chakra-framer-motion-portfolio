import Link from 'next/link'
import { Image, Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'


const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transition: 800ms ease;
    transform: rotate(360deg);
  }
`
const Logo = () => {
    const footPrint = `/images/ferhat${useColorModeValue('', '-dark')}.jpg `
  return (
    <Link href="/">
            <LogoBox>
                <Image src = {footPrint} width={10} height={10} alt='logo'/>
                <Text
                    color = {useColorModeValue('gray.800','whiteAlpha.900')}
                    fontFamily = 'Arial'
                    fontWeight="bold"
                    ml={3}
                >
                    Ferhat Eren Dalçık
                </Text>
            </LogoBox>
    </Link>
  )
}

export default Logo