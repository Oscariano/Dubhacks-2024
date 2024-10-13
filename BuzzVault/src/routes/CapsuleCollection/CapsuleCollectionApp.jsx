import React, { useState } from 'react';
import CapsuleItem from './CapsuleItem';
import './CapsuleCollectionApp.css';

const CapsuleCollectionApp = () => {
  const [capsules, setCapsules] = useState([
    { name: 'capsule1', url: 'www.etc.com', time: 'some time' },
    { name: 'capsule2', url: 'www.etc2.com', time: 'some time' },
    { name: 'capsule3', url: 'www.etc3.com', time: 'some time' },
    { name: 'capsule4', url: 'www.etc4.com', time: 'some time' },
    { name: 'capsule5', url: 'www.etc5.com', time: 'some time' },
    { name: 'capsule6', url: 'www.etc6.com', time: 'some time' },
    { name: 'capsule7', url: 'www.etc7.com', time: 'some time' },
    { name: 'capsule8', url: 'www.etc8.com', time: 'some time' },
    { name: 'capsule9', url: 'www.etc9.com', time: 'some time' },
    { name: 'capsule10', url: 'www.etc10.com', time: 'some time' },
    { name: 'capsule11', url: 'www.etc11.com', time: 'some time' },
  ]);

  // Create a function to load capsules from the directory
  const loadCapsules = () => {
    // Implementation to load capsules
  };

  return (
    <div>
      <ul className="capsule-list">
        {capsules.map((capsule, index) => (
          <li className="capsule-item" key={index}>
            <span className="capsule-item-name">{capsule.name}</span>
            <span className="capsule-item-url">{capsule.url}</span>
            <span className="capsule-item-time">{capsule.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CapsuleCollectionApp;