import styled from 'styled-components'

export const Info = styled.div`
  position: absolute;
  text-align: center;
  padding: 0.625rem 0.9375rem;
  z-index: 1;
  width: 100%;
  max-height: 44px;
  top: 0;
  background: rgb(68, 71, 90, 0.7);
  transition: max-height 0.3s;
`
export const HoverInfo = styled.div`
  text-align: left;
  color: var(--white);
  font-size: 0.875rem;
  font-weight: normal;
  margin-top: 0.9375rem;
  opacity: 0;
  transition: opacity 0.4s;

  p {
    margin: 5px 0;
  }
`
export const Container = styled.div`
  position: relative;
  max-width: 16.875rem;
  margin: 0 0.9375rem;

  &:hover ${Info} {
    max-height: 100%;
    height: 100%;
    align-items: initial;
  }

  &:hover ${HoverInfo} {
    display: block;
    opacity: 1;
  }
`
export const Img = styled.img`
  max-width: 16.875rem;
  max-height: 25.375rem;
  height: 100%;
  width: 100%;
`
export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--white);
`
