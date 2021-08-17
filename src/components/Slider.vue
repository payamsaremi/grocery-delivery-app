<template>
  <ion-slides pager="true" :options="slideOpts">
        <ion-slide v-for="i in 10" :key="i">
            <h1>slider</h1>
        </ion-slide>
  </ion-slides>
</template>


<script>
import { IonSlides, IonSlide } from '@ionic/vue';
import { defineComponent } from 'vue';
import StatsCard from './StatsCard.vue';

export default defineComponent({
  components: { IonSlides, IonSlide },
  setup() {
 
    StatsCard   // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
    const slideOpts = {
      initialSlide: 1,
      speed: 50,
      slidesPerView: 3,
      pagination: "false",
      freeMode: "true",
    };
    return { slideOpts }
  }
});
</script>