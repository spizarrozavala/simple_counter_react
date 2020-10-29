import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import './components/card'
import './index.css';

let reloj = {
  segundos: 0,
  minutos: 0,
  horas: 0

}






const Stop = setInterval(() => {
  ReactDOM.render(<App segundos={reloj.segundos} minutos={reloj.minutos} horas={reloj.horas} reset={reloj} />, document.getElementById('root'));
  reloj.segundos++;  
  if (reloj.segundos > 59){     
     reloj.segundos = 0;
     reloj.minutos++;
  } 
  if(reloj.minutos > 59){
    reloj.minutos=0;
    reloj.horas++;
  }
},1000)

export default Stop;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
