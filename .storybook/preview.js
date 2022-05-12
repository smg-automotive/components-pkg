import React from 'react'
import { addDecorator } from '@storybook/react'
import { CSSReset, ThemeProvider } from '@chakra-ui/react'
import { withThemes } from '@react-theming/storybook-addon'
import { autoScout24Theme, motoScout24Theme } from '../src/theme'

const providerFn = ({ theme = autoScout24Theme, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      {children}
    </ThemeProvider>
  )
}

addDecorator(withThemes(null, [autoScout24Theme, motoScout24Theme], { providerFn }))

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
