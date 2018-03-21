import React from 'react'
import PropTypes from 'prop-types'

import classNames from 'classnames'
import css from './index.scss'

const bannerBodyClass = classNames(
  css.banner__body,
  css['banner__body--default-color']
)

const Banner = props => (
  <div
    className={css.banner}
    style={{
      backgroundImage: `url(${props.src})`,
    }}
  >
    <div {...props} className={classNames(bannerBodyClass, props.className)}>
      {props.children}
    </div>
  </div>
)

Banner.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  children: PropTypes.node,
}

Banner.defaultProps = {
  className: null,
  children: null,
}

export default Banner
