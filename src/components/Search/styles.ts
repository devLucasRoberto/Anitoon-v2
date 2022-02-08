import styled from 'styled-components'

export const Container = styled.div`
  margin-right: 1.7rem;
  position: relative;
  display: flex;
  justify-content: center;

  input {
    z-index: 11;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`

export const Input = styled.input`
  height: 1.8rem;
  background: var(--gray-300);
  border-radius: 0.312rem;
  width: 12.5rem;
  color: var(--white);
  padding: 0 0.625rem 0 0.625rem;

  &::placeholder {
    color: var(--white);
  }
`

interface ContainerSearchProps {
  show: string
}

export const ContainerSearch = styled.div<ContainerSearchProps>`
  background: var(--gray-300);
  width: 25rem;
  height: 25rem;
  z-index: 11;
  position: absolute;
  margin-top: 2.5rem;
  overflow-y: scroll;
  display: ${props => props.show};

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: var(--gray-900);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--gray-300);
    border-radius: 20px;
    border: 2px solid var(--gray-900);
  }

  @media (max-width: 500px) {
    width: 20rem;
    height: 20rem;
  }
`

export const CloseSearch = styled.div`
  background: transparent;
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const ContentSearch = styled.div`
  padding: 0.625rem;
  transition: background 0.2s;

  &:hover {
    background: var(--gray-900);
  }

  a {
    display: flex;
    text-decoration: none;
    color: var(--white);
  }
`
export const Img = styled.img`
  max-height: 9.7rem;
`
export const Info = styled.div`
  font-size: 0.7rem;
  padding-left: 0.625rem;

  p {
    margin-bottom: 0.125rem;
    line-height: 1.4;

    span {
      font-weight: bold;
    }
  }
`
