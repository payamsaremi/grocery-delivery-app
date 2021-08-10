<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button></ion-back-button>  
        </ion-buttons>
        <ion-title slot="end">سفارشهای من</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="medium">سفارشهای من</ion-title>
        </ion-toolbar>
      </ion-header>
        <Hero />
       <CardSimple title="Turkey" subtitle="fresh and flavourfull turkey meat on your food" image="https://icon-library.com/images/thanksgiving_4-06-512_7911.png"/>
       <CardSimple title="Meatballs" subtitle="signature meatballs with the freshly ground lamb meat" image="https://cdn.iconscout.com/icon/free/png-256/sheep-2283629-1904217.png"/>
       <CardSimple title="Vegtables" subtitle="Fresh home-grown organic vegtables made daily" image="https://static.vecteezy.com/system/resources/previews/001/904/235/non_2x/avocado-and-vegetables-on-bowl-in-white-background-free-vector.jpg"/>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage,IonButtons, IonBackButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import CardSimple from '@/components/CardSimple.vue';
import Hero from '@/components/Hero.vue';

export default  {
  name: 'Tab2',
  components: { IonButtons, IonBackButton, IonHeader, IonToolbar, IonTitle, IonContent, CardSimple, IonPage, Hero }
}
</script>