<template>
  <base-layout pageTitle="سفارشهای من">
        <Hero />
        <CardSimple title="Turkey" subtitle="fresh and flavourfull turkey meat on your food" image="https://icon-library.com/images/thanksgiving_4-06-512_7911.png"/>
        <CardSimple title="Meatballs" subtitle="signature meatballs with the freshly ground lamb meat" image="https://cdn.iconscout.com/icon/free/png-256/sheep-2283629-1904217.png"/>
        <CardSimple title="Vegtables" subtitle="Fresh home-grown organic vegtables made daily" image="https://static.vecteezy.com/system/resources/previews/001/904/235/non_2x/avocado-and-vegetables-on-bowl-in-white-background-free-vector.jpg"/>
  </base-layout>
</template>

<script>
import { } from '@ionic/vue';
import CardSimple from '@/components/CardSimple.vue';
import Hero from '@/components/Hero.vue';
export default  {
  name: 'Tab2',
  components: { CardSimple, Hero }
}
</script>