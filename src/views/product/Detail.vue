<template>
  <ion-page>
    <ion-header>

  <ion-toolbar>
    <ion-buttons slot="start" >
          <ion-back-button text="بازگشت" ></ion-back-button>
        </ion-buttons>
    <ion-title>Detail</ion-title>
  </ion-toolbar>


    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="medium">Product detail</ion-title>
        </ion-toolbar>
      </ion-header>
      <ProductDetail />
      <!-- {{ route.params.id }} -->
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage,IonButtons, IonBackButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { arrowBackCircleOutline, triangle } from 'ionicons/icons';
import ProductDetail from '@/components/ProductDetail.vue';
export default  {
  name: 'Detail',
  components: { IonButtons, IonBackButton, IonHeader, IonToolbar, IonTitle, IonContent, ProductDetail,IonPage },

  setup(){
      return {
          arrowBackCircleOutline,
          triangle
      }
  }
}

</script>

<style scoped>

</style>