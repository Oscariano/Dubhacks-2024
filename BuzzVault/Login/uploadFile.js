import { getStorage, ref } from "firebase/storage";

"use strict";

(function() {
    window.addEventListener("load", init);
    
    const storage = firebase.storage();

    function init() {
        const uploadBtn = document.getElementById('upload-file-btn');
        uploadBtn.addEventListener("click", () => uploadFile);
    }
        
    function uploadFile() {
        console.log("you serious");
        const file = document.getElementById('fileInput').files[0];
        if (file) {
            const storageRef = db.ref(`images/${file.name}`);
            
            const uploadTask = storageRef.put(file);
            
            uploadTask.on('state_changed', 
                function progress(snapshot) {
                    let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(percentage)
                }, 
                function error(err) {
                    console.error(err.message);
                }, 
                function complete() {                    
                    // Get the file's Storage Reference
                    const downloadURL = uploadTask.snapshot.downloadURL;
                    console.log('File available at:', downloadURL);
                }
            );
        }
    }
}());