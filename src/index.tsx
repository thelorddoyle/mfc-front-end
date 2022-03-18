import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloProvider from "./ApolloProvider"
import env from 'dotenv'

ReactDOM.render(
<React.StrictMode>
      { ApolloProvider }
</React.StrictMode>,
  document.getElementById('root')
);
