// Write your code here
import {Component} from 'react'
import './index.css'

const imageHeadsUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const imageTailsUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    headsCount: 0,
    tailsCount: 0,
    tossResultImage: imageHeadsUrl,
  }

  onChangeToss = () => {
    const {tailsCount, headsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)

    let tossImage = ' '
    let finalHeadsCount = headsCount
    let finalTailsCount = tailsCount

    if (tossResult === 0) {
      tossImage = imageHeadsUrl
      finalHeadsCount += 1
    } else {
      tossImage = imageTailsUrl
      finalTailsCount += 1
    }
    this.setState({
      tossResultImage: tossImage,
      headsCount: finalHeadsCount,
      tailsCount: finalTailsCount,
    })
  }

  render() {
    const {headsCount, tailsCount, tossResultImage} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="app-container">
        <div className="coin-game-card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          <img src={tossResultImage} alt="toss result" className="image" />
          <button type="button" className="button" onClick={this.onChangeToss}>
            Toss Coin
          </button>
          <div className="toss-result-container">
            <p className="toss-result">Total: {totalCount}</p>
            <p className="toss-result">Heads: {headsCount}</p>
            <p className="toss-result">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
