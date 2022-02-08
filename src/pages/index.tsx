import { GetStaticProps } from 'next'
import { Header } from '../components/Header'
import { NewEpisodes } from '../components/NewEpisodes'
import { api } from '../services/api'
import { Section, ContainerHighlight, ContentHighlight, Title } from './styles'
import Slider from 'react-slick'
import { CardHighlight } from '../components/CardHighlight'
import { Footer } from '../components/Footer'

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

type Highlights = {
  id: number
  slug: string
  title: string
  generos: string
  episodios: number
  status_atual: string
  autor: string
  estudio: string
  tipo: string
  temporada: string
  data_de_exibicao: string
  nota: string
  img: string
}

interface HomeProps {
  newEpisodes: NewEpisodes[]
  highlights: Highlights[]
}

export default function Home({ newEpisodes, highlights }: HomeProps) {
  var settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1
  }
  return (
    <>
      <Header />
      <Section>
        <ContainerHighlight>
          <Title>Destaques</Title>
          <ContentHighlight>
            <Slider {...settings}>
              {highlights.map(highlight => (
                <div>
                  <CardHighlight key={highlight.id} data={highlight} />
                </div>
              ))}
            </Slider>
          </ContentHighlight>
        </ContainerHighlight>
        <NewEpisodes newEpisodes={newEpisodes} />
      </Section>

      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const newEpisodesResponse = await api.get<NewEpisodes[]>(
    `episodios?_sort=id&_order=desc&_page=1&_limit=8`
  )

  const highlightsResponse = await api.get<Highlights[]>(
    `animes?highlight=true`
  )

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

  const highlights = highlightsResponse.data.map(ep => {
    return {
      id: ep.id,
      slug: ep.slug,
      title: ep.title,
      generos: ep.generos,
      episodios: ep.episodios,
      status_atual: ep.status_atual,
      autor: ep.autor,
      estudio: ep.estudio,
      tipo: ep.tipo,
      temporada: ep.temporada,
      data: ep.data_de_exibicao,
      nota: ep.nota,
      img: ep.img
    }
  })

  return {
    props: { newEpisodes, highlights },
    revalidate: 60 * 10 // 10 minute
  }
}
