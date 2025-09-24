import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyBsCCDXpy23SCrCxhevYJw68dnemI79t5g",
    authDomain: "toyota-pw.firebaseapp.com",
    projectId: "toyota-pw",
    storageBucket: "toyota-pw.firebasestorage.app",
    messagingSenderId: "455946337849",
    appId: "1:455946337849:web:83a51f4f7accf70a7d57e8",
    measurementId: "G-QN74JGRDEM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

console.log('antes')
// tudo abaixo é uma promise
signInWithEmailAndPassword("", "teste06@gamail.com", "123456").then(response => {
    console.log('success', response)
}).catch(error => {
    console.log('error', error)
})
console.log('depois')