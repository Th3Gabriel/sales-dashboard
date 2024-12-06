import { HtmlHTMLAttributes } from 'react'

export type InputProps = React.InputHTMLAttributes<HTMLButtonElement>
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export type MessageProps = {
  msg: string
  type: 'error' | 'success'
}

export interface FormComponentProps {
  inputs: InputProps[]
  buttons: ButtonProps[]
  message?: MessageProps
}
