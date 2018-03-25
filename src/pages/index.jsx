import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import BannerImage from '../images/banner.png'
import IconBox from '../components/IconBox'
import { FullContainer, BoxedContainer } from '../components/Container'
import { LinkExternal } from '../components/Link'
import Map, { MapBox } from '../components/Map'
import { GhostButton, ActionButton } from '../components/Button'
import Banner from '../components/Banner'
import Project from '../components/Project'
import Row from '../components/Row'
import Icon from '../components/Icon'
import Divider from '../components/Divider'
import ContactModal from '../components/ContactModal'
import css from './index/index.scss'

import projects from './index/projects/index.json'

class Index extends React.Component {
  state = {
    isContacting: false,
  }
  handleOnSent = () => {
    this.setState({ isContacting: false })
  }

  handleContacting = () => {
    this.setState({ isContacting: true })
  }

  render() {
    return (
      <div>
        <Banner src={BannerImage}>
          <BoxedContainer className={css.topBanner}>
            <h1>Software Engineer</h1>
            <h2>React & Android Expert, 7 Years Experience, 2018</h2>
            <div>
              <GhostButton onClick={this.handleContacting}>
                Contact Me
              </GhostButton>
              <LinkExternal
                target="_blank"
                to="https://www.youtube.com/channel/UCd-q4-zID8jTaAF8pbly3Sw"
              >
                <ActionButton invert>Youtube Channel</ActionButton>
              </LinkExternal>
            </div>
          </BoxedContainer>
        </Banner>
        <BoxedContainer className={css.icons} key={1}>
          <Row className={css.icons__row} cols={4}>
            <IconBox icon="code">7 Years Experience</IconBox>
            <IconBox icon={['fab', 'react']}>React.js Expert</IconBox>
            <IconBox icon={['fab', 'css3']}>Web Dev</IconBox>
            <IconBox icon={['fab', 'android']}>Certified Android Dev</IconBox>
          </Row>
        </BoxedContainer>
        <BoxedContainer key={2} className={css.topContact}>
          <ActionButton
            onClick={this.handleContacting}
            className={css.topContent__contactButton}
          >
            Get in Touch with me
          </ActionButton>
          <ActionButton
            onClick={this.handleContacting}
            invert
            className={css.topContent__emailButton}
          >
            <i className="fa fa-send" />
            me@philippczernitzki.me
          </ActionButton>
        </BoxedContainer>
        <FullContainer className={css.aboutText} backgroundColor="#F9F9F9">
          <BoxedContainer className={css.aboutText__boxed}>
            <h2 className={css.aboutText__headline}>Was Ich Mache</h2>
            <Row key={1} className={css.aboutText__row} cols={2}>
              <div className={css.aboutText__textBox}>
                <h3>React</h3>
                <p>
                  Everyday I am working with React.js, a beautiful technology
                  for creating Web Applications. In the next years it will start
                  growing in the Web like WordPress once did.
                </p>
              </div>
              <div className={css.aboutText__textBox}>
                <h3>Android</h3>
                <p>
                  The biggest platform for app development is and remains
                  Android. As an Certified Android Associate Developer I am able
                  to create the most amazing apps ever possible.
                </p>
              </div>
            </Row>
            <Row key={2} className={css.aboutText__row} cols={2}>
              <div className={css.aboutText__textBox}>
                <h3>Blog</h3>
                <p>
                  On my blog I write about stuff, that I care about. It's about
                  subjects I like and find worth sharing. Check it out for
                  awesome articles about React.js, Health, Motivation, Business.
                </p>
              </div>
              <div className={css.aboutText__textBox}>
                <h3>Youtube</h3>
                <p>
                  I published the first ever german video about React.js on
                  youtube. If you are interested check it out. Many new videos
                  will follow in the next weeks about ES6, Webpack, GatsbyJs,
                  ESLint.
                </p>
              </div>
            </Row>
          </BoxedContainer>
        </FullContainer>
        <BoxedContainer key={3} padding="4em" className={css.projects}>
          <h2 className={css.headline}>Some Projects</h2>
          <Row className={css.projects__row} cols={3}>
            {projects.map(project => {
              const newProject = Object.assign({}, project, {
                image: require(`./index/projects/${project.image}`),
              })

              return (
                <Project
                  key={project.id}
                  className={css.project}
                  project={newProject}
                />
              )
            })}
          </Row>
        </BoxedContainer>
        <Divider width="600px" />
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
        <ContactModal
          closeFromEverywhere
          isOpen={this.state.isContacting}
          onSent={this.handleOnSent}
        />
      </div>
    )
  }
}

export default Index
