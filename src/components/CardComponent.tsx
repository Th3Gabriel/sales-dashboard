import { pxTorem } from '@/utils'
import styled from 'styled-components'

export const CardComponent = styled.div`
  background-color: ${(props) => props.theme.card.background};
  border: ${pxTorem(1)} solid ${(props) => props.theme.card.border};
  border-radius: ${pxTorem(8)};
  box-sizing: border-box;
  padding: ${pxTorem(24)};
  width: 100%;

  &.alert {
    background-color: ${(props) => props.theme.card.alert};
    background-color: ${(props) => props.theme.card.alert};
  }
  &.success {
    background-color: ${(props) => props.theme.card.success};
    background-color: ${(props) => props.theme.card.success};
  }
  &.warning {
    background-color: ${(props) => props.theme.card.warning};
    background-color: ${(props) => props.theme.card.warning};
  }
  a {
    color: inhering;
    text-decoration: none;
  }
`
