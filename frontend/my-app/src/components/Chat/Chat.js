import React, { useState, useEffect, useRef } from 'react';
import ChatInput from '../ChatInput/ChatInput';
import ChatHistory from '../ChatHistory/ChatHistory';

import './Chat.css';

const Chat = () => {
  // messages:  stores chat history
  const [user_messages, setUserMessages] = useState([]);

  // input:     stores user input
  const [input, setInput] = useState('');

  // on new messages, call scrollToBottom to render new messages
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  useEffect(scrollToBottom, [user_messages]);

  // on input submit, send message
  // this is where we will call the api
  const sendMessage = async (event) => {
    event.preventDefault();

    let response = await fetch('http://flask-app:15000/prompt', 
      {
        'method': 'POST',
        'headers': {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        'body': {
          'prompt': input.trim(),
        }
      }
    )

    let response_data = await response.json()
    let reply = response_data["response"];
    console.log(reply);

    if(input.trim() !== '') {
      setUserMessages([...user_messages, { text: reply, user: false }]);
      setInput('');
    }
  };

  return (
    <div className="chat">
      <ChatInput input={input} sendMessage={sendMessage} setInput={setInput}/>
      <ChatHistory user_messages={user_messages} messagesEndRef={messagesEndRef}/>
    </div>
  );
};

export default Chat;
