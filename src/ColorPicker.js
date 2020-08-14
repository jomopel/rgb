import React from 'react';



export default class ColorPicker extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            red: 0,
            green: 0,
            blue: 0,
        }
    }


    render() {
        return (
            <div className="colorPicker" style={{ backgroundColor: `rgb(${this.props.red},${this.props.green},${this.props.blue})` }}>
            </div>
        );
    }

}