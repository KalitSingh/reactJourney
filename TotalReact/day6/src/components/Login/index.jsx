import {Component} from 'react'
import './index.css'

class Login extends Component {
  render() {
    const {funcAsProps} = this.props
    return (
      <div>
        <button onClick={funcAsProps} className="login-btn" type="button">
          Login
        </button>
      </div>
    )
  }
}

export default Login
