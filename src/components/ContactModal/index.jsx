import React from 'react'
import PropTypes from 'prop-types'
import Modal, {
  ModalHeader,
  ModalContent,
  ModalFooter,
  ModalButton,
} from '../Modal'
import css from './index.scss'

function ContactModal(props) {
  const handleClick = e => {
    this.props.onSent(e)
  }
  return (
    <Modal {...props} className={css.contact} isOpen={props.isOpen}>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        netlify
      >
        <ModalHeader>Contact Me</ModalHeader>
        <ModalContent className={css.contact__content}>
          Not working Currently, use my email below
          <div>
            {/* <label htmlFor="contact-name">Name:</label> */}
            <input
              placeholder="Your name"
              name="name"
              id="contact-name"
              type="text"
            />
          </div>
          <div>
            {/* <label htmlFor="contact-message">Message:</label> */}
            <textarea
              name="message"
              placeholder="Your message"
              id="contact-message"
              type="text"
            />
          </div>
        </ModalContent>
        <ModalFooter className={css.contact__footer}>
          <ModalButton
            type="submit"
            onClick={handleClick}
            className={css.contact__button}
          >
            Send Message
          </ModalButton>
        </ModalFooter>
      </form>
    </Modal>
  )
}

ContactModal.propTypes = {
  isOpen: PropTypes.bool,
  onSent: PropTypes.func,
}
ContactModal.defaultProps = {
  isOpen: false,
  onSent: null,
}
export default ContactModal
