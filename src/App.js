import React from 'react';
import Counter from './Counter'
import './App.css';
import ColorPicker from './ColorPicker'

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      input: 0,
      submit: 0,

    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      count: parseInt(this.state.input, 10)
    })

  }

  render() {
    return (
      <div className="App">
        <h1>submit</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="number" value={this.state.input} onChange={this.handleChange} min={this.state.min} max={this.state.max} placeholder='enter start point' />
          <button type='submit'>submit</button>
        </form>
        <div>submit: {this.state.count}</div>

        <h1>Counter</h1>
        <Counter onChange={count => console.log(count)} />
        <ColorPicker />
      </div>
    );
  }
}



