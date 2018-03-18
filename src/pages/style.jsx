import styled from 'styled-components'
import TextBox from '../components/TextBox'
import {
  InnerContainer as NonStyledCenteredInner,
  Headline as NonStyledBannerHeadline,
  Subheadline as NonStyledBannerSubheadline,
} from '../components/Banner'

export const BannerHeadline = NonStyledBannerHeadline.extend``
export const BannerSubheadline = NonStyledBannerSubheadline.extend`
  margin-bottom: 1.4em;
`
export const BannerInner = NonStyledCenteredInner.extend``

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContactButton = styled.button`
  background-color: ${props => props.theme.primary};
  display: inline-block;
  color: #fff;
  padding: 0.9em 3.75%;
  font-size: 0.98em;
  border: none;
  cursor: pointer;
  margin: 0 2%;
  border-radius: 0.2em;
  font-family: 'Roboto';
  font-weight: 300;
  letter-spacing: 1px;
`

export const EMailButton = styled.button`
  color: #3d3d3d;
  line-height: 1.8;
  font-size: 1em;
  font-weight: 300;
  letter-spacing: 1px;
  i {
    font-size: 1.3em;
    vertical-align: middle;
    margin-right: 10px;
  }
`

export const TopTextBox = styled(TextBox)`
  &:nth-child(odd) {
    padding: 0 2.5% 0 4%;
  }
  &:nth-child(even) {
    padding: 0 4% 0 2.5%;
  }
`

export const Headline = styled.h2`
  font-size: 1.4em;
  color: ${props => props.theme.primaryHeadline};
  margin-bottom: 2em;
  text-align: center;
  font-family: Hind, sans-serif;
`

export const Project = styled.div`
  height: 200px;
  width: 100%;
  background-color: #aaa;
  margin: 0 2.5%;
`
export const Text = styled.p`
  color: ${props => props.theme.primaryText};
`
