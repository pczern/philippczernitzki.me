
import React from 'react';
import styled from 'styled-components';


const BannerImage = styled.div`
  width: 100%;
  height: ${props => props.height}px;
  display: flex;
  align-items: center;
  background-image: url(${props => props.src});
  background-size: cover;

`

const BannerContent = styled.div`
  width: 100%;
  height: ${props => props.height}px;
  background-color: ${props => props.color}
`

export default (props) => (

  <BannerImage height={props.height} width={props.width} src={props.src}>
    <BannerContent height={props.height} color={props.color}>{props.children}</BannerContent>
  </BannerImage>

)
