import styled from 'styled-components'
import { FiMoreVertical } from 'react-icons/fi'

export const Container = styled.div`
  background: var(--gray-900);
  height: 3.75rem;
  padding: 0 2.68rem 0 2.68rem;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
`

export const Logo = styled.div`
  font-weight: bold;
  font-size: 2.1rem;

  > a {
    text-decoration: none;
    color: var(--pink);
  }
`

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.75rem 0 1.75rem;

  > ul {
    list-style-type: none;

    > li {
      display: inline;
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
`

interface IconMoreProps {
  more: boolean
}

export const IconMore = styled(FiMoreVertical)<IconMoreProps>`
  height: 1.5rem;
  width: 1.5rem;
  color: var(${props => (props.more ? '--pink' : '--white')});
  transition: color 0.2s;

  &:hover {
    color: var(--pink);
  }
`
export const OverlayCloseMore = styled.div`
  background: transparent;
  position: absolute;
  z-index: 1;
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
  z-index: 3;
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
