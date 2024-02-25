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
  
  const [quiz, setQuiz] = useState([{'question': 'Which transport layer protocol is known for its connectionless nature and lack of reliability in packet delivery?', 'choices': ['TCP', 'HTTP', 'UDP', 'FTP'], 'hint': 'Focus on the protocol that does not guarantee delivery of packets.', 'correct_answer_index': 2, 'explanation': "This question covers the basic characteristics of UDP as a connectionless and unreliable protocol. It highlights UDP's key features in comparison to other protocols. This question is based on the provided context information from Chapter 3."}, {'question': 'What type of applications are typically better suited for UDP due to its speed and efficiency over reliability?', 'choices': ['Applications requiring guaranteed delivery of data', 'Applications with low latency requirements', 'Applications with heavy encryption needs', 'Applications with high throughput demands'], 'hint': 'Consider the applications that prioritize speed and efficiency over guaranteed delivery.', 'correct_answer_index': 1, 'explanation': "This question tests understanding of the applications that benefit from UDP's characteristics. It emphasizes the trade-off between speed and reliability in application performance. This question is based on the provided context information from Chapter 3."}, {'question': 'Which protocol is commonly used for streaming multimedia, real-time video conferencing, and DNS queries due to its ability to handle some degree of data loss?', 'choices': ['FTP', 'HTTP', 'TCP', 'UDP'], 'hint': 'Look for the protocol that is preferred for applications tolerating data loss.', 'correct_answer_index': 3, 'explanation': "This question focuses on the specific applications that leverage UDP's advantages in scenarios where some data loss can be tolerated. It highlights the practical use cases of UDP in real-time applications. This question is based on the provided context information from Chapter 3."}, {'question': 'What feature of UDP makes it more suitable for scenarios where speed and reduced latency are prioritized?', 'choices': ['Reliable data transfer', 'Connection-oriented service', 'Minimal overhead', 'Congestion control mechanism'], 'hint': 'Consider the aspect of UDP that contributes to speed and reduced latency.', 'correct_answer_index': 2, 'explanation': 'This question assesses the key attribute of UDP that aligns with speed and reduced latency requirements in certain applications. It emphasizes the lightweight nature of UDP compared to other protocols. This question is based on the provided context information from Chapter 3.'}, {'question': 'Which protocol requires applications to handle error checking, packet loss recovery, and data integrity at the application layer?', 'choices': ['TCP', 'FTP', 'HTTP', 'UDP'], 'hint': 'Think about the protocol that does not provide these features inherently.', 'correct_answer_index': 3, 'explanation': "This question tests knowledge of the additional responsibilities that applications built on UDP must manage due to UDP's lack of built-in reliability features. It highlights the need for application-layer handling of certain functions. This question is based on the provided context information from Chapter 3."}, {'question': 'Which transport layer protocol is known for its reliability in data transfer and connection-oriented service?', 'choices': ['UDP', 'FTP', 'HTTP', 'TCP'], 'hint': 'Focus on the protocol that guarantees reliable data transfer.', 'correct_answer_index': 3, 'explanation': 'This question contrasts UDP with a protocol that provides reliable data transfer and a connection-oriented service. It highlights the key differences between UDP and a protocol that ensures data delivery. This question is based on the provided context information from Chapter 2.'}, {'question': 'Which protocol includes a congestion-control mechanism to throttle sending processes during network congestion?', 'choices': ['UDP', 'FTP', 'HTTP', 'TCP'], 'hint': 'Consider the protocol that manages congestion during network congestion.', 'correct_answer_index': 3, 'explanation': 'This question focuses on a specific feature of a protocol that helps regulate network congestion. It contrasts this protocol with UDP, which lacks this mechanism. This question is based on the provided context information from Chapter 2.'}, {'question': 'Which protocol provides encryption, data integrity, and end-point authentication through enhancements at the application layer?', 'choices': ['UDP', 'FTP', 'TLS', 'TCP'], 'hint': 'Look for the protocol that offers enhanced security services at the application layer.', 'correct_answer_index': 2, 'explanation': 'This question highlights a protocol that enhances security services at the application layer, emphasizing its additional features beyond basic data transfer. It contrasts this protocol with UDP, which does not provide these security enhancements. This question is based on the provided context information from Chapter 2.'}])
  
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

    // check if the user requests a quiz
    // in the form of "quiz {topic}"

    try {

      if (input.slice(0,4).toLowerCase() === 'quiz') {
        setUserMessages([...user_messages,{ text: input, user: true }, { text: 'shit', user: false }]);
    }
    else{
      throw console.error();
    }
  }
    catch{
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

    }

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
