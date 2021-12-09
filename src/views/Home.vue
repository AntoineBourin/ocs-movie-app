<template>
  <div class="home">
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
