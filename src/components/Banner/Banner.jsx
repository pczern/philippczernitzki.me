import React from 'react'
import PropTypes from 'prop-types'

import classNames from 'classnames'
import styles from './index.scss'

const bannerBodyClass = classNames(
  styles.banner__body,
  styles['banner__body--default-color']
)

const Banner = props => (
  <div
    className={styles.banner}
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
