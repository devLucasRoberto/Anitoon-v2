import { FormEvent, useState } from 'react'
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
  const [value, setValue] = useState('')

  function handleSearch(event: FormEvent) {
    event.preventDefault()
  }
  console.log(value)

  return (
    <Container>
      <Input
        type="text"
        placeholder="Buscar Animes"
        value={value}
        onSubmit={handleSearch}
        onChange={event => setValue(event.target.value)}
        onSelect={() => setShow(true)}
      />

      <ContainerSearch show={show ? 'block' : 'none'}>
        <ContentSearch>
          <Img src="img/one-piece.png" alt="one-piece" />
          <Info>
            <p>
              Gêneros: Ação, Aventura, Comédia, Drama, Fantasia, Shounen, Super
              Poder
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

        <ContentSearch>
          <Img src="img/one-piece.png" alt="one-piece" />
          <Info>
            <p>
              Gêneros: Ação, Aventura, Comédia, Drama, Fantasia, Shounen, Super
              Poder
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

        <ContentSearch>
          <Img src="img/one-piece.png" alt="one-piece" />
          <Info>
            <p>
              Gêneros: Ação, Aventura, Comédia, Drama, Fantasia, Shounen, Super
              Poder
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
      </ContainerSearch>
    </Container>
  )
}
