import {
  Container,
  Content,
  Logo,
  Nav,
  MoreButton,
  IconMore,
  OverlayCloseMore,
  MoreContent
} from './styles'
import Link from 'next/link'
import { useState } from 'react'
import { NavLink } from '../NavLink'

export function Header() {
  const [more, setMore] = useState(false)

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
            <NavLink href="/" name="Início" activeLink />
            <NavLink
              href="/lista-de-animes"
              name="Lista de animes"
              activeLink
            />
            <NavLink href="/temporada" name="Animes da Temporada" activeLink />
          </ul>

          <div>
            <MoreButton onClick={() => showMore(true)}>
              <IconMore />
            </MoreButton>
            {more && (
              <>
                <OverlayCloseMore onClick={() => showMore(false)} />
                <MoreContent>
                  <NavLink
                    href="/temporada"
                    name="Animes da Temporada"
                    activeLink
                  />
                  <NavLink
                    href="/temporada"
                    name="Animes da Temporada"
                    activeLink
                  />
                  <NavLink
                    href="/temporada"
                    name="Animes da Temporada"
                    activeLink
                  />
                </MoreContent>
              </>
            )}
          </div>
        </Nav>
      </Content>
    </Container>
  )
}
