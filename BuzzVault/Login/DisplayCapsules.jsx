import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { db } from "../src/routes/FirebaseApp.js";
import { doc, getDoc } from "firebase/firestore";
import "./stylesheets/display-capsules.css";

const DisplayCapsules = () => {
  const [searchParams] = useSearchParams();
  const capsuleId = searchParams.get("capsule");
  const [fileUrls, setFileUrls] = useState([]);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchCapsuleData = async () => {
      if (!capsuleId) return;

      const docRef = doc(db, "capsules", capsuleId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        console.log("Document data:", data);

        if (data.fileUrls) {
          setFileUrls(data.fileUrls);
        }

        if (data.notes) {
          setNotes(data.notes);
        }
      } else {
        console.log("No such document!");
      }
    };

    fetchCapsuleData();
  }, [capsuleId]);

  return (
    <div id="capsule-content">
      {fileUrls.map((url, index) => (
        <iframe key={index} src={url} title={`file-${index}`} />
      ))}
      {notes.map((note, index) => (
        <p key={index} className="notes">{note}</p>
      ))}
    </div>
  );
};

export default DisplayCapsules;