import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GatsbyLink from 'gatsby-link'
import Icon from '../components/Icon'
import {FullContainer, BoxedContainer, Row} from '../components/Container'
import get from 'lodash/get'

const Container = styled.footer`
  color: #FFF;
  font-weight: 300;
  font-family: Hind;
`

const Headline = styled.h3`
font-weight: 400;
margin-bottom: 0.75em;

`
const Col = styled.div`

`
const LinkList = styled.ul`
  list-style-type: none;
  margin: 0;
`


const LinkExternal = styled.a`
  display: block;
  line-height: 1.7;
  font-size: 0.96em;
  color: #d8d8d8;

`
const LinkInternal = styled(GatsbyLink)`
  display: block;
  line-height: 1.7;
  font-size: 0.96em;
  color: #d8d8d8;

`
// const LinkItem = (props) => (
//     <GatsbyLink to={props.to}>
//       {props.children}
//     </GatsbyLink>
// )
//



const StyledIcon = styled(Icon)`
color: #d8d8d8;
font-size: 0.96em;
margin: 0 10px 0 0;
`




export default (props) => {

  //const posts = get(this, 'props.data.allMarkdownRemark.edges')
  return (
  <Container>
    <FullContainer backgroundColor={"#0e0e0e"}>
      <BoxedContainer padding={"5em 0em 4em"}>
        <Row cols={3}>
          <Col>

            <Headline>Neuste Beiträge</Headline>
            <LinkList>
              <LinkInternal>React, starte jetzt</LinkInternal>
              <LinkInternal>Motiviation Musik</LinkInternal>
              <LinkInternal>Die besten YouTube Channels für Entrepreneurs</LinkInternal>
              <LinkInternal>Sport, warum, wann und wie?</LinkInternal>
            </LinkList>
          </Col>
          <Col>
            <Headline>Ressourcen</Headline>
            <LinkList>
              <LinkInternal to="/motivation">Motivation Musik</LinkInternal>
              <LinkInternal to="/best-youtube">Beste Youtube Channels</LinkInternal>
              <LinkInternal to="/books">Empfohlene Bücher</LinkInternal>
              <LinkInternal to="/sport">Sport, warum, wann und wie?</LinkInternal>
            </LinkList>
          </Col>
          <Col>
            <Headline>Finde Mich</Headline>
            <LinkExternal href="mailto:philipp.czernitzki@gmail.com"><StyledIcon src="send" />philipp.czernitzki@gmail.com</LinkExternal>
            <LinkExternal href="https://github.com/speeddeveloper" target="_blank"><StyledIcon src="github" />Github</LinkExternal>
            {/* <LinkItem to="https://stackoverflow.com/users/3885001/speeddeveloper" target="_blank"><StyledIcon src="stack-overflow" />Stack Overflow</LinkItem> */}
            {/* <LinkItem to="https://www.linkedin.com/in/philipp-czernitzki-08465894/" target="_blank"><StyledIcon src="linkedin-square" />LinkedIn</LinkItem> */}
            <LinkExternal href="skype:philipp.czernitzki@gmail.com?add" target="_blank"><StyledIcon src="skype" />Skype</LinkExternal>
            {/* <LinkItem to="https://stackoverflow.com/users/3885001/speeddeveloper" target="_blank"><StyledIcon src="wordpress" />WordPress</LinkItem> */}
            <LinkExternal href="http://bcert.me/szssafdr" target="_blank"><StyledIcon src="android" />Android Certified Dev</LinkExternal>

          </Col>
        </Row>
      </BoxedContainer>
    </FullContainer>
  </Container>);
}
