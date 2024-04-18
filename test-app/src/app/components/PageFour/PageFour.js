'use client'
import React from "react";
import PDFGenerator from "../jspdf";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
const firebaseConfig = {
  apiKey: "AIzaSyDJMLAiptZI73UBpTo3LRwYCPF2wIziJN0",
  authDomain: "test-app-7cf65.firebaseapp.com",
  databaseURL: "https://test-app-7cf65-default-rtdb.firebaseio.com",
  projectId: "test-app-7cf65",
  storageBucket: "test-app-7cf65.appspot.com",
  messagingSenderId: "1077209016218",
  appId: "1:1077209016218:web:96e5a52d2f0ed0bc27fc23",
  measurementId: "G-7LE7XFEZC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const PageFour = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch data from Firebase
    const database = getDatabase();
    const userDataRef = ref(database, 'formData');
    
    onValue(userDataRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        // console.log("Fetched data:", data);
        const lastDocumentKey = Object.keys(data).pop();
        const lastDocumentData = data[lastDocumentKey];
        setUserData(lastDocumentData);
        console.log("Last document data:", lastDocumentData);
        // setUserData(snapshot.val());
      } else {
        console.log("No data available");
      }
    }, {
      onlyOnce: true // Fetch data only once
    });
  }, []);

  return (
    <div
      className="mw5 bg-white w-100 md:pa2-ns text-black mt5 dib"
      style={{ maxWidth: "30%", maxHeight:'30%' }}
    >
      <img
        src="/tick.jpg"
        className="h3 w3 mx-auto mb-10 flex justify-center items-center" 
        title="success icon"
        alt="tick-icon"
      />
      <div className="center"><h3 className="">Congratulations, </h3></div>
      <p className="text-black mb-10">
        You have completed the onboarding, you can start using our app
      </p>
      {userData && <PDFGenerator data={userData} />}
    </div>
  );
}

export default PageFour;