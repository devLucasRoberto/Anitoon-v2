import Link from 'next/link'
import { Container, Img, Info, Title, HoverInfo } from './styles'

export function CardHighlight() {
  return (
    <Container>
      <Link href="/" passHref>
        <a>
          <Img src="img/one-piece.png" alt="" />
          <Info>
            <Title>One Piece</Title>
            <HoverInfo>
              <p>
                Gêneros: Ação, Aventura, Comédia, Drama, Fantasia, Shounen,
                Super Poder
              </p>
              <p>Episódios: 1001 </p>
              <p>Status Atual: Em Exibição </p>
              <p>Autor: Eiichiro Oda </p>
              <p>Estúdio: Toei Animation </p>
              <p>Tipo: Dublado e Legendado </p>
              <p>Temporada: Outono </p>
              <p>Data de Exibição: 20 de out. de 1999 </p>
              <p>Nota:  8.61 (891.6 mil votos)</p>
            </HoverInfo>
          </Info>
        </a>
      </Link>
    </Container>
  )
}
