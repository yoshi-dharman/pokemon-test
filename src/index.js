import React from 'react';
import ReactDOM from 'react-dom';
import PokemonProvider from './context/context';
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/client";
import App from './App';
// import reportWebVitals from './reportWebVitals';
import './index.css';
import './css/main.css';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <PokemonProvider>
        <App />
      </PokemonProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
