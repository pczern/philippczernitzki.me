import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { withTheme } from 'styled-components'

import BannerImage from '../images/banner.png'
import IconBox from '../components/IconBox'
import { FullContainer, BoxedContainer, Row } from '../components/Container'

import Map, { MapBox } from '../components/Map'
import { GhostButton, ActionButton } from '../components/Button'
import Banner from '../components/Banner'

// styles
import {
  ContactContainer,
  ContactButton,
  EMailButton,
  TopTextBox,
  Headline,
  Project,
  Text,
  BannerHeadline,
  BannerSubheadline,
  BannerInner,
} from './style'

function Index(props) {
  const siteTitle = get(this, 'props.data.site.siteMetadata.title')

  return (
    <div>
      <Helmet title={siteTitle} />
      <Banner
        height={440}
        color={props.theme.bannerBackground}
        src={BannerImage}
      >
        <BannerInner maxWidth="700px" justify="flex-end" align="left">
          <BannerHeadline>Software Engineer</BannerHeadline>
          <BannerSubheadline>
            React & Android Expert, 7 Years Experience, 2018
          </BannerSubheadline>
          <div>
            <GhostButton>Schreib mir</GhostButton>
            <ActionButton>React Webinar</ActionButton>
          </div>
        </BannerInner>
      </Banner>
      <BoxedContainer padding="4em">
        <Row cols={4}>
          <IconBox icon="code">7 Jahre Erfahrung</IconBox>
          <IconBox icon={['fab', 'react']}>React.js</IconBox>
          <IconBox icon="briefcase">Unternehmer</IconBox>
          <IconBox icon={['fab', 'android']}>
            Zertifizierter Android Dev
          </IconBox>
        </Row>
      </BoxedContainer>
      {/* <BoxedContainer>
          <p>Freiheit, Leben, Gesundheit, Sport</p>
        </BoxedContainer> */}
      <BoxedContainer padding="0em 0em 4em">
        <ContactContainer>
          <ContactButton>Kontaktiere Mich Jetzt</ContactButton>
          <EMailButton>
            <i className="fa fa-send" />
            me@philippczernitzki.me
          </EMailButton>
        </ContactContainer>
      </BoxedContainer>
      <FullContainer backgroundColor="#F9F9F9">
        <BoxedContainer padding="4em">
          <Headline>Was Ich Mache</Headline>
          <Row padding="0em 0em" cols={2}>
            <TopTextBox>
              <h3>React & Android</h3>
              <p>
                Im Bereich Web & App Entwicklung habe ich mehrere Jahre
                Erfahrung. React.js, eine JavaScript Bibliothek um ausgiebige
                und faszinierende Webapps zu schreiben wird in den kommenden
                Jahren das Web erobern.
              </p>
            </TopTextBox>
            <TopTextBox>
              <h3>Webinar</h3>
              <p>
                In einem speziell angefertigten Webinar über React.js zeige ich
                euch alle Tricks die ich über die Jahre gelernt habe. Nach
                einigen Sessions könnt ihr eure eigenen User Interfaces bauen.
              </p>
            </TopTextBox>
          </Row>
          <Row padding="2em 0em 1em" cols={2}>
            <TopTextBox>
              <h3>Blog</h3>
              <p>
                Auf meinem Blog könnt Ihr in kürze Artikel zu den
                verschiedensten Themen finden. Es geht um Themen die mich
                beschäftigen wie die Softwareentwicklung aber auch Themen wie
                Gesundheit, Sport und Disziplin.
              </p>
            </TopTextBox>
            <TopTextBox>
              <h3>Youtube</h3>
              <p>
                In den kommenden Monaten werde ich auf Youtube neue Videos über
                React.js posten. In kürze könnt Ihr die großartigsten Webapps
                der Welt schreiben :)
              </p>
            </TopTextBox>
          </Row>
        </BoxedContainer>
      </FullContainer>
      <BoxedContainer padding="4em">
        <Headline>Meine Projekte</Headline>
        <Row cols={2}>
          <Project />
          <Project />
          <Project />
          <Project />
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
      <FullContainer backgroundColor="#F9F9F9">
        <BoxedContainer padding="4em" align="center">
          <Headline>Newsletter</Headline>
          <Text>
            Lerne aus meinen Erfahrungen in Software Engineering, Sport,
            Gesundheit, Selbstdisziplin
          </Text>
          <input />
          <button>Anmelden</button>
        </BoxedContainer>
      </FullContainer>
      <BoxedContainer padding="5em 0em 7em">
        <MapBox>
          <Map />
          <div>
            <h3>In der Umgebung</h3>
            <p>
              <i className="fa fa-paper-plane" />
              <span>philipp.czernitzki@gmail.com</span>
            </p>
            <p>
              <i className="fa fa-map-marker" />
              <span>
                Rheinland-Pfalz
                <br />
                Deutschland
              </span>
            </p>
          </div>
        </MapBox>
      </BoxedContainer>
    </div>
  )
}

Index.propTypes = {
  theme: PropTypes.objectOf(PropTypes.any),
}
Index.defaultProps = {
  theme: {
    bannerBackground: 'transparent',
  },
}

export default withTheme(Index)

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
