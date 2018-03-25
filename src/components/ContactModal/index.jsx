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
  return (
    <Modal {...props} className={css.contact} isOpen={props.isOpen}>
      <ModalHeader>Contact Me</ModalHeader>
      <ModalContent className={css.contact__content}>
        Not working Currently, use my email below
        <div>
          {/* <label htmlFor="contact-name">Name:</label> */}
          <input placeholder="Your name" id="contact-name" type="text" />
        </div>
        <div>
          {/* <label htmlFor="contact-message">Message:</label> */}
          <textarea
            placeholder="Your message"
            id="contact-message"
            type="text"
          />
        </div>
      </ModalContent>
      <ModalFooter className={css.contact__footer}>
        <ModalButton
          disabled
          onClick={props.onSent}
          className={css.contact__button}
        >
          Send Message
        </ModalButton>
      </ModalFooter>
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
