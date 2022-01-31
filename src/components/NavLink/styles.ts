import styled from 'styled-components'

interface ActiveLinkProps {
  activeLink?: boolean
}

export const ActiveLink = styled.a<ActiveLinkProps>`
  color: var(${props => (props.activeLink ? '--pink' : '--white')});
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s;
  cursor: pointer;

  &:hover {
    color: var(--pink);
  }
`
