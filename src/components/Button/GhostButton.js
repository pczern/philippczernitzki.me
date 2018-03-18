import styled from 'styled-components'

const ActionButton = styled.button`
  color: #222;
  border: solid 1px #f6f6f6ee;
  border-radius: 5px;
  padding: 0.75em 2.3em;
  font-weight: 300;
  letter-spacing: 1px;
  display: inline-block;
  margin-bottom: 5em;
  color: #f6f6f6;
  margin-left: 1px;
  cursor: pointer;
  &:hover {
    background-color: #f6f6f6ee;
    color: ${props => (props.color ? props.color : props.theme.primary)};
  }
`

export default ActionButton
