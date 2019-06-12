import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'


class App extends Component {

  state = {
    stockStocks: [],
    portfolioStocks: [],
    filteredStockStocks: [],
    type: "",
    name: false,
    price: false
  }

  filterType = (value) => {
    // console.log(value);
    this.setState({
      type: value
    })
  }

  sortByAlphabet = () => {
    const allArr = this.state.stockStocks.sort((a,b) => {
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    })
    const allPort = this.state.portfolioStocks.sort((a,b) => {
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    })
    this.setState({
      stockStocks: allArr,
      portfolioStocks: allPort,
      name: !this.state.name,
      price: false
    })
  }

  sortbyPrice = () => {

  }


  moveStock = (value) => {
    if (!this.state.portfolioStocks.includes(value)) {

      this.setState({
        portfolioStocks: [...this.state.portfolioStocks, value]
      })
    }
  }


  removeStock = (value) => {
    let remove = this.state.portfolioStocks.filter(stock => stock.id !== value.id)
    // debugger
    this.setState({
      portfolioStocks: remove
    })
  }

  componentDidMount(){
    fetch("http://localhost:3000/stocks")
    .then(res => res.json())
    .then(data => {
      this.setState({
        stockStocks: data,
      })
    })
  }

  render() {
    // console.log(this.state.portfolioStocks);
    let filterStockType;

    // console.log(this.state.type);
    if (this.state.type === "") {
      filterStockType = this.state.stockStocks
    } else {
      filterStockType = this.state.stockStocks.filter(stock => {
      return stock.type === this.state.type
    })
  }

    return (
      <div>
        <Header/>
        <MainContainer
          filterStockType={filterStockType} filterType={this.filterType} name={this.state.name} sortByAlphabet={this.sortByAlphabet}
          removeStock={this.removeStock} portfolioStocks={this.state.portfolioStocks} moveStock={this.moveStock} stockStocks={this.state.stockStocks}/>
      </div>
    );
  }
}

export default App;
