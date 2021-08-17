<template>
<article class="p-4 flex space-x-4 border border-gray-800 shadow-lg rounded-lg">
    <img :src="image" alt="" class="flex-none w-18 h-18 rounded-lg object-cover" width="144" height="144" />
    <div class="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
      <h2 class="text-lg font-semibold text-black mb-0.5">
       {{title}}
      </h2>
      <div class="absolute bottom-0 right-0 ">
        <ion-button @click="removeItem" color="light" class="">remove</ion-button>
      </div>
    </div>
  </article>
</template>

<script>
import { IonButton } from '@ionic/vue'
export default {
    props: ['title','image','id'],
    components:{IonButton},
    methods: {
      removeItem(){
        this.$store.commit('removeItem', this.id)
    }
    }

}
</script>

<style>

</style>