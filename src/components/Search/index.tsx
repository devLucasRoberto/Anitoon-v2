import { FormEvent, useEffect, useState } from 'react'
import { useDebounce, useDebouncedCallback } from 'use-debounce'
import { api } from '../../services/api'
import {
  Container,
  Input,
  ContainerSearch,
  ContentSearch,
  Img,
  Info
} from './styles'

interface SearchProps {
  show: boolean
  setShow: (value: boolean) => void
}

export function Search({ show, setShow }: SearchProps) {
  const [value, setValue] = useState<string>('')
  const [searchResult, setSearchResult] = useState([])

  const debounced = useDebouncedCallback(value => {
    setValue(value)
  }, 1000)

  useEffect(() => {
    if (value !== '') {
      api
        .get(`animes?q=${value}`)
        .then(response => setSearchResult(response.data))
    } else {
      setSearchResult([])
    }
  }, [value])

  console.log(value)

  function handleSearch(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <Container>
      <Input
        type="text"
        placeholder="Buscar Animes"
        defaultValue={value}
        onSubmit={handleSearch}
        onChange={event => debounced(event.target.value)}
        onSelect={() => setShow(true)}
      />

      <ContainerSearch show={show ? 'block' : 'none'}>
        {searchResult.map(animes => (
          <ContentSearch key={animes.id}>
            <Img src="img/one-piece.png" alt="one-piece" />
            <Info>
              <p>
                Gêneros: Ação, Aventura, Comédia, Drama, Fantasia, Shounen,
                Super Poder
              </p>
              <p>Episódios: 1001 </p>
              <p>Status Atual: Em Exibição </p>
              <p>Autor: Eiichiro Oda </p>
              <p>Estúdio: Toei Animation </p>
              <p>Tipo: Dublado e Legendado </p>
              <p>Temporada: Outono </p>
              <p>Data de Exibição: 20 de out. de 1999 </p>
              <p>Nota:  8.61 (891.6 mil votos)</p>
            </Info>
          </ContentSearch>
        ))}
      </ContainerSearch>
    </Container>
  )
}
