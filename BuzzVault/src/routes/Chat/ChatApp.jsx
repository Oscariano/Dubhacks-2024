import React, { useState, useEffect } from 'react';
import { getFirestore, doc, onSnapshot } from 'firebase/firestore';
import { userId } from '../../../Login/Login';
import './chat.css';

const Chat = ({ capsuleId }) => {
  const [chatHistory, setChatHistory] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    if (capsuleId) {
      const chatRef = doc(db, 'capsules', capsuleId);

      const unsubscribe = onSnapshot(chatRef, (snapshot) => {
        if (snapshot.exists()) {
          const chatData = snapshot.data().chatHistory || '';
          console.log(chatData);
          const chats = chatData.split('\n').map(chat => {
            const [name, message] = chat.split(':');
            return { name, message };
          });
          setChatHistory(chats);
        }
      });

      return () => unsubscribe();
    }
  }, [capsuleId, db]);

  return (
    <div className="chat-container">
      {chatHistory.map((chat, index) => (
        <div key={index} className={`chat-message ${chat.name === userId ? 'right' : 'left'}`}>
          <div className="chat-name">{chat.name}</div>
          <div className="chat-text">{chat.message}</div>
        </div>
      ))}
    </div>
  );
};

export default Chat;
