import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Icon from '../Icon'
import css from './index.scss'

class Project extends React.Component {
  state = {
    isOpen: false,
  }

  handleClick = () => {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }))
  }
  render() {
    return (
      <div
        className={classNames(css.project, this.props.className)}
        style={{
          backgroundImage: `url(${this.props.project.image})`,
        }}
        onClick={this.handleClick}
      >
        <div
          className={classNames(css.project__modal, {
            [css['project__modal--open']]: this.state.isOpen,
          })}
        >
          <div className={css.project__modalInner}>
            <Icon src="times-circle" />
            <img
              src={this.props.project.image}
              alt={this.props.project.title}
            />
            <h2>{this.props.project.title}</h2>
            <p>{this.props.project.description}</p>
          </div>
        </div>
      </div>
    )
  }
}
Project.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string,
}
PropTypes.defaultProps = {
  className: null,
}
export default Project
