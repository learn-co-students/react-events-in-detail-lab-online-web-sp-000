// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {
   
    handleClick = (e) => {
        return this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }
    
    render(){
        return(
             <div>
                <button onClick={e => this.handleClick(e)}></button>
            </div>
        )
    }
}

export default CoordinatesButton