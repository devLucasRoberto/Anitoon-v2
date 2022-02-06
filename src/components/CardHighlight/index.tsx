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
                <span>Gêneros:</span> Ação, Aventura, Comédia, Drama, Fantasia,
                Shounen, Super Poder
              </p>
              <p>
                <span>Episódios:</span> 1001{' '}
              </p>
              <p>
                <span>Status Atual:</span> Em Exibição{' '}
              </p>
              <p>
                <span>Autor:</span> Eiichiro Oda{' '}
              </p>
              <p>
                <span>Estúdio:</span> Toei Animation{' '}
              </p>
              <p>
                <span>Tipo:</span> Dublado e Legendado{' '}
              </p>
              <p>
                <span>Temporada:</span> Outono{' '}
              </p>
              <p>
                <span>Data de Exibição:</span> 20 de out. de 1999{' '}
              </p>
              <p>
                <span>Nota:</span>  8.61 (891.6 mil votos)
              </p>
            </HoverInfo>
          </Info>
        </a>
      </Link>
    </Container>
  )
}
