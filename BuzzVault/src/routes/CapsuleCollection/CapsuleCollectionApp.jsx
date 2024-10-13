import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './CapsuleCollectionApp.css';

const CapsuleCollectionApp = () => {
  const [capsules] = useState([
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


  const getRandomPosition = () => {
    const x = Math.random() * 80;
    const y = Math.random() * 80;
    return { top: `${y}vh`, left: `${x}vw` };
  };

  const generateRandomMovement = () => {
    const randomX1 = Math.random() * 30;
    const randomY1 = Math.random() * 30;
    const randomX2 = Math.random() * 30;
    const randomY2 = Math.random() * 30;

    return `
      0% { transform: translate(0, 0); }
      25% { transform: translate(${randomX1}vw, ${randomY1}vh); }
      50% { transform: translate(${randomX2}vw, ${randomY2}vh); }
      75% { transform: translate(${randomX1}vw, ${randomY2}vh); }
      100% { transform: translate(0, 0); }
    `;
  };

  const generateRandomRotation = () => {
    const randomRotation = Math.random() * 60 - 30; // Random rotation between -30deg and 30deg for more pronounced effect

    return `
      0% { transform: rotate(0deg); }
      50% { transform: rotate(${randomRotation}deg); }
      100% { transform: rotate(0deg); }
    `;
  };

  return (
    <div className='capsules-container'>
        <Link to="/dashboard">
          <div className="capsuleCreation">
            <img src="plus.png" alt="plus icon" />
          </div>
        </Link>

      {capsules.map((capsule, index) => {
        const movementKeyframes = generateRandomMovement();
        const rotationKeyframes = generateRandomRotation();

        return (
          <div
            className='capsule-container'
            key={index}
            style={{
              ...getRandomPosition(),
              animation: `float-${index} ${Math.random() * 40 + 60}s ease-in-out infinite`, // Randomized movement speed
            }}
          >
            <style>
              {`@keyframes float-${index} { ${movementKeyframes} }`}
            </style>
            <img
              src="/capsule.png"
              alt={capsule.name}
              style={{
                animation: `rotate-${index} ${Math.random() * 30 + 40}s ease-in-out infinite`, // Randomized rotation speed
              }}
            />
            <style>
              {`@keyframes rotate-${index} { ${rotationKeyframes} }`}
            </style>
          </div>
        );
      })}
    </div>
  );
};

export default CapsuleCollectionApp;
