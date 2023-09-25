// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA5dvIc4aWrj_q_Ch9kae_CV6t3ZZJdlM8',
  authDomain: 'ankaraworld-catalog-c5699.firebaseapp.com',
  projectId: 'ankaraworld-catalog-c5699',
  storageBucket: 'ankaraworld-catalog-c5699.appspot.com',
  messagingSenderId: '664942977699',
  appId: '1:664942977699:web:201a1d937ef1eaa170d516',
  measurementId: 'G-N8B4PZ3LWL',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)

export default app
