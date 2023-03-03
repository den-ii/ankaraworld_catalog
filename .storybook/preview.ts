//
import type { Preview } from '@storybook/react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import '../styles/global.css'

// import * as NextImage from "next/image";

// const OriginalNextImage = NextImage.default;

// Object.defineProperty(NextImage, "default", {
//   configurable: true,
//   
//   value: (props) => (<OriginalNextImage unoptimized={true}/>)
// });

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'white',
    },
    nextRouter: {
      Provider: RouterContext.Provider,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
