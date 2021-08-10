<template>
  <ion-page>
    <ion-header >
      <ion-toolbar>
        <ion-title size="small" slot="end">Mr.Krabs | مستر کربز</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="medium">Mr.Krabs | مستر کربز</ion-title>
        </ion-toolbar>
      </ion-header>
      <div v-for="product in products" :key="product.id">
        <CardProduct 
        :image="product.image" 
        :title="product.title" 
        :subtitle="product.subtitle"
        :category="product.category"
        />
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import CardProduct from '@/components/CardProduct.vue';

export default  {
  name: 'Tab1',
  components: {IonHeader, IonToolbar, IonTitle, IonContent, CardProduct, IonPage },

  data(){
    return {
      products: [
        {
        id:0,
        category:'پیتزا',
        title:'Detroit style pizza with turkey breast', 
        subtitle:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, earum.', 
        image:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/04/03/DV3111_detroit-pizza_s4x3.jpg.rend.hgtvcom.616.462.suffix/1585945683220.jpeg'
        },
        {
        d:1, 
        category:'پیتزا',
        title:'Detroit style pizza with turkey breast', 
        subtitle:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, earum.', 
        image:'https://foxeslovelemons.com/wp-content/uploads/2020/10/Detroit-Style-Pizza-Recipe-5-720x720.jpg'
        },
        {
        id:2, 
        category:'پیتزا',
        title:'Detroit style pizza with turkey breast', 
        subtitle:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, earum.', 
        image:'https://mybizzykitchen.com/wp-content/uploads/2021/03/themoneyshott.jpeg'
        },
      ]
    }
  }
}
</script>

<style>

</style>