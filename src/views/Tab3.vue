<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title slot="end">تماس</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="medium">تماس</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="container">
        
        <ion-text color="dark">
          <h1>تماس برای ثبت سفارش</h1>
        </ion-text>
        <ion-button @click="callNumber" class="btn" expand="block" shape="round" fill="solid" color="success" size="large">
          <ion-icon slot="start" :icon="call" />
          ۰۹۱۰۶۱۵۰۶۳۴
          </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonText} from '@ionic/vue';
import { call } from 'ionicons/icons';
export default  {
  name: 'Tab3',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton, IonIcon, IonText },

  setup(){
    return{
      call
    }
  },
  methods: {
    callNumber(){
      window.open('tel:09106150634')
    }
  }
}
</script>

<style scoped>
.container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding: 1rem;
}
</style>