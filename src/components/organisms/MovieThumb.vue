<template>
  <img :src="`https://ocs.fr/${movie.imageurl}`" :alt="movie.title[0].value" />
  <h2>{{ movie.title[0].value }}</h2>
  <p>{{ movie.subtitle }}</p>
</template>

<script>

export default {
  name: 'MovieThumb',
  props: {
    movie: Object,
  },
};
</script>

<style lang="scss">
img {
  width: 100%;
  object-fit: cover;
}
h2 {
  font-size: 16px;
}
</style>
