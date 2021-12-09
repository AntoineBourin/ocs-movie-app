<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    modelValue: {
      type: String,
    },
    placeholder: String,
  },
};
</script>
