import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import firebase from 'firebase'
import './index.css'
import './main.css'

import { IonicVue } from '@ionic/vue';
import BaseLayout from './components/base/BaseLayout.vue';
/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';


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


const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(store);
  
app.component('base-layout', BaseLayout)

router.isReady().then(() => {
  app.mount('#app');
});