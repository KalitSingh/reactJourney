import {Component} from 'react'
import './index.css'

class Logout extends Component {
  render() {
    const {funcAsProps} = this.props
    return (
      <div>
        <button onClick={funcAsProps} className="logout-btn" type="button">
          Logout
        </button>
      </div>
    )
  }
}

export default Logout
