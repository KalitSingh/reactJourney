import "./App.css"
import {ReactDefaultCode as React_DC} from "./components/ReactDefaultCode";
import Counter from "./components/Counter/index.jsx"
// speedometer 
import Speedometer from "./components/Speedometer";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Counter />    
    {/* <React_DC/>   */}
    <Speedometer/>
    </>
  )
}

export default App
