<template>
    <ion-slides mode="ios" pager="true" :options="slideOpts">
    
          <ion-slide v-for="image in images" :key="image.id">
          
              <img :src="image.url" alt="" class="fit__image" />
    
          </ion-slide>

  </ion-slides>
</template>


<script>
import { IonSlides, IonSlide } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  props:['images'],
  components: { IonSlides, IonSlide },
  setup() {
    // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
    const slideOpts = {
       slidesPerView: 1,
      initialSlide: 0,
      speed: 400,
      // lazy: true
    };
    return { slideOpts }
  }
});
</script>

<style scoped>
.fit__image {
  width: 100vw;
  height: 500px;
  object-fit: cover;
}
</style>