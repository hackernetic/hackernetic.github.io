import * as React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { config } from '~config'

export const client = new ApolloClient({
  uri: config.graphqlUrl,
})

export const GraphqlProvider = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
