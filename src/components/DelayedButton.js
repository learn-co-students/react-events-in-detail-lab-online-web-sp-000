// Code DelayedButton Component Here
import React,{Component} from 'react';
export default class DelayedButton extends Component{



handleClick = (event) =>{
    event.persist();
    setTimeout(() => {
         this.props.onDelayedClick(event)
         console.log('hi')
        
    }, this.props.delay);
    


}





render(){
    return(
        <button  onClick={this.handleClick}/>
    )
}





}