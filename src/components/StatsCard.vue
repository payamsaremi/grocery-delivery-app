<template>
      <ion-slides pager="true" :options="slideOpts">
        <ion-slide v-for="i in 10" :key="i">
              <!-- <div class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5"> -->
                <div class="m-1 w-full max-w-3xl">
                    <div class="-mx-2 flex">
                        <div class="w-full px-2">
                            <div class="rounded-lg shadow-sm mb-4">
                                <div class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                                    <div class="px-3 pt-8 pb-10 text-center relative z-10">
                                        <h4 class="text-sm uppercase text-gray-500 leading-tight">{{title}}</h4>
                                        <h3 class="text-3xl text-gray-700 font-semibold leading-tight my-3">3,682</h3>
                                        <p class="text-xs text-green-500 leading-tight">▲ 57.1%</p>
                                        <!-- ▼ -->
                                    </div>
                                    <div class="absolute bottom-0 inset-x-0">
                                        <canvas id="chart1" height="70"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

<style>

</style>