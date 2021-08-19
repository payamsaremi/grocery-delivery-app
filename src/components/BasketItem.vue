<template>
<article class="p-4 flex align-items space-x-4 border border-gray-400 shadow-lg rounded-lg">
    <img :src="image" alt="" class="flex-none fit__image" />
    <div class="min-w-0 relative flex-auto  sm:pr-20 lg:pr-0 xl:pr-20">
      <h2 class="text-lg font-semibold text-black mb-0.5">
       {{title}}
      </h2>
          <div class="mb-5"></div>
        <div class="flex mt-auto justify-between space-y-5 items-end ">
            <div>
                <!-- <button @click="removeItem" color="light" size="small" class="w-full antialiased rounded-md bg-red-700 text-white px-2 py-1 font-normal text-s leading-tight shadow-md hover:bg-red-700 tracking-wide">remove</button> -->
            </div>
            <div class="flex items-center bg-gray-100 shadow-inner rounded-2xl px-2 ">
                <img v-if="quantity > 1" :src="removeIcon" @click="decrement()" class="bg-indigo-100 shadow-sm rounded-full w-6 h-6 hover:bg-indigo-200" >
                <img v-else :src="trashLogo" @click="removeItem()" class="bg-indigo-100 rounded-full shadow-sm w-6 h-6 hover:bg-indigo-200" alt="">

                <p class="m-3 p-auto text-center text-white text-lg font-semibold bg-indigo-400 shadow-sm rounded-full w-6 h-6">{{quantity}}</p>
                <img :src="addIcon" @click="increment()" class="bg-indigo-100 rounded-full shadow-sm w-6 h-6 hover:bg-indigo-200" alt="">
            </div>
        </div>
    </div>
  </article>
</template>

<script>
export default {
    props: ['title','image','id','quantity'],
    components:{},
    data(){
        return {
            itemsCount: 1,
            addIcon: require('../assets/icons/add-outline.svg'),
            removeIcon: require('../assets/icons/remove-outline.svg'),
            trashLogo: require('../assets/icons/trash-outline.svg'),
        }
    },
    methods: {
      removeItem(){
        this.$store.commit('removeItem', this.id)
      },
      decrement(){
          this.$store.commit('decrementItemQuantity',this.id )
      },
      increment(){
          this.$store.commit('incrementItemQuantity',this.id )
      }
    }

}
</script>

<style scoped>
.fit__image {
  width: 100px;
  height: 100%;
  border-radius: 0.5rem;
  object-fit: cover;
}
</style>