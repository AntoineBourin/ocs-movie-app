<template>
  <SearchInput :search-callback="handleSearchTriggered" start-at="0" />
  <movie-list :movies="movies" />
</template>

<script>
import SearchInput from '@/components/molecules/SearchInput.vue';
import Content from '@/lib/Content';
import MovieList from '@/components/templates/MovieList.vue';

export default {
  name: 'MovieSearch',
  components: { MovieList, SearchInput },
  data() {
    return {
      movies: [],
      error: null,
    };
  },
  methods: {
    handleSearchTriggered(value) {
      new Content().search(value)
        .then((contentResponse) => {
          this.movies = contentResponse.contents;
          this.error = null;
        })
        .catch((e) => {
          this.error = e;
        });
    },
  },
};
</script>
