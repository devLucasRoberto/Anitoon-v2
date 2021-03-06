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
  title: string
  animeId?: number
}

export function NewEpisodes({ newEpisodes, title, animeId }: NewEpisodesProps) {
  const [episodes, setEpisodes] = useState(newEpisodes)
  const [page, setPage] = useState(2)
  const [loading, setLoading] = useState(false)
  const [haveEpisodes, setHaveEpisodes] = useState(true)

  async function handlePagination() {
    setLoading(true)

    function type() {
      if (animeId) {
        return `&animeId=${animeId}`
      }
    }

    const newEpisodesResponse = await api.get(
      `episodios?_sort=id&_order=desc&_page=${page}&_limit=4${type()}`
    )

    if (newEpisodesResponse.data.length > 0) {
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
    } else {
      setLoading(false)
      setHaveEpisodes(false)
    }
  }

  return (
    <Container>
      <Title>{title}</Title>
      <Content>
        {episodes.map(episode => (
          <CardEpisode key={episode.id} episode={episode} />
        ))}
      </Content>
      {loading ? (
        <MoreButton disabled haveEpisodes>
          Carregando...
        </MoreButton>
      ) : (
        <MoreButton
          onClick={() => handlePagination()}
          haveEpisodes={haveEpisodes}
        >
          Carregar mais
        </MoreButton>
      )}
    </Container>
  )
}
