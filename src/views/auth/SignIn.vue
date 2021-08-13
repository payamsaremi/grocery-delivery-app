<template>
<base-layout pageTitle="Sign in">

    <div class="mb-6 ">
        <h1 class="text-center"> Sign in </h1>
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
    <p class="text-center">Need a new account? <router-link :to="{ name:'register' }"> Register </router-link></p>
</base-layout>
</template>


<script >
import { ref } from 'vue'
import firebase from 'firebase'
import { useRouter } from 'vue-router' // import route
import { IonItem, IonLabel, IonInput, toastController, IonButton } from '@ionic/vue';
export default {
    components: {
        IonItem, 
        IonLabel, 
        IonInput,
        IonButton
    },
    setup(){
        const router = useRouter()
        const email = ref('')
        const password = ref('')
        const errMsg = ref()

        async function openToast() {
            const toast = await toastController
                .create({
                message: 'شما با موفقیت وارد حساب خود شدید',
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
        .signInWithEmailAndPassword(email.value, password.value)
        .then (res => {
            console.log('successfully Signed in!', res)
            router.replace('/')
        })
        .catch(err => {
            console.log(err.code)
            switch(err.code){
                case 'auth/invalid-email':
                    errMsg.value = 'Invalid Email'
                    break
                case 'auth/user-not-found':
                    errMsg.value = 'No account with that email was found'
                    break
                case 'auth/wrong-password':
                    errMsg.value = 'Wrong password'
                    break
                default:
                    errMsg.value = 'Email or password was incorrect'
                    break
            }
        }).finally(() => { openToast() })
        }
        return {
            router,email,password,errMsg,register,
        }
    },
}


</script>

<style>

</style>