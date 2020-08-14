import React from 'react';
import './App.css';
import Buttons from './Buttons';

export default class App2 extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            colors: [{
                id: 1, name: "red", count: 0
            },
            {
                id: 1, name: "green", count: 0
            },
            {
                id: 1, name: "blue", count: 0
            }]

        }
    }

    render() {
        return (
            <div className='App'>
                <h1>RGB</h1>

                <Buttons colors={this.state.colors} onClick={() => console.log()} />
            </div>
        )
    }
}