import React from 'react'
import { BoxedContainer } from '../../../components/Container'
import Post from '../../../components/Post'

const MyYoutubeChannel = () => (
  <BoxedContainer>
    <Post>
      <h1>My Youtube Channel</h1>
      <a href="https://www.youtube.com/channel/UCd-q4-zID8jTaAF8pbly3Sw?view_as=subscriber">
        My Channel
      </a>{' '}
      you like it?
    </Post>
  </BoxedContainer>
)

export default MyYoutubeChannel
export const frontmatter = {
  title: 'My Youtube Channel',
  date: '2018-01-20T11:46:00.169Z',
  path: '/my-youtube-channel',
  excerpt: 'See my Youtube Channel in action!',
  published: true,
}
