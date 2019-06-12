import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.portfolioStocks.map(stock => {
              return <Stock removeStock={this.props.removeStock} portfolioStocks={this.props.portfolioStocks} stock={stock} />
            })
          }
      </div>
    );
  }

}

export default PortfolioContainer;
