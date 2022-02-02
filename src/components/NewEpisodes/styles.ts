import styled from 'styled-components'

export const Container = styled.div`
  margin: 4.5rem auto 0 auto;
  max-width: 73.125rem;
  margin-bottom: 70px;
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
export const More = styled.button`
  color: var(--pink);
  margin-top: 2rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
`
