import React from "react";
import App from '../App';
import {DefaultOptions, ApolloClient, ApolloProvider, InMemoryCache, createHttpLink, ApolloLink, NormalizedCacheObject } from '@apollo/client'


const defaultOptions: DefaultOptions = {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  }

const httpLink: ApolloLink = createHttpLink({
    uri: `${process.env.REACT_APP_BASE_URL}`,
})

//Establishing connection
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions,
})

export default (
    <ApolloProvider client={ client }>
        <App/>
    </ApolloProvider>
)  