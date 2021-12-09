<template>
  <div class="movie--list">
    <div v-for="movie in movies" v-bind:key="movie">
      <movie-thumb :movie="movie" />
    </div>
  </div>
</template>

<script>
import MovieThumb from '@/components/organisms/MovieThumb.vue';

export default {
  name: 'MovieList',
  components: { MovieThumb },
  props: {
    movies: Array,
  },
};
</script>
