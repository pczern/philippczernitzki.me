import styled from 'styled-components'

export const BannerInner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
  align-items: left;
`

export const Headline = styled.h2`
  font-size: 1.4em;
  color: ${props => props.theme.primaryHeadline};
  margin-bottom: 2em;
  text-align: center;
  font-family: Hind, sans-serif;
`
