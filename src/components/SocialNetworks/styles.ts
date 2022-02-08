import styled, { css } from 'styled-components'
import { BsDiscord, BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs'

export const Container = styled.div`
  @media (max-width: 768px) {
    width: 135px;
    margin-top: 15px;
  }
`

const iconCss = css`
  height: 24px;
  width: 24px;
  color: var(--white);
  cursor: pointer;
  transition: color 0.2s;
  margin-left: 0.625rem;

  @media (max-width: 768px) {
    height: 20px;
    width: 20px;
  }

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
