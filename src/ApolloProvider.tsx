import React from "react";
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink, ApolloLink, NormalizedCacheObject } from '@apollo/client'

const httpLink: ApolloLink = createHttpLink({
    uri: "http://localhost:4000/"
})

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})
// connectToDevTools: process.env.NODE_ENV === 'development'

export default (
    <ApolloProvider client={ client }>
        <App/>
    </ApolloProvider>
)