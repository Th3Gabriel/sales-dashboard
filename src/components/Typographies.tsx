import styled from 'styled-components'
import { TyphographiesProps } from '@/types'
import { pxTorem } from '@/utils'

export const StyledH1 = styled.h1<TyphographiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxTorem(props.size || 24)};
  font-weight: ${(props) => pxTorem(props.weight || 600)};
  letter-spacing: ${pxTorem(-1)};
  line-height: ${(props) => pxTorem(props.lineheight || 36)};
`

export const StyledH2 = styled.h2<TyphographiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxTorem(props.size || 16)};
  font-weight: ${(props) => pxTorem(props.weight || 600)};
  line-height: ${(props) => pxTorem(props.lineheight || 24)};
`
export const StyledP = styled.p<TyphographiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxTorem(props.size || 16)};
  font-weight: ${(props) => pxTorem(props.weight || 400)};
  line-height: ${(props) => pxTorem(props.lineheight || 24)};
`
export const StyledSpan = styled.span<TyphographiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxTorem(props.size || 16)};
  font-weight: ${(props) => pxTorem(props.weight || 400)};
  line-height: ${(props) => pxTorem(props.lineheight || 24)};
`
export const StyledUl = styled.ul<TyphographiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxTorem(props.size || 16)};
  font-weight: ${(props) => pxTorem(props.weight || 400)};
  line-height: ${(props) => pxTorem(props.lineheight || 24)};
  list-style-position: inside;
  li {
    list-style-position: outside;
    margin-left: ${pxTorem(15)};
  }
`
