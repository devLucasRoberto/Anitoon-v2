import styled from 'styled-components'
export const Container = styled.div`
  background: var(--gray-900);
  width: 100%;
  height: 6.5rem;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`
export const P = styled.div`
  margin-top: 6px;

  a {
    text-decoration: none;
    color: var(--white);
    transition: color 0.2s;

    &:hover {
      color: var(--pink);
    }
  }
`
