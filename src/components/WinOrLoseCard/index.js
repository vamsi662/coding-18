import './index.css'

const WinOrLoseCard = props => {
  const {score, onClickPlayAgain} = props
  const image =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const heading = score === 12 ? 'You Won' : 'You Lose'
  const scoreText = score === 12 ? 'Best Score' : 'Score'
  const playAgain = () => {
    onClickPlayAgain()
  }

  return (
    <div className="win-lose-con">
      <img src={image} alt="win or lose" className="win-lose-image-mobile" />
      <div className="result-con">
        <h1 className="heading">{heading}</h1>
        <p className="scoretext">{scoreText}</p>
        <p className="score">{score}/12</p>
        <div className="btn-con">
          <button className="btn" onClick={playAgain}>
            Play Again
          </button>
        </div>
      </div>
      <img src={image} alt="win or lose" className="win-lose-image-desktop" />
    </div>
  )
}

export default WinOrLoseCard
