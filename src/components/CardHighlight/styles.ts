import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  max-width: 16.875rem;
  margin: 0 0.9375rem;
`
export const Img = styled.img`
  max-width: 16.875rem;
  max-height: 25.375rem;
  height: 100%;
  width: 100%;
`
export const Info = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  z-index: 1;
  width: 100%;
  top: 0;
  background: rgb(68, 71, 90, 0.7);
`
export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--white);
`
