import Link from 'next/link'
import { Container, Content, P } from './styles'

export function Footer() {
  return (
    <Container>
      <Content>
        <P>
          <Link href="/" passHref>
            <a>Termos de Uso </a>
          </Link>
          -
          <Link href="/" passHref>
            <a> DMCA</a>
          </Link>
        </P>
        <P>
          Esse site não hospeda nenhum vídeo em seu servidor. Todo o conteúdo é
          disponibilizado por terceiros não afiliados.
        </P>
        <P>
          <span>© 2021 Anitoon - Todos os Direitos Reservados</span>
        </P>
      </Content>
    </Container>
  )
}
