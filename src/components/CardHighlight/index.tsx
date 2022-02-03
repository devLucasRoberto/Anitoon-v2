import Link from 'next/link'
import { Container, Img, Info, Title } from './styles'

export function CardHighlight() {
  return (
    <Container>
      <Link href="/" passHref>
        <a>
          <Img src="img/one-piece.png" alt="" />
          <Info>
            <Title>One Piece</Title>
          </Info>
        </a>
      </Link>
    </Container>
  )
}
