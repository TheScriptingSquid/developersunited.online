// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD9aoxYUTfwJ3_fRLuEvUhZ648wWxNACg",
  authDomain: "portfolio-data-c02ad.firebaseapp.com",
  projectId: "portfolio-data-c02ad",
  storageBucket: "portfolio-data-c02ad.firebasestorage.app",
  messagingSenderId: "579279372340",
  appId: "1:579279372340:web:b887ff84259cfce1388a61",
  measurementId: "G-7EZ3EY9WG3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Function to increment the visit count and store it in Firestore
function incrementVisitCount(portfolioId) {
  const visitCountRef = doc(db, 'portfolios', portfolioId);  // Reference to the portfolio document

  getDoc(visitCountRef).then((docSnapshot) => {
    let visitCount = docSnapshot.exists() ? docSnapshot.data().visitCount : 0;  // Get the current count, default to 0 if not found
    visitCount++;

    // Update Firestore with the new visit count
    setDoc(visitCountRef, { visitCount: visitCount }, { merge: true })
      .then(() => {
        // Update the visit count on the page
        document.getElementById(`visitCount${portfolioId}`).textContent = visitCount;
      })
      .catch((error) => {
        console.error("Error updating visit count: ", error);
      });
  });
}

// Load visit counts from Firestore when the page loads
window.onload = function() {
  // For portfolio 1
  getDoc(doc(db, "portfolios", "portfolio1")).then((docSnapshot) => {
    if (docSnapshot.exists()) {
      document.getElementById("visitCount1").textContent = docSnapshot.data().visitCount;
    }
  });

  // For portfolio 2
  getDoc(doc(db, "portfolios", "portfolio2")).then((docSnapshot) => {
    if (docSnapshot.exists()) {
      document.getElementById("visitCount2").textContent = docSnapshot.data().visitCount;
    }
  });
};

