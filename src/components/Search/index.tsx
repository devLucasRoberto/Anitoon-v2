import Link from 'next/link'
import { FormEvent, useEffect, useState } from 'react'
import { useDebounce, useDebouncedCallback } from 'use-debounce'
import { api } from '../../services/api'
import {
  Container,
  Input,
  ContainerSearch,
  Loading,
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
  }, 500)

  useEffect(() => {
    if (value !== '') {
      api
        .get(`animes?q=${value}`)
        .then(response => setSearchResult(response.data))
    }
  }, [value])

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
          <ContentSearch>
            <Link href="/" passHref>
              <a>
                <Img src="img/one-piece.png" alt="one-piece" />

                <Info>
                  <p>
                    <span>Nome:</span> One Piece
                  </p>
                  <p>
                    <span>Episódios:</span> 1001
                  </p>
                  <p>
                    <span>Status Atual:</span> Em Exibição
                  </p>
                  <p>
                    <span>Autor:</span> Eiichiro Oda
                  </p>
                  <p>
                    <span>Estúdio:</span> Toei Animation
                  </p>
                  <p>
                    <span>Tipo:</span> Dublado e Legendado
                  </p>
                  <p>
                    <span>Temporada:</span> Outono
                  </p>
                  <p>
                    <span>Data de Exibição:</span> 20 de out. de 1999
                  </p>
                  <p>
                    <span>Nota:</span>  8.61 (891.6 mil votos)
                  </p>
                </Info>
              </a>
            </Link>
          </ContentSearch>
        ))}
      </ContainerSearch>
    </Container>
  )
}
