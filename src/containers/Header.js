import React from 'react'
import PropTypes from 'prop-types'
import GatsbyLink from 'gatsby-link'
import styled from 'styled-components';



const LinkList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
`

const StyledLinkItem = styled.li`
  display: inline-block;

  font-size: 1.1em;
  color: #333333;
  margin: 0px 2em ;
  line-height: 2;
  display: block;
  box-sizing: border-box;

  a{
    display: block;
    padding: 0px 0em;
    box-sizing: border-box;
    border-bottom: solid 2px transparent;
  }
  a:hover{

    border-bottom: solid 2px ${props => props.theme.primary};
  }

`
const Navigation = styled.nav`
  margin-left: auto;
`
const Logo = styled.img`
  border-radius: 50%;
  height: 3em;
  width: 3em;
`
const Title = styled.h2`
  font-size: 1.8em;
  font-weight: 300;
  padding-bottom: 0.5em;
`
const Subtitle = styled.h3`
  font-weight: 300;
  color: #777;
  font-family: Raleway, sans-serif;
`

const Header = styled.header`
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 2.5em 0em;

  font-family: Muli, sans-serif;
`

const Colored = styled.span`
  color: ${props => props.color};
`




const LinkItem = (props) => (
  <StyledLinkItem>
    <GatsbyLink to={props.to}>
      {props.children}
    </GatsbyLink>
  </StyledLinkItem>
)


export default (props) => (
  <Header>
    <div>
      <Title>Philipp Czernitzki</Title>
      <Subtitle>Web & App Engineer aus Deutschland</Subtitle>
    </div>
    <Navigation>
      <LinkList>
        <LinkItem to="/blog">Blog</LinkItem>
        <LinkItem to="/leistungen">Leistungen</LinkItem>
        <LinkItem to="/webinar">Webinar</LinkItem>
        <LinkItem to="/buecher">Bücher</LinkItem>
      </LinkList>
    </Navigation>
  </Header>
)
