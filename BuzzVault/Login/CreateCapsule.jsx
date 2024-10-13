import React, { useState, useEffect } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, updateDoc, doc, arrayUnion } from "firebase/firestore";
import { userId } from '../Login/Login'; 
import './stylesheets/create-capsule.css';
import { useNavigate } from 'react-router-dom';

const CreateCapsule = () => {
  const [files, setFiles] = useState([]);
  const [capsuleId, setCapsuleId] = useState(null);
  const [bees, setBees] = useState([]);
  const [beeInput, setBeeInput] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    // Create an empty capsule in Firestore when the component mounts
    const createEmptyCapsule = async () => {
      const db = getFirestore();
      try {
        const capsuleRef = await addDoc(collection(db, "capsules"), {
          fileUrls: [],
          bees: [],
          title: "",
          duration: null,
          releaseDate: null,
          chatHistory: ""
        });
        setCapsuleId(capsuleRef.id);
        console.log("Empty capsule created with ID: ", capsuleRef.id);

        // add capsuleId to the user collection
        const userRef = doc(db, 'users', userId);
        await updateDoc(userRef, {
          capsules: arrayUnion(capsuleRef.id)
        });
        console.log('Capsule added to user collection');
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };

    createEmptyCapsule();
  }, []);

  const handleFileChange = (event) => {
    setFiles([...files, event.target.files[0]]);
  };

  const handleUpload = () => {
    if (files.length > 0 && capsuleId) {
      const storage = getStorage();
      const db = getFirestore();
      const capsuleRef = doc(db, 'capsules', capsuleId);

      files.forEach((file) => {
        const storageRef = ref(storage, `images/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', 
          (snapshot) => {
            const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(percentage);
          }, 
          (error) => {
            console.error(error.message);
          }, 
          () => {
            getDownloadURL(storageRef).then((downloadURL) => {
              console.log('File available at:', downloadURL);
              updateDoc(capsuleRef, {
                fileUrls: arrayUnion(downloadURL)
              }).then(() => {
                console.log("Capsule updated with file URL");
              }).catch((error) => {
                console.error("Error updating document: ", error);
              });
            });
          }
        );
      });

      // Clear the file input after upload
      setFiles([]);
      document.getElementById('fileInput').value = null;
    }
  };

  const handleBeeChange = (event) => {
    setBeeInput(event.target.value);
  };

  const handleBeeKeyPress = (event) => {
    if (event.key === 'Enter') {
      const newBee = beeInput;
      setBees([...bees, newBee]);
      setBeeInput("");

      if (capsuleId) {
        const db = getFirestore();
        const capsuleRef = doc(db, 'capsules', capsuleId);
        updateDoc(capsuleRef, {
          bees: arrayUnion(newBee)
        }).then(() => {
          console.log('Bee added to Firestore');
        }).catch((error) => {
          console.error('Error adding bee to Firestore: ', error);
        });
      }
    }
  };

  // TODO: Implement this function
  const checkBeeInUserCollection = async (bee) => {
    pass;
  };

  const handleDurationChange = (event) => {
    const duration = parseInt(event.target.value, 10);
    const currentDate = new Date();
    const releaseDate = new Date(currentDate.setFullYear(currentDate.getFullYear() + duration));

    if (capsuleId) {
      const db = getFirestore();
      const capsuleRef = doc(db, 'capsules', capsuleId);
      updateDoc(capsuleRef, {
        duration: duration,
        releaseDate: releaseDate
      }).then(() => {
        console.log('Duration and release date added to Firestore');
      }).catch((error) => {
        console.error('Error adding duration to Firestore: ', error);
      });
    }
  };

  const handleTitleChange = (event) => {
    const title = event.target.value;

    if (capsuleId) {
      const db = getFirestore();
      const capsuleRef = doc(db, 'capsules', capsuleId);
      updateDoc(capsuleRef, {
        title: title
      }).then(() => {
        console.log('Title added to Firestore');
      }).catch((error) => {
        console.error('Error adding title to Firestore: ', error);
      });
    }
  };

  const handleBackButton = () => {
    alert("Capsule created successfully!");
    navigate('/capsulecollection')
  }

  return (
    <div id="whole-container">
      <div className="done">
        <button onClick={handleBackButton}>Finished</button>
      </div>
      <section id="add-file">
        <div className="upload">
          <img src="/plus.png" alt="" />
          <input name="fileInput" type="file" id="fileInput" onChange={handleFileChange} />
          <button id="upload-file-btn" onClick={handleUpload}>Upload</button>
        </div>
        <div className="futureTextInput">
          <input type="text" placeholder="Send a message to the future!"/>
        </div>
      </section>

      <section id="bottom-section">
        <div className="input-container">
          <img src="/bee.png" alt="" />
          <div>
            <label htmlFor="bee">Add bees</label>
            <input 
              name="bee" 
              type="text" 
              value={beeInput} 
              onChange={handleBeeChange} 
              onKeyPress={handleBeeKeyPress} 
              disabled={!capsuleId}
            />
          </div>
        </div>
        <div className="input-container">
          <img src="/hive.png" alt="" />
          <div>
            <label htmlFor="title">Title</label>
            <input name="title" type="text" onChange={handleTitleChange} disabled={!capsuleId}/>
          </div>
        </div>
        <div className="input-container">
          <img src="/jar.png" alt="" />
          <div>
            <label htmlFor="duration">Duration</label>
            <input name="duration" type="number" min={0} onChange={handleDurationChange} disabled={!capsuleId}/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateCapsule;
