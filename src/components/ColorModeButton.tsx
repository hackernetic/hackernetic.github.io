import * as React from 'react'
import { Button, useColorMode, IconButton } from '@chakra-ui/core'

export const ColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton
      variant="outline"
      size="xs"
      aria-label="Toggle Site Theme"
      icon={colorMode === 'dark' ? 'sun' : 'moon'}
      onClick={() => toggleColorMode()}
    />
  )
}
