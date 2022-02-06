import Link from 'next/link'
import { Container, Img, Info, Title, HoverInfo } from './styles'

interface CardHighlightProps {
  data: {
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
}

export function CardHighlight({ data }: CardHighlightProps) {
  return (
    <Container>
      <Link href="/" passHref>
        <a>
          <Img src={`img/${data.img}`} alt={data.title} />
          <Info>
            <Title>{data.title}</Title>
            <HoverInfo>
              <p>
                <span>Gêneros:</span> {data.generos}
              </p>
              <p>
                <span>Episódios:</span> {data.episodios}
              </p>
              <p>
                <span>Status Atual:</span> {data.status_atual}
              </p>
              <p>
                <span>Autor:</span> {data.autor}
              </p>
              <p>
                <span>Estúdio:</span> {data.estudio}
              </p>
              <p>
                <span>Tipo:</span> {data.tipo}
              </p>
              <p>
                <span>Temporada:</span> {data.temporada}
              </p>
              <p>
                <span>Data de Exibição:</span> {data.data_de_exibicao}
              </p>
              <p>
                <span>Nota:</span> {data.nota}
              </p>
            </HoverInfo>
          </Info>
        </a>
      </Link>
    </Container>
  )
}
