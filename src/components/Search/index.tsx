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

type AnimeData = {
  id: number
  slug: string
  title: string
  generos: string
  episodios: number
  status_atual: string
  autor: string
  estudio: string
  tipo: string
  temporada: string
  data_de_exibicao: string
  nota: string
  img: string
}
interface SearchProps {
  show: boolean
  setShow: (value: boolean) => void
  animeData: AnimeData[]
}

export function Search({ show, setShow, animeData }: SearchProps) {
  const [value, setValue] = useState<string>('')
  const [searchResult, setSearchResult] = useState<typeof animeData>([])

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
        {searchResult.map(anime => (
          <ContentSearch key={anime.id}>
            <Link href={`/anime/${anime.slug}`} passHref>
              <a>
                <Img src={`img/${anime.img}`} alt={anime.title} />

                <Info>
                  <p>
                    <span>Nome:</span> {anime.title}
                  </p>
                  <p>
                    <span>Episódios:</span> {anime.episodios}
                  </p>
                  <p>
                    <span>Status Atual:</span> {anime.status_atual}
                  </p>
                  <p>
                    <span>Autor:</span> {anime.autor}
                  </p>
                  <p>
                    <span>Estúdio:</span> {anime.estudio}
                  </p>
                  <p>
                    <span>Tipo:</span> {anime.tipo}
                  </p>
                  <p>
                    <span>Temporada:</span> {anime.temporada}
                  </p>
                  <p>
                    <span>Data de Exibição:</span> {anime.data_de_exibicao}
                  </p>
                  <p>
                    <span>Nota:</span> {anime.nota}
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
