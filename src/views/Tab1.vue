<template>
  <base-layout pageTitle="Hello">
    <banner-card></banner-card>
   <div class="flex">
    <CardSimple title="Vegtables" subtitle="fresh and flavourfull turkey" image="https://icon-library.com/images/thanksgiving_4-06-512_7911.png"/>
    <CardSimple title="Meat" subtitle="fresh and flavourfull turkey" image="https://icon-library.com/images/thanksgiving_4-06-512_7911.png"/>
    <CardSimple title="Turkey" subtitle="fresh and flavourfull turkey" image="https://icon-library.com/images/thanksgiving_4-06-512_7911.png"/>
    <CardSimple title="Turkey" subtitle="fresh and flavourfull turkey" image="https://icon-library.com/images/thanksgiving_4-06-512_7911.png"/>
   </div>
  </base-layout>
</template>

<script>
import CardSimple from '@/components/CardSimple.vue';
import BannerCard from '@/components/BannerCard.vue';

export default  {
  name: 'Tab2',
  components: { CardSimple, BannerCard },
}
</script>