import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBR8P0Kk-gAu8W818ztU8T-X9svrB4Y9vU",
  authDomain: "movie-e0900.firebaseapp.com",
  projectId: "movie-e0900",
  storageBucket: "movie-e0900.firebasestorage.app",
  messagingSenderId: "640547918016",
  appId: "1:640547918016:web:e5afe88d6bad63979add25",
  measurementId: "G-8DZQKET2N3",
};


const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);


createApp(App).use(Toast).use(router).mount("#app");
    