import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {Num: 0}

  btnClick = () => {
    console.log('Yes Clicked')
    const randomNum = Math.ceil(Math.random() * 100)

    this.setState({
      Num: randomNum,
    })
  }

  render() {
    const {Num} = this.state

    return (
      <div className="randomCardBg">
        <div className="randomCard">
          <h1 className="random-title">Random Number</h1>
          <p className="random-des">
            Generate a random number in the range of 0 to 100
          </p>
          <button onClick={this.btnClick} type="button" className="randomBtn">
            Generate
          </button>
          <p style={{color: 'blue', fontWeight: 'bold', fontSize: '2rem'}}>
            {Num}
          </p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator







css code ------------ 
.randomCardBg {
  background-color: rgb(157, 236, 236);
  color: black;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.randomCard {
  width: 360px;
  height: 360px;
  text-align: center;
  background-color: whitesmoke;
  box-shadow:
    2px 2px 5px rgba(0, 0, 0, 0.3),
    -2px -2px 5px rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.random-title {
  font-size: 2.2rem;
  font-weight: bold;
}
.random-des {
  font-size: 1rem;
  margin-bottom: 40px;
}
.randomBtn {
  background-color: blue;
  border-radius: 8px;
  height: 40px;
  width: 120px;
  padding: 4px;
  font-family: 'Roboto';
  font-size: 1rem;
  color: white;
  border: none;
}

