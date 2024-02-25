import React from 'react'
import './ChatHistory.css'

const ChatHistory = ({user_messages, messagesEndRef}) => {
  return (
    <div className="chat__messages">
        {user_messages.map((message, i) => (
            <>
              <div  className={`${message.user ? 'chat__userMessage__container' : 'chat__AIMessage__container'}`}>
                <div className={`${message.user ? 'chat__userIcon' : 'chat__AIIcon'}`}>
                  <img src={message.user ? "User_Icon.png" : "AI_Icon.png"} alt="Logo" className="icon" />
                </div>
                <div key={i} className={`chat__message ${message.user ? 'chat__userMessage' : 'chat__AIMessage'}`}>
                    <p>{message.text}</p>
                </div>
              </div>
            </>
        ))}
        <div ref={messagesEndRef} />
    </div>
  )
}

export default ChatHistory
