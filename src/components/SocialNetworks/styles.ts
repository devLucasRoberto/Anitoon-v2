import styled, { css } from 'styled-components'
import { BsDiscord, BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs'

const iconCss = css`
  height: 24px;
  width: 24px;
  color: var(--white);
  cursor: pointer;
  transition: color 0.2s;
  margin-left: 0.625rem;

  &:hover {
    color: var(--pink);
  }
`

export const DiscordIcon = styled(BsDiscord)`
  ${iconCss}
`

export const TwitterIcon = styled(BsTwitter)`
  ${iconCss}
`

export const InstagramIcon = styled(BsInstagram)`
  ${iconCss}
`

export const FacebookIcon = styled(BsFacebook)`
  ${iconCss}
`
