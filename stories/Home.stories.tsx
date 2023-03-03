import { StoryObj, Meta } from '@storybook/react'
import Home from '../pages/index'

const meta: Meta<typeof Home> = {
  title: 'Pages/Home Page',
  component: Home,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  // parameters: {
  //   // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  //   layout: 'fullscreen',
  // },
}

export default meta
type Story = StoryObj<typeof Home>

export const HomePage: Story = {}
