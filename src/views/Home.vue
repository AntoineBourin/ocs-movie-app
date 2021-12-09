<template>
  <div class="home">
    <h1>OCS - Recherche de programmes</h1>
    <MovieSearch />
  </div>
</template>

<script>
import MovieSearch from '@/components/organisms/MovieSearch.vue';

export default {
  name: 'HomePage',
  components: { MovieSearch },
};
</script>
