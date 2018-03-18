import styled from 'styled-components'
import { darken } from 'polished'

const MapBox = styled.div`
  height: 370px;
  & > *:nth-child(1) {
    width: 65%;
    float: left;
    height: 370px;
  }
  & > *:nth-child(2) {
    font-family: Montserrat, sans-serif;
    width: 35%;
    padding-left: 3%;
    width: 35%;
    float: left;
    padding-top: 3.5em;
    background-color: ${props => props.theme.primary};
    height: 370px;
    color: #fff;
    span {
      width: 85%;
      float: left;
      display: block;
    }
    p {
      font-size: 1.2em;
      font-family: 'Source Sans Pro', sans-serif;
      font-weight: 300;
      color: #fff;
      clear: both;
      line-height: 1.3;
      margin-bottom: 0.75em;
      &:after {
        content: '';
        display: table;
        clear: both;
      }
    }
    i {
      margin-top: 5px;
      margin-right: 15px;
      float: left;
      width: 8%;
      display: block;
      text-align: center;
      color: ${props => darken(0.2, props.theme.primary)};
      text-shadow: 0 0 7px rgba(5, 133, 144, 0.23);
    }
    h3 {
      color: #fff;
      font-family: 'Montserrat', sans-serif;
      margin-bottom: 1.3em;
      font-size: 1.4em;
    }
  }
`
export default MapBox
