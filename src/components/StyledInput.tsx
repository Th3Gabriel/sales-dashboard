import styled from 'styled-components'
import { InputProps } from '../types'
import { pxTorem } from '../utils'

const StyledInput = styled.input<InputProps>`
  background-color: ${(props) => props.theme.textInput.active};
  color: ${(props) => props.theme.textInput.activeColor};
  border-radius: ${pxTorem(8)};
  border: ${pxTorem(1)} solid ${(props) => props.theme.textInput.borderColor};
  box-sizing: border-box;
  height: ${pxTorem(40)};
  font-size: ${pxTorem(14)};
  cursor: pointer;
  font-weight: 500;
  padding: ${pxTorem(8)} ${pxTorem(16)};
  transition: background-color 0.3s;
  width: 100%;

  &:disabled {
    background-color: ${(props) => props.theme.textInput.disabled};
    border: ${pxTorem(8)} solid
      ${(props) => props.theme.textInput.disabledBorderColor};
    color: ${(props) => props.theme.textInput.disabled};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${(props) => props.theme.textInput.placeHolderColor};
  }
`

export default StyledInput
