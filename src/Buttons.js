import React from 'react';

export default class Buttons extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }

        this.onClick = this.onClick.bind(this)
    }

    onClick() {
        this.props.onClick()
    }

    render() {

        return (
            <div className='counter' >
                {
                    this.props.colors.map(color => {
                        return (
                            <div>
                                <button className='btn' onClick={this.onClick} >minus</button>
                                <div>{color.name} = {color.count}</div>
                                <button className='btn' >plus</button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}