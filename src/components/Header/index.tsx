import {
  Container,
  Content,
  Logo,
  Nav,
  NavLink,
  MoreButton,
  IconMore,
  OverlayCloseMore,
  MoreContent
} from './styles'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

export function Header() {
  const [more, setMore] = useState(false)

  const { asPath } = useRouter()

  function showMore(show: boolean) {
    setMore(show)
  }

  return (
    <Container>
      <Content>
        <Logo>
          <Link href="/">
            <a>Anitoon</a>
          </Link>
        </Logo>
        <Nav>
          <ul>
            <li>
              <Link href="/">
                <NavLink activeLink={asPath === '/'}>Início</NavLink>
              </Link>
            </li>
            <li>
              <Link href="/">
                <NavLink>Lista de Animes</NavLink>
              </Link>
            </li>
            <li>
              <Link href="/">
                <NavLink>Calendário</NavLink>
              </Link>
            </li>
          </ul>

          <div>
            <MoreButton onClick={() => showMore(true)}>
              <IconMore />
            </MoreButton>
            {more && (
              <>
                <OverlayCloseMore onClick={() => showMore(false)} />
                <MoreContent>
                  <NavLink activeLink={asPath === '/'}>Temporadas</NavLink>
                  <NavLink>Contato</NavLink>
                </MoreContent>
              </>
            )}
          </div>
        </Nav>
      </Content>
    </Container>
  )
}
