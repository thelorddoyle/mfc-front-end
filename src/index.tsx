import React from 'react';
import ReactDOM from 'react-dom';
import ApolloProvider from "./config/ApolloProvider"
import "./styles/global.scss"


ReactDOM.render(
<React.StrictMode>
      { ApolloProvider }
</React.StrictMode>,
  document.getElementById('root')
);
