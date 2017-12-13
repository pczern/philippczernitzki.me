
import React from 'react';
import styled from 'styled-components';


const BannerImage = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
  background-image: url(${props => props.src})

`

const BannerContent = styled.div`
  width: 100%;
  height: 450px;
  background-color: ${props => props.color}
`

export default (props) => (

  <BannerImage src={props.src}>
    <BannerContent color={props.color}>{props.children}</BannerContent>
  </BannerImage>

)
