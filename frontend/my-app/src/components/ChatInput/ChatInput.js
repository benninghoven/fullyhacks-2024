import React from 'react'
import './ChatInput.css'

const ChatInput = ({input, setInput, sendMessage}) => {
  return (
    <form className="fancy" onSubmit={sendMessage}>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter query" />
    </form>
  )
}

export default ChatInput
