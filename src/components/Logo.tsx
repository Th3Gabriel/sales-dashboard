import styled from 'styled-components'
import { pxTorem } from '@/utils'

export const Logo = styled.figure<{ height: number; width: number }>`
  background-image: url(./${(props) => props.theme.appLogo});
  background-size: cover;
  width: ${(props) => pxTorem(props.width)};
  height: ${(props) => pxTorem(props.height)};
`
