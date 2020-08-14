import React from 'react';

export default class Counter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            input: 0,
            submit: 0,
            min: 0,
            max: 255,
        }

        this.handlePlus = this.handlePlus.bind(this)
        this.handleMinus = this.handleMinus.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)



    }
    handlePlus() {
        this.setState(state => ({
            count: state.count + 1,
        }))
        this.props.onChange(this.props.value + 10, this.props.name)
        
    }

    handleMinus() {
        this.setState(state => ({
            count: state.count - 1,
        }))
        this.props.onChange(this.props.value - 10)
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
            <div >
                <div className='counter'>
                    <button className='btn' disabled={this.state.count === this.state.min} onClick={this.handleMinus}>minus</button>
                    <div>{this.props.name}: {this.props.value}</div>

                    <button className='btn' disabled={this.state.count === this.state.max} onClick={this.handlePlus}>plus</button>
                </div>
            </div>
        );
    }
}



