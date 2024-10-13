import React, { useState } from 'react';
import CapsuleItem from './CapsuleItem';

const CapsuleCollectionApp = () => {
  const [capsules, setCapsules] = useState([
    { name: 'capsule1', url: 'www.etc.com', time: 'some time' },
    { name: 'capsule2', url: 'www.etc2.com', time: 'some time' }
  ]);

  const addItem = () => {
    window.location.href = '/add-capsule';
  };

  return (
    <div>
      <div>
        <button onClick={addItem}>Add</button>
      </div>
      <ul>
        {capsules.map((capsule, index) => (
          <CapsuleItem key={index} item={capsule} />
        ))}
      </ul>
    </div>
  );
};

export default CapsuleCollectionApp;