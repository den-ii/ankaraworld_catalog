import { StoryObj, Meta } from '@storybook/react'
import footer from '../components/Footer'

const meta: Meta<typeof footer> = {
  title: 'Component/Footer',
  component: footer,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  // tags: ['autodocs'],
  // parameters: {
  //   // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  //   layout: 'fullscreen',
  // },
}

export default meta
type Story = StoryObj<typeof footer>

export const Footer: Story = {}
