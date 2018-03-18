import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BannerImage = styled.div`
  width: 100%;
  height: ${props => props.height}px;
  display: flex;
  align-items: center;
  background-image: url(${props => props.src});
  background-size: cover;
`

const BannerContent = styled.div`
  width: 100%;
  height: ${props => props.height}px;
  background-color: ${props => props.color};
`

const Banner = props => (
  <BannerImage height={props.height} src={props.src}>
    <BannerContent height={props.height} color={props.color}>
      {props.children}
    </BannerContent>
  </BannerImage>
)

Banner.propTypes = {
  height: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.node,
}

Banner.defaultProps = {
  children: null,
}

export default Banner
