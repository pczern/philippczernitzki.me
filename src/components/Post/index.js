import React from 'react';

import styled from 'styled-components';


const Post = styled.div`

  p{
    color: #888;
    font-weight: 300;
    line-height: 1.7;
    font-size: 1.07em;
    margin-bottom: 1em;

  }
  time{
    color: #555;
    font-weight: 400;
    margin-bottom: 1em;
    display: block;
    font-size: 0.98em;
  }
  h1,h2,h3,h4,h5,h6{
    line-height: 1.3;
    font-family: Hind, sans-serif;
  }
  h1{
    font-size: 2.2em;
    color: #222;

    margin-bottom: 0.5em;
      font-weight: 500;

  }
  h2{
    color: #333;
    font-size: 1.35em;
margin-top: 2em;
    margin-bottom: 0.1em;
    font-weight: 500;
  }
  h3{
    font-size: 1.15em;
    font-weight: bold;
  }
  li{
    line-height: 1.7;
    margin-left: 1.3em;
    & > *{
      color: #888;
    }

  }
  a{
    color: ${props => props.theme.primary}
  }
`

export default (props) => (
  <Post className={props.className}>
    {props.children}
  </Post>
)
