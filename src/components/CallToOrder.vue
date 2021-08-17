<template>
    <div class="container">
        <ion-text color="dark">
          <h1>تماس برای ثبت سفارش</h1>
        </ion-text>
        <ion-button @click="callNumber" class="btn" expand="block" fill="solid" size="large">
          <ion-icon slot="start" :icon="call" />
          ۰۹۱۰۶۱۵۰۶۳۴
          </ion-button>
      </div>
</template>


<script>
import { IonButton, IonIcon, IonText} from '@ionic/vue';
import { call } from 'ionicons/icons';
export default  {
  name: 'Tab3',
  components: { IonButton, IonIcon, IonText },

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