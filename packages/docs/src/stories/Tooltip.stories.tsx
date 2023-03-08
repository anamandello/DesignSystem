import type { Meta, StoryObj } from '@storybook/react'

import { Tooltip, TooltipProps } from '@ignite-ui/react'

export default {
  title: 'Tooltip',
  component: Tooltip,
  args: {
    children: '26 de Outubro - Disponível',
    content: '<p>Teste</p>',
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
