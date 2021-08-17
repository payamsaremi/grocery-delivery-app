<template>
   <div class="mx-1">
        <div class="w-full px-2 bg-gray-100 rounded-xl p-8">
            <div class="flex-shrink-0">
              <img class="w-16 h-16 mx-auto" :src="image" alt="image">
            </div>
            <div class="pt-6 text-center space-y-4">
              <div class="text-xl font-medium text-black">{{ title }}</div>
              <p class="text-gray-500">{{ subtitle }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['image','title','subtitle'],
    name: 'CardSimple',

}
</script>

<style>

</style>