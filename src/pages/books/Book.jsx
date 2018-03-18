import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BookImage = styled.img`
  height: auto;
`

const Book = props => (
  <div className={props.className}>
    <BookImage src={props.src} />
  </div>
)

Book.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
}
Book.defaultProps = {
  className: '',
}

const StyledBook = styled(Book)`
  float: left;

  margin-right: 10px;
  margin-left: 10px;

  margin-bottom: 30px;
  img {
    height: auto;
    height: 117px;
    width: 87px;
  }
`

export default StyledBook
