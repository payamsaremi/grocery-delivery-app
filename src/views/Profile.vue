<template>
  <base-layout pageTitle="Profile">
        <hero v-if="isLoggedIn" :userEmail="userEmail">
            <ion-button @click="signOut">sign out</ion-button>
        </hero>
          <div v-else>
            <hero>
            <router-link :to="{ name:'register' }" replace>
              <ion-button > Register </ion-button>
            </router-link>
            <router-link :to="{ name:'signIn' }" replace>
              <ion-button > Login </ion-button>
            </router-link>
          </hero>
          </div>
          <div class="flex">
          <StatsCard />
          </div>

  </base-layout>
</template>

<script>
import { auth } from '../firebase.js'
import { IonButton } from '@ionic/vue';
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Hero from '@/components/Hero.vue';
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

    auth.onAuthStateChanged(function(user) {
      if (user) {
        userEmail.value = user.email // het user's email
        console.log(userEmail.value)
        isLoggedIn.value = true //if we have a user
      } else {
        isLoggedIn.value = false
      }
    })
    const signOut = () => {
      auth.signOut()
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