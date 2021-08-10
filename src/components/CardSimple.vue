<template>
   <div class="m-2">
        <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
            <div class="flex-shrink-0">
              <img class="h-16 w-16" :src="image" alt="image">
            </div>
            <div>
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