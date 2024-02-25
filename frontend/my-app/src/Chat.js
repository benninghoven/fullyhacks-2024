import React, { useState, useEffect, useRef } from 'react';
import './Chat.css';
const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();
    if(input.trim() !== '') {
      setMessages([...messages, { text: input, user: true }]);
      setInput('');
    }
  };

  return (
    <div className="chat">
      <form className="chat__input">
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit" onClick={sendMessage}>Send</button>
      </form>
      <div className="chat__messages">
        {messages.map((message, i) => (
          <div key={i} className={`chat__message ${message.user ? 'chat__userMessage' : ''}`}>
            <p>{message.text}</p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default Chat;
