<template>
  <p class="icon" v-for="icon of icons" v-bind:key="icon">
    {{ icon }}
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MovieIcon',
  props: {
    icons: [String],
  },
});
</script>

<style lang="scss">
.icon {
  background-color: $orange-ocs;
  padding: 5px 10px;
  margin: 0;
  color: $white;
}
</style>
