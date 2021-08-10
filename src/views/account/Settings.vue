<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start" >
          <ion-back-button text="بازگشت" ></ion-back-button>
        </ion-buttons>
        <!-- <ion-title>Settings</ion-title> -->
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Settings</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-icon :name="arrowBackCircleOutline">yeey</ion-icon>
      <h1>Hello</h1>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonIcon,IonPage,IonButtons, IonBackButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { arrowBackCircleOutline, triangle } from 'ionicons/icons';
export default  {
  name: 'Settings',
  components: { IonIcon,IonButtons, IonBackButton, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },

  setup(){
      return {
          arrowBackCircleOutline,
          triangle
      }
  }
}

</script>