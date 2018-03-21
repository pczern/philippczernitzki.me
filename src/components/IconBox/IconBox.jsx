import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import classNames from 'classnames'
import css from './index.scss'

const iconClass = classNames('fa-fw', 'fa-xs', css.iconBox__icon)

const SmallIconBox = props => (
  <figure className={css.iconBox}>
    <Icon className={iconClass} src={props.icon} />
    <figcaption className={css.iconBox__figcaption}>
      {props.children}
    </figcaption>
  </figure>
)

SmallIconBox.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  children: PropTypes.string.isRequired,
}
SmallIconBox.defaultProps = {}
export default SmallIconBox
