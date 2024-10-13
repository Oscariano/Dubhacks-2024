import React, { useState, useEffect } from 'react';
import './countDown.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Countdown = ( ) => {
  const location = useLocation();
  const { millisec } = location.state || 10000;
  const timeLeftSeconds = millisec * 0.001
  const [timeLeft, setTimeLeft] = useState(timeLeftSeconds);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [shake, setShake] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {2
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setIsUnlocked(true);
    }
  }, [timeLeft]);

  const formatTime = (time) => {
    const days = Math.floor(time / (24 * 3600));
    const hours = Math.floor((time % (24 * 3600)) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return {
      days: String(days),
      time: `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`,
    };
  };

  const { days, time } = formatTime(timeLeft);

  const handleShake = () => {
    if (!isUnlocked) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div className="countdown-container">
      <div
        className={`countdown-wrapper ${shake ? 'shake' : ''}`}
        onClick={handleShake}
      >
        <h1 className="countdown-days">Days left: {days}</h1>
        <h1 className="countdown-display" style={{ color: isUnlocked ? "#32cd32" : "#ff6347" }}>{time}</h1>
        {!isUnlocked && (
          <div className="locked-message">
            <p>Time capsule locked</p>
            <span role="img" aria-label="lock">
              🔒
            </span>
          </div>
        )}
        {isUnlocked && (
          <div className="unlocked-message">
            {/* {setTimeout(() => {
              navigate("/")
            }, 3000)} */}
            <p>Time capsule unlocked!</p>
            <span role="img" aria-label="unlock">
              🔓
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Countdown;