import React, { useState, useEffect } from 'react';
import { db } from '../FirebaseApp.js';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const ChatApp = ({ props }) => {
  const [chatHistory, setChatHistory] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  useEffect(() => {
    // Load chat history from Firestore
    const loadChatHistory = async () => {
      try {
        const capsuleDoc = await getDoc(doc(db, 'capsules', props.capsuleId));
        if (capsuleDoc.exists()) {
          const chatText = capsuleDoc.data().chatHistory || '';
          const messages = chatText.split('\n').filter(line => line.trim() !== '');
          setChatHistory(messages);
        } else {
          console.error('No such document!');
        }
      } catch (error) {
        console.error('Error loading chat history:', error);
      }
    };

    loadChatHistory();
  }, [props.capsuleId]);

  const handleSendMessage = async () => {
    if (currentMessage.trim() === '') return;

    const newMessage = `user: ${currentMessage}`; // TODO: Add user name to message

    try {
      const capsuleRef = doc(db, 'capsules', props.capsuleId);
      const capsuleDoc = await getDoc(capsuleRef);
      if (capsuleDoc.exists()) {
        const chatText = capsuleDoc.data().chatHistory || '';
        const updatedChatText = chatText + '\n' + newMessage;

        // Update the chat history in Firestore
        await updateDoc(capsuleRef, { chatHistory: updatedChatText });

        // Update chat history state
        setChatHistory(prevChatHistory => [...prevChatHistory, newMessage]);

        // Clear the current message input
        setCurrentMessage('');
      } else {
        console.error('No such document!');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <div>
        <h2>Chat History</h2>
        <div>
          {chatHistory.map((msg, index) => (
            <div key={index}>{msg}</div>
          ))}
        </div>
      </div>
      <div>
        <input
          type="text"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatApp;