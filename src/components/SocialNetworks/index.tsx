import Link from 'next/link'
import { DiscordIcon, TwitterIcon, InstagramIcon, FacebookIcon } from './styles'

export function SocialNetworks() {
  return (
    <div>
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
    </div>
  )
}
