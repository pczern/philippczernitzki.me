import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from '../Icon'

const Wrapper = styled.figure`
  text-align: center;
`

const StyledIcon = styled(Icon)`
  font-size: 2em;
  color: #121212;
  width: 100%;
  margin-bottom: 0.5em;
`

const Caption = styled.figcaption`
  line-height: 1.8;
  font-size: 1.15em;
  font-weight: 300;
  color: ${props => props.theme.secondaryText};
`

const SmallIconBox = props => (
  <Wrapper className={props.className}>
    <StyledIcon className="fa-fw fa-xs" src={props.icon} />
    <Caption>{props.children}</Caption>
  </Wrapper>
)

SmallIconBox.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  children: PropTypes.string.isRequired,
}
SmallIconBox.defaultProps = {
  className: '',
}
export default SmallIconBox
