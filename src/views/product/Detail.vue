<template>
  <base-layout pageTitle="product" pageDefaultBackLink="/tabs/tab1">
  <h1 v-if="!product.length">Coud not find a product here.</h1>


   <div v-for="item in product" :key="item">
  
      <PhotoSlider :images="item.images"/>

      <div class="px-4 pb-16">
        
           <div class="pt-4">
              <div class="uppercase tracking-wide text-sm text-red-500 font-semibold">{{item.category}}</div>
              <p class="block mt-1 leading-tight font-bold text-3xl text-black">{{item.title}}</p>
              <p class="mt-2 text-gray-700">{{ item.subtitle }}</p>
           </div>
      </div>
      <div class="space-y-3 px-4">
        <ion-button @click="addToBasket" expand="block" class="btn btn--primary">Add to Basket</ion-button>
      </div>
   </div>
 
  </base-layout>
</template>

<script>
import { IonButton } from '@ionic/vue';
import PhotoSlider from '@/components/PhotoSlider.vue';
import { useRouter } from 'vue-router'
export default  {
  name: 'Detail',
  components: { IonButton, PhotoSlider },

  data(){
    return {
      id: this.$route.params.id
    }
  },
  setup(){
    const router = useRouter()
    return {router}
  },
  computed: {
    product(){
      return this.$store.getters.product(this.id)
    }
  },
  methods: {
    addToBasket(){
      this.$store.commit('addToBasket', this.id)
      this.router.replace({ name: 'basket'})
    }
  }
}

</script>

<style scoped>

</style>