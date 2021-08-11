<template>
    <base-layout :backButton="true" pageTitle="Mr.Krabs | مستر کربز">
    <TypeSelector />
      <div v-for="product in products" :key="product.id">
        <CardProduct 
        :id="product.id"
        :image="product.image" 
        :title="product.title" 
        :subtitle="product.subtitle"
        :category="product.category"
        />
      </div>
  </base-layout>
</template>

<script>
import {} from '@ionic/vue';
import CardProduct from '@/components/CardProduct.vue';
import TypeSelector from '@/components/TypeSelector.vue'
export default  {
  name: 'Tab1',
  components: { CardProduct, TypeSelector },

  data(){
    return {}
  },
  computed: {
    products(){
      return this.$store.getters.products
    }
  }
}
</script>

<style>

</style>