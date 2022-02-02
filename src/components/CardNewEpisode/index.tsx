import Link from 'next/link'
import {
  Container,
  Box,
  Img,
  Tipo,
  Ep,
  Time,
  Info,
  Title,
  Date
} from './styles'

export function CardNewEpisode() {
  return (
    <Container>
      <Link href="/" passHref>
        <a>
          <Box>
            <Img src="img/one-piece-01.png" alt="" />
            <div>
              <section>
                <Tipo>Legendado</Tipo>
                <Ep>900</Ep>
              </section>
              <div>
                <Time>23:50</Time>
              </div>
            </div>
          </Box>
          <Info>
            <Title>One Piece</Title>
            <Date>31 de jul de 2021</Date>
          </Info>
        </a>
      </Link>
    </Container>
  )
}
