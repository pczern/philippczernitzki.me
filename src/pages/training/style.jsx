import styled from 'styled-components'
import Banner, {
  InnerContainer,
  Headline as BHeadline,
  Subheadline as BSubheadline,
} from '../../components/Banner'

export const BannerInner = InnerContainer.extend``

export const BannerHeadline = BHeadline.extend``
export const BannerSubheadline = BSubheadline.extend``
export const BannerContainer = Banner

export const Headline = styled.h2`
  font-size: 1.4em;
  color: ${props => props.theme.primaryHeadline};
  margin-bottom: 2em;
  text-align: center;
  font-family: Hind, sans-serif;
`
