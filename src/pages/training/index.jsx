import React from 'react'
import { FullContainer } from '../../components/Container'
import Post from '../../components/Post'
import ReactStart from './ReactStart.png'
import Banner from '../../components/Banner'

const Training = props => (
  <FullContainer>
    <Banner
      height={300}
      red
      justifyContent="center"
      alignItems="center"
      src={ReactStart}
    >
      <div>
        <h1>Lerne React</h1>
        <h2>Webanwendungen der Zukunft</h2>
      </div>
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

export default Training
