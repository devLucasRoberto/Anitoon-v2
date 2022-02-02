import { CardEpisode } from '../CardEpisode'
import { Container, Title, Content } from './styles'

interface NewEpisodesProps {
  newEpisodes: Array<{
    id: number
    slug: string
    animeId: number
    title: string
    tipo: string
    time: string
    ep: string
    img: string
    createdAt: string
  }>
}

export function NewEpisodes({ newEpisodes }: NewEpisodesProps) {
  return (
    <Container>
      <Title>Lançamentos</Title>
      <Content>
        {newEpisodes.map(episode => (
          <CardEpisode episode={episode} />
        ))}
      </Content>
    </Container>
  )
}
