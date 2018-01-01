import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GatsbyLink from 'gatsby-link'
import Icon from '../components/Icon'
import {FullContainer, BoxedContainer, Row} from '../components/Container'

const Container = styled.div`
  color: #FFF;
`

const Headline = styled.h3`

`
const Col = styled.div`

`
const LinkList = styled.ul`
  list-style-type: none;
  margin: 0;
`



const LinkItem = (props) => (
    <GatsbyLink to={props.to}>
      {props.children}
    </GatsbyLink>
)




const StyledIcon = styled(Icon)`
  font-size: 1.5em;
  margin: 0 10px;
`




export default (props) => (
  <Container>
    <FullContainer backgroundColor={"#0e0e0e"}>
      <BoxedContainer padding={"2em"}>
        <Row cols={3}>
          <Col>
            <Headline>Neuste Beiträge</Headline>
            <LinkList>
              <LinkItem>Hello</LinkItem>
            </LinkList>
          </Col>
          <Col>

          </Col>
          <Col>
            <Headline>Finde Mich</Headline>
            <GatsbyLink to="https://github.com/speeddeveloper" target="_blank">
              <StyledIcon src="github" />
            </GatsbyLink>
            <GatsbyLink to="https://stackoverflow.com/users/3885001/speeddeveloper" target="_blank">
              <StyledIcon src="stack-overflow" />
            </GatsbyLink>
            <GatsbyLink to="https://www.linkedin.com/in/philipp-czernitzki-08465894/" target="_blank">
              <StyledIcon src="linkedin-square" />
            </GatsbyLink>
            <GatsbyLink to="skype:philipp.czernitzki@gmail.com?add" target="_blank">
              <StyledIcon src="skype" />
            </GatsbyLink>
            <GatsbyLink to="https://stackoverflow.com/users/3885001/speeddeveloper" target="_blank">
              <StyledIcon src="wordpress" />
            </GatsbyLink>
            <GatsbyLink to="http://bcert.me/szssafdr" target="_blank">
              <StyledIcon src="android" />
            </GatsbyLink>

          </Col>
        </Row>
      </BoxedContainer>
    </FullContainer>
  </Container>
)
