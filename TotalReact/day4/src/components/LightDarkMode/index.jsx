import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isClicked: false,
  }

  onClicked = () => {
    const {isClicked} = this.state
    if (isClicked) {
      this.setState({
        isClicked: false,
      })
    } else
      this.setState({
        isClicked: true,
      })
    console.log(isClicked)
  }

  render() {
    const {isClicked} = this.state

    let mode = ''
    let btnContent = 'Light Mode'

    if (isClicked) {
      mode = 'lightMode'
      btnContent = 'Dark Mode'
    } else {
      mode = ''
      btnContent = 'Light Mode'
    }
    console.log(mode)

    return (
      <div className="darkMode-bg-container">
        <div className={`mode-container ${mode}`}>
          <h1>Click To Change Mode</h1>
          <button onClick={this.onClicked} className="mode-btn" type="button">
            {btnContent}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
