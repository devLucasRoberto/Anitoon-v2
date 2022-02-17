import { GetStaticProps } from 'next'
import { Params } from 'next/dist/server/router'
import Head from 'next/head'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { NewEpisodes } from '../../components/NewEpisodes'
import { api } from '../../services/api'

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

type Anime = {
  id: number
  title: string
  formato: string
  fonte: string
  generos: string
  episodios: number
  status_atual: string
  autor: string
  estudio: string
  tipo: string
  temporada: string
  classificacao: string
  data_de_exibicao: string
  nota: string
  img: string
  sinopse: string
}

interface AnimeProps {
  newEpisodes: NewEpisodes[]
  anime: Anime[]
}

export default function Anime({ newEpisodes, anime }: AnimeProps) {
  return (
    <>
      <Head>
        <title>{anime[0].title} | Anitton</title>
      </Head>
      <Header />
      <NewEpisodes
        title="Episódios"
        animeId={anime[0].id}
        newEpisodes={newEpisodes}
      />
      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
  const { slug } = params

  const animeResponse = await api.get<Anime[]>(`animes?slug=${slug}`)

  const episodesResponse = await api.get<NewEpisodes[]>(
    `episodios?_sort=id&_order=desc&_page=1&_limit=12&animeId=${animeResponse.data[0].id}`
  )

  const newEpisodes = episodesResponse.data.map(episode => {
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

  const anime = animeResponse.data

  return {
    props: { newEpisodes, anime },
    revalidate: 60 * 10 // 10 minute
  }
}
