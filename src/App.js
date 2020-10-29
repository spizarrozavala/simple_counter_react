import React from 'react';
import Card from './components/card';

function App(props) {
  // console.log(props);
  return (
    <>
    <Card segundos={props.segundos} minutos={props.minutos} horas={props.horas}  />
    </>
  );
}

export default App;
 