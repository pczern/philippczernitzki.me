import React from 'react'
import { withTheme } from 'styled-components'

import { BoxedContainer, FullContainer } from '../../components/Container'
import ReactStart from './ReactStart.png'

import {
  BannerContainer,
  BannerInner,
  BannerHeadline,
  BannerSubheadline,
  Headline,
} from './style'

const Training = () => (
  <FullContainer>
    <BannerContainer
      height={300}
      color="rgba(212, 0, 0, 0.63)"
      src={ReactStart}
    >
      <BannerInner>
        <div>
          <BannerHeadline>Lerne React von einem Experten</BannerHeadline>
          <BannerSubheadline>Webanwendungen der Zukunft</BannerSubheadline>
        </div>
      </BannerInner>
    </BannerContainer>
    <BoxedContainer>
      <Headline>Video Tutorial</Headline>
      <iframe
        title="Youtube"
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/3ndGumxHXvo"
        frameBorder="0"
        allowFullScreen
      />
    </BoxedContainer>
  </FullContainer>
)

export default withTheme(Training)
