import React from 'react'

class CoordinatesButton extends React.Component {
    constructor(props) {
        super(props)
    }

    handleClickEvent = (event) => {
        let x = event.clientX
        let y = event.clientY
        this.props.onReceiveCoordinates([x,y])
    }

    render () {
        return (
            <button onClick={this.handleClickEvent}
            />
        )
    }
}

export default CoordinatesButton
