<script>
export default {
  name: 'MyText',
  props: {
    text: String,
  },
};
</script>

<template>
  <p>{{ text }}</p>
</template>
