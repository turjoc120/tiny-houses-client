import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initApp = () => {
    initializeApp(firebaseConfig);
}

export default initApp;