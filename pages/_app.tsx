import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { getApolloClient } from '../getApolloClient';
const client = getApolloClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
  )
}

export default MyApp
