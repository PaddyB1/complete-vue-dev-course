import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBssn6TzVRMCIbzjUVT2W9dS5sCSVnP3e0',
  authDomain: 'music-4ddc1.firebaseapp.com',
  projectId: 'music-4ddc1',
  storageBucket: 'music-4ddc1.appspot.com',
  //messagingSenderId: "66136771808",
  appId: '1:66136771808:web:27a1298403292aba1fd485',
  measurementId: 'G-67N9TBL8MZ'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()

const usersCollection = db.collection('users')

export { auth, db, usersCollection }
