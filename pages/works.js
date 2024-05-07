import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbLol from '../public/images/works/lol.png'
import thumbBubble from '../public/images/works/bubble.jpeg'
import thumbBubble3d from '../public/images/works/bubble3d.jpg'
import thumbStray from '../public/images/works/stray.jpeg'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Container>
        <Layout title="Works">
        <Heading as="h3" fontSize={20} mb={4}>
          Professional Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="lol"
              title="OMG Fashion House"
              thumbnail={thumbLol}
              link={
                'https://play.google.com/store/apps/details?id=com.azerion.games.lol.suprise.dollhouse'
              }
            ></WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="bubble"
              title="Bubble Game Deluxe"
              thumbnail={thumbBubble}
              link={'https://gamedistribution.com/games/bubble-game-3-deluxe'}
            ></WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="bubble3d"
              title="Bubble Shooter 3D"
              thumbnail={thumbBubble3d}
              link={
                'https://drive.google.com/file/d/1Ln3z5pyUixX07YJh9TtvNaVIiWVo3rVR/view'
              }
            ></WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="bubble3d"
              title="Stray Brothers"
              thumbnail={thumbStray}
              link={'https://gamedistribution.com/games/stray-brothers'}
            ></WorkGridItem>
          </Section>
        </SimpleGrid>
      </Layout>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>
    </Container>
  )
}

export default Works
