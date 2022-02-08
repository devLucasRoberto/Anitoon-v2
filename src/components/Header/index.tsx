import {
  Container,
  Content,
  BoxLogo,
  Logo,
  OpenMenuMobile,
  IconOpenMenu,
  IconCloseMenu,
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
  const [menu, setMenu] = useState(false)

  return (
    <Container>
      <Content>
        <BoxLogo>
          <Logo>
            <Link href="/">
              <a>Anitoon</a>
            </Link>
          </Logo>

          <OpenMenuMobile>
            {menu ? (
              <button onClick={() => setMenu(false)}>
                <IconCloseMenu />
              </button>
            ) : (
              <button onClick={() => setMenu(true)}>
                <IconOpenMenu />
              </button>
            )}
          </OpenMenuMobile>
        </BoxLogo>
        <Box menu={menu ? '' : 'none'}>
          {menu && <Search show={show} setShow={setShow} />}
          <Nav>
            <ul>
              <NavLink href="/" name="Início" activeLink />
              <NavLink
                href="/lista-de-animes"
                name="Lista de animes"
                activeLink
              />
              {menu && (
                <>
                  {/* ONLY NAV MOBILE | MORE MENU */}
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
                  <NavLink
                    href="/temporada"
                    name="Animes da Temporada"
                    activeLink
                  />
                </>
              )}
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
            {!menu && <Search show={show} setShow={setShow} />}
            <SocialNetworks />
          </BoxSS>
        </Box>
      </Content>
    </Container>
  )
}
