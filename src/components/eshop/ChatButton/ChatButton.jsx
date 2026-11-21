import { ChatBotIcon } from '../icons/Icons.jsx'
import './ChatButton.css'

function ChatButton() {
  return (
    <button className="chat-button" type="button" aria-label="Օնլայն օգնական">
      <ChatBotIcon size={34} />
    </button>
  )
}

export default ChatButton
