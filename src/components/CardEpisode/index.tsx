import Link from 'next/link'
import {
  Container,
  Box,
  Img,
  Tipo,
  Ep,
  Time,
  Info,
  Title,
  Date
} from './styles'

interface CardEpisodeProps {
  episode: {
    id: number
    slug: string
    animeId: number
    title: string
    tipo: string
    time: string
    ep: string
    img: string
    createdAt: string
  }
}

export function CardEpisode({ episode }: CardEpisodeProps) {
  return (
    <Container>
      <Link href={`videos/${episode.slug}`} passHref>
        <a>
          <Box>
            <Img src={`img/${episode.img}`} alt={episode.title} />
            <div>
              <section>
                <Tipo>{episode.tipo}</Tipo>
                <Ep>{episode.ep}</Ep>
              </section>
              <div>
                <Time>{episode.time}</Time>
              </div>
            </div>
          </Box>
          <Info>
            <Title>{episode.title}</Title>
            <Date>{episode.createdAt}</Date>
          </Info>
        </a>
      </Link>
    </Container>
  )
}
