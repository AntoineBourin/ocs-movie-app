<template>
  <SearchInput
    :search-callback="handleSearchTriggered"
    start-at="0"
    placeholder="Rechercher un programme"
  />
  <movie-list :movies="movies" />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import SearchInput from '../molecules/SearchInput.vue';
import Content, { ContentCollection, ContentSearchResponse } from '../../lib/Content';
import MovieList from '../templates/MovieList.vue';

export default defineComponent({
  name: 'MovieSearch',
  components: { MovieList, SearchInput },
  data() {
    return {
      movies: [] as PropType<ContentCollection>,
      error: null,
    };
  },
  methods: {
    handleSearchTriggered(value) {
      new Content().search(value)
        .then((contentResponse: ContentSearchResponse) => {
          this.movies = contentResponse.contents;
          this.error = null;
        })
        .catch((e) => {
          this.error = e;
        });
    },
  },
});
</script>
