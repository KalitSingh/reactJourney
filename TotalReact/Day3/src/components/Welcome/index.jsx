import {Component} from "react" ; 
import "./index.css"

class Welcome extends Component{
    state = {isSubscribe: false, btnStyle: ""};

    // buttonClicked = () =>{
    //     const {isSubscribe} = this.state; 
    //     if (isSubscribe === true){
    //         this.setState({isSubscribe: false})
    //     }else{
    //         this.setState({isSubscribe: true})
    //     }
    // }

    buttonClicked = () => {
        this.setState(prevState => {
            if (prevState.isSubscribe === false){
                return {isSubscribe: true, btnStyle: "subscribe-btnCss"}
            } 
            else{
                return {isSubscribe: false}
            }
        })
    }
    render(){ 
        const {isSubscribe, btnStyle} = this.state;
        return(
            <>
                <div className="welcome-container">
                    <h1>Welcome</h1>
                    <p>Thankyou Happy Learning</p>
                    <div>
                       {isSubscribe && <button className={btnStyle} onClick={this.buttonClicked}>Subscribed</button>}
                      {!isSubscribe && <button onClick={this.buttonClicked}>Subscribe</button>}
                    </div>
                </div>
            </>
        )
    }
}

export default Welcome;