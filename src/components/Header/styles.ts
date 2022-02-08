import styled from 'styled-components'
import { FiMoreVertical } from 'react-icons/fi'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export const Container = styled.div`
  background: var(--gray-900);
  height: 3.75rem;
  padding: 0 2.68rem 0 2.68rem;

  @media (max-width: 1024px) {
    padding: 0 1rem 0 1rem;
  }

  @media (max-width: 768px) {
    position: relative;
    padding: 0;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
`
export const BoxLogo = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-left: 0.625rem;
    margin-right: 0.625rem;
  }
`

export const Logo = styled.div`
  font-weight: bold;
  font-size: 2.1rem;

  > a {
    text-decoration: none;
    color: var(--pink);
  }
`

export const OpenMenuMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`

export const IconOpenMenu = styled(AiOutlineMenu)`
  width: 25px;
  height: 25px;
  color: var(--white);
`

export const IconCloseMenu = styled(AiOutlineClose)`
  width: 25px;
  height: 25px;
  color: var(--white);
`

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.75rem 0 1.75rem;

  > ul {
    list-style-type: none;
    text-align: left;

    > li {
      display: inline;

      @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        margin-bottom: 0.812rem;
        margin-right: 1.2rem;
      }
    }

    > li + li {
      padding-left: 1rem;
    }
  }

  div {
    display: flex;
    justify-content: center;
  }
`

export const MoreButton = styled.button`
  cursor: pointer;
  margin-top: 0.187rem;

  @media (max-width: 768px) {
    display: none;
  }
`

interface IconMoreProps {
  more: string
}

export const IconMore = styled(FiMoreVertical)<IconMoreProps>`
  height: 1.5rem;
  width: 1.5rem;
  color: var(${props => props.more});
  transition: color 0.2s;

  &:hover {
    color: var(--pink);
  }
`
export const OverlayCloseMore = styled.div`
  background: transparent;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
`

export const MoreContent = styled.div`
  position: absolute;
  margin-top: 2.18rem;
  background: var(--gray-300);
  flex-direction: column;
  z-index: 11;
  color: var(--white);
  font-size: 1rem;
  text-align: center;
  padding: 0.625rem;
  border-radius: 0.437rem;
  list-style-type: none;

  > a {
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: var(--pink);
    }
  }

  > li + li {
    margin-top: 0.35rem;
  }
`
interface BoxProps {
  menu: string
}

export const Box = styled.div<BoxProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    position: absolute;
    z-index: 10;
    background: var(--gray-900);
    height: 100vh;
    top: 0;
    bottom: 0;
    width: 100%;
    margin-top: 3.75rem;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    padding-top: 20px;
    display: ${props => props.menu};
  }
`

export const BoxSS = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
  }
`
export const CloseSearch = styled.div`
  background: transparent;
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
