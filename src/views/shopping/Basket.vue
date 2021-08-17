<template>
  <base-layout pageTitle="Basket">
  <div class="text-center flex h-screen" v-if="!BasketItems.length">
    <div class="m-auto">
      <p class="text-xl my-2">No items in your basket yet...</p>
      <ion-button color="tertiary" @click="continueShopping">start shopping</ion-button>
    </div>
  </div>
    <div v-else class="m-4">
      <p class="text-xl">Items in your basket: {{basketItemsCount}}</p>
<!-- {{BasketItems}} -->

      <div v-for="items in BasketItems" :key="items.id">
          <div class="my-4" v-for="item in items" :key="item.id">
            <BasketItem :image="item.image" :title="item.title" :id="item.id"/>
          </div>
      </div>
  
      <ion-button color="tertiary" @click="continueShopping">continue shopping</ion-button>
      <ion-button color="primary">checkout</ion-button>
    </div>
  </base-layout>
</template>

<script>
import { IonButton } from '@ionic/vue'
import { useRouter } from 'vue-router'
import BasketItem from '../../components/BasketItem.vue'
export default {
  components: {IonButton, BasketItem},
  setup(){
    const router = useRouter()
    return { router }
  },
  computed: {
    BasketItems(){
      return this.$store.getters.basketItems
    },
    basketItemsCount(){
      return this.$store.getters.basketItemsCount
    }
  },
  methods: {
    continueShopping(){
      this.router.replace({ name:'meals' })
    }
  }

}
</script>

<style>

</style>