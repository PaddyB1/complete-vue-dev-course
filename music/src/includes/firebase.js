import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

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
const storage = firebase.storage()

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error: ${error.code}`)
})

const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')
const commentsCollection = db.collection('comments')

export { auth, db, usersCollection, songsCollection, commentsCollection, storage }
