import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {id, emojiUrl, emojiName} = emojiDetails
  const onEmojiClick = () => {
    onClickEmoji(id)
  }
  return (
    <li className="emoji-card">
      <button className="emoji-button" onClick={onEmojiClick}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
