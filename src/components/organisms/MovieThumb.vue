<template>
  <h2>{{ movie.title[0].value }}</h2>
</template>

<script>

export default {
  name: 'MovieThumb',
  props: {
    movie: Object,
  },
};
</script>
