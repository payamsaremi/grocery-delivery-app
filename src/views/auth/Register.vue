<template>
<base-layout pageTitle="Create an Account">

    <div class="mb-6 ">
        <h1 class="text-center"> Create an Account </h1>
        <ion-item>
            <ion-label position="floating" >Email</ion-label>
            <ion-input type="email" v-model='email'></ion-input>
        </ion-item>
        <ion-item>
            <ion-label position="floating" >Password</ion-label>
            <ion-input type="password" v-model='password'></ion-input>
        </ion-item>
        <p class="color-red" v-if="errMsg">{{errMsg}}</p>
        <ion-button class="mt-6 m-2" expand="block" @click="register"> Submit </ion-button>
    </div>

    <p class="text-center">Alredy have an account?  <router-link :to="{ name:'signIn' }"> Login </router-link></p>
</base-layout>
</template>


<script >
import { ref } from 'vue'
import firebase from 'firebase'
import { useRouter } from 'vue-router' // import route
import { IonItem, IonLabel, IonInput, toastController,IonButton } from '@ionic/vue';

export default {
    components: {
        IonItem, 
        IonLabel, 
        IonInput,
        IonButton,
    },
    setup(){
        const router = useRouter()
        const email = ref('')
        const password = ref('')

        async function openToast() {
            const toast = await toastController
                .create({
                message: '.حساب شما با موفقیت ساخته شد',
                duration: 3000,
                position: 'top',
                color:'success',
                buttons: [
                    {
                    side: 'start',
                    icon: 'star',
                    text: '🎉',
                    handler: () => {
                        console.log('Favorite clicked');
                    }
                    }, {
                    text: 'Done',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                    }
                ]
                })
            return toast.present();
            }


        const register = () => {
          firebase.auth()
          .createUserWithEmailAndPassword(email.value, password.value)
          .then((res) => {
            console.log('successfully registered', res)
            router.replace('/')
          })
          .catch(err => {
            console.log(err.code)
            alert(err.message)
          }).finally(() => { openToast() })
        }
        return {
            router,email,password,register
        }

    }
    
}


</script>

<style>

</style>