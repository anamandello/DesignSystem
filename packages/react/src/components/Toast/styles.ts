import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastProvider = styled(Toast.Provider, {})

export const ToastRoot = styled(Toast.Root, {
  padding: '$3 $5',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',

  display: 'grid',
  gridTemplateAreas: `
                    'title close'
                    'description close'
                    `,
  gridTemplateColumns: 'auto max-content',
  columnGap: '15px',
})

export const ToastTitle = styled(Toast.Title, {
  gridArea: 'title',
  color: '$white',
  fontFamily: '$default',
  fontSize: '$xl',
  fontWeight: '$bold',
  lineHeight: '$base',
})

export const ToastDescription = styled(Toast.Description, {
  gridArea: 'description',
  color: '$gray200',
  fontSize: '$sm',
  lineHeight: '$base',
})

export const ToastClose = styled(Toast.Close, {
  gridArea: 'close',
  padding: '$1',
  color: '$gray100',
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: '0',
  right: '0',
  display: 'flex',
  flexDirection: 'column',
  padding: '$3 $5',
  gap: '10px',
  minWidth: '23.75rem',
  maxWidth: '100vw',
  margin: '0',
  listStyle: 'none',
  zIndes: '214774833647',
  outline: 'none',
})
