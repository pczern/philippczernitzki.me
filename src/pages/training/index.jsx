import React from 'react'
import { withTheme } from 'styled-components'
import { FullContainer } from '../../components/Container'
import Post from '../../components/Post'
import ReactStart from './ReactStart.png'
import Banner from '../../components/Banner'
import { BannerInner } from './style'

const Training = props => (
  <FullContainer>
    <Banner
      height={300}
      red
      justifyContent="center"
      alignItems="center"
      src={ReactStart}
    >
      <BannerInner>
        <h1>Lerne React</h1>
        <h2>Webanwendungen der Zukunft</h2>
      </BannerInner>
    </Banner>
    <Post center>
      <h1>Video Tutorial</h1>
      <iframe
        title="Youtube"
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/3ndGumxHXvo"
        frameBorder="0"
        allowFullScreen
      />
    </Post>
  </FullContainer>
)

export default withTheme(Training)
