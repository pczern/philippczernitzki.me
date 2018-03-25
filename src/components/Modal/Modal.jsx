import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Icon from '../Icon'
import css from './index.scss'

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: props.isOpen,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isOpen: nextProps.isOpen })
  }
  handleOnClick = () => {
    if (this.props.closeFromEverywhere) {
      this.setState({ isOpen: false })
    }
  }
  handlePreventClick = e => {
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
  }

  render() {
    console.log('test', this.props.isOpen)
    return (
      <div
        role="presentation"
        onClick={this.handleOnClick}
        className={classNames(css.modal, {
          [css['modal--open']]: this.state.isOpen,
        })}
      >
        <div
          role="presentation"
          onClick={this.handlePreventClick}
          className={classNames(css.modal__inner, this.props.className)}
        >
          {/* <Icon src="times-circle" /> */}
          {this.props.children}
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  closeFromEverywhere: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Modal.defaultProps = {
  className: null,
  isOpen: false,
  closeFromEverywhere: true,
}

export default Modal
