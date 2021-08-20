<template>
  <base-layout pageTitle="Basket">
  <div class="text-center flex h-screen" v-if="!getProductById.length">
    <div class="m-auto">
      <p class="text-7xl">0</p>
      <p class="text-xl my-2">No items in your basket yet...</p>
      <button class="mb-2 w-full rounded-lg bg-indigo-200 text-indigo-800 hover:text-white px-4 py-3 font-semibold text-lg leading-tight hover:bg-indigo-700 " @click="continueShopping">start shopping</button>
    </div>
  </div>
  
    <div v-else class="m-4">
          <div class="my-4" v-for="item in getProductById" :key="item.id">
            <BasketItem :image="item.image" :title="item.title" :id="item.id" :quantity="item.quantity" :price="item.price" />
          </div>
           
           
          
            <div class="flex items-center bg-gray-100 shadow-inner rounded-lg px-2 py-2 my-2 ">
               <p class=" text-l font-black text-gray-700">Total: ${{getCartTotalPrice}}</p>
            </div>

      <div class="mb-20">
      <button class="mb-2 w-full rounded-lg bg-indigo-600 text-white px-4 py-3 font-semibold text-lg leading-tight shadow-md hover:bg-indigo-700 " @click="continueShopping">continue shopping</button>
      <button class="w-full rounded-lg bg-red-600 text-white px-4 py-3 font-semibold text-lg leading-tight shadow-md hover:bg-red-700 ">checkout</button>
      </div>
    </div>
   
  </base-layout>
</template>

<script>
import { useRouter } from 'vue-router'
import BasketItem from '../../components/BasketItem.vue'
export default {
  components: {BasketItem},
  setup(){
    const router = useRouter()
    return { router }
  },
  computed: {    
    getProductById(){
      return this.$store.getters.cartProducts
    },
    basketItemsCount(){
      return this.$store.getters.basketItemsCount
    },
    getCartTotalPrice(){
      return this.$store.getters.cartTotalPrice
    }
  },
  methods: {
    continueShopping(){
      this.router.replace({ name:'meals' })
    }
  }

}
</script>

<style scoped>

</style>