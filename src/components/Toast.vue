<template>

      <ion-button @click="openToast">Open Toast</ion-button>

</template>

<script>
import { IonButton, toastController } from '@ionic/vue';
export default {
  components: { IonButton },
  methods: {
    async openToast() {
      const toast = await toastController
        .create({
          message: 'شما با موفقیت وارد حساب خود شدید',
          duration: 2000,
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
  }
}
</script>

<style>

</style>