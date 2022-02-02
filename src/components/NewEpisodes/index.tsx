import { CardEpisode } from '../CardEpisode'
import { Container, Title, Content } from './styles'

export function NewEpisodes() {
  return (
    <Container>
      <Title>Lançamentos</Title>
      <Content>
        <CardEpisode />
        <CardEpisode />
        <CardEpisode />
        <CardEpisode />
        <CardEpisode />
      </Content>
    </Container>
  )
}
