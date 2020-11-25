
<template>
  <h1>cool-text: {{text}}</h1>
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
    color:blueviolet;
    border: 1px;
}
</style>