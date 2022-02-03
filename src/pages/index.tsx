import { GetStaticProps } from 'next'
import { Header } from '../components/Header'
import { NewEpisodes } from '../components/NewEpisodes'
import { api } from '../services/api'
import { ContainerHighlight, ContentHighlight, Title } from './styles'
import Slider from 'react-slick'
import { CardHighlight } from '../components/CardHighlight'

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
  var settings = {
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1
  }
  return (
    <>
      <Header />
      <ContainerHighlight>
        <Title>Destaques</Title>
        <ContentHighlight>
          <Slider {...settings}>
            <div>
              <CardHighlight />
            </div>
            <div>
              <CardHighlight />
            </div>
            <div>
              <CardHighlight />
            </div>
            <div>
              <CardHighlight />
            </div>
            <div>
              <CardHighlight />
            </div>
            <div>
              <CardHighlight />
            </div>
          </Slider>
        </ContentHighlight>
      </ContainerHighlight>
      <NewEpisodes newEpisodes={newEpisodes} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const newEpisodesResponse = await api.get<NewEpisodes[]>(
    `episodios?_sort=id&_order=desc&_page=1&_limit=4`
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

  return {
    props: { newEpisodes },
    revalidate: 60 * 10 // 10 minute
  }
}
