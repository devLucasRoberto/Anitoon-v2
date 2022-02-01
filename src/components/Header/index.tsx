import {
  Container,
  Content,
  Logo,
  Nav,
  MoreButton,
  IconMore,
  OverlayCloseMore,
  MoreContent,
  Box,
  BoxSS
} from './styles'
import Link from 'next/link'
import { useState } from 'react'
import { NavLink } from '../NavLink'
import { SocialNetworks } from '../SocialNetworks'
import { Search } from '../Search'

export function Header() {
  const [more, setMore] = useState(false)

  async function showMore(show: boolean) {
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
        <Box>
          <Nav>
            <ul>
              <NavLink href="/" name="Início" activeLink />
              <NavLink
                href="/lista-de-animes"
                name="Lista de animes"
                activeLink
              />
              <NavLink
                href="/temporada"
                name="Animes da Temporada"
                activeLink
              />
            </ul>

            <div>
              <MoreButton onClick={() => showMore(true)}>
                <IconMore more={more} />
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

          <BoxSS>
            <Search />
            <SocialNetworks />
          </BoxSS>
        </Box>
      </Content>
    </Container>
  )
}
