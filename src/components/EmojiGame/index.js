/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'

import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    allEmojisList: [],
    unClickEmojiList: [],
    gameFinish: false,
    topScore: 0,
    score: 0,
  }

  onClickEmoji = id => {
    const {unClickEmojiList, score, topScore} = this.state
    const clickedEmoji = unClickEmojiList.find(eachEmoji => eachEmoji.id === id)
    if (clickedEmoji === undefined) {
      this.setState({gameFinish: true})
    } else if (score === 11) {
      this.setState({gameFinish: true, score: 12, topScore: 12})
    } else {
      const clickedEmojiIndex = unClickEmojiList.findIndex(
        eachEmoji => eachEmoji.id === id,
      )
      unClickEmojiList.splice(clickedEmojiIndex, 1)
      if (score + 1 >= topScore) {
        this.setState(prevState => ({
          unClickEmojiList: [...unClickEmojiList],
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          unClickEmojiList: [...unClickEmojiList],
          score: prevState.score + 1,
        }))
      }
    }
  }

  onClickPlayAgain = () => {
    const {score, topScore, allEmojisList} = this.state
    score > topScore
      ? this.setState({
          gameFinish: false,
          score: 0,
          topScore: score,
          unClickEmojiList: [...allEmojisList],
        })
      : this.setState({
          gameFinish: false,
          score: 0,
          unClickEmojiList: [...allEmojisList],
        })
  }

  render() {
    const {emojisList} = this.props
    const {gameFinish, topScore, score, allEmojisList} = this.state
    allEmojisList.length === 0 &&
      this.setState({
        allEmojisList: [...emojisList],
        unClickEmojiList: [...emojisList],
      })
    allEmojisList.sort(() => Math.random() - 0.5)
    return (
      <div className="main-con">
        <NavBar score={score} topScore={topScore} gameOver={gameFinish} />
        <div className="allemoji-con">
          {!gameFinish && (
            <ul className="emoji-list-con">
              {allEmojisList.map(eachEmoji => (
                <EmojiCard
                  emojiDetails={eachEmoji}
                  key={eachEmoji.id}
                  onClickEmoji={this.onClickEmoji}
                />
              ))}
            </ul>
          )}
          {gameFinish && (
            <WinOrLoseCard
              score={score}
              onClickPlayAgain={this.onClickPlayAgain}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
