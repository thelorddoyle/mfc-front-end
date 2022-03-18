import React from "react";
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink, ApolloLink, NormalizedCacheObject } from '@apollo/client'



const httpLink: ApolloLink = createHttpLink({
    uri: `${process.env.REACT_APP_BASE_URL}`
})

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})


export default (
    <ApolloProvider client={ client }>
        <App/>
    </ApolloProvider>
)