
<template>
  <h1 class="coop-u-magenta-dark-3-bg">cool-text: {{text}}</h1>
</template>
<script>
import "@coopdigital/foundations-colors";
import "@coopdigital/foundations-vars";
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
    color: var(--color-link-active);
    border: 1px;
}
</style>