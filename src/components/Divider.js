import React from 'react';
import styled from 'styled-components';


const Border = styled.div`
height: 1px;
width: 50%;
background: linear-gradient(90deg, #FFF 0%, #CCC 50%, #FFF 100%);
margin: 2em auto 1.5em;
`

export default (props) => {
  return (<Border />);
}
