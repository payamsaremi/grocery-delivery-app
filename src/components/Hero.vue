<template>
  <div class="m-2">
       <div class="bg-no-repeat bg-red-100 border shadow-md border-red-300 rounded-xl w-12/12 p-6">
            <p class="text-5xl text-indigo-900">Welcome to<br><strong>Mr.Krabs</strong><br></p>
            <p class="my-4 py bg-white text-2xl text-indigo-900">{{ userEmail }}</p>
            <slot />
        </div>
  </div>
</template>

<script>
export default {
  props:['userEmail'],
    data(){
      return {}
  }
}
</script>

<style>

</style>