/* Biblioteca do React */
import React from 'react';
/* Biblioteca do Virtual DOM */
import ReactDOM from 'react-dom';
/* Importando o componente App */
import App from './App';
/* Importando o CSS */
import './index.css';

/* Aqui é o inicio de tudo onde o ReactDOM renderiza o APP */
ReactDOM.render(<App />, document.getElementById('root'))