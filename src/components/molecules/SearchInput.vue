<template>
  <TextInput v-model="search" />
</template>

<script>
import debounce from 'lodash/debounce';
import TextInput from '@/components/atoms/TextInput.vue';

export default {
  components: { TextInput },
  props: {
    startAt: Number,
    searchCallback: Function,
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
