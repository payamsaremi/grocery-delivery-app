<template>
  <div class="m-2">
       <div class="bg-no-repeat bg-red-100 border shadow-md border-red-300 rounded-xl w-12/12 p-6">
            <p class="text-5xl text-indigo-900">Welcome to<br><strong>Mr.Krabs</strong></p>
            <span class="bg-red-300 text-xl text-white inline-block rounded-full mt-12 px-8 py-2"><strong>Start</strong></span>
        </div>
  </div>
</template>

<script>
export default {
    data(){
      return {
      foodItems: [
      {
        title: 'Bagel Story',
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/25008305-442083466194421-4458779521922891776-n-1517333246.jpg?crop=1xw:1xh;center,top&resize=480:*',
        prepTimeValue: '25 - 30',
        prepTimeUnit: 'min',
        rating: 4.7,
        cat1: 'Deli',
        cat2: 'Bagels',
        range: '$$'
      },
      {
        title: 'Dessert Rose',
        image: 'https://images.mygoodtimes.in/wp-content/uploads/2018/12/08210525/Bakers-Copy.jpg',
        prepTimeValue: '30 - 35',
        prepTimeUnit: 'min',
        rating: 4.5,
        cat1: 'Cafes',
        cat2: 'Desserts',
        range: '$'
      },
    ] 
      }
  }
}
</script>

<style>

</style>