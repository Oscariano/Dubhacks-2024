import React from 'react';
import { Link } from 'react-router-dom';

const CapsuleItem = ({ capsule }) => { // This is a link to the capsule (in the link tag)
  // Chat link should link to a unique chat room for the capsule
  console.log(capsule);
  return (
    <li>
      <div>
        <Link>{capsule.name}</Link> 
        <span>{capsule.time}</span>
        <Link>Chat</Link>
      </div>
    </li>
  );
};

export default CapsuleItem;