import styled from 'styled-components'

const ShortPost = styled.article`
  h2 {
    line-height: 1.3;
    font-family: Hind, sans-serif;
    font-size: 2.1em;
    font-weight: 500;
  }
  margin-top: 4em;
  &:first-of-type {
    margin-top: 0em;
  }
  p {
    color: #888;
    font-weight: 300;
    line-height: 1.7;
    font-size: 1.07em;
    margin-bottom: 1em;
  }
  time {
    color: #555;
    font-weight: 400;
    margin-bottom: 1em;
    display: block;
    font-size: 0.98em;
  }
`
export default ShortPost
