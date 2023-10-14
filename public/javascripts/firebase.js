// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8ux9AzT3yeOq57klfdKlmNXL1IX95Xr0",
  authDomain: "fir-b6057.firebaseapp.com",
  databaseURL:"https://fir-b6057-default-rtdb.firebaseio.com",
  projectId: "fir-b6057",
  storageBucket: "fir-b6057.appspot.com",
  messagingSenderId: "770096561054",
  appId: "1:770096561054:web:7dfb647089edfda985f48f",
  measurementId: "G-9W7KLV2WWM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);