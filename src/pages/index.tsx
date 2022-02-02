import { GetStaticProps } from 'next'
import { Header } from '../components/Header'
import { NewEpisodes } from '../components/NewEpisodes'
import { api } from '../services/api'

type NewEpisodes = {
  id: number
  slug: string
  animeId: number
  title: string
  tipo: string
  time: string
  ep: string
  img: string
  createdAt: number
}

interface HomeProps {
  newEpisodes: NewEpisodes[]
}

export default function Home({ newEpisodes }: HomeProps) {
  return (
    <>
      <Header />
      <NewEpisodes newEpisodes={newEpisodes} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const newEpisodesResponse = await api.get<NewEpisodes[]>('episodios')

  const newEpisodes = newEpisodesResponse.data.map(episode => {
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

  return {
    props: { newEpisodes },
    revalidate: 60 * 10 // 10 minute
  }
}
