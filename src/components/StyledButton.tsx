import styled from 'styled-components'
import { ButtonProps } from '../types'
import { pxTorem } from '../utils'

const StyledButton = styled.button<ButtonProps>`
  border-radius: ${pxTorem(8)};
  box-sizing: border-box;
  cursor: pointer;
  font-size: ${pxTorem(16)};
  font-weight: bold;
  height: ${pxTorem(50)};
  padding: 0 ${pxTorem(16)};
  transition: background-color 0.3s;
  width: 100%;

  &.primary {
    background-color: ${(props) => props.theme.buttons.primary};
    color: ${(props) => props.theme.buttons.primaryColor};
    &:hover {
      background-color: ${(props) => props.theme.buttons.primaryHover};
    }
  }

  &.alert {
    background-color: ${(props) => props.theme.buttons.alert};
    color: ${(props) => props.theme.buttons.alertColor};
    &:hover {
      background-color: ${(props) => props.theme.buttons.alertHover};
    }
  }

  &.borderless-alert {
    background-color: none;
    color: ${(props) => props.theme.buttons.alert};
    height: 0;
    padding: 0;
    &:hover {
      background-color: ${(props) => props.theme.buttons.alertHover};
    }
  }

  &:disable {
    background-color: ${(props) => props.theme.buttons.disabled};
    color: ${(props) => props.theme.buttons.disabledColor};
    cursor: not-allowed;
    &:hover {
      background-color: ${(props) => props.theme.buttons.disabled};
      color: ${(props) => props.theme.buttons.disabledColor};
    }
  }
`

export default StyledButton
