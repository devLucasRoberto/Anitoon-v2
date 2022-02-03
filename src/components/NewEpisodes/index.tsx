import { useState } from 'react'
import { api } from '../../services/api'
import { CardEpisode } from '../CardEpisode'
import { Container, Title, Content, MoreButton } from './styles'

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
    createdAt: number
  }>
}

export function NewEpisodes({ newEpisodes }: NewEpisodesProps) {
  const [episodes, setEpisodes] = useState(newEpisodes)
  const [page, setPage] = useState(2)
  const [loading, setLoading] = useState(false)

  async function handlePagination() {
    setLoading(true)
    const newEpisodesResponse = await api.get(
      `episodios?_sort=id&_order=desc&_page=${page}&_limit=4`
    )

    const EpisodesFormatted = newEpisodesResponse.data.map((episode: any) => {
      return {
        id: episode.id,
        slug: episode.slug,
        animeId: episode.animeId,
        title: episode.title,
        tipo: episode.tipo,
        time: episode.time,
        ep: episode.ep,
        img: episode.img,
        createdAt: new Intl.DateTimeFormat('pt-BR', {
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        }).format(new Date(episode.createdAt))
      }
    })

    setEpisodes([...episodes, ...EpisodesFormatted])
    setLoading(false)
    setPage(page + 1)
  }

  return (
    <Container>
      <Title>Lançamentos</Title>
      <Content>
        {episodes.map(episode => (
          <CardEpisode key={episode.id} episode={episode} />
        ))}
      </Content>
      {loading ? (
        <MoreButton disabled>Carregando...</MoreButton>
      ) : (
        <MoreButton onClick={() => handlePagination()}>
          Carregar mais
        </MoreButton>
      )}
    </Container>
  )
}
