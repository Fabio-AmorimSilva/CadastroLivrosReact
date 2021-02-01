import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const DATA = [

  {title: "Conde de Monte Cristo", year: "1844", author: "Alexandre Dumas", genre: "Fiction", synopsys: "História de traição", status: "completed"},
  {title: "Revolta de Atlas", year: "1957", author: "Ayn Rand", genre: "Romance", synopsys: "People vs Opression", status: "reading"}

];


ReactDOM.render(
  <React.StrictMode>
    <App books={DATA}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
