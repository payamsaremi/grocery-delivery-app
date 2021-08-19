<template>
  <ion-page>
    <ion-tabs>
     <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" mode="md">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="storefront" />
          <ion-label></ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="fastFood" />
          <ion-label>meals</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="school" />
          <ion-label>Self-edu</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="profile" href="/tabs/profile">
          <ion-icon :icon="person" />
          <ion-label>Profile</ion-label>
        </ion-tab-button>
        
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { school, storefront, fastFood, person } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      school, 
      storefront, 
      fastFood,
      person,
    }
  }
}
</script>