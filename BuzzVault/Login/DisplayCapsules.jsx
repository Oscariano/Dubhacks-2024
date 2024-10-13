import { React, useState, useEffect, createElement } from "react";
import { useSearchParams } from "react-router-dom";
import {db} from "../src/routes/FirebaseApp.js";
import { doc, getDoc } from "firebase/firestore";
import "./stylesheets/display-capsules.css";

const DisplayCapsules = ({props}) => {

    return (
        <div className="container">
            <img src="/photo1.jpeg" alt="" />
            <img src="/photo2.jpeg" alt="" />
            <img src="/photo3.jpeg" alt="" />
            <img src="/photo4.jpeg" alt="" />
            {/* <img src="/photo6.jpeg" alt="" /> */}
        </div>

    )
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