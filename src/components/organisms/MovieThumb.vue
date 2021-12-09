<template>
  <img :src="`https://ocs.fr/${movie.imageurl}`" :alt="movie.title[0].value" />
  <h2>{{ movie.title[0].value }}</h2>
  <p>{{ movie.subtitle }}</p>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ContentType } from '../../lib/Content';

export default defineComponent({
  name: 'MovieThumb',
  props: {
    movie: {
      type: Object as PropType<ContentType>,
    },
  },
});
</script>

<style lang="scss">
img {
  width: 100%;
  object-fit: cover;
}
h2 {
  font-size: 14px;
}
</style>
