import React from "react";
import App from '../App';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink, ApolloLink, NormalizedCacheObject } from '@apollo/client'


//Setting BASE URL for our Apollo-client connection
const httpLink: ApolloLink = createHttpLink({
    uri: `${process.env.REACT_APP_BASE_URL}`
})

//Establishing connection
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

//Export connection all the way to its components
export default (
    <ApolloProvider client={ client }>
        <App/>
    </ApolloProvider>
)