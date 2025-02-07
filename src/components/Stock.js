import React from 'react'

const Stock = (props) => (
  <div>

    <div className="card">
      <div onClick={props.moveStock ? () => props.moveStock(props.stock) : () => props.removeStock(props.stock)} className="card-body">

        <h5 className="card-title">{
            props.stock.name
          }</h5>
        <p className="card-text"> ${
            props.stock.price
          }</p>
      </div>
    </div>


  </div>
);

export default Stock
