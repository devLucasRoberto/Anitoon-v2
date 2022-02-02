import styled from 'styled-components'

export const Container = styled.div`
  cursor: pointer;

  a {
    text-decoration: none;
  }
`
export const Box = styled.div`
  position: relative;
  width: 100%;

  div {
    position: absolute;
    top: 0;
    z-index: 1;
    color: var(--white);
    height: 100%;
    width: 100%;
    font-size: 0.875rem;

    > section {
      display: flex;
      justify-content: space-between;
      padding: 0.625rem;
    }

    > div {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      padding: 0.625rem;
    }
  }
`
export const Img = styled.img`
  width: 100%;
  max-height: 162px;
`
export const Tipo = styled.p``
export const Ep = styled.p``
export const Time = styled.p``
export const Info = styled.div`
  padding: 0.312rem;
`
export const Title = styled.p`
  font-size: 0.937rem;
  color: var(--white);
`
export const Date = styled.p`
  color: var(--white-200);
  font-size: 0.812rem;
  margin-top: 0.312rem;
`
