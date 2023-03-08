import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipProvider = styled(Tooltip.Provider, {
  width: '100%',
  height: '100%',
})
export const TooltipContainer = styled(Tooltip.Root, {
  width: '100%',
  height: '100%',
})
export const TooltipTrigger = styled(Tooltip.Trigger, {
  backgroundColor: 'transparent',
  border: 'none',
  width: '100%',
  height: '100%',
})
export const TooltipPortal = styled(Tooltip.Portal, {})
export const TooltipContent = styled(Tooltip.Content, {
  padding: '$3 $4',
  backgroundColor: '$gray900',
  color: '$gray100',
  borderRadius: '$sm',
  fontWeight: '$bold',
  fontSize: 'sm',
})
export const TooltipArrow = styled(Tooltip.Arrow, {})
