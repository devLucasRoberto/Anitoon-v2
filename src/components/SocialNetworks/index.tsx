import Link from 'next/link'
import {
  Container,
  DiscordIcon,
  TwitterIcon,
  InstagramIcon,
  FacebookIcon
} from './styles'

export function SocialNetworks() {
  return (
    <Container>
      <Link href="/" passHref>
        <DiscordIcon />
      </Link>
      <Link href="/" passHref>
        <TwitterIcon />
      </Link>
      <Link href="/" passHref>
        <InstagramIcon />
      </Link>
      <Link href="/" passHref>
        <FacebookIcon />
      </Link>
    </Container>
  )
}
