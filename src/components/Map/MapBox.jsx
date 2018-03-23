import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.scss'

const inStyles = css`
  .box {
    background-color: green;
    width: 500px;
    height: 500px;
    color: yellow;
  }
`
for (const key in inStyles) {
  const value = inStyles[key]
  console.log(value)
}
console.log(inStyles.box)
console.log('what?')

function MapBox(props) {
  return <div className={inStyles.box}>{props.children}</div>
}

MapBox.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MapBox
