<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
          <ion-buttons slot="start">
                <ion-back-button text="بازگشت" :default-href="pageDefaultBackLink"></ion-back-button>
          </ion-buttons>

          <ion-buttons slot="end">
           <ion-button :router-link="{ name: 'basket'}">
              <ion-icon slot="icon-only" color="dark" :icon="bag"></ion-icon>
              <ion-badge color="primary" class="badge">{{basketItemsCount}}</ion-badge>
            </ion-button>
          </ion-buttons>
        <ion-title size="small" slot="end">{{ pageTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="medium">{{ pageTitle }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <slot />
      
    </ion-content>
  </ion-page>
</template>

<script>
import { 
        IonPage, 
        IonHeader, 
        IonToolbar, 
        IonTitle, 
        IonContent,
        IonButton,
        IonButtons,
        IonBackButton,
        IonIcon,
        IonBadge,
        } from '@ionic/vue';
import { bag } from 'ionicons/icons';
export default  {
  props: ['pageTitle','backButton','pageDefaultBackLink'],
  name: 'Tab1',
  components: { 
              IonHeader, 
              IonToolbar, 
              IonTitle, 
              IonContent,
              IonPage,
              IonButton,
              IonButtons,
              IonBackButton,
              IonIcon,
              IonBadge,
              },
  setup() {
    return {
      bag, 
    }
  },
  computed: {
    basketItemsCount(){
      return this.$store.getters.basketItemsCount
    }
  }
}
</script>

<style >
ion-toolbar{
    padding-right: 5px;
}
.badge {
  position: absolute;
  font-weight: 800;
  padding: 3px;
  padding-right: 4px;
  padding-left: 4px;
  right: -7px;
  top: -2px;
  border-radius:100px;
}
</style>