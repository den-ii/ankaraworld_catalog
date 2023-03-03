import { StoryObj, Meta } from '@storybook/react'
import hero from '../components/HeroSection'

const meta: Meta<typeof hero> = {
  title: 'Component/Hero Section',
  component: hero,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  // tags: ['autodocs'],
  // parameters: {
  //   // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  //   layout: 'fullscreen',
  // },
}

export default meta
type Story = StoryObj<typeof hero>

export const HeroSection: Story = {}
