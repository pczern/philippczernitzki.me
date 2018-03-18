import styled from 'styled-components'

const InnerBannerCentered = styled.div`
  max-width: ${props => (props.maxWidth ? props.maxWidth : 'inherit')};
  margin: 0 auto;
  color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: ${props => (props.justify ? props.align : 'center')};
  justify-content: ${props => (props.justify ? props.justify : 'center')};
  flex-direction: column;
`

export default InnerBannerCentered
