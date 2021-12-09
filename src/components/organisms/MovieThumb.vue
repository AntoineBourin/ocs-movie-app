<template>
  <div class="icons">
    <movie-icon :icons="movie.highrighticon" />
  </div>
  <img :src="`https://ocs.fr/${movie.imageurl}`" :alt="movie.title[0].value" />
  <h2>{{ movie.title[0].value }}</h2>
  <p>{{ movie.subtitle }}</p>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ContentType } from '../../lib/Content';
import MovieIcon from '../molecules/MovieIcon.vue';

export default defineComponent({
  name: 'MovieThumb',
  components: { MovieIcon },
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
.icons {
  position: absolute;
  left: 0;
  top: 0;
}
</style>
