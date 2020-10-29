import React from 'react';
import Image from './image'
import Button from './button'

function Card(props) {
  // console.log(props);
  return (
    <>
    <Image />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
          <i className="fas fa-clock fa-5x p-2"></i>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h1>{props.horas}</h1>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h1>{props.minutos}</h1>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h1>{props.segundos}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button />
    </>
  );
}

export default Card;