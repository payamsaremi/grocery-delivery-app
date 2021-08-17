<template>
  <base-layout pageTitle="Profile">
        <hero v-if="isLoggedIn" :userEmail="userEmail">
            <ion-button @click="signOut">sign out</ion-button>
        </hero>
          <div v-else>
            <hero>
            <ion-button :router-link="{ name:'register' }" > Register </ion-button>
            <ion-button :router-link="{ name:'signIn' }"> Login </ion-button>
          </hero>
          </div>
          <div class="flex">
          <StatsCard />
          </div>

  </base-layout>
</template>

<script>
import { IonButton } from '@ionic/vue';
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Hero from '@/components/Hero.vue';
import firebase from 'firebase'
import StatsCard from '../components/StatsCard.vue';
export default  {
  name: 'Tab2',
  components: { Hero, IonButton, StatsCard },
  data(){
    return {
      amount: 0
    }
  },
  setup(){
    const isLoggedIn = ref(true)
    const router = useRouter()
    const userEmail = ref()

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        userEmail.value = user.email // het user's email
        console.log(userEmail.value)
        isLoggedIn.value = true //if we have a user
      } else {
        isLoggedIn.value = false
      }
    })
    const signOut = () => {
      firebase.auth().signOut()
      router.replace('/')
    }
    return {isLoggedIn, signOut, router, userEmail}
  },
  computed: {
    getBalance(){
      return this.$store.state.balance
    },
    getMyBalance(){
      return this.$store.state.myAccount.myBalance
    },
    getMessage(){
      return this.$store.state.myAccount.message
    }
  }
}
</script>