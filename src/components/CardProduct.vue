<template>
  <div class="m-4 ">
    <router-link :to="{ name: 'detail', params: { id: id }}">
         <div class="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl ">
        <div class="md:flex">
            <div class="md:flex-shrink-0">
              <ion-img class="h-75 w-full object-cover md:h-full md:w-48" :src="image" alt=""></ion-img>
            
              <!-- <div class="addButtonIcon bg-white text-white flex items-center p-2 w-12 h-12 shadow-lg rounded-full">
                <img :src="addToBagIcon" alt="" class="icon p-1 m-auto w-10 h-10">
              </div> -->
            
            </div>
            <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-red-500 font-semibold">{{category}}</div>
            <p class="title block mt-1 leading-tight font-bold text-2xl text-black ">{{title}}</p>
            <p class="mt-2 text-gray-500">{{ subtitle }}</p>
            </div>

       
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { IonImg } from '@ionic/vue';
export default {
    props:['image','title','subtitle','category','id'],
    name: 'CardProduct',
    components: {
      IonImg
    },
    data(){
      return {
      addToBagIcon: require('@/assets/icons/bag-add.svg')
    }
  },
  mounted(){
    console.log('loaded')
  }   
}
</script>

<style>
.addButtonIcon {
  position:absolute;
  right: 0;
  margin: -4rem 2rem 1rem 1rem ;
}

</style>