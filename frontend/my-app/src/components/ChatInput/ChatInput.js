import React from 'react'
import './ChatInput.css'

const ChatInput = ({input, setInput, sendMessage}) => {
  return (
    <form className="chat__input">
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit" onClick={sendMessage}>Send</button>
    </form>
  )
}

export default ChatInput