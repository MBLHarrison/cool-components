
<template>
  <h1 class="coop-u-white-stroke">cool-text: {{text}}</h1>
</template>
<script>
export default {
  name: "CoolText",
  props: {
    text: {
      type: String,
      required: false
    },
  },
};
</script>
<style scoped>
h1{

    background: var(--color-grey-mid-light);
    border: 1px;
}
</style>