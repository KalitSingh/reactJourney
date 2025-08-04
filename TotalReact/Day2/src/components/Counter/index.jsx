import {Component} from "react";  
import "./index.css";
class Counter extends Component{

    state = {
        count: 0
    } 
    
    onIncrement = () => {
        this.setState((prevState) => {
            return{count: prevState.count + 1} 
        })
    }

    onDecrement = () => {
        this.setState((prevState) => {
            return{count: prevState.count - 1} 
        })
    }
    render(){
        return(
            <>
            <div className="counterApp-container">
                <h1 className="counter-heading">Counter App</h1>
                <h1>Count: {this.state.count}</h1>
                <div className="counters-btn-container">
                    <button className="counter-btn" onClick={this.onIncrement}>Incre +</button>
                    <button className="counter-btn" onClick={this.onDecrement}>Decre +</button>
                </div>
            </div>
            </>
        )
    }
}


export default Counter;