<template>
  <base-layout pageTitle="product" pageDefaultBackLink="/tabs/tab1">
  <h1 v-if="!product.length">Could not find a product here.</h1>


      <div @click="addToBasket" class="addButtonIcon z-50 bg-white text-white flex items-center p-2 w-16 h-16 shadow-lg rounded-full">
        <img :src="addToBagIcon" alt="" class="icon p-1 m-auto w-10 h-10">
      </div>

   <div v-for="item in product" :key="item">
     <div class="z-0">
      <PhotoSlider :images="item.images" />       
     </div>
      
      <div class="px-4 pb-16">
           <div class="pt-4">
              <div class="uppercase tracking-wide text-sm text-red-500 font-semibold">{{item.category}}</div>
              <p class="block mt-1 leading-tight font-bold text-3xl text-black">{{item.title}}</p>
              <p class="mt-2 text-gray-700">{{ item.subtitle }}</p>
              <div class="flex items-center justify-between mt-4">
                <p class=" text-2xl font-black text-gray-700">${{ item.price }}</p>
                <p class="font-medium shadow-inner bg-gray-50 p-2 border border-gray-200 rounded-xl">In stock</p>
              </div>
           </div>
      </div>
      <div class="mb-20 space-y-3 px-4">
        <button @click="addToBasket" class=" w-full rounded-lg bg-red-600 text-white px-4 py-3 font-semibold text-lg leading-tight shadow-md hover:bg-red-700 ">Add to Basket</button>
      </div>
   </div>
 
  </base-layout>
</template>

<script>
// import { IonButton } from '@ionic/vue';
import PhotoSlider from '@/components/PhotoSlider.vue';
import { useRouter } from 'vue-router'
export default  {
  name: 'Detail',
  components: { PhotoSlider },

  data(){
    return {
      id: this.$route.params.id,
      addToBagIcon: require('@/assets/icons/bag-add.svg')
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
      this.$store.dispatch('addToBasket', this.id)
      this.router.replace({ name: 'basket'})
    }
  }
}

</script>

<style scoped>
.addButtonIcon {
  position: absolute;
  top: 420px;
  right: 0;
  cursor: pointer;
}
.icon {
  color: white;
}
</style>