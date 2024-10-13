import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CapsuleCollectionApp.css';
import { userId } from '../../../Login/Login';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const CapsuleCollectionApp = () => {
  const [capsules, setCapsules] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadCapsules();
  }, []);

  const loadCapsules = async () => { // This function will load the capsules from the firestore database
    const db = getFirestore();
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      const userCapsules = userSnap.data().capsules;
      const capsules = [];
      for (const capsuleId of userCapsules) {
        const capsuleRef = doc(db, 'capsules', capsuleId);
        const capsuleSnap = await getDoc(capsuleRef);
        if (capsuleSnap.exists()) {
          capsules.push({ capsuleId: capsuleId, capsule: capsuleSnap.data() });
        } else {
          console.error('No such document!');
        }
      }
      setCapsules(capsules);
    } else {
      console.error('No such document!');
    }
  };

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

  const handleCapsuleClick = (capsule) => {
    const currentTime = new Date();
    const capsuleTime = new Date(capsule.capsule.releaseDate.seconds * 1000); // Convert seconds to milliseconds
    let milliseconds = capsuleTime.getTime() - currentTime.getTime();

    if (capsuleTime < currentTime) {
      navigate(`/display-capsules?capsule=${capsule.capsuleId}`);
    } else {
      navigate('/countdown', { state: { millisec: milliseconds } });
    }
  };

  return (
    <div className='capsules-container'>
        <Link to="/createcapsule">
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
              animation: `float-${index} ${Math.random() * 40 + 60}s ease-in-out infinite`,
            }}
          >
            <style>
              {`@keyframes float-${index} { ${movementKeyframes} }`}
            </style>
            <div className="capsuleContainer" onClick={(capsule) => handleCapsuleClick(capsule)}
                 style={{
                 animation: `rotate-${index} ${Math.random() * 30 + 40}s ease-in-out infinite`,}}>
              <img
                src="/capsule.png"
                alt={capsule.title}
              />
              <p>{capsule.title ? capsule.title : "Test"}</p>
            </div>
            <style>
              {`@keyframes rotate-${index} { ${rotationKeyframes} }f=`}
            </style>
          </div>
        );
      })}
    </div>
  );
};

export default CapsuleCollectionApp;
