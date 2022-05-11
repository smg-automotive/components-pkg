import { extendTheme } from '@chakra-ui/react'
import colors from './colors'
import basis from '../shared/basis'

export const theme = {
  ...basis,
  colors,
  name: 'AutoScout 24',
}

export default extendTheme(theme)
