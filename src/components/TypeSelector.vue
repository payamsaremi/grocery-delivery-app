<template>

  <!-- Segment with default selection -->
  <ion-segment @ionChange="segmentChanged($event)" value="foods">
    <ion-segment-button value="foods">
      <ion-label>Foods</ion-label>
    </ion-segment-button>
    <ion-segment-button value="beverages">
      <ion-label>Beverages</ion-label>
    </ion-segment-button>
        <ion-segment-button value="sides">
      <ion-label>Sides</ion-label>
    </ion-segment-button>
  </ion-segment>
</template>

<script>
import { IonSegment, IonSegmentButton, IonLabel } from '@ionic/vue';

export default ({
  components: { IonSegment, IonSegmentButton, IonLabel },
  methods: {
    segmentChanged(ev) {
      console.log('Segment changed', ev);
    }
  }
});
</script>

<style scoped>

</style>