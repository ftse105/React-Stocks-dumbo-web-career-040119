import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    console.log(this.props.filterStockType);
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.filterStockType.map(stock => {
            return <Stock key={stock.id} filterType={this.props.filterType} portfolioStocks={this.props.portfolioStocks} moveStock={this.props.moveStock} stock={stock}/>
          })
        }
      </div>
    );
  }

}

export default StockContainer;

// {
//   this.props.stockStocks.map(stock => {
//     return <Stock key={stock.id} filterType={this.props.filterType} portfolioStocks={this.props.portfolioStocks} moveStock={this.props.moveStock} stock={stock}/>
//   })
// }
