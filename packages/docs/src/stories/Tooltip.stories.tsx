import type { Meta, StoryObj } from '@storybook/react'

import { Tooltip, TooltipProps } from '@ignite-ui/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    content: '21 de Outubro - Indisponível',
    children: <span>Tooltip</span>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}

export const CustomTag: StoryObj<TooltipProps> = {
  args: {
    children: (
      <strong>
        <p>Strong with p</p>
      </strong>
    ),
  },
}
