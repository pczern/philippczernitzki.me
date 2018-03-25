import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import BannerImage from '../images/banner.png'
import IconBox from '../components/IconBox'
import { FullContainer, BoxedContainer } from '../components/Container'

import Map, { MapBox } from '../components/Map'
import { GhostButton, ActionButton } from '../components/Button'
import Banner from '../components/Banner'
import Project from '../components/Project'
import Row from '../components/Row'
import Icon from '../components/Icon'
import css from './index/index.scss'

// import projects from './index/projects/index.json'

function Index() {
  const siteTitle = get(this, 'props.data.site.siteMetadata.title')

  return (
    <div>
      <Helmet title={siteTitle} />
      <Banner src={BannerImage}>
        <BoxedContainer className={css.topBanner}>
          <h1>Software Engineer</h1>
          <h2>React & Android Expert, 7 Years Experience, 2018</h2>
          <div>
            <GhostButton>Schreib mir</GhostButton>
            <ActionButton invert>React Webinar</ActionButton>
          </div>
        </BoxedContainer>
      </Banner>
      <BoxedContainer key={1} padding="4em">
        <Row cols={4}>
          <IconBox icon="code">7 Jahre Erfahrung</IconBox>
          <IconBox icon={['fab', 'react']}>React.js</IconBox>
          <IconBox icon="briefcase">Unternehmer</IconBox>
          <IconBox icon={['fab', 'android']}>
            Zertifizierter Android Dev
          </IconBox>
        </Row>
      </BoxedContainer>
      <BoxedContainer key={2} padding="0em 0em 4em" className={css.topContact}>
        <ActionButton className={css.topContent__contactButton}>
          Kontaktiere Mich Jetzt
        </ActionButton>
        <ActionButton invert className={css.topContent__emailButton}>
          <i className="fa fa-send" />
          me@philippczernitzki.me
        </ActionButton>
      </BoxedContainer>
      <FullContainer className={css.aboutText} backgroundColor="#F9F9F9">
        <BoxedContainer padding="4em">
          <h2 className={css.aboutText__headline}>Was Ich Mache</h2>
          <Row key={1} padding="0em 0em" cols={2}>
            <div className={css.aboutText__textBox}>
              <h3>React & Android</h3>
              <p>
                Im Bereich Web & App Entwicklung habe ich mehrere Jahre
                Erfahrung. React.js, eine JavaScript Bibliothek um ausgiebige
                und faszinierende Webapps zu schreiben wird in den kommenden
                Jahren das Web erobern.
              </p>
            </div>
            <div className={css.aboutText__textBox}>
              <h3>Webinar</h3>
              <p>
                In einem speziell angefertigten Webinar über React.js zeige ich
                euch alle Tricks die ich über die Jahre gelernt habe. Nach
                einigen Sessions könnt ihr eure eigenen User Interfaces bauen.
              </p>
            </div>
          </Row>
          <Row key={2} padding="2em 0em 1em" cols={2}>
            <div className={css.aboutText__textBox}>
              <h3>Blog</h3>
              <p>
                Auf meinem Blog könnt Ihr in kürze Artikel zu den
                verschiedensten Themen finden. Es geht um Themen die mich
                beschäftigen wie die Softwareentwicklung aber auch Themen wie
                Gesundheit, Sport und Disziplin.
              </p>
            </div>
            <div className={css.aboutText__textBox}>
              <h3>Youtube</h3>
              <p>
                In den kommenden Monaten werde ich auf Youtube neue Videos über
                React.js posten. In kürze könnt Ihr die großartigsten Webapps
                der Welt schreiben :)
              </p>
            </div>
          </Row>
        </BoxedContainer>
      </FullContainer>
      <BoxedContainer key={3} padding="4em" className={css.projects}>
        <h2 className={css.headline}>Meine Projekte</h2>
        {/* <Row cols={3}>
          {projects.map(project => {
            const newProject = Object.assign({}, project, {
              image: require(`./index/projects/speeddeveloper.png`),
            })
            console.log(newProject)

            return (
              <Project
                key={project.id}
                className={css.project}
                project={newProject}
              />
            )
          })}
        </Row> */}
      </BoxedContainer>
      <BoxedContainer key={4} padding="5em 0em 7em">
        <MapBox>
          <Map />
          <div>
            <h3>In der Umgebung</h3>
            <p>
              <Icon src="paper-plane" />
              <span>philipp.czernitzki@gmail.com</span>
            </p>
            <p>
              <Icon src="map-marker" />
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

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
