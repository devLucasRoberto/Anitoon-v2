import Link from 'next/link'
import { useRouter } from 'next/router'
import { ActiveLink } from './styles'

interface NavLink {
  href: string
  name: string
  activeLink?: boolean
}

export function NavLink({ href, name, activeLink }: NavLink) {
  const { asPath } = useRouter()

  return (
    <li>
      <Link href={href} passHref>
        <ActiveLink activeLink={activeLink && asPath === href}>
          {name}
        </ActiveLink>
      </Link>
    </li>
  )
}
