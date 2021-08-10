<template>
  <div class="m-4">
    <router-link :to="{ name: 'detail' }">
         <div class="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
        <div class="md:flex">
            <div class="md:flex-shrink-0">
            <img class="h-75 w-full object-cover md:h-full md:w-48" :src="image" alt="Man looking at item at a store">
            </div>
            <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-red-500 font-semibold">{{category}}</div>
            <p class="block mt-1 leading-tight font-bold text-2xl text-black hover:underline">{{title}}</p>
            <p class="mt-2 text-gray-500">{{ subtitle }}</p>
            </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
    props:['image','title','subtitle','category'],
    name: 'CardProduct',

}
</script>

<style>

</style>