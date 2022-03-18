import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloProvider from "./ApolloProvider"
import * as dotenv from 'dotenv'

dotenv.config()

ReactDOM.render(
<React.StrictMode>
      { ApolloProvider }
</React.StrictMode>,
  document.getElementById('root')
);
