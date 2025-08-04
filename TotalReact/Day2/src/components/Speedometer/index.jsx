import {useState} from "react"; 
import "./index.css";
const Speedometer = () =>{
    const [initialSpeed, updateSpeed] = useState(0); 

    let maxSpeed = 200;
     const onAccelerate = () => {
        if (initialSpeed < maxSpeed){
            updateSpeed(prevState => prevState + 10);
        }
        return;
    }

    const onApplyingBreak = () =>{
        if (initialSpeed > 0){
            updateSpeed(prevState => prevState - 10)
        }
        return;
    }
    return(
        <>
            <div className="speedoContainer"> 
                <img src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png" alt="speedometer" className="speedoImg" />
                <h1 className="initialSpeeds">Speed: {initialSpeed}mph</h1>
                <p>Min limit is 0mph. Max limit is 200mph</p>
                <div className="speedoBtnContainer">
                    <button className="speedoBtn" onClick={onAccelerate}>Accelerate</button>
                    <button className="speedoBtn" onClick={onApplyingBreak}>Apply Break</button>
                </div>
            </div>
        </>
    )
}

export default Speedometer;