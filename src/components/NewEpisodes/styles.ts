import styled from 'styled-components'

export const Container = styled.div`
  margin: 4.5rem auto 4.5rem auto;
  max-width: 73.125rem;
`
export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding-left: 0.687rem;
  height: 3.687rem;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1.875rem;
  row-gap: 0.812rem;
`
interface MoreButton {
  haveEpisodes?: boolean
}

export const MoreButton = styled.button<MoreButton>`
  color: var(--pink);
  margin-top: 2rem;
  font-size: 1rem;
  font-weight: 500;
  display: ${props => !props.haveEpisodes && 'none'};
  transition: color 0.2s;
  cursor: pointer;

  &:hover {
    color: var(--white);
  }

  &:disabled {
    cursor: not-allowed;
    color: var(--pink);
  }
`
