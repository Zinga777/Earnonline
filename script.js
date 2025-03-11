// Firebase JS SDK via CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0iWlMKA2_8CcMy08Fm4GO1mcR2M-CYBg",
  authDomain: "earnonlinedb.firebaseapp.com",
  projectId: "earnonlinedb",
  storageBucket: "earnonlinedb.firebasestorage.app",
  messagingSenderId: "1011010061086",
  appId: "1:1011010061086:web:3331ca1931a9f516e1ff0f",
  measurementId: "G-GBZCW9N25P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Fetch websites from Firestore
async function fetchWebsites() {
  const websiteList = document.getElementById("website-list");
  websiteList.innerHTML = `<p>Loading...</p>`;

  try {
    const querySnapshot = await getDocs(collection(db, "Websites"));
    websiteList.innerHTML = ""; // Clear loading text

    querySnapshot.forEach((doc) => {
      const data = doc.data();

      const websiteItem = document.createElement("div");
      websiteItem.classList.add("website-item");

      websiteItem.innerHTML = `
        <img src="${data.Logo}" alt="${data.Name} logo" />
        <h3>${data.Name}</h3>
        <p>${data.Description}</p>
        <a href="${data['URL link']}" target="_blank">Visit Site</a>
      `;

      websiteList.appendChild(websiteItem);
    });

    if (querySnapshot.empty) {
      websiteList.innerHTML = "<p>No websites found. Add some in Firebase!</p>";
    }

  } catch (error) {
    websiteList.innerHTML = `<p>Error loading data: ${error.message}</p>`;
    console.error("Error fetching documents: ", error);
  }
}

window.addEventListener("DOMContentLoaded", fetchWebsites);
