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
  BoxSS,
  CloseSearch
} from './styles'
import Link from 'next/link'
import { useState } from 'react'
import { NavLink } from '../NavLink'
import { SocialNetworks } from '../SocialNetworks'
import { Search } from '../Search'

export function Header() {
  const [more, setMore] = useState<boolean>(false)
  const [show, setShow] = useState(false)

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
              <MoreButton onClick={() => setMore(true)}>
                <IconMore more={more ? '--pink' : '--white'} />
              </MoreButton>
              {more && (
                <>
                  <OverlayCloseMore onClick={() => setMore(false)} />
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
            {show && <CloseSearch onClick={() => setShow(false)} />}
            <Search show={show} setShow={setShow} />
            <SocialNetworks />
          </BoxSS>
        </Box>
      </Content>
    </Container>
  )
}
