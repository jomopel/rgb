import React from 'react';

export default class Buttons extends React.Component {
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

        
    }
    handlePlus() {
        this.setState(state => ({
            count: state.count + 1,
        }))
        this.props.onChange(this.props.value + 1)
    }

    handleMinus() {
        this.setState(state => ({
            count: state.count - 1,
        }))
        this.props.onChange(this.props.value - 1)
    }


    render() {

        return (
            <div className='counter' >
                {
                    this.props.colors.map(color => {
                        return (
                            <div>
                                <button className='btn' disabled={this.state.count === this.state.min} onClick={this.handleMinus}>minus</button>
                                <div>{color.name} = {color.count}</div>
                                <button className='btn' disabled={this.state.count === this.state.max} onClick={this.handlePlus}>plus</button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}