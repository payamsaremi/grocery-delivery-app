<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
          <ion-buttons slot="start">
                <ion-back-button type="submit" text="back" :defaultHref="pageDefaultBackLink"></ion-back-button>
          </ion-buttons>

          <ion-buttons slot="end">
           <ion-button :router-link="{ name: 'basket'}">
             <!-- this does nothing -->
              <ion-icon slot="icon-only" class="basket__icon" color="dark"></ion-icon>
              <img class="icon" :src="bagIcon" alt="">
              <div class="badge">{{basketItemsCount}}</div>
            </ion-button>
          </ion-buttons>
        <ion-title slot="end">{{ pageTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title >{{ pageTitle }}</ion-title>
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
        } from '@ionic/vue';
import { bag } from 'ionicons/icons';
export default  {
  props: ['pageTitle','backButton','pageDefaultBackLink'],
  name: 'Tab1',
  data(){
    return {
      bagIcon: require('@/assets/icons/cart.svg')
    }
  },
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
  display: flex;
  align-items: center;
  position: absolute;
  font-weight: 800;
  padding:3px 6px 2px 6px;
  border-radius: 50px;
  right: -5px;
  top: -1px;
  transform: scale(0.9);
  color: white;
  background-color: var(--ion-color-primary);
}
</style>