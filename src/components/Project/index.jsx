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
    const technologies = this.props.project.technologies && (
      <p className={css.technologies}>
        <strong>Technologies: </strong>
        {this.props.project.technologies.map((technology, i, arr) => [
          <span className={css.technologies__item}>{technology}</span>,
          i !== arr.length - 1 ? ', ' : null,
        ])}
      </p>
    )
    const link = this.props.project.link && (
      <p className={css.project__linkSection}>
        <strong>Link: </strong>
        <a className={css.project__link} href={this.props.project.link}>
          {this.props.project.link}
        </a>
      </p>
    )

    return (
      <div
        className={classNames(css.project, this.props.className)}
        role="presentation"
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
            {technologies}
            {link}
          </div>
        </div>
      </div>
    )
  }
}
Project.propTypes = {
  className: PropTypes.string,
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
}
Project.defaultProps = {
  className: null,
}
export default Project
