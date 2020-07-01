import * as React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { Stack, Text, Code, Box } from '@chakra-ui/core'
import { ColorModeButton } from '~components/ColorModeButton'

const BasicInfoQuery = gql`
  {
    personalInfos {
      info
    }
  }
`

const Header = ({ info }) => {
  return (
    <Stack isInline align="center" justify="space-between">
      <Stack spacing={1} align="flex-start">
        <Text fontSize="4xl">{info.name}</Text>
        <Text fontSize="md" as="i">
          {info.pronouns}
        </Text>
        <Text fontSize="md" as="i">
          {info.location.name}
        </Text>
        <Code fontSize="xs">
          {info.email} [at] {window.location.hostname}
        </Code>
      </Stack>
      <Stack spacing={1} align="flex-end">
        {info.handles.map((handle) => (
          <Code
            variantColor="yellow"
            fontSize="l"
            key={`header-handle-${handle}`}
          >
            {handle}
          </Code>
        ))}
      </Stack>
    </Stack>
  )
}

export const Primary: React.FC = ({ children }) => {
  const { loading, error, data } = useQuery(BasicInfoQuery)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  console.log(data.personalInfos[0].info)
  const info = data?.personalInfos[0]?.info

  return (
    <Stack w="100vw" h="100vh" p={8}>
      <Box position="fixed" top="8px" right="8px">
        <ColorModeButton />
      </Box>
      <Header info={info} />
      <Box flex={1}>{children}</Box>
      <Stack isInline align="center" justify="space-between">
        <Box>Contact</Box>
        <Box>Socials</Box>
        <Box>Email</Box>
      </Stack>
    </Stack>
  )
}
