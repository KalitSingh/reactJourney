import {Component} from 'react'
import Login from '../Login'
import Message from '../Message'
import Logout from '../Logout'
import './index.css'

class Home extends Component {
  state = {boolFlags: true}

  clickToLogin = () => {
    // let {boolFlags} = this.state
    this.setState(prevState => ({boolFlags: !prevState.boolFlags})) // Single line retrun with arrow function need () paranthesis to return things like object or anything.
  }

  render() {
    const {boolFlags} = this.state
    return (
      <div className="home-bg-container">
        <div className="home-card">
          {boolFlags ? (
            <Message uiMsg="Please Login" />
          ) : (
            <Message uiMsg="Welcome User" />
          )}
          {boolFlags ? (
            <Login funcAsProps={this.clickToLogin} />
          ) : (
            <Logout funcAsProps={this.clickToLogin} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
