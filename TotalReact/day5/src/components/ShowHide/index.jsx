import {Component} from "react";
import "./index.css"

class ShowHide extends Component {
    state = {showFirstName: false, showLastName: false}

    onshowFirstName = () => {
        this.setState((prevState) => {
            // console.log(prevState)
            const updatedValue = !prevState.showFirstName;
            return {showFirstName: updatedValue}
        })
    }
    onshowLastName = () => {
        this.setState((prevState) => {
            console.log("cl")
            const updatedValue = !prevState.showLastName;
            return {showLastName: updatedValue}
        })
    } 
    render(){
        const {showFirstName, showLastName} = this.state;

        return(
            <>
                <div className="showhide-container">
                    <h1>Show/Hide Mini-Project</h1>
                    <div className="showHide-cards-container">
                        <div className="showhide-card">
                            <button onClick={this.onshowFirstName} className="showHide-btn" type="button">Show/FirstName</button>
                            {showFirstName && 
                            <div className="showHide-content-container">
                                <p className="showHide-content-title">Yash Raj</p>
                            </div>}
                        </div>
                        {/* 2nd Card */}
                        <div className="showhide-card">
                            <button onClick={this.onshowLastName} className="showHide-btn" type="button">Show/LastName</button>
                            {showLastName && 
                            <div className="showHide-content-container">
                                <p className="showHide-content-title">Patel</p>
                            </div>}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ShowHide