import React from 'react';
import './stylesheets/create-capsule.css';

const CreateCapsule = () => {
  return (
    <div id="whole-container">
      <section id="add-file">
        <img src="/plus.png" alt="" />
        <input type="file" id="fileInput" />
        <button id="upload-file-btn">Upload</button>
      </section>

      <section id="bottom-section">
        <div className="input-container">
          <img src="/bee.png" alt="" />
          <div>
            <label htmlFor="bee">Add bees</label>
            <input name="bee" type="text" />
          </div>
        </div>
        <div className="input-container">
          <img src="/hive.png" alt="" />
          <div>
            <label htmlFor="bee">Title</label>
            <input name="bee" type="text" />
          </div>
        </div>
        <div className="input-container">
          <img src="/jar.png" alt="" />
          <div>
            <label htmlFor="bee">Duration</label>
            <input name="bee" type="text" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateCapsule;