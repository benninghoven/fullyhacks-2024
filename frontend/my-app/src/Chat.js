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
    setMessages([...messages, input]);
    setInput('');
  };

  return (
    <div className="chat">
      <div className="chat__messages">
        {messages.map((message, i) => (
          <p key={i}>{message}</p>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form className="chat__input">
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit" onClick={sendMessage}>Send</button>
      </form>
    </div>
  );
};

export default Chat;
