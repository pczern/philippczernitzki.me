import React from 'react'
import css from './index.scss'

function Project(props) {
  return <div className={css.project}>{props.children}</div>
}

export default Project
