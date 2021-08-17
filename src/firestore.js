import { onUnmounted, ref } from '@vue/runtime-core';
import firebase from 'firebase'
// import { ref } from 'vue'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyA9wRqWmsRHYfSzYRfkITWKEsTXXqogx_8",
    authDomain: "mr-krabs-14c4f.firebaseapp.com",
    projectId: "mr-krabs-14c4f",
    storageBucket: "mr-krabs-14c4f.appspot.com",
    messagingSenderId: "48832809075",
    appId: "1:48832809075:web:4a0b1f0210e045f35bc206",
    measurementId: "G-30L4NKYN8B"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  export const db = firebase.firestore();
  export const auth = firebase.auth();
  
  export const usersCollection = db.collection('users')


  export const createUser = user => {
      return usersCollection.add(user)
  }

  export const getUser = async id => {
      const user = await usersCollection.doc(id).get()
      return user.exists ? user.data() : null
  }

  export const useLoadUsers = () => {
      let users = ref([])
      const close = usersCollection.onSnapshot(snapshot => {
          users.value = snapshot.docs.map(doc => ({ id:doc.id, ...doc.data() }))
      })
      onUnmounted(close)
      return users
  }
