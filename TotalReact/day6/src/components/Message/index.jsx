import {Component} from 'react'
import './index.css'

class Message extends Component {
  // render() ke bahar directly nhi kar sakte props access by object destructuring
  render() {
    const {uiMsg} = this.props
    return (
      <div className="login-bg-container">
        <h1 className="message">{uiMsg}</h1>
      </div>
    )
  }
}

export default Message
