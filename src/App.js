import React from 'react';
import Counter from './Counter'
import './App.css';
import ColorPicker from './ColorPicker'
import Buttons from './Buttons'

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      input: 0,
      submit: 0,
      red: 0,
      green: 0,
      blue: 0,
      

    }
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(count, name) {
    console.log(name);
    if(name === "red") {
    this.setState({
      red: count
    })
  }
  if(name === "green") {
    this.setState({
      green: count
    })
  }
  if(name === "blue") {
    this.setState({
      blue: count
    })
  }
  }



  render() {
    return (
      <div className="App">
        <h1>Counter</h1>
        <Counter onChange={this.handleChange} name={"red"} value={this.state.red} />
        <Counter onChange={this.handleChange} name={"green"} value={this.state.green} />
        <Counter onChange={this.handleChange} name={"blue"} value={this.state.blue} />

        
        <ColorPicker red={this.state.red} green={this.state.green} blue={this.state.blue} />
      </div>
    );
  }
}



