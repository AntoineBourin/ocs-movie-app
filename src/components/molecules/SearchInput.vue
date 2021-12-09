<template>
  <TextInput v-model="search" :placeholder="placeholder" />
</template>

<script>
import debounce from 'lodash/debounce';
import TextInput from '@/components/atoms/TextInput.vue';

export default {
  components: { TextInput },
  props: {
    startAt: Number,
    searchCallback: Function,
    placeholder: String,
  },
  data() {
    return {
      search: '',
    };
  },
  watch: {
    search() {
      if (this.search.length >= this.startAt) {
        this.debouncedGetResult();
      }
    },
  },
  created() {
    this.debouncedGetResult = debounce(this.getSearchResults, 500);
  },
  methods: {
    getSearchResults() {
      this.searchCallback(this.search);
    },
  },
};
</script>

<style lang="scss">
input {
  padding: 10px 20px;
  min-width: 25%;
  text-align: center;
}
</style>
