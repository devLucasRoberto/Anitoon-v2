import { CardNewEpisode } from '../CardNewEpisode'
import { Container, Title, Content } from './styles'

export function NewEpisodes() {
  return (
    <Container>
      <Title>Lançamentos</Title>
      <Content>
        <CardNewEpisode />
        <CardNewEpisode />
        <CardNewEpisode />
        <CardNewEpisode />
        <CardNewEpisode />
      </Content>
    </Container>
  )
}
