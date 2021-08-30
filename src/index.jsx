import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom'

import Home from './Home';
import Article from './Article'
import About from './About'

// eslint-disable-next-line 
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <BrowserRouter>
      <Route exact path="/" component={ Home }/>
      <Route exact path="/about" component={ About }/>
      <Route path="/site/:id" component={ Article }/>

  </BrowserRouter>, document.getElementById('root')
  
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
