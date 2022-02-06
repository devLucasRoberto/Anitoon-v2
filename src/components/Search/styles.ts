import styled from 'styled-components'

export const Container = styled.div`
  margin-right: 1.7rem;
`

export const Input = styled.input`
  height: 1.8rem;
  background: var(--gray-300);
  border-radius: 0.312rem;
  width: 200px;
  color: var(--white);
  padding: 0 0.625rem 0 0.625rem;

  &::placeholder {
    color: var(--white);
  }
`
