import { StoryObj, Meta } from '@storybook/react'
import { MyContext } from '../context'
import Nav from '../components/Navbar'

const meta: Meta<typeof Nav> = {
  title: 'Component/Navbar',
  component: Nav,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  // tags: ['autodocs'],
  // parameters: {
  //   // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  //   layout: 'fullscreen',
  // },
  decorators: [
    (Story) => (
      <MyContext>
        <Story />
      </MyContext>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Nav>

export const Navbar: Story = {}
