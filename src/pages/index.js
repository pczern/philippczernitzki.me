
import React from 'react'
import Link from 'gatsby-link'
import 'font-awesome/css/font-awesome.min.css';
import '../css/index.css';
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { withTheme } from 'styled-components'
import Bio from '../components/Bio'
import styled from 'styled-components';

import Banner from '../components/Banner';
import BannerImage from '../images/banner.png';

import IconBox from '../components/IconBox';

import Divider from '../components/Divider';

import { rgba, darken } from 'polished'

import {FullContainer, BoxedContainer, Row} from '../components/Container';

import TextBox from '../components/TextBox';
import Map from '../components/Map';
console.log('x');

import Project from '../components/Project';
import {GhostButton} from '../components/Button';
const Container = styled.div`

`
const InnerBanner = styled.div`
  max-width: 700px;
  text-align: center;
  margin: 0 auto;
  color: #FFF;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: left;
  justify-content: flex-end;
  flex-direction: column;
`
const ActionButton = styled.div`
  color: #222;
  border: solid 1px #F6F6F6EE;
  border-radius: 5px;
  padding: 0.75em 2.3em;
  font-weight: 300;
  letter-spacing: 1px;
  display: inline-block;
  margin-bottom: 5em;
  color: #F6F6F6;
  margin-left: 1px;
  cursor: pointer;

`

const ActionButton2 = styled.div`
  color: #222;
  border: solid 1px #F6F6F6EE;
  border-radius: 5px;
  padding: 0.75em 2.3em;
  font-weight: 300;
  letter-spacing: 1px;
  display: inline-block;
  margin-left: auto;
  background-color: #FFF;
  color: rgb(8, 96, 123);
  font-weight: 400;
  margin-left: 2em;
  cursor: pointer;

`

const IconBoxContainer = styled.div`
  display: flex;
  align-items: center;

  > *{
    width: 25%;

  }
`


const AndroidIconBox = styled(IconBox)`

  i{
    color: green;
  }
  figcaption{
    color: green;
  }
`;
const ActionHeadline = styled.h1`
  font-size: 4em;
  font-weight: 400;
  line-height: 1;
  color: #FFF;
  margin: 0;
`
const ActionSubheadline = styled.h1`
  font-size: 1.75em;
  margin-bottom: 1.4em;
  margin-top: 0.2em;
  font-weight: 200;

`

const ContactButton = styled.button`
background-color: ${props => props.theme.primary};
display: inline-block;
color: #FFF;
padding: 0.9em 3.75%;
font-size: 0.98em;
border: none;
cursor: pointer;
margin: 0 2%;
border-radius: 0.2em;
font-family: "Roboto";
font-weight: 300;
letter-spacing: 1px;
`

const ContactContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;

`
const EMailButton = styled.button`
  color: #3d3d3d;
line-height: 1.8;
font-size: 1em;
font-weight: 300;
letter-spacing: 1px;
i{
  font-size: 1.3em;
vertical-align: middle;
margin-right: 10px;
}
`

const SubHeadline = styled.h2`
line-height: 2;
padding-top: 0.3em;
text-align: center;
margin: 0 auto;
display: block;
font-size: 0.9em;
font-family: Hind;
letter-spacing: 2px;
margin-bottom: 1em;
color: #676767;

`
const SkillContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`
const Skill = styled.span`
  display: block;
  margin-right: 8px;
  line-height: 2;
  background-color: ${props => props.theme.primary};
  border-radius: 50px;
  color: white;
  padding: 0 10px;
  font-size: 0.9em;
  text-align: center;
  margin-bottom: 1.2em;
`

const TopTextBox = styled(TextBox)`

  &:nth-child(odd){
    padding: 0 2.5% 0 4%;

  }
  &:nth-child(even){
    padding: 0 4% 0 2.5%;
  }
`

const MapContainer = styled.div`
  height: 370px;
  & > *:nth-child(1){
    width: 65%;
    float: left;
      height: 370px;
  }
  & > *:nth-child(2){
    font-family: Montserrat, sans-serif;
    width: 35%;
    padding-left: 3%;
    width: 35%;
    float: left;
    padding-top: 3.5em;
    background-color: ${props => props.theme.primary};
    height: 370px;
    color: #FFF;
     span {
    width: 85%;
    float: left;
    display: block;
}
p{
  font-size: 1.2em;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 300;
    color: #FFF;
    clear: both;
    line-height: 1.3;
    margin-bottom: 0.75em;
    &:after{
      content: "";
    display: table;
    clear: both;
    }
}
i{
  margin-top: 5px;
margin-right: 15px;
float: left;
width: 8%;
display: block;
text-align: center;
color: ${props => darken(0.2, props.theme.primary)};;
text-shadow: 0 0 7px rgba(5, 133, 144, 0.23);
}
h3{
  color: #FFF;
font-family: "Montserrat", sans-serif;
margin-bottom: 1.3em;
font-size: 1.4em;
}

  }


`

const Headline = styled.h2`
  font-size: 1.4em;
  color: ${props => props.theme.primaryHeadline};
  margin-bottom: 2em;
  text-align: center;
  font-family: Hind, sans-serif;

`

const StyledProject = styled(Project)`

  margin: 0 2.5%;



`
const Text = styled.p`
  color: ${props => props.theme.primaryText}
`



class Index extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Container>
        <Helmet title={siteTitle} />
        <Banner height={440} color={rgba(this.props.theme.primary, 0.8)} src={BannerImage}>
          <InnerBanner>

            <ActionHeadline>Software Engineer</ActionHeadline>
            <ActionSubheadline>React & Android Expert, 7 Years Experience, 2018</ActionSubheadline>
            <div>
              <GhostButton>Schreib mir</GhostButton>
              <ActionButton2>React Webinar</ActionButton2>
            </div>
          </InnerBanner>
        </Banner>
        <BoxedContainer padding={'4em'}>
          <IconBoxContainer>
            <IconBox icon={'code'}>7 Jahre Erfahrung</IconBox>
            <IconBox icon={'cogs'}>100 Technologien</IconBox>
            <IconBox icon={'briefcase'}>Unternehmer</IconBox>
            <IconBox icon={'android'}>Zertifizierter Android Dev</IconBox>
          </IconBoxContainer>
        </BoxedContainer>
        {/* <BoxedContainer>
          <p>Freiheit, Leben, Gesundheit, Sport</p>
        </BoxedContainer> */}
        <BoxedContainer  padding={'0em 0em 4em'}>
          <ContactContainer>
            <ContactButton>Kontaktiere Mich Jetzt</ContactButton>
            <EMailButton>
              <i className="fa fa-send"></i>
              me@philippczernitzki.me
            </EMailButton>
          </ContactContainer>

        </BoxedContainer>
        <FullContainer  backgroundColor={"#F9F9F9"}>
          <BoxedContainer padding={"4em"}>
            <Headline>Was Ich Mache</Headline>
            <Row padding={"0em 0em"} cols={2}>
              <TopTextBox>
                <h3>React & Android</h3>
                <p>Im Bereich Web & App Entwicklung habe ich mehrere Jahre Erfahrung. React.js, eine JavaScript Bibliothek um ausgiebige und faszinierende Webapps zu schreiben wird in den kommenden Jahren das Web erobern.</p>
              </TopTextBox>
              <TopTextBox>
                <h3>Webinar</h3>
                <p>In einem speziell angefertigten Webinar über React.js zeige ich euch alle Tricks die ich über die Jahre gelernt habe. Nach einigen Sessions könnt ihr eure eigenen User Interfaces bauen.</p>
              </TopTextBox>

            </Row>
            <Row padding={"2em 0em 1em"} cols={2}>
              <TopTextBox>
                <h3>Blog</h3>
                <p>Auf meinem Blog könnt Ihr in kürze Artikel zu den verschiedensten Themen finden. Es geht um Themen die mich beschäftigen wie die Softwareentwicklung aber auch Themen wie Gesundheit, Sport und Disziplin.</p>
              </TopTextBox>
              <TopTextBox>
                <h3>Youtube</h3>
                <p>In den kommenden Monaten werde ich auf Youtube neue Videos über React.js posten. In kürze könnt Ihr die großartigsten Webapps der Welt schreiben :)</p>
              </TopTextBox>

            </Row>
          </BoxedContainer>
        </FullContainer>
        <BoxedContainer padding={"4em"}>
          <Headline>Meine Projekte</Headline>
          <Row cols={2}>
            <StyledProject />
            <StyledProject />
            <StyledProject />
            <StyledProject />
          </Row>
        </BoxedContainer>
        {/* <BoxedContainer>
          <Headline>Tools</Headline>
          <SkillContainer>
            <Skill>Java</Skill>
            <Skill>JavaScript</Skill>
            <Skill>Python</Skill>
            <Skill>PHP</Skill>
            <Skill>C</Skill>
            <Skill>React.js</Skill>
            <Skill>Node.js</Skill>
            <Skill>jQuery</Skill>
            <Skill>Android</Skill>
            <Skill>HTML5</Skill>
            <Skill>CSS3</Skill>
            <Skill>Git</Skill>
            <Skill>GitHub</Skill>
            <Skill>Material Design</Skill>
            <Skill>RWD</Skill>
            <Skill>SQLite</Skill>
            <Skill>MySQL</Skill>
            <Skill>NoSQL</Skill>
            <Skill>WordPress</Skill>
            <Skill>GraphQL</Skill>
            <Skill>Redux</Skill>
            <Skill>Gatsbyjs</Skill>
          </SkillContainer>
        </BoxedContainer> */}
        <FullContainer backgroundColor={'#F9F9F9'}>
          <BoxedContainer padding={"4em"} align="center">
            <Headline>Newsletter</Headline>
            <Text>Lerne aus meinen Erfahrungen in Software Engineering, Sport, Gesundheit, Selbstdisziplin</Text>
            <input /><button>Anmelden</button>
          </BoxedContainer>
        </FullContainer>
        <BoxedContainer padding={"5em 0em 7em"}>
          <MapContainer>
            <Map />
            <div>
              <h3>In der Umgebung</h3>
              <p>
                <i className="fa fa-paper-plane"></i>
                <span>philipp.czernitzki@gmail.com</span>
              </p>
              <p>
                <i className="fa fa-phone"></i>
                <span>+49 6324 911 62 67</span>
              </p>
              <p>
                <i className="fa fa-map-marker"></i>
                <span>Langgasse 172
                  <br />
                  67454 Haßloch
                  <br />
                  Deutschland
                </span>
              </p>
            </div>
          </MapContainer>
        </BoxedContainer>

      </Container>
    )
  }
}

export default withTheme(Index)

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
