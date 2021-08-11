<template>
  <base-layout pageTitle="product" pageDefaultBackLink="/tabs/tab1">
  <h1 v-if="!product.length">Coud not find a product here.</h1>
   <div v-for="item in product" :key="item">
      <div class="grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16">
      <div class="relative col-start-1 row-start-1 px-4 pt-60 pb-3 bg-gradient-to-t from-black sm:bg-none">
      </div>
      <div class="col-start-1 row-start-2 px-4 sm:pb-16">
        
           <div class="pt-4">
              <div class="uppercase tracking-wide text-sm text-red-500 font-semibold">{{item.category}}</div>
              <p class="block mt-1 leading-tight font-bold text-3xl text-black">{{item.title}}</p>
              <p class="mt-2 text-gray-700">{{ item.subtitle }}</p>
           </div>

        <div class="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4">
    
        </div>

      </div>
      <div class="col-start-1 row-start-3 space-y-3 px-4">
        <ion-button expand="block" class="btn btn--primary">Add to card</ion-button>
      </div>
      <div class="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
        <div class="w-full grid grid-cols-2 grid-rows-2 gap-2">
          <div class="relative col-span-3 row-span-2 ">
            <PhotoSlider :images="item.images" class="w-auto h-full object-cover bg-gray-50 sm:rounded-lg" />
          </div>
        </div>
      </div>
    </div>
   </div>
 
  </base-layout>
</template>

<script>
import { IonButton } from '@ionic/vue';
import PhotoSlider from '@/components/PhotoSlider.vue';
export default  {
  name: 'Detail',
  components: { IonButton, PhotoSlider },

  data(){
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    product(){
      return this.$store.getters.product(this.id)
    }
  }
}

</script>

<style scoped>

</style>