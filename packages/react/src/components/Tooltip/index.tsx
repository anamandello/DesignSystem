import { ComponentProps } from 'react'
import {
  TooltipArrow,
  TooltipRoot,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
} from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipRoot> {
  content: string
}

export function Tooltip(props: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipRoot>
        <TooltipTrigger asChild>{props.children}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent>
            {props.content}
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  )
}

Tooltip.displayName = 'Tooltip'
