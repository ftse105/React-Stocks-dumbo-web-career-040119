import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    // console.log(this.props.stockStocks);
    return (
      <div>
        <SearchBar filterStockType={this.props.filterStockType} filterType={this.props.filterType} sortByAlphabet={this.props.sortByAlphabet} name={this.props.name} stockStocks={this.props.stockStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer filterStockType={this.props.filterStockType} filterType={this.props.filterType} portfolioStocks={this.props.portfolioStocks} moveStock={this.props.moveStock} stockStocks={this.props.stockStocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer removeStock={this.props.removeStock} portfolioStocks={this.props.portfolioStocks}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
