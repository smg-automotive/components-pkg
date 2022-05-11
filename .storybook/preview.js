import React from 'react'
import { addDecorator } from '@storybook/react'
import { CSSReset, ThemeProvider } from '@chakra-ui/react'
import { withThemes } from '@react-theming/storybook-addon'
import { as24, ms24 } from '../src/theme'

const providerFn = ({ theme = as24, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      {children}
    </ThemeProvider>
  )
}

addDecorator(withThemes(null, [as24, ms24], { providerFn }))

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
