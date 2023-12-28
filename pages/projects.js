import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbAudio from '../public/images/contents/audio-visualize.png'
import thumbSpider from '../public/images/contents/black-spider.png'
import thumbCar from '../public/images/contents/car.png'
import thumbElement from '../public/images/contents/element-pop.png'
import thumbEndless from '../public/images/contents/endless.png'
import thumbGem from '../public/images/contents/gem-hunter.png'
import thumbWord from '../public/images/contents/word.jpg'

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Personal Projects
      </Heading>

      <Heading as="h4" fontSize={14} mb={4}>
        You can play the live game projects by clicking their thumbnail.
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Gem Hunter"
            thumbnail={thumbGem}
            href="https://gem-hunter.netlify.app/"
            githubLink="https://github.com/ferend/gem-hunter"
          />
          <GridItem
            title="Endless Driver (a MongoDB Realm Integration)"
            thumbnail={thumbEndless}
            githubLink="https://github.com/ferend/endless-driver"
          />
          <GridItem
            title="Black Spider"
            thumbnail={thumbSpider}
            href="https://blackspider64.netlify.app/"
            githubLink="https://github.com/ferend/BlackSpider64"
          />

          <GridItem
            title="Word Game"
            thumbnail={thumbWord}
            href="https://wgamejs.netlify.app/"
            githubLink="https://github.com/ferend/word-game"
          />

          <GridItem
            title="Element Pop"
            thumbnail={thumbElement}
            href="https://elementpop.netlify.app/"
            githubLink="https://github.com/ferend/element-pop"
          />
          <GridItem
            title="Unity Audio Visualizer"
            thumbnail={thumbAudio}
            githubLink="https://github.com/ferend/unity-audio-visualizer"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Multiplayer Car Simulator"
            thumbnail={thumbCar}
            githubLink="https://github.com/ferend/multiplayer-racer"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)
export default Projects
