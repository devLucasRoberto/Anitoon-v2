import styled from 'styled-components'

export const Info = styled.div`
  position: absolute;
  padding: 0.625rem 0.9375rem;
  z-index: 1;
  width: 100%;
  height: 44px;
  top: 0;
  background: rgb(68, 71, 90, 0.7);
  transition: max-height 0.3s;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0.5rem 0.9375rem;
    max-height: 35px;
  }

  @media (max-width: 485px) {
    padding: 0.5rem 0.9375rem;
    max-height: 35px;
  }
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
    line-height: 1.4;

    span {
      font-weight: bold;
    }
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

  @media (max-width: 800px) {
    &:hover ${Info} {
      width: 100%;
      height: 44px;
    }

    &:hover ${HoverInfo} {
      display: none;
    }
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 485px) {
    font-size: 0.9rem;
  }
`
