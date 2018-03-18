import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  & > * {
    width: ${props => 100 / props.cols}%;
  }
  display: flex;
  align-items: center;
  padding: ${props => props.padding};
`

const Row = props => <Wrapper {...props}>{props.children}</Wrapper>

Row.propTypes = {
  cols: PropTypes.number.isRequired,
  padding: PropTypes.string,
  children: PropTypes.node.isRequired,
}
Row.defaultProps = {
  padding: '',
}
export default Row
