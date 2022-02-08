import styled from 'styled-components'

export const Container = styled.div`
  background: var(--gray-900);
  width: 100%;
  height: 6.5rem;
  padding: 0 20px;

  @media (max-width: 360px) {
    height: 9rem;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`
export const P = styled.div`
  margin-top: 6px;
  font-size: normal;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  a {
    text-decoration: none;
    color: var(--white);
    transition: color 0.2s;
    font-weight: bold;

    &:hover {
      color: var(--pink);
    }
  }
`
