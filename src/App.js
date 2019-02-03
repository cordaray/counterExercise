import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counters from './components/Counters';
import Navbar from './components/Navbar';

class App extends Component {

  state = {

    counters : [{id: 1, value: 4},
                {id: 2, value: 0},
                {id: 3, value: 1},
                {id: 4, value: 5},
                {id: 5, value: 4}]

  }

  render() {
    return (
      <div className="container">
        <Navbar counters={this.state.counters}/> 
        <button className="btn btn-secondary" onClick={this.handleReset}>RESET</button>
        <Counters counters={this.state.counters} onDelete={this.handleDelete} onIncrement={this.handleIncrement} onDecrease={this.handleDecrease}/>
      </div>
    );
  }

  handleIncrement=c=>{

    const counters = this.state.counters.map(counter => {(c.id === counter.id) && counter.value++; return counter;});
    this.setState({counters});

  }

  handleDelete=id=>{

    const counters = this.state.counters.filter(counter => counter.id !== id);
    this.setState({counters});

  }

  handleReset=()=> {
    const counters = this.state.counters.map(counter => {counter.value=0; return counter;});
    this.setState({counters});
  }

  handleDecrease=id=>{
    const counters = this.state.counters.map(counter => {(counter.id === id) && counter.value--; return counter});
    this.setState({counters});
  }

}

export default App;
