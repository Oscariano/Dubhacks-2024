import React from 'react';

const CapsuleItem = ({ capsule }) => {
  return (
    <li>
      <div className="item-content">
        <span>{capsule}</span>
        {/* Add more UI elements here */}
      </div>
    </li>
  );
};

export default CapsuleItem;