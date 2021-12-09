<template>
  <div
    v-if="movies && movies.length > 0"
    class="movie--list container"
  >
    <div class="movie" v-for="movie in movies" v-bind:key="movie">
      <movie-thumb :movie="movie" />
    </div>
  </div>
  <div v-else>
    <p>Désolé, aucun résultat n'a été trouvé pour votre recherche.</p>
  </div>
</template>

<script>
import MovieThumb from '@/components/organisms/MovieThumb.vue';

export default {
  name: 'MovieList',
  components: { MovieThumb },
  props: {
    movies: Array,
    error: String,
  },
};
</script>

<style lang="scss">
.movie--list {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 1080px;
  margin: 30px auto;
  padding: 0 20px;

  .movie {
    flex: calc(25% - 30px) 0 0;
  }
}
</style>
