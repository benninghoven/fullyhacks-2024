import React, { useState, useEffect, useRef } from 'react';
import ChatInput from '../ChatInput/ChatInput';
import ChatHistory from '../ChatHistory/ChatHistory';

import './Chat.css';
import MenuButton from './MenuButton';


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

    if(input.trim() !== '') {
      setUserMessages([...user_messages, { text: input, user: true }]);
      setInput('');
    }

    let response = await fetch('http://0.0.0.0:15000/prompt',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
          'prompt': input.trim(),
          'textbook': localStorage.getItem('textbook')
        })
      }
    )
    let response_data = await response.json()
    console.log(response_data);

    setUserMessages([...user_messages,{ text: input, user: true }, { text: response_data.reponse, user: false }]);
  };

  return (
    <>
      <div className="chat">
        <ChatInput input={input} sendMessage={sendMessage} setInput={setInput}/>
        <ChatHistory user_messages={user_messages} messagesEndRef={messagesEndRef}/>
      </div>
      <div>
        <MenuButton setUserMessages={setUserMessages}/>
      </div>
    </>
  );
};

export default Chat;
