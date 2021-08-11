<template>
  <ion-slides pager="true" :options="slideOpts">
    <ion-slide v-for="image in images" :key="image.id">
      <ion-item>
      <ion-img :src="image.url" alt="" class="h-75 w-full object-cover md:h-full md:w-48"></ion-img>
      </ion-item>
    </ion-slide>
  </ion-slides>
</template>


<script>
import { IonSlides, IonSlide, IonImg, IonItem } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  props:['images'],
  components: { IonSlides, IonSlide, IonImg, IonItem },
  setup() {
    // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
    const slideOpts = {
      initialSlide: 0,
      speed: 400,
      lazy: true
    };
    return { slideOpts }
  }
});
</script>