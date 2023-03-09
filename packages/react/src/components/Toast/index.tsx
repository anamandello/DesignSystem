import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import {
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title: string
  description: string
}

export const Toast = (props: ToastProps) => {
  return (
    <ToastProvider swipeDirection={'right'}>
      <ToastRoot {...props}>
        <ToastTitle>{props.title}</ToastTitle>
        <ToastDescription>{props.description}</ToastDescription>
        <ToastClose asChild>
          <X size={20} />
        </ToastClose>
      </ToastRoot>
      <ToastViewport />
    </ToastProvider>
  )
}
