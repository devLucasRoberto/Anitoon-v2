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
  createdAt: string
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
  const newEpisodesResponse = await api.get<NewEpisodes>('episodios')

  const newEpisodes = newEpisodesResponse.data

  return {
    props: { newEpisodes },
    revalidate: 60 * 10 // 10 minute
  }
}
