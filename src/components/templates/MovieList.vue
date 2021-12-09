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

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import MovieThumb from '../organisms/MovieThumb.vue';
import { ContentCollection } from '../../lib/Content';

export default defineComponent({
  name: 'MovieList',
  components: { MovieThumb },
  props: {
    movies: [] as PropType<ContentCollection>,
    error: String,
  },
});
</script>

<style lang="scss">
@keyframes movie-appear {
  from { opacity: 0; transform: translateY(25%) }
  to { opacity: 1; transform: translateY(0) }
}
.movie--list {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 1080px;
  margin: 30px auto;
  padding: 0 20px;

  .movie {
    flex: calc(25% - 30px) 0 0;
    opacity: 0;
    animation: movie-appear 2s forwards;
  }
}
</style>
