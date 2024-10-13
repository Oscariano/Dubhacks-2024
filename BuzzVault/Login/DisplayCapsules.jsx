import { React, useState, useEffect, createElement } from "react";
import { useSearchParams } from "react-router-dom";
import {db} from "../src/routes/FirebaseApp.js";
import { doc, getDoc } from "firebase/firestore";
import "./stylesheets/display-capsules.css";

const DisplayCapsules = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    searchParams.get("capsule");
    const capsuleId = searchParams.get("capsule");
    const [urls, setUrls] = useState();
  
    useEffect(() => {
        const docRef = doc(db, "capsules", capsuleId);
        getDoc(docRef).then(function(docSnap) {
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                docSnap.data()["fileUrls"].map((url) => populateMedia(url));
                docSnap.data()["notes"].map((note) => populatePage(note));
            } else {
                console.log("No such document!");
            }
        });
    }, []);
}

function populateMedia(memory) {
    var image = document.createElement("iframe");
    image.src = memory;
    document.querySelector("#root").appendChild(image);
}

function populatePage(text) {
    var paragraph = document.createElement("p");
    paragraph.textContent = text;
    paragraph.classList.add("notes");
    document.querySelector("#root").appendChild(paragraph);
}

export default DisplayCapsules;