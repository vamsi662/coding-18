import './index.css'

const NavBar = props => {
  const {score, topScore, gameOver} = props
  return (
    <nav className="navbar-container">
      <div className="header-con">
        <div className="logo-con">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="game-title">Emoji Game</h1>
        </div>
        {!gameOver && (
          <div className="score-con">
            <p className="score-display">Score: {score}</p>
            <p className="topscore-display">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
