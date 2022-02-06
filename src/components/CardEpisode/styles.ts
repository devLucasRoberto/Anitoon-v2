import styled from 'styled-components'
import { ImPlay3 } from 'react-icons/im'

export const PlayBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  opacity: 0;
  align-items: center;
  justify-content: center;

  color: white;
  transition: opacity 0.3s;
`

export const PlayIcon = styled(ImPlay3)`
  width: 30px;
  height: 30px;
`
export const Box = styled.div`
  position: relative;
  width: 100%;

  div {
    position: absolute;
    top: 0;
    z-index: 1;
    color: var(--white);
    width: 100%;
    height: calc(100% - 2.6px);
    font-size: 0.875rem;
    transition: background 0.3s;

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
export const Container = styled.div`
  cursor: pointer;

  a {
    text-decoration: none;
  }

  &:hover ${PlayBox} {
    display: flex;
    opacity: 1;
  }

  &:hover ${Box} {
    div {
      background: rgb(68, 71, 90, 0.2);
    }
  }
`

export const Img = styled.img`
  width: 100%;
  max-height: 10.125rem;
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
