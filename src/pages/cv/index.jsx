import React from 'react'
import Helmet from 'react-helmet'
import IMAGE_ME from '../../images/me.png'
import { BoxedContainer } from '../../components/Container'
import css from './index.scss'

function CV() {
  return (
    <BoxedContainer className={css.cv}>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className={css.cv__personal}>
        <img alt="Philipp Czernitzki" src={IMAGE_ME} />
        <div>
          <div>
            <span>Name:</span> Philipp Czernitzki
          </div>
          <div>
            <span>Education:</span> Allgemeine Hochschulreife / Abitur
          </div>
          <div>
            <span>E-Mail:</span> not provided for now
          </div>
        </div>
      </div>
      <div className={css.cv__skills} />
    </BoxedContainer>
  )
}

export default CV
