import { FormComponentProps } from '@/types'
import StyledButton from './StyledButton'
import StyledInput from './StyledInput'
import { pxTorem } from '@/utils'
import { styled } from 'styled-components'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: ${pxTorem(16)};
`

function FormComponent(props: FormComponentProps) {
  const { inputs = [], buttons = [], message } = props

  return (
    <StyledForm>
      {inputs.map((inputProps, index) => (
        <StyledInput key={index} {...inputProps} />
      ))}

      {buttons.map((buttonProps, index) => (
        <StyledButton key={index} {...buttonProps} />
      ))}

      {message && (
        <div style={{ color: message.type === 'error' ? 'red' : 'green' }}>
          {message.msg}
        </div>
      )}
    </StyledForm>
  )
}

export default FormComponent
